import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

import { skills, skillCategories } from "@/data/skills";
import { fadeUp } from "@/animations/fade";
import { staggerContainer } from "@/animations/stagger";
import { scaleHover } from "@/animations/hover";

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) =>
      activeCategory === "all" ||
      skill.category.toLowerCase() === activeCategory.toLowerCase()
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <motion.div
        className="container mx-auto max-w-5xl"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-primary">Skills</span>
        </motion.h2>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <motion.button
              key={category}
              variants={fadeUp}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={fadeUp}
              whileHover="hover"
              className="bg-card p-6 rounded-lg shadow-xs"
              {...scaleHover}
            >
              {/* Skill Title */}
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <motion.div
                  className="bg-primary h-2 rounded-full origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Percentage */}
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
