import { ExternalLink, Github, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Fraud Detection & Reporting System",
      description: "Advanced system incorporating behavioral analysis and anomaly detection to identify fraudulent transactions. Integrated machine learning approaches with traditional security checks for enhanced fraud prevention.",
      tech: ["Python", "Machine Learning", "Anomaly Detection", "MySQL"],
      highlights: [
        "Real-time transaction monitoring",
        "Behavioral analysis algorithms",
        "Automated reporting system",
        "ML-based pattern recognition"
      ]
    },
    {
      title: "Bug Bounty Findings",
      description: "Active bug hunter with multiple successful vulnerability disclosures across various platforms. Specialized in finding authentication bypasses, BOLA, and API security issues.",
      tech: ["OSINT", "Web Security", "API Testing", "Burp Suite"],
      highlights: [
        "Google vulnerability accepted",
        "Private program invitations",
        "API security findings",
        "Authentication bypass discoveries"
      ]
    },
    {
      title: "CTF Challenge Solutions",
      description: "Solved 10+ Capture The Flag challenges and vulnerable machines, demonstrating practical skills in exploitation, privilege escalation, and network penetration.",
      tech: ["Kali Linux", "Metasploit", "Nmap", "Exploitation"],
      highlights: [
        "Network penetration",
        "Privilege escalation",
        "Web exploitation",
        "Cryptography challenges"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4 mb-12">
            <p className="text-primary terminal-text text-sm tracking-wider">&gt; projects.list()</p>
            <h2 className="text-4xl lg:text-5xl font-bold glow-text">Featured Work</h2>
            <p className="text-lg text-muted-foreground">
              Projects and security research demonstrating my expertise
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-card border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-[0_0_40px_hsl(var(--primary)/0.2)] transition-all group"
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Shield className="h-8 w-8 text-primary" />
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-primary mb-3 terminal-text">Key Highlights:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {project.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 border border-primary/30 rounded-full text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all"
              asChild
            >
              <a href="https://github.com/jaswanthsai1" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;