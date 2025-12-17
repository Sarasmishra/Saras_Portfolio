import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "@/data/socialLinks";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 flex flex-wrap justify-between items-center gap-6">
      {/* Copyright */}
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Saras Mishra. All rights reserved.
      </p>

      {/* Social Links */}
      <div className="flex gap-4 items-center">
        {socialLinks.map((link) => {
          const Icon =
            link.icon === "github"
              ? Github
              : link.icon === "linkedin"
              ? Linkedin
              : Mail;

          return (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              aria-label={link.name}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>

      {/* Back to Top */}
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
