import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const AnimatedBackground = () => {
  const containerRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(()=>{
    console.log("mounted")
  })
  useEffect(() => {
    const dots = dotsRef.current;
    const ctx = gsap.context(() => {
      // Floating animation
      dots.forEach((dot) => {
        gsap.to(dot, {
          y: "+=20",
          duration: gsap.utils.random(6, 12),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // Cursor interaction
      const handleMove = (e) => {
        dots.forEach((dot) => {
          const rect = dot.getBoundingClientRect();
          const dx = e.clientX - (rect.left + rect.width / 2);
          const dy = e.clientY - (rect.top + rect.height / 2);
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            gsap.to(dot, {
              x: dx * 0.15,
              y: dy * 0.15,
              duration: 0.6,
              ease: "power3.out",
            });
          }
        });
      };

      window.addEventListener("mousemove", handleMove);
      return () => window.removeEventListener("mousemove", handleMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 overflow-hidden pointer-events-none"
    >
      {/* Base */}
      <div className="absolute inset-0  opacity-20" />



      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating dots */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (dotsRef.current[i] = el)}
          className="absolute w-2 h-2  rounded-full bg-primary/60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
};
