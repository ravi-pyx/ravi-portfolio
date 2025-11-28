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

        {/* 1️⃣ All Certificates */}
        <div className="group relative bg-card border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all">
          <div className="aspect-[4/3] bg-gradient-to-br from-cyan-900/20 to-blue-900/20 p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs text-primary/70 mb-2 terminal-text">
                COMPLETE COLLECTION
              </div>
              <h4 className="font-bold text-lg mb-2">All Certifications</h4>
              <p className="text-sm text-muted-foreground">
                View complete certificate portfolio
              </p>
            </div>
            <Button
              size="sm"
              className="bg-primary/20 hover:bg-primary/30 border border-primary/40 text-primary"
              onClick={() =>
                openCertificate("/certificates/all-certificates.pdf")
              }
            >
              <FileText className="mr-2 h-4 w-4" />
              View All Certificates
            </Button>
          </div>
        </div>

        {/* 2️⃣ NEW Resume Box */}
        <div className="group relative bg-card border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all">
          <div className="aspect-[4/3] bg-gradient-to-br from-slate-900/20 to-zinc-900/20 p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs text-primary/70 mb-2 terminal-text">
                UPDATED RESUME
              </div>
              <h4 className="font-bold text-lg mb-2">Modern Resume</h4>
              <p className="text-sm text-muted-foreground">
                Updated professional resume
              </p>
            </div>
            <Button
              size="sm"
              className="bg-primary/20 hover:bg-primary/30 border border-primary/40 text-primary"
              onClick={() =>
                openCertificate(
                  "/certificates/White%20black%20Free%20printable%20Modern%20Minimalist%20CV%20Resume_20251112_113755_0000.pdf"
                )
              }
            >
              <FileText className="mr-2 h-4 w-4" />
              View Resume
            </Button>
          </div>
        </div>

        {/* 3️⃣ Complete CV (Old) */}
        <div className="group relative bg-card border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all">
          <div className="aspect-[4/3] bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs text-primary/70 mb-2 terminal-text">
                PROFESSIONAL RESUME
              </div>
              <h4 className="font-bold text-lg mb-2">Complete CV</h4>
              <p className="text-sm text-muted-foreground">
                Full resume with all details
              </p>
            </div>
            <Button
              size="sm"
              className="bg-primary/20 hover:bg-primary/30 border border-primary/40 text-primary"
              onClick={() =>
                openCertificate(
                  "/certificates/Self_Introduction_Magam_Sri_Krishna.pdf"
                )
              }
            >
              <FileText className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CertificateGallery;
