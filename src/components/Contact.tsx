import { Mail, MapPin, Phone, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jaswanthsaimaturi19@gmail.com",
      href: "mailto:jaswanthsaimaturi19@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8247060862",
      href: "tel:+918247060862"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Venkata Ramana Colony 3Rd Line Guntur, Andhra Pradesh, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/jaswanthsai1"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/maturi-jaswanth-sai-madhu-mohan"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/_jaswanth__sai?igsh=dzExemF1bHBxZTJ6"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 mb-12 text-center">
            <p className="text-primary terminal-text text-sm tracking-wider">&gt; contact.init()</p>
            <h2 className="text-4xl lg:text-5xl font-bold glow-text">Let's Connect</h2>
            <p className="text-lg text-muted-foreground">
              Interested in collaboration or have a security project? Reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-card border border-primary/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, idx) => (
                    <div key={idx} className="flex items-start gap-4 group">
                      <div className="p-2 bg-primary/10 rounded-lg border border-primary/30 group-hover:bg-primary/20 transition-colors">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-foreground hover:text-primary transition-colors break-all"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-card border border-primary/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-6">Social Profiles</h3>

                {/* FIX: flex-wrap added to avoid clipping */}
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, idx) => (
                    <Button
                      key={idx}
                      variant="outline"
                      size="lg"
                      className="flex-1 min-w-[120px] border-primary/30 hover:bg-primary/10 hover:border-primary transition-all"
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="mr-2 h-5 w-5" />
                        {social.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="space-y-6">
              <div className="bg-card border border-primary/20 rounded-lg p-6 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all">
                <h3 className="text-xl font-semibold mb-4">Open For Opportunities</h3>
                <p className="text-muted-foreground mb-4">
                  I'm currently seeking opportunities in:
                </p>
                <ul className="space-y-2">
                  {[
                    "Network Security Engineer",
                    "Web Penetration Tester",
                    "API Security Specialist",
                    "SOC Analyst",
                    "Bug Bounty Hunter"
                  ].map((role, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-primary">▹</span>
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card border border-primary/20 rounded-lg p-6 terminal-text">
                <p className="text-sm text-muted-foreground mb-2">&gt; status.check()</p>
                <div className="space-y-2 text-sm">
                  <p className="text-primary">● Available for freelance projects</p>
                  <p className="text-primary">● Open to full-time opportunities</p>
                  <p className="text-primary">● Accepting security consultations</p>
                  <p className="text-secondary">● Graduating in 2026</p>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.7)] transition-all"
                asChild
              >
                <a href="mailto:jaswanthsaimaturi19@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Message
                </a>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
