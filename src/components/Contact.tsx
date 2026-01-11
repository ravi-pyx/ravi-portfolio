import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ravibhaskarmaddu@gmail.com",
      href: "mailto:ravibhaskarmaddu@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6304168694",
      href: "tel:+916304168694",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kandulapuram village, cumbum mandal, prakasam district, Andhra Pradesh",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ravi-pyx",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/ravi_xt9",
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Tint */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="space-y-4 mb-12 text-center">
            <p className="text-primary terminal-text text-sm tracking-wider">
              &gt; contact.init()
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold glow-text">
              Let&apos;s Connect
            </h2>
            <p className="text-lg text-muted-foreground">
              Interested in collaboration or have a security project? Reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* CONTACT INFORMATION */}
            <div className="space-y-6">
              <div className="card-glitch bg-card border p-6 rounded-lg shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-6">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  {contactInfo.map((info, idx) => (
                    <div key={idx} className="flex items-start gap-4 group">
                      <div className="p-2 bg-primary/10 rounded-lg border border-primary/30 group-hover:bg-primary/20 transition-all">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">
                          {info.label}
                        </p>

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

              {/* SOCIAL LINKS */}
              <div className="card-glitch bg-card border p-6 rounded-lg shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-6">
                  Social Profiles
                </h3>

                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[120px]"
                    >
                      <button className="holo w-full py-3 rounded-lg flex items-center justify-center gap-2">
                        <social.icon className="h-5 w-5" />
                        {social.label}
                      </button>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE PANELS */}
            <div className="space-y-6">
              {/* OPPORTUNITIES BOX */}
              <div className="card-glitch bg-card border p-6 rounded-lg shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-4">
                  Open For Opportunities
                </h3>
                <p className="text-muted-foreground mb-4">
                  I'm currently seeking opportunities in:
                </p>

                <ul className="space-y-2">
                  {[
                    "Security Engineer",
                    "Network Security Engineer",
                    "Application Security Engineer",
                    "Cloud Security Engineer",
                    "SOC Analyst",
                  ].map((role, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <span className="text-primary">▹</span>
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* STATUS BOX */}
              <div className="card-glitch bg-card border p-6 rounded-lg shadow-lg transition-all terminal-text">
                <p className="text-sm text-muted-foreground mb-2">
                  &gt; status.check()
                </p>

                <div className="space-y-2 text-sm">
                  <p className="text-primary">● Available for Security Engineer roles</p>
                  <p className="text-primary">● Open to full-time opportunities</p>
                  <p className="text-primary">● Hands-on in Network & Application Security</p>
                  <p className="text-primary">● SOC & Incident Response ready</p>
                  <p className="text-secondary">● Graduating in 2026</p>
                </div>
              </div>

              {/* SEND MESSAGE BUTTON (HOLOGRAM) */}
              <a href="mailto:ravibhaskarmaddu@gmail.com">
                <button className="holo w-full py-4 text-lg rounded-lg flex items-center justify-center gap-2">
                  <Mail className="h-6 w-6" />
                  Send Message
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
