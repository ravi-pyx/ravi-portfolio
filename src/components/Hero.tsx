import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import profileImage from "@/assets/profile-2.jpg";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Web & API Penetration Tester";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-2">
              <p className="text-primary terminal-text text-sm tracking-wider">&gt; whoami</p>
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="glow-text">Jaswanth Sai</span>
                <br />
                <span className="text-foreground/80">Madhu Mohan</span>
              </h1>
            </div>

            <div className="space-y-2">
              <p className="text-muted-foreground terminal-text text-sm">&gt; role:</p>
              <p className="text-2xl lg:text-3xl font-semibold text-primary terminal-text min-h-[2.5rem]">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Cybersecurity specialist with expertise in network security, vulnerability assessment, 
              and penetration testing. Passionate about securing digital infrastructures and hunting bugs.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.7)] transition-all"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all"
                onClick={() => scrollToSection('projects')}
              >
                View Work
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a 
                href="https://github.com/jaswanthsai1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/maturi-jaswanth-sai-madhu-mohan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:jaswanthsaimaturi19@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-20 animate-glow-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-[0_0_40px_hsl(var(--primary)/0.3)]">
                <img 
                  src={profileImage} 
                  alt="Jaswanth Sai Madhu Mohan" 
                  className="w-full h-full object-cover object-top scale-110"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-primary/50 rounded-lg rotate-45" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-secondary/50 rounded-lg rotate-12" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  );
};

export default Hero;