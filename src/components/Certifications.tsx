import { Award, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CertificateGallery from "./CertificateGallery";

const Certifications = () => {
  const certifications = [
    {
      title: "Ethical Hacking Certifications",
      issuer: "Multiple Organizations",
      description: "Comprehensive certifications covering ethical hacking methodologies, penetration testing, and security assessment techniques.",
      areas: ["Network Security", "Web Security", "Incident Response", "Security Auditing"]
    },
    {
      title: "Data Analysis with Python",
      issuer: "IBM via Cognitive Class",
      description: "Professional certification in Python programming for data analysis, applicable to security data analytics and threat intelligence.",
      areas: ["Python", "Data Analysis", "Security Analytics"]
    },
    {
      title: "coDE2cAREER Cyber Security",
      issuer: "Dhanalakshmi Srinivasan University",
      description: "Successfully cleared qualifier test demonstrating potential and aptitude in Cyber Security through the Student Developer Community program.",
      areas: ["Cybersecurity", "Security Training", "Professional Development"]
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="absolute inset-0 cyber-grid opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4 mb-12">
            <p className="text-primary terminal-text text-sm tracking-wider">&gt; certifications.verify()</p>
            <h2 className="text-4xl lg:text-5xl font-bold glow-text">Certifications & Achievements</h2>
            <p className="text-lg text-muted-foreground">
              Professional credentials and recognition in cybersecurity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-card border border-primary/20 rounded-lg p-6 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg border border-primary/30 group-hover:bg-primary/20 transition-colors">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
                    <p className="text-sm text-primary terminal-text">{cert.issuer}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cert.areas.map((area, aIdx) => (
                    <Badge
                      key={aIdx}
                      variant="outline"
                      className="bg-muted/50 border-primary/30 text-xs"
                    >
                      {area}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Internships Section */}
          <div className="mt-12 bg-card border border-primary/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-primary">Internship Experience</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Cybersecurity",
                  focus: "Security protocols and infrastructure protection"
                },
                {
                  title: "VAPT Tester",
                  focus: "Vulnerability Assessment and Penetration Testing"
                }
              ].map((internship, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="font-semibold text-foreground">{internship.title}</h4>
                  <p className="text-sm text-muted-foreground">{internship.focus}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certificate Gallery */}
          <CertificateGallery />
        </div>
      </div>
    </section>
  );
};

export default Certifications;