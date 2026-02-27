import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-20 bg-secondary/40">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-body text-sm uppercase tracking-[0.25em] mb-2">Die Geschichte</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">Über Irina Nedelko</h2>
          <p className="text-muted-foreground font-body leading-relaxed text-lg mb-4">
            Aus der Leidenschaft zum Backen entstanden – Irina Nedelko kreiert seit Jahren einzigartige Torten und Kuchen in Dresden. 
            Jedes Stück wird mit Liebe, den besten Zutaten und traditionellen Rezepten handgefertigt.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed text-lg mb-8">
            Von klassischen deutschen Kuchen über europäische Patisserie bis hin zu individuellen Kreationen – 
            bei Irina finden Sie die perfekte Torte für jeden Anlass. Ob Geburtstag, Hochzeit oder einfach 
            ein gemütlicher Sonntagnachmittag.
          </p>
          <div className="flex justify-center gap-8 text-center">
            {[
              { num: "500+", label: "Torten gebacken" },
              { num: "100%", label: "Handgemacht" },
              { num: "Dresden", label: "Mit Liebe" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-bold text-accent">{stat.num}</p>
                <p className="text-muted-foreground font-body text-xs uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
