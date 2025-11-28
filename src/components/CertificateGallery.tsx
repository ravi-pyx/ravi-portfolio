import React, { useEffect } from "react";
import { ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const certificates = [
  {
    title: "All Certifications",
    description: "View complete certificate collection",
    file: "/certificates/all-certificates.pdf",
  },
  {
    title: "Modern Resume",
    description: "Updated professional resume",
    file: "/certificates/cv-resume.pdf",
  },
  {
    title: "Skills Profile",
    description: "Web & API Security Skill Profile",
    file: "/certificates/skills-profile.pdf",
  },
];

const CertificateGallery = () => {
  return (
    <section id="certificates" className="py-20 relative">

      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold mb-12 glow-text terminal-text">
          Certificate Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {certificates.map((cert, i) => (
            <div
              key={i}
              className="
              bg-card p-6 rounded-xl card-neon relative overflow-hidden
              group transform transition-all hover:-translate-y-2
              "
            >
              {/* neon floating sparks */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-all">
                <div className="absolute top-4 left-4 w-2 h-2 bg-primary rounded-full blur-sm animate-ping" />
                <div className="absolute bottom-6 right-6 w-3 h-3 bg-secondary rounded-full blur animate-pulse" />
              </div>

              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-muted-foreground mb-4">{cert.description}</p>

              <Button
                className="w-full bg-primary/20 border border-primary/40 hover:bg-primary/30"
                asChild
              >
                <a href={cert.file} target="_blank">
                  <FileText className="mr-2 h-5 w-5" /> View PDF
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateGallery;
