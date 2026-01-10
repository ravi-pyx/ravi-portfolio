import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Security Engineering",
      skills: [
        "Application Security",
        "Network & Infrastructure Security",
        "Risk & Vulnerability Management",
        "Secure System Design",
        "Web & API Security",
        "Security Monitoring (SIEM)",
        "Incident Detection & Response",
      ],
    },
    {
      category: "Tools & Platforms",
      skills: [
        "Nmap",
        "Wireshark",
        "Burp Suite",
        "Kali Linux",
        "Parrot OS",
        "Splunk (SIEM)",
        "Postman",
        "OWASP ZAP",
      ],
    },
    {
      category: "Security-focused",
      skills: ["Python (Security Automation)", "Bash (System Hardening)", "JavaScript (App Security)", "HTML/CSS", "SQL / MySQL", "REST APIs", "GraphQL Security"],
    },
    {
      category: "Security Domains",
      skills: [
        "Application Security",
        "Network Security",
        "Identity & Access Management (IAM)",
        "Threat Detection & Analysis",
        "Vulnerability Management",
        "Secure Architecture Design",
        "Incident Response",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Cyber grid background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="space-y-4 mb-12">
            <p className="text-primary terminal-text text-sm tracking-wider">&gt; skills.scan()</p>
            <h2 className="text-4xl lg:text-5xl font-bold glow-text">Technical Arsenal</h2>
            <p className="text-lg text-muted-foreground">
              Tools and technologies used to build and defend secure systems.
            </p>
          </div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="
                  card-neon
                  bg-card border border-primary/20 rounded-lg p-6
                  hover:border-primary/40 hover:shadow-[0_0_35px_hsl(var(--primary)/0.2)]
                  transition-all relative overflow-hidden
                "
              >
                {/* Floating hologram spark */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full blur-sm animate-ping" />

                <h3 className="text-xl font-semibold mb-4 text-primary terminal-text">
                  {category.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <Badge
                      key={skillIdx}
                      variant="outline"
                      className="
                        hologram-badge
                        bg-muted/40 border-primary/30 text-primary
                        hover:bg-primary/10 hover:border-primary
                        transition-all cursor-default
                        shadow-[0_0_10px_hsl(var(--primary)/0.15)]
                      "
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { value: "Multiple", label: "Certifications" },
              { value: "SECURITY ENGINEER", label: "Active Status" },
              { value: "2026", label: "Graduating" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="
                card-neon text-center
                bg-card border border-primary/20 rounded-lg p-6
                hover:border-primary/40 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]
                transition-all
              "
              >
                <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
