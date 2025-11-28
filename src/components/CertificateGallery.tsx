import { ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const CertificateGallery = () => {
  const openCertificate = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-6 text-primary terminal-text">
        Certificate Gallery
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* All Certificates */}
        <div className="group relative bg-card border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all">
          <div className="aspect-[4/3] bg-gradient-to-br from-cyan-900/20 to-blue-900/20 p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs text-primary/70 mb-2 terminal-text">COMPLETE COLLECTION</div>
              <h4 className="font-bold text-lg mb-2">All Certifications</h4>
              <p className="text-sm text-muted-foreground">View complete certificate portfolio</p>
            </div>
            <Button
              size="sm"
              className="bg-primary/20 hover:bg-primary/30 border border-primary/40 text-primary"
              onClick={() => openCertificate("/certificates/all-certificates.pdf")}
            >
              <FileText className="mr-2 h-4 w-4" />
              View All Certificates
            </Button>
          </div>
        </div>

        {/* Modern Resume */}
        <div className="group relative bg-card border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all">
          <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs text-primary/70 mb-2 terminal-text">UPDATED RESUME</div>
              <h4 className="font-bold text-lg mb-2">Modern Resume</h4>
              <p className="text-sm text-muted-foreground">Updated professional resume</p>
            </div>
            <Button
              size="sm"
              className="bg-primary/20 hover:bg-primary/30 border border-primary/40 text-primary"
              onClick={() => openCertificate('/certificates/White black Free printable Modern Minimalist CV Resume_20251112_113755_0000.pdf')}
            >
              <FileText className="mr-2 h-4 w-4" />
              View Resume
            </Button>
          </div>
        </div>

        {/* Complete CV */}
        <div className="group relative bg-card border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all">
          <div className="aspect-[4/3] bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs text-primary/70 mb-2 terminal-text">PROFESSIONAL RESUME</div>
              <h4 className="font-bold text-lg mb-2">Complete CV</h4>
              <p className="text-sm text-muted-foreground">Full resume with all details</p>
            </div>
            <Button
              size="sm"
              className="bg-primary/20 hover:bg-primary/30 border border-primary/40 text-primary"
              onClick={() => openCertificate("/certificates/cv-resume.pdf")}
            >
              <FileText className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>

        {/* Skills Profile — NEW */}
        <div className="group relative bg-card border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all">
          <div className="aspect-[4/3] bg-gradient-to-br from-indigo-900/20 to-purple-900/20 p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs text-primary/70 mb-2 terminal-text">PROFESSIONAL SKILLSET</div>
              <h4 className="font-bold text-lg mb-2">Web & API Security Skill Profile</h4>
              <p className="text-sm text-muted-foreground">Complete security skills documentation</p>
            </div>
            <Button
              size="sm"
              className="bg-primary/20 hover:bg-primary/30 border border-primary/40 text-primary"
              onClick={() => openCertificate('/certificates/skills-profile.pdf')}
            >
              <FileText className="mr-2 h-4 w-4" />
              View Skill Profile
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CertificateGallery;
