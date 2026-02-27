import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import { useState } from "react";

type Category = "all" | "signature" | "classic" | "seasonal";

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "Alle" },
  { value: "signature", label: "Signature" },
  { value: "classic", label: "Klassiker" },
  { value: "seasonal", label: "Saisonal" },
];

const ProductsSection = () => {
  const [category, setCategory] = useState<Category>("all");

  const filtered = category === "all" ? products : products.filter((p) => p.category === category);

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent font-body text-sm uppercase tracking-[0.25em] mb-2">Handgemacht in Dresden</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Unsere Torten</h2>
        </div>

        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setCategory(cat.value)}
              className={`px-5 py-2 rounded-full text-sm font-body transition-colors ${
                category === cat.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-border"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
