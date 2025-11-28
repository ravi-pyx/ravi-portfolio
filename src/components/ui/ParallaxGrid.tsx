import { useEffect } from "react";

const ParallaxGrid = () => {
  useEffect(() => {
    const grid = document.getElementById("parallax-grid")!;

    window.onmousemove = (e) => {
      const x = (e.clientX / window.innerWidth) * 20;
      const y = (e.clientY / window.innerHeight) * 20;
      grid.style.transform = `translate3d(${-x}px, ${-y}px, 0)`;
    };
  }, []);

  return (
    <div
      id="parallax-grid"
      className="fixed inset-0 -z-20 opacity-[0.12] pointer-events-none
      bg-[linear-gradient(#0ff2_1px,transparent_1px),linear-gradient(90deg,#0ff2_1px,transparent_1px)]
      bg-[size:80px_80px]"
    />
  );
};

export default ParallaxGrid;
