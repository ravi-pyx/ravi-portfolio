import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Security Testing",
      skills: [
        "Network Security",
        "Vulnerability Assessment",
        "Penetration Testing",
        "Web App Testing",
        "API Testing",
        "SIEM (Splunk)",
        "Incident Response"
      ]
    },
    {
      category: "Tools & Platforms",
      skills: [
        "Nmap",
        "Wireshark",
        "Burp Suite",
        "Maltego",
        "Kali Linux",
        "Parrot OS",
        "Postman",
        "OWASP ZAP"
      ]
    },
    {
      category: "Programming & Scripting",
      skills: [
        "Python",
        "Bash",
        "JavaScript",
        "HTML/CSS",
        "SQL/MySQL",
        "GraphQL",
        "REST APIs"
      ]
    },
    {
      category: "Specializations",
      skills: [
        "OSINT",
        "Threat Intelligence",
        "BOLA/IDOR",
        "XSS & SQLi",
        "CSRF",
        "Authentication Bypass",
        "Authorization Flaws"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4 mb-12">
            <p className="text-primary terminal-text text-sm tracking-wider">&gt; skills.scan()</p>
            <h2 className="text-4xl lg:text-5xl font-bold glow-text">Technical Arsenal</h2>
            <p className="text-lg text-muted-foreground">
              Tools and technologies I use to secure digital infrastructures
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="bg-card border border-primary/20 rounded-lg p-6 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary terminal-text">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <Badge
                      key={skillIdx}
                      variant="outline"
                      className="bg-muted/50 border-primary/30 hover:bg-primary/10 hover:border-primary transition-all cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { value: "10+", label: "CTF Challenges" },
              { value: "Multiple", label: "Certifications" },
              { value: "Bug Hunter", label: "Active Status" },
              { value: "2026", label: "Graduating" }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-card border border-primary/20 rounded-lg p-6 text-center hover:border-primary/50 transition-all"
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