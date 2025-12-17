import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Rocket,
  Layers,
} from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const iconFloat = {
  hidden: { y: 0 },
  visible: {
    y: [-2, 2, -2],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const JourneySection = () => {
  return (
    <section id="journey" className="py-28 px-6 relative">
      <div className="container max-w-6xl mx-auto space-y-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Journey <span className="text-primary">So Far</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            How I’ve grown, what I’ve built, and the direction I’m moving in as a
            frontend-focused engineer.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Education */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="bg-card border border-border rounded-3xl p-8 transition-shadow hover:shadow-lg"
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                variants={iconFloat}
                initial="hidden"
                animate="visible"
                className="p-3 rounded-xl bg-primary/10"
              >
                <GraduationCap className="text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <p className="text-muted-foreground">
              B.Tech in Computer Science with a strong foundation in programming,
              problem-solving, and modern web development concepts.
            </p>
          </motion.div>

          {/* Learning Focus */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="bg-card border border-border rounded-3xl p-8 transition-shadow hover:shadow-lg"
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                variants={iconFloat}
                initial="hidden"
                animate="visible"
                className="p-3 rounded-xl bg-primary/10"
              >
                <Code2 className="text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold">Learning Focus</h3>
            </div>
            <p className="text-muted-foreground">
            Deeply focused on building scalable MERN stack applications with React, Tailwind CSS, backend APIs, database design, and polished user interfaces.
            </p>
          </motion.div>

          {/* Major Projects */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="bg-card border border-border rounded-3xl p-8 transition-shadow hover:shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                variants={iconFloat}
                initial="hidden"
                animate="visible"
                className="p-3 rounded-xl bg-primary/10"
              >
                <Layers className="text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold">Major Projects</h3>
            </div>

            <div className="space-y-4">
              <div className="border border-border rounded-xl p-4">
                <p className="font-medium">Learning Management System</p>
                <p className="text-sm text-muted-foreground">
                  Role-based platform for managing courses and users.
                </p>
              </div>

              <div className="border border-border rounded-xl p-4">
                <p className="font-medium">BookShow</p>
                <p className="text-sm text-muted-foreground">
                Role-based MERN library system with reader and admin management dashboards.
                </p>
              </div>

              <div className="border border-border rounded-xl p-4">
                <p className="font-medium">Blog Platform (Appwrite)</p>
                <p className="text-sm text-muted-foreground">
                  Blogging platform using Appwrite as Backend-as-a-Service.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Current Direction */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="bg-card border border-border rounded-3xl p-8 transition-shadow hover:shadow-lg"
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                variants={iconFloat}
                initial="hidden"
                animate="visible"
                className="p-3 rounded-xl bg-primary/10"
              >
                <Rocket className="text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold">Current Direction</h3>
            </div>
            <p className="text-muted-foreground mb-5">
            Strengthening MERN stack development with hands-on project work.
</p>
<p className="text-muted-foreground mb-5">Practicing and applying Data Structures & Algorithms for problem-solving.
</p>
<p className="text-muted-foreground mb-5">Preparing for placements while improving communication and soft skills.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
