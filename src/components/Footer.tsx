const Footer = () => {
  return (
    <footer className="relative border-t border-primary/30 bg-card/30 backdrop-blur-md mt-20 shadow-[0_0_20px_hsl(var(--primary)/0.2)]">

      {/* Neon Top Glow Bar */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-primary/50 shadow-[0_0_20px_hsl(var(--primary)/0.8)]" />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <div className="text-center md:text-left">
            <p className="text-muted-foreground terminal-text text-sm">
              &gt; Built with React, TypeScript & Tailwind CSS
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © 2025 Maddu Ravi Bhaskar All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
