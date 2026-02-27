import React, { createContext, useContext, useState, useCallback } from "react";
import type { Product, Ingredient } from "@/data/products";

export interface CartItem {
  product: Product;
  quantity: number;
  ingredientOverrides: Record<string, number>; // ingredient name -> qty
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, ingredientOverrides?: Record<string, number>) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalPrice: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback((product: Product, ingredientOverrides?: Record<string, number>) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      const overrides = ingredientOverrides ?? {};
      product.ingredients.forEach((ing) => {
        if (!(ing.name in overrides)) overrides[ing.name] = ing.defaultQty;
      });
      return [...prev, { product, quantity: 1, ingredientOverrides: overrides }];
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.product.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((i) => i.product.id !== productId));
    } else {
      setItems((prev) =>
        prev.map((i) => (i.product.id === productId ? { ...i, quantity } : i))
      );
    }
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalPrice = items.reduce((sum, item) => {
    const ingredientCost = item.product.ingredients.reduce((iSum, ing) => {
      const qty = item.ingredientOverrides[ing.name] ?? ing.defaultQty;
      return iSum + qty * ing.pricePerUnit;
    }, 0);
    return sum + (item.product.price + ingredientCost) * item.quantity;
  }, 0);

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, totalPrice, itemCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be inside CartProvider");
  return ctx;
};
