import { Shield, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Fraud Detection System",
      description:
        "AI-powered fraud detection system with behavioral analysis & anomaly detection.",
      tech: ["Python", "ML", "MySQL", "Detection"],
    },
    {
      title: "Bug Bounty Findings",
      description:
        "Authentication bypass, API vulnerabilities, BOLA, and Google-accepted bug.",
      tech: ["Burp Suite", "API", "OSINT", "Recon"],
    },
    {
      title: "CTF Challenge Solves",
      description:
        "Privilege escalation, exploitation, cryptography, web hacking.",
      tech: ["Nmap", "Metasploit", "Linux", "Crypto"],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold mb-12 glow-text terminal-text">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-card p-6 rounded-xl card-neon hologram-border transform transition-all hover:-translate-y-3"
            >
              <Shield className="h-10 w-10 text-primary mb-4" />

              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="text-muted-foreground my-3">{p.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-primary/20 text-primary border border-primary/40 rounded-full text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" className="border-primary hover:bg-primary/10" asChild>
            <a href="https://github.com/jaswanthsai1" target="_blank">
              <Github className="mr-2 h-5 w-5" /> View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
