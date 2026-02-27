import { motion } from "framer-motion";
import heroBakery from "@/assets/hero-bakery.webp";

const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBakery}
          alt="Irina Nedelko Konditorei"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <p className="text-gold-light font-body text-sm uppercase tracking-[0.3em] mb-4">
            Handgemachte Konditorei · Dresden
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Torten mit Liebe
            <span className="block text-gold-light italic font-medium">von Irina Nedelko</span>
          </h1>
          <p className="text-primary-foreground/80 font-body text-lg mb-8 max-w-md leading-relaxed">
            Jede Torte ist ein Kunstwerk – handgefertigt mit den feinsten Zutaten für Ihre besonderen Momente in Dresden.
          </p>
          <button
            onClick={scrollToProducts}
            className="bg-accent text-accent-foreground px-8 py-3 rounded-md font-body font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Jetzt bestellen
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
