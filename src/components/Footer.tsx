const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-10">
    <div className="container mx-auto px-4 text-center">
      <p className="font-display text-lg font-semibold mb-2">Irina Nedelko · Konditorei</p>
      <p className="font-body text-sm opacity-70">Dresden, Deutschland</p>
      <p className="font-body text-xs opacity-50 mt-4">
        © {new Date().getFullYear()} Irina Nedelko. Alle Rechte vorbehalten.
      </p>
    </div>
  </footer>
);

export default Footer;
