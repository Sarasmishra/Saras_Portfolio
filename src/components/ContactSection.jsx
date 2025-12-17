import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MailIcon,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { socialLinks } from "@/data/socialLinks";

gsap.registerPlugin(ScrollTrigger);

export const ContactSection = () => {
  const GOOGLE_SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_URL;

  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  /* ---------------- GSAP ANIMATION ---------------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -120 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: 120 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  /* ---------------- FORM HANDLERS ---------------- */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      toast({
        title: "Message sent!",
        description: "Your message has been received successfully.",
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div ref={leftRef} className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">
                    sarasmishra8100@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-muted-foreground">
                    +91 9752050502
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">
                    Bhopal, Madhya Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link) => {
                  const Icon =
                    link.icon === "linkedin"
                      ? Linkedin
                      : link.icon === "github"
                      ? Github
                      : link.icon === "email"
                      ? MailIcon
                      : Twitch;

                  return (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Icon size={22} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            ref={rightRef}
            className="bg-card p-8 rounded-lg shadow-xs"
          >
            <h3 className="text-2xl font-semibold mb-6">
              Send a Message
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-md border border-input"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-md border border-input"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
                required
                className="w-full px-4 py-3 rounded-md border border-input resize-none"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
