import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const REVOLUT_PAYMENT_LINK = "https://revolut.me/irinanedelko";

const CartDrawer = ({ open, onClose }: Props) => {
  const { items, updateQuantity, removeItem, totalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    // Open Revolut payment link with the amount
    const amount = totalPrice.toFixed(2);
    window.open(`${REVOLUT_PAYMENT_LINK}?amount=${amount}`, "_blank");
  };

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="bg-card w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-display text-xl text-foreground">Warenkorb</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-muted-foreground font-body text-sm">Ihr Warenkorb ist leer</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-3 p-3 rounded-lg bg-secondary/50">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 rounded-md object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display text-sm font-semibold text-foreground truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-accent font-body text-sm font-bold">
                      €{item.product.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-body w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="ml-auto text-destructive hover:opacity-70"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-body text-sm text-muted-foreground">Gesamtsumme</span>
                <span className="font-display text-2xl font-bold text-accent">
                  €{totalPrice.toFixed(2)}
                </span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-primary text-primary-foreground py-3 rounded-md font-body font-bold text-sm hover:opacity-90 transition-opacity"
              >
                Mit Revolut bezahlen
              </button>
              <button
                onClick={clearCart}
                className="w-full text-muted-foreground text-xs font-body hover:text-foreground transition-colors"
              >
                Warenkorb leeren
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
