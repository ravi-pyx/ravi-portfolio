import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Certificate images from parsed documents
const certificates = [
  {
    title: "Data Analysis with Python",
    issuer: "IBM via Cognitive Class",
    image: "https://courses.cognitiveclass.ai/certificates/68f9175dedb2444e99b4b8bc8c459416",
    description: "Professional certification in Python programming for data analysis"
  }
];

const CertificateGallery = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-6 text-primary terminal-text">Certificate Gallery</h3>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* IBM Certificate */}
        <div className="group relative bg-card border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all cursor-pointer">
          <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs text-primary/70 mb-2 terminal-text">IBM COGNITIVE CLASS</div>
              <h4 className="font-bold text-lg mb-2">Data Analysis with Python</h4>
              <p className="text-sm text-muted-foreground">DA010YEN Course</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Issued: February 4, 2023</p>
              <a 
                href="https://courses.cognitiveclass.ai/certificates/68f9175dedb2444e99b4b8bc8c459416"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary hover:underline mt-1 inline-block"
              >
                Verify Certificate →
              </a>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <ZoomIn className="h-8 w-8 text-white" />
          </div>
        </div>

        {/* Cybersecurity Qualifier Certificate */}
        <div className="group relative bg-card border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all">
          <div className="aspect-[4/3] bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs text-primary/70 mb-2 terminal-text">DSU - STUDENT DEVELOPER COMMUNITY</div>
              <h4 className="font-bold text-lg mb-2">coDE2cAREER Cyber Security</h4>
              <p className="text-sm text-muted-foreground">Qualifier Test Certificate</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Certificate ID: 25SDCCYS030</p>
              <p className="text-xs text-muted-foreground mt-1">Dhanalakshmi Srinivasan University</p>
            </div>
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
            <div>
              <p className="text-xs text-muted-foreground">✓ Google vulnerabilities accepted</p>
              <p className="text-xs text-muted-foreground">✓ HackerOne private programs</p>
              <p className="text-xs text-muted-foreground">✓ Multiple platform invitations</p>
            </div>
          </div>
        </div>

        {/* Ethical Hacking Certifications */}
        <div className="group relative bg-card border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all">
          <div className="aspect-[4/3] bg-gradient-to-br from-red-900/20 to-orange-900/20 p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs text-primary/70 mb-2 terminal-text">PROFESSIONAL TRAINING</div>
              <h4 className="font-bold text-lg mb-2">Ethical Hacking</h4>
              <p className="text-sm text-muted-foreground">Multiple Organizations</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Network Security Testing</p>
              <p className="text-xs text-muted-foreground">Penetration Testing Methods</p>
              <p className="text-xs text-muted-foreground">Security Assessment</p>
            </div>
          </div>
        </div>

        {/* Network Security Internship */}
        <div className="group relative bg-card border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all">
          <div className="aspect-[4/3] bg-gradient-to-br from-indigo-900/20 to-blue-900/20 p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs text-primary/70 mb-2 terminal-text">INTERNSHIP COMPLETION</div>
              <h4 className="font-bold text-lg mb-2">Network Security</h4>
              <p className="text-sm text-muted-foreground">Internship Program</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Protocol Analysis</p>
              <p className="text-xs text-muted-foreground">Network Defense Strategies</p>
            </div>
          </div>
        </div>

        {/* Incident Response */}
        <div className="group relative bg-card border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all">
          <div className="aspect-[4/3] bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs text-primary/70 mb-2 terminal-text">INTERNSHIP COMPLETION</div>
              <h4 className="font-bold text-lg mb-2">Incident Handling & Response</h4>
              <p className="text-sm text-muted-foreground">Security Operations</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Incident Detection</p>
              <p className="text-xs text-muted-foreground">Threat Mitigation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateGallery;