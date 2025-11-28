import { ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const CertificateGallery = () => {
  const openCertificate = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-6 text-primary terminal-text">Certificate Gallery</h3>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* All Certificates Collection */}
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
              onClick={() => openCertificate('/certificates/all-certificates.pdf')}
            >
              <FileText className="mr-2 h-4 w-4" />
              View All Certificates
            </Button>
          </div>
        </div>

        {/* IBM Certificate */}
        <div className="group relative bg-card border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all">
          <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs text-primary/70 mb-2 terminal-text">IBM COGNITIVE CLASS</div>
              <h4 className="font-bold text-lg mb-2">Data Analysis with Python</h4>
              <p className="text-sm text-muted-foreground">DA010YEN Course - Feb 2023</p>
            </div>
            <Button
              size="sm"
              className="bg-primary/20 hover:bg-primary/30 border border-primary/40 text-primary"
              onClick={() => openCertificate('https://courses.cognitiveclass.ai/certificates/68f9175dedb2444e99b4b8bc8c459416')}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View Certificate
            </Button>
          </div>
        </div>

        {/* Skills Profile */}
        <div className="group relative bg-card border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all">
          <div className="aspect-[4/3] bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs text-primary/70 mb-2 terminal-text">PROFESSIONAL PROFILE</div>
              <h4 className="font-bold text-lg mb-2">Web & API Security Skills</h4>
              <p className="text-sm text-muted-foreground">Complete skills documentation</p>
            </div>
            <Button
              size="sm"
              className="bg-primary/20 hover:bg-primary/30 border border-primary/40 text-primary"
              onClick={() => openCertificate('/certificates/skills-profile.pdf')}
            >
              <FileText className="mr-2 h-4 w-4" />
              View Profile
            </Button>
          </div>
        </div>

        {/* Cybersecurity Qualifier Certificate */}
        <div className="group relative bg-card border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all">
          <div className="aspect-[4/3] bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs text-primary/70 mb-2 terminal-text">DSU - STUDENT DEVELOPER COMMUNITY</div>
              <h4 className="font-bold text-lg mb-2">coDE2cAREER Cyber Security</h4>
              <p className="text-sm text-muted-foreground">Qualifier Test - ID: 25SDCCYS030</p>
            </div>
            <Button
              size="sm"
              className="bg-primary/20 hover:bg-primary/30 border border-primary/40 text-primary"
              onClick={() => openCertificate('/certificates/all-certificates.pdf')}
            >
              <FileText className="mr-2 h-4 w-4" />
              View Certificate
            </Button>
          </div>
        </div>

        {/* Complete Resume/CV */}
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
              onClick={() => openCertificate('/certificates/cv-resume.pdf')}
            >
              <FileText className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>

        {/* Bug Bounty Recognition */}
        <div className="group relative bg-card border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all">
          <div className="aspect-[4/3] bg-gradient-to-br from-green-900/20 to-cyan-900/20 p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs text-primary/70 mb-2 terminal-text">BUG BOUNTY PLATFORMS</div>
              <h4 className="font-bold text-lg mb-2">Security Researcher</h4>
              <p className="text-sm text-muted-foreground">Active Bug Hunter</p>
            </div>
            <Button
              size="sm"
              className="bg-primary/20 hover:bg-primary/30 border border-primary/40 text-primary"
              onClick={() => openCertificate('/certificates/all-certificates.pdf')}
            >
              <FileText className="mr-2 h-4 w-4" />
              View Recognition
            </Button>
          </div>
        </div>

        {/* Ethical Hacking Certifications */}
        <div className="group relative bg-card border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all">
          <div className="aspect-[4/3] bg-gradient-to-br from-red-900/20 to-orange-900/20 p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs text-primary/70 mb-2 terminal-text">PROFESSIONAL TRAINING</div>
              <h4 className="font-bold text-lg mb-2">Ethical Hacking</h4>
              <p className="text-sm text-muted-foreground">Network Security & Pen Testing</p>
            </div>
            <Button
              size="sm"
              className="bg-primary/20 hover:bg-primary/30 border border-primary/40 text-primary"
              onClick={() => openCertificate('/certificates/all-certificates.pdf')}
            >
              <FileText className="mr-2 h-4 w-4" />
              View Certificates
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateGallery;