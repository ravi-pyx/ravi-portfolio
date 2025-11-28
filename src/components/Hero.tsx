import React, { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, ChevronDown, Instagram } from "lucide-react";
import profileImage from "@/assets/profile-2.jpg";

/* Terminal-style intro lines */
const terminalLines = [
  "initializing secure-dev-portfolio...",
  "authenticating identity...",
  "identity confirmed: maturi-jaswanth-sai",
];

const Hero: React.FC = () => {
  const [introText, setIntroText] = useState("");
  const [displayText, setDisplayText] = useState("");
  const roleFull = "Web & API Penetration Tester";

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const tiltRef = useRef<HTMLDivElement | null>(null);
  const profileRef = useRef<HTMLDivElement | null>(null);
  const symbolsRef = useRef<HTMLDivElement | null>(null);

  /* Terminal text typing */
  useEffect(() => {
    let line = 0, char = 0;
    let interval: any;

    const type = () => {
      const text = terminalLines[line];
      if (char <= text.length) {
        setIntroText(text.slice(0, char));
        char++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          line++;
          if (line < terminalLines.length) {
            char = 0;
            interval = setInterval(type, 40);
          } else {
            // clear intro after all lines
            setTimeout(() => setIntroText(""), 800);
          }
        }, 600);
      }
    };

    interval = setInterval(type, 40);
    return () => clearInterval(interval);
  }, []);

  /* Role typing */
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      if (i <= roleFull.length) {
        setDisplayText(roleFull.slice(0, i));
        i++;
      } else clearInterval(t);
    }, 70);
    return () => clearInterval(t);
  }, []);

  /* Matrix rain */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    const fontSize = 14;
    let columns: number;
    let drops: number[];

    function resize() {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1);
    }
    resize();
    window.addEventListener("resize", resize);

    const letters = "01▒▓<>";

    function draw() {
      ctx.fillStyle = "rgba(0,0,0,0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(180,0,255,0.15)";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const char = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.97) drops[i] = 0;
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 50);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  /* Profile 3D tilt */
  useEffect(() => {
    const tilt = tiltRef.current;
    if (!tilt) return;

    const move = (e: MouseEvent) => {
      const rect = tilt.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      const rotateX = (y / rect.height) * -12;
      const rotateY = (x / rect.width) * 14;

      tilt.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      if (profileRef.current)
        profileRef.current.style.transform = `translate3d(${rotateY * 0.6}px, ${rotateX * -0.6}px, 0)`;
    };

    const leave = () => {
      tilt.style.transform = "rotateX(0deg) rotateY(0deg)";
      if (profileRef.current) profileRef.current.style.transform = "translate3d(0,0,0)";
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  /* Floating hacker symbols */
  useEffect(() => {
    const container = symbolsRef.current;
    if (!container) return;

    const symbols = ["0x4F", "0b1011", "∑", "Δ", "λ", "⊕", "AUTH", "PKG"];
    container.innerHTML = "";

    for (let i = 0; i < 7; i++) {
      const div = document.createElement("div");
      div.className = `hero-symbol ${i % 2 ? "small" : "large"}`;
      div.style.left = `${10 + Math.random() * 70}%`;
      div.style.top = `${10 + Math.random() * 60}%`;
      div.style.animationDelay = `${Math.random() * 5}s`;
      div.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      container.appendChild(div);
    }
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#030612] via-[#050315] to-black z-0" />

      {/* Matrix */}
      <canvas ref={canvasRef} className="hero-matrix-canvas" />

      {/* Neon rings */}
      <div className="hero-ring outer" />
      <div className="hero-ring inner" />

      {/* Laser sweep */}
      <div className="hero-laser" />

      {/* Floating symbols */}
      <div ref={symbolsRef} className="absolute inset-0 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE */}
          <div className="space-y-6">

            <p className="text-primary terminal-text text-sm tracking-wider">
              &gt; whoami
            </p>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight glow-text">
              Maturi Jaswanth Sai
              <br />
              <span className="text-foreground/70">Madhu Mohan</span>
            </h1>

            <div className="flex items-center gap-3">
              {introText && (
                <div className="hero-terminal">{introText}</div>
              )}
            </div>

            <div>
              <p className="text-muted-foreground terminal-text text-sm">&gt; role:</p>
              <p className="text-3xl font-semibold text-primary terminal-text">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Cybersecurity specialist focused on web & API security, vulnerability research & practical exploitation.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 pt-2">
              <button onClick={() => scrollTo("contact")} className="holo px-5 py-3 rounded-lg flex items-center gap-2">
                <Mail className="h-4 w-4" /> Get In Touch
              </button>
              <button onClick={() => scrollTo("projects")} className="holo px-5 py-3 rounded-lg">
                View Work
              </button>
            </div>

            {/* Social */}
            <div className="flex gap-4 pt-4">

              <a href="https://github.com/jaswanthsai1" target="_blank" className="relative">
                <div className="social-orb">
                  <Github className="h-5 w-5" />
                  <div className="orb-ring"></div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/maturi-jaswanth-sai-madhu-mohan-127392329" target="_blank">
                <div className="social-orb">
                  <Linkedin className="h-5 w-5" />
                  <div className="orb-ring"></div>
                </div>
              </a>

              <a href="mailto:jaswanthsaimaturi19@gmail.com">
                <div className="social-orb">
                  <Mail className="h-5 w-5" />
                  <div className="orb-ring"></div>
                </div>
              </a>

              <a href="https://www.instagram.com/_jaswanth__sai" target="_blank">
                <div className="social-orb">
                  <Instagram className="h-5 w-5" />
                  <div className="orb-ring"></div>
                </div>
              </a>
            </div>

          </div>

          {/* RIGHT SIDE — PROFILE */}
          <div className="relative flex justify-center lg:justify-end">
            <div ref={tiltRef} className="profile-tilt relative w-72 h-72 lg:w-96 lg:h-96">

              <div ref={profileRef} className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-[0_0_40px_rgba(180,0,255,0.35)]">
                <img src={profileImage} alt="" className="w-full h-full object-cover scale-110 object-top" />
              </div>

              <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-primary/50 rounded-lg rotate-45 shadow-[0_0_20px_rgba(180,0,255,0.4)]" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 border-2 border-secondary/50 rounded-lg rotate-12 shadow-[0_0_20px_rgba(0,255,200,0.4)]" />

            </div>
          </div>

        </div>
      </div>

      {/* Scroll ↓ */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary" />
      </div>

    </section>
  );
};

export default Hero;
