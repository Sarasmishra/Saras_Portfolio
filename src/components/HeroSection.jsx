import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { heroContent } from "@/data/hero";
import { heroTimeline } from "@/gsap/heroTimeline";
import { scaleHover } from "@/animations/hover";

export const HeroSection = () => {
  const greetingRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const taglineRef = useRef(null);
  const ctaRef = useRef(null);
  const visualRef = useRef(null);

  const { greeting, firstName, lastName, tagline, ctaText, ctaLink } =
    heroContent;

  useEffect(() => {
    const ctx = heroTimeline({
      greeting: greetingRef.current,
      firstName: firstNameRef.current,
      lastName: lastNameRef.current,
      tagline: taglineRef.current,
      cta: ctaRef.current,
      visual: visualRef.current,
    });

    return () => ctx && ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen px-6 md:px-12 flex items-center overflow-hidden"
    >
      <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT — TEXT CONTENT */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span ref={greetingRef} className="block text-muted-foreground">
              {greeting}
            </span>

            <span className="block">
              <span
                ref={firstNameRef}
                className="inline-block text-primary mr-2"
              >
                {firstName}
              </span>
              <span
                ref={lastNameRef}
                className="inline-block text-gradient"
              >
                {lastName}
              </span>
            </span>
          </h1>

          <p
            ref={taglineRef}
            className="text-lg md:text-xl text-muted-foreground max-w-xl"
          >
            {tagline}
          </p>

          <motion.div
            ref={ctaRef}
            whileHover="hover"
            {...scaleHover}
            className="pt-2"
          >
            <a href={ctaLink} className="cosmic-button">
              {ctaText}
            </a>
          </motion.div>
        </div>

        {/* RIGHT — VISUAL ACCENT */}
        <div
          ref={visualRef}
          className="relative hidden md:flex justify-center items-center"
        >
          <div className="w-64 h-64 rounded-full bg-primary/20 blur-3xl absolute" />
          <div className="w-40 h-40 rounded-full bg-primary/40 blur-2xl absolute animate-pulse-subtle" />
          <div className="relative text-6xl font-bold text-primary/80">
            &lt;/&gt;
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-sm text-muted-foreground mb-2">
          Scroll
        </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </motion.div>
    </section>
  );
};
