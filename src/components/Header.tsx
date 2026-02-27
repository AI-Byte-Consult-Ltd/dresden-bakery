import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  onCartClick: () => void;
}

const Header = ({ onCartClick }: HeaderProps) => {
  const { itemCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
          <span className="font-display text-xl font-bold text-primary tracking-wide">
            Irina Nedelko
          </span>
          <span className="hidden sm:inline text-muted-foreground text-sm font-body">
            · Konditorei Dresden
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8 text-sm font-body">
          <button onClick={() => scrollTo("products")} className="text-foreground/80 hover:text-primary transition-colors">
            Unsere Torten
          </button>
          <button onClick={() => scrollTo("about")} className="text-foreground/80 hover:text-primary transition-colors">
            Über uns
          </button>
          <button onClick={() => scrollTo("contact")} className="text-foreground/80 hover:text-primary transition-colors">
            Kontakt
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onCartClick}
            className="relative p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Warenkorb"
          >
            <ShoppingCart className="w-5 h-5 text-foreground" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {itemCount}
              </span>
            )}
          </button>
          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="flex flex-col gap-3 px-4 py-4 text-sm font-body">
              <button onClick={() => scrollTo("products")} className="text-left text-foreground/80 hover:text-primary">Unsere Torten</button>
              <button onClick={() => scrollTo("about")} className="text-left text-foreground/80 hover:text-primary">Über uns</button>
              <button onClick={() => scrollTo("contact")} className="text-left text-foreground/80 hover:text-primary">Kontakt</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
