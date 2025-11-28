const Footer = () => {
  return (
    <footer className="relative border-t border-primary/20 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground terminal-text text-sm">
              &gt; Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © 2024 Jaswanth Sai Madhu Mohan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;