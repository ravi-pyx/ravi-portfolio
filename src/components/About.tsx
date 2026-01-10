import { Shield, Server, Activity, AlertTriangle } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Application Security",
      description: "Securing web and API applications through secure design, testing, and remediation of vulnerabilities.",
    },
    {
      icon: Server,
      title: "Infrastructure Security",
      description: "Designing and maintaining secure servers, cloud environments, and system configurations.",
    },
    {
      icon: Activity,
      title: "Security Monitoring",
      description: "Detecting threats using logging, SIEM, and continuous monitoring to respond to incidents quickly.",
    },
    {
      icon: AlertTriangle,
      title: "Risk & Vulnerability Management",
      description: "Identifying, prioritizing, and mitigating security risks across applications and infrastructure.",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="space-y-4 mb-12">
            <p className="text-primary terminal-text text-sm tracking-wider">
              &gt; about.exe
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold glow-text">
              Who I Am
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* LEFT SIDE — ABOUT DESCRIPTION */}
            <div className="space-y-6">
              <div className="card-glitch bg-card border p-6 rounded-lg shadow-lg transition-all">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  I’m <span className="text-primary font-semibold">Maddu Ravi Bhaskar</span>, a dedicated Security Engineer from Kandulapuram Village, Cumbum Mandal, Prakasam District, Andhra Pradesh. I am currently pursuing a B.Tech in Computer Science with a specialization in Cybersecurity at Dhanalakshmi Srinivasan University.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  As a Security Engineer, I focus on designing, implementing, and maintaining secure systems by applying strong principles of network security, application security, and API security. My work involves risk assessment, vulnerability analysis, security monitoring, and incident response, ensuring systems remain resilient against modern cyber threats. I am committed to building secure-by-design architectures and continuously improving security posture across applications and infrastructure.
                </p>
              </div>

              {/* EDUCATION SECTION */}
              <div className="card-glitch bg-card border p-6 rounded-lg shadow-lg transition-all terminal-text">
                <p className="text-sm text-muted-foreground mb-2">
                  &gt; education --list
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="text-primary font-semibold">
                      Dhanalakshmi Srinivasan University
                    </p>
                    <p className="text-sm text-muted-foreground">
                      School of Engineering and Technology
                    </p>
                    <p className="text-xs text-muted-foreground">2022 - 2026</p>
                  </div>

                  <div className="border-t border-border/50 pt-3">
                    <p className="text-foreground font-semibold">
                      Vishaka Defence Academy
                    </p>
                    <p className="text-xs text-muted-foreground">2020 - 2022</p>
                  </div>

                  <div className="border-t border-border/50 pt-3">
                    <p className="text-foreground font-semibold">
                      Alpha High School
                    </p>
                    <p className="text-xs text-muted-foreground">
                      2020
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE — HIGHLIGHT CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  style={{ animationDelay: `${index * 120}ms` }}
                  className="card-glitch bg-card border p-6 rounded-lg shadow-lg transition-all"
                >
                  <item.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
