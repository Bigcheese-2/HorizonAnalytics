import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Roadmap", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Press", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "Guides", href: "#" },
        { name: "Help Center", href: "#" },
        { name: "Community", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "License", href: "#" }
      ]
    }
  ];
  
  const socialLinks = [
    { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
    { icon: <Facebook size={18} />, href: "#", label: "Facebook" },
    { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
    { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
    { icon: <Github size={18} />, href: "#", label: "GitHub" }
  ];

  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Horizon
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-xs">
              Transforming the digital landscape with innovative solutions for businesses of all sizes.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((group, i) => (
            <div key={i}>
              <h4 className="font-medium text-foreground mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {year} Horizon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}