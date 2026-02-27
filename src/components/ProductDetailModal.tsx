import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";

interface Props {
  product: Product;
  open: boolean;
  onClose: () => void;
}

const ProductDetailModal = ({ product, open, onClose }: Props) => {
  const { addItem } = useCart();
  const [overrides, setOverrides] = useState<Record<string, number>>(() => {
    const o: Record<string, number> = {};
    product.ingredients.forEach((i) => (o[i.name] = i.defaultQty));
    return o;
  });

  const adjustIngredient = (name: string, delta: number, unit: string) => {
    const step = unit === "Stk" ? 1 : 50;
    setOverrides((prev) => ({
      ...prev,
      [name]: Math.max(0, (prev[name] ?? 0) + delta * step),
    }));
  };

  const extraCost = product.ingredients.reduce((sum, ing) => {
    const qty = overrides[ing.name] ?? ing.defaultQty;
    const diff = qty - ing.defaultQty;
    return sum + diff * ing.pricePerUnit;
  }, 0);

  const totalPrice = product.price + extraCost;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg p-0 overflow-hidden bg-card">
        <DialogTitle className="sr-only">{product.name}</DialogTitle>
        <img src={product.image} alt={product.name} className="w-full aspect-video object-cover" />
        <div className="p-6">
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">{product.name}</h2>
          <p className="text-muted-foreground font-body text-sm mb-6">{product.description}</p>

          <h3 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
            Zutaten anpassen
          </h3>
          <div className="space-y-3 mb-6">
            {product.ingredients.map((ing) => (
              <div key={ing.name} className="flex items-center justify-between">
                <span className="text-sm font-body text-foreground">{ing.name}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => adjustIngredient(ing.name, -1, ing.unit)}
                    className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center hover:bg-border transition-colors"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-sm font-body w-16 text-center">
                    {overrides[ing.name]} {ing.unit}
                  </span>
                  <button
                    onClick={() => adjustIngredient(ing.name, 1, ing.unit)}
                    className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center hover:bg-border transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-border pt-4">
            <div>
              <span className="text-sm text-muted-foreground font-body">Gesamtpreis</span>
              <p className="text-2xl font-display font-bold text-accent">€{totalPrice.toFixed(2)}</p>
            </div>
            <button
              onClick={() => {
                addItem(product, { ...overrides });
                onClose();
              }}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-body font-bold text-sm hover:opacity-90 transition-opacity"
            >
              In den Warenkorb
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;
