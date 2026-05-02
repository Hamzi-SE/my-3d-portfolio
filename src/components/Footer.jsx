const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-line/50 pt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
      <p>Built in React + Tailwind. Type set in Instrument Serif & Inter. © {year} Muhammad Hamza.</p>
    </footer>
  );
};

export default Footer;
