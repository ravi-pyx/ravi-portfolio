import { Shield, Code, Bug, Network } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Security First",
      description: "Expert in vulnerability assessment and penetration testing",
    },
    {
      icon: Code,
      title: "Full Stack Developer",
      description: "Building secure, scalable web and mobile applications",
    },
    {
      icon: Bug,
      title: "Bug Hunter",
      description: "Active researcher finding critical vulnerabilities",
    },
    {
      icon: Network,
      title: "Network Security",
      description: "Skilled in network protocols and infrastructure security",
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
                  I'm{" "}
                  <span className="text-primary font-semibold">
                    Maturi Jaswanth Sai Madhu Mohan
                  </span>
                  , a passionate cybersecurity professional from Guntur,
                  Andhra Pradesh. Currently pursuing B.Tech in Computer Science
                  with specialization in Cybersecurity at Dhanalakshmi
                  Srinivasan University.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  My expertise spans across network security, web application
                  penetration testing, and API security. I'm also skilled as an{" "}
                  <span className="text-primary font-semibold">
                    App Developer
                  </span>{" "}
                  and{" "}
                  <span className="text-primary font-semibold">
                    Full Stack Developer
                  </span>
                  , building secure and scalable applications.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  As an active bug hunter, I've discovered and reported
                  vulnerabilities across various platforms, including findings
                  accepted by major tech companies like Google.
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
                      B.Tech Computer Science & Cybersecurity
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Dhanalakshmi Srinivasan University
                    </p>
                    <p className="text-xs text-muted-foreground">2022 - 2026</p>
                  </div>

                  <div className="border-t border-border/50 pt-3">
                    <p className="text-foreground font-semibold">
                      Intermediate (12th)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Narayana Junior College
                    </p>
                    <p className="text-xs text-muted-foreground">2020 - 2022</p>
                  </div>

                  <div className="border-t border-border/50 pt-3">
                    <p className="text-foreground font-semibold">
                      Schooling (10th)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Bhashyam Public School
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Completed 2020
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
