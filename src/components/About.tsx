import { Shield, Code, Bug, Network } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Security First",
      description: "Expert in vulnerability assessment and penetration testing"
    },
    {
      icon: Code,
      title: "Full Stack Security",
      description: "Web & API security testing with comprehensive coverage"
    },
    {
      icon: Bug,
      title: "Bug Hunter",
      description: "Active researcher finding critical vulnerabilities"
    },
    {
      icon: Network,
      title: "Network Security",
      description: "Skilled in network protocols and infrastructure security"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4 mb-12">
            <p className="text-primary terminal-text text-sm tracking-wider">&gt; about.exe</p>
            <h2 className="text-4xl lg:text-5xl font-bold glow-text">Who I Am</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="bg-card border border-primary/20 rounded-lg p-6 shadow-[0_0_20px_hsl(var(--primary)/0.1)]">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  I'm <span className="text-primary font-semibold">Maturi Jaswanth Sai Madhu Mohan</span>, 
                  a passionate cybersecurity professional from Guntur, Andhra Pradesh. Currently pursuing 
                  B.Tech in Computer Science with specialization in Cybersecurity at Dhanalakshmi 
                  Srinivasan University.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  My expertise spans across network security, web application penetration testing, 
                  and API security. I've successfully completed multiple cybersecurity internships and 
                  solved over 10 CTF challenges, constantly sharpening my skills in the field.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  As an active bug hunter, I've discovered and reported vulnerabilities across various 
                  platforms, including findings accepted by major tech companies like Google. My goal is 
                  to contribute to building more secure digital infrastructures.
                </p>
              </div>

              <div className="bg-card border border-primary/20 rounded-lg p-6 terminal-text">
                <p className="text-sm text-muted-foreground mb-2">&gt; education --list</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-primary">B.Tech Computer Science & Cybersecurity</p>
                    <p className="text-sm text-muted-foreground">Dhanalakshmi Srinivasan University | 2022-2026</p>
                  </div>
                  <div>
                    <p className="text-foreground">Intermediate</p>
                    <p className="text-sm text-muted-foreground">Narayana Junior College | 2020-2022</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-card border border-primary/20 rounded-lg p-6 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] transition-all group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <item.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
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