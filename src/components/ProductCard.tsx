import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Plus } from "lucide-react";
import { useState } from "react";
import ProductDetailModal from "./ProductDetailModal";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const { addItem } = useCart();
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-warm transition-shadow duration-300 cursor-pointer"
        onClick={() => setShowDetail(true)}
      >
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-display text-lg font-semibold text-foreground leading-tight">
              {product.name}
            </h3>
            <span className="text-accent font-bold font-body whitespace-nowrap">
              €{product.price}
            </span>
          </div>
          <p className="text-muted-foreground text-sm font-body leading-relaxed mb-4 line-clamp-2">
            {product.description}
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addItem(product);
            }}
            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2.5 rounded-md text-sm font-body font-bold hover:opacity-90 transition-opacity"
          >
            <Plus className="w-4 h-4" />
            In den Warenkorb
          </button>
        </div>
      </motion.div>

      <ProductDetailModal
        product={product}
        open={showDetail}
        onClose={() => setShowDetail(false)}
      />
    </>
  );
};

export default ProductCard;
