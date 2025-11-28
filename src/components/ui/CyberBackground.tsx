// src/components/ui/CyberBackground.tsx
import React from "react";

const CyberBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Main Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020817] via-[#040b1d] to-[#00040c]" />

      {/* Neon Glow Blobs */}
      <div className="absolute top-20 left-10 w-[550px] h-[550px] bg-cyan-500/20 rounded-full blur-[150px] animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-[550px] h-[550px] bg-purple-500/20 rounded-full blur-[150px] animate-pulse-slower" />

      {/* Subtle Cyber Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#00faff22 1px, transparent 1px), linear-gradient(90deg, #00faff22 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Cyber Particles */}
      <div className="absolute inset-0 pointer-events-none animate-float-points">
        {[...Array(40)].map((_, i) => (
          <span
            key={i}
            className="absolute w-[4px] h-[4px] bg-cyan-300 rounded-full opacity-50"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

    </div>
  );
};

export default CyberBackground;
