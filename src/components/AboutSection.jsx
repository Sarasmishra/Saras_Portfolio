import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

import { aboutContent } from "@/data/about";
import { fadeUp } from "@/animations/fade";
import { slideLeft, slideRight } from "@/animations/slide";
import { staggerContainer } from "@/animations/stagger";
import { scaleHover } from "@/animations/hover";

export const AboutSection = () => {
  const { heading, intro, description, highlights } = aboutContent;
  const { toast } = useToast();

  const getIcon = (icon) => {
    switch (icon) {
      case "code":
        return <Code className="h-6 w-6 text-primary" />;
      case "user":
        return <User className="h-6 w-6 text-primary" />;
      case "briefcase":
        return <Briefcase className="h-6 w-6 text-primary" />;
      default:
        return null;
    }
  };

  return (
    <section id="about" className="py-24 px-4 relative">
      <motion.div
        className="container mx-auto max-w-5xl"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Heading */}
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          About <span className="text-primary">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">{heading}</h3>

            <p className="text-muted-foreground">{intro}</p>
            <p className="text-muted-foreground">{description}</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <motion.a
                href="#contact"
                className="cosmic-button"
                whileHover="hover"
                {...scaleHover}
              >
                Get In Touch
              </motion.a>

              <motion.a
  href="/SARAS_MISHRA_Resume.pdf"
  download
  onClick={() =>
    toast({
      title: "Download started",
      description: "Your CV is being downloaded.",
    })
  }
  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
  whileHover="hover"
  {...scaleHover}
>
  Download CV
</motion.a>


            </div>
          </motion.div>

          {/* RIGHT HIGHLIGHTS */}
          <motion.div
            className="grid grid-cols-1 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {highlights.map((item) => (
              <motion.div
                key={item.id}
                variants={slideRight}
                whileHover="hover"
                className="gradient-border p-6"
                {...scaleHover}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    {getIcon(item.icon)}
                  </div>

                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
