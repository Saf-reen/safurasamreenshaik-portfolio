import { Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="py-8 px-6 border-t border-border/50 text-center bg-background">
    <div className="flex justify-center gap-6 mb-8">
      {[
        { Icon: Linkedin, href: "https://linkedin.com/in/your-profile", label: "LinkedIn" },
        { Icon: Mail, href: "mailto:safurasamreenshaik@gmail.com", label: "Email" },
        { Icon: Twitter, href: "https://twitter.com/your-handle", label: "Twitter" },
      ].map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground/40 hover:text-peach hover:scale-110 transition-all duration-500"
          title={label}
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
    <p className="text-xs tracking-widest text-muted-foreground/60 uppercase font-body">
      © {new Date().getFullYear()} Safura Samreen. All rights reserved.
    </p>
  </footer>
);

export default Footer;
