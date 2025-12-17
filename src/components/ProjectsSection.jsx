import { ExternalLink, Github } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";


import { projects } from "@/data/projects";

export const ProjectsSection = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        let fromX = 0;
        let fromY = 0;

        // Direction logic
        if (index % 3 === 0) fromX = -120; // left
        if (index % 3 === 1) fromY = 120; // bottom
        if (index % 3 === 2) fromX = 120; // right

        gsap.fromTo(
          card,
          { opacity: 0, x: fromX, y: fromY },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-card rounded-xl shadow-xs border border-border overflow-hidden"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>

                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>


              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
