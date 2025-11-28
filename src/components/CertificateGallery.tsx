import { useEffect } from "react";
import { ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import VanillaTilt from "vanilla-tilt";

const CertificateGallery = () => {
  useEffect(() => {
    // Safe TypeScript version
    const elements = document.querySelectorAll<HTMLElement>("[data-tilt]");

    elements.forEach((el) => {
      VanillaTilt.init(el, {
        max: 15,
        speed: 300,
        glare: true,
        "max-glare": 0.3,
        perspective: 900,
        scale: 1.05,
      });
    });
  }, []);

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-6 text-primary terminal-text">
        Certificate Gallery
      </h3>

      <div className="grid md:grid-cols-3 gap-6">
        
        {/* 🔹 ALL CERTIFICATES BOX */}
        <div
          data-tilt
          className="bg-card card-glitch border border-primary/20 p-6 rounded-lg hover:border-primary/50 transition-all"
        >
          <h4 className="text-xl font-semibold mb-2">All Certifications</h4>
          <p className="text-muted-foreground mb-4">View complete certificate portfolio</p>

          <Button
            variant="outline"
            className="w-full hologram-btn border-primary/40 hover:border-primary"
            asChild
          >
            <a href="/certificates/all-certificates.pdf" target="_blank">
              <ExternalLink className="w-4 h-4 mr-2" />
              View All Certificates
            </a>
          </Button>
        </div>

        {/* 🔹 MODERN RESUME BOX */}
        <div
          data-tilt
          className="bg-card card-glitch border border-primary/20 p-6 rounded-lg hover:border-primary/50 transition-all"
        >
          <h4 className="text-xl font-semibold mb-2">Modern Resume</h4>
          <p className="text-muted-foreground mb-4">Updated professional resume</p>

          <Button
            variant="outline"
            className="w-full hologram-btn border-primary/40 hover:border-primary"
            asChild
          >
            <a href="/certificates/cv-resume.pdf" target="_blank">
              <FileText className="w-4 h-4 mr-2" />
              View Resume
            </a>
          </Button>
        </div>

        {/* 🔹 COMPLETE CV BOX */}
        <div
          data-tilt
          className="bg-card card-glitch border border-primary/20 p-6 rounded-lg hover:border-primary/50 transition-all"
        >
          <h4 className="text-xl font-semibold mb-2">Complete CV</h4>
          <p className="text-muted-foreground mb-4">Full resume with all details</p>

          <Button
            variant="outline"
            className="w-full hologram-btn border-primary/40 hover:border-primary"
            asChild
          >
            <a
              href="/certificates/White black Free printable Modern Minimalist CV Resume_20251112_113755_0000.pdf"
              target="_blank"
              download
            >
              <FileText className="w-4 h-4 mr-2" />
              Download CV
            </a>
          </Button>
        </div>

        {/* 🔹 SKILLS PROFILE BOX */}
        <div
          data-tilt
          className="bg-card card-glitch border border-primary/20 p-6 rounded-lg hover:border-primary/50 transition-all md:col-span-3"
        >
          <h4 className="text-xl font-semibold mb-2">Skills Profile</h4>
          <p className="text-muted-foreground mb-4">Web & API Security Skills Overview</p>

          <Button
            variant="outline"
            className="w-full hologram-btn border-primary/40 hover:border-primary"
            asChild
          >
            <a
              href="/certificates/skills-profile.pdf"
              target="_blank"
            >
              <FileText className="w-4 h-4 mr-2" />
              View Skills Profile
            </a>
          </Button>
        </div>

      </div>
    </div>
  );
};

export default CertificateGallery;
