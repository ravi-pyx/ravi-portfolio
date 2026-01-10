import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown, Instagram } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const fullText = "SECURITY ENGINEER";

  // Typewriter effect
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  // 3D Parallax Scroll Effect
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.clientX) / 40;
      const y = (window.innerHeight / 2 - e.clientY) / 40;
      setTilt({ x, y });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* 3D Moving Background Lights */}
      <div
        className="absolute top-16 left-1/3 w-[550px] h-[550px] bg-cyan-500/10 blur-[120px] rounded-full transition-transform"
        style={{ transform: `translate(${tilt.x}px, ${tilt.y}px)` }}
      />
      <div
        className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full transition-transform"
        style={{ transform: `translate(${tilt.y}px, ${tilt.x}px)` }}
      />

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left animate-fade-in-up">

          {/* LEFT SECTION */}
          <div className="space-y-6">

            {/* Glitch Title + Shimmer */}
            <p className="text-primary terminal-text text-sm tracking-wider animate-glitch">&gt; whoami</p>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="glow-text hologram-shimmer animate-glitch">
                Maddu Ravi Bhaskar
              </span>
              <br />
              <span className="text-foreground/80 hologram-shimmer delay-300">

              </span>
            </h1>

            <p className="text-muted-foreground terminal-text text-sm">&gt; role:</p>
            <p className="text-2xl lg:text-3xl font-semibold text-primary terminal-text min-h-[2.5rem]">
              {displayText}<span className="animate-pulse">|</span>
            </p>

            <p className="text-xl md:text-2xl text-white font-bold terminal-text max-w-xl mx-auto lg:mx-0 leading-relaxed tracking-wide">
              Security Engineer focused on application and API security.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="mr-2 h-5 w-5" /> Get In Touch
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 hover:border-primary"
                onClick={() => scrollToSection("projects")}
              >
                View Work
              </Button>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 justify-center lg:justify-start pt-2">
              <a
                href="https://github.com/jaswanthsai1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary hover:scale-110 transition-all"
              >
                <Github className="h-6 w-6" />
              </a>

              <a
                href="https://github.com/ravi-pyx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary hover:scale-110 transition-all"
              >
                <Github className="h-6 w-6" />
              </a>

              <a
                href="mailto:madduravibhaskar@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary hover:scale-110 transition-all"
              >
                <Mail className="h-6 w-6" />
              </a>

              <a
                href="https://www.instagram.com/ravi_xt9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary hover:scale-110 transition-all"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>

          </div>

          {/* RIGHT: HOLOGRAM PROFILE + PARALLAX */}
          <div
            className="relative flex justify-center lg:justify-end transition-transform"
            style={{ transform: `translate(${tilt.x}px, ${tilt.y}px)` }}
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 hologram-border rounded-full overflow-hidden">
              <img
                src={profileImage}
                alt="Maddu Ravi Bhaskar"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

        </div>
      </div>

      {/* SCROLL ICON */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary" />
      </div>

    </section>
  );
};

export default Hero;
