import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => (
  <section id="contact" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="text-accent font-body text-sm uppercase tracking-[0.25em] mb-2">Kontakt</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-8">Bestellen & Anfragen</h2>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {[
            { icon: MapPin, label: "Standort", value: "Dresden, Deutschland" },
            { icon: Phone, label: "Telefon", value: "+49 151 XXX XXXX" },
            { icon: Mail, label: "E-Mail", value: "irina@nedelko.de" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card shadow-card">
              <Icon className="w-5 h-5 text-accent" />
              <span className="text-xs text-muted-foreground font-body uppercase tracking-wider">{label}</span>
              <span className="text-sm font-body text-foreground font-medium">{value}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 justify-center">
          <a
            href="https://www.facebook.com/inedelk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-body font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Facebook besuchen
          </a>
          <a
            href="https://revolut.me/irinanedelko"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground px-6 py-3 rounded-md font-body font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Mit Revolut bezahlen
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
