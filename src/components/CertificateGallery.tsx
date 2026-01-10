import React, { useEffect } from "react";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import VanillaTilt from "vanilla-tilt";

// === 4 certificate items ===
const certificates = [
  {
    title: "Certificate of Participation",
    description: "Dhanalakshmi Srinivasan University",
    file: "/certificates/cert-1.jpg",
  },
  {
    title: "Data Analytics Assessment",
    description: "LearnTube.ai",
    file: "/certificates/cert-2.jpg",
  },
  {
    title: "VAPT Tester Internship",
    description: "BluePeak",
    file: "/certificates/cert-3.jpg",
  },
  {
    title: "Cybersecurity Internship",
    description: "InternCourse",
    file: "/certificates/cert-4.png",
  },
  {
    title: "HR Recruiter Quiz",
    description: "Nauvi Solutions",
    file: "/certificates/cert-5.jpg",
  },
  {
    title: "Resume",
    description: "Updated professional resume",
    file: "/certificates/resume.jpg",
  },

  {
    title: "Self Introduction CV",
    description: "Full personal introduction CV",
    file: "/certificates/cv.jpg",
  },
];

const CertificateGallery = () => {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-tilt]");
    VanillaTilt.init(elements as any, {
      max: 12,
      speed: 400,
      glare: true,
      "max-glare": 0.25,
    });
  }, []);

  return (
    <section id="certificates" className="py-20 relative">
      {/* background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold mb-12 glow-text terminal-text">
          Certificate Gallery
        </h2>

        {/* FIX: 4 cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">

          {certificates.map((cert, i) => (
            <div
              key={i}
              data-tilt
              className="
                bg-card border border-primary/20 p-6 rounded-xl 
                transition-all hover:-translate-y-2 hover:border-primary/50 
                shadow-[0_0_20px_hsl(var(--primary)/0.15)]
                card-neon relative overflow-hidden group
              "
            >
              {/* Neon particles */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-all">
                <div className="absolute top-4 left-4 w-2 h-2 bg-primary rounded-full blur-sm animate-ping" />
                <div className="absolute bottom-6 right-6 w-3 h-3 bg-secondary rounded-full blur animate-pulse" />
              </div>

              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-muted-foreground mb-4">{cert.description}</p>

              <Button
                className="w-full bg-primary/20 border border-primary/40 hover:bg-primary/30 transition-all"
                asChild
              >
                <a href={cert.file} target="_blank">
                  <FileText className="mr-2 h-5 w-5" /> View File
                </a>
              </Button>
            </div>
          ))}

        </div>
      </div>
    </section >
  );
};

export default CertificateGallery;
