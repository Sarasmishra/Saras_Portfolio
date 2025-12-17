import { gsap } from "gsap";

export const heroTimeline = (elements) => {
  if (
    !elements.greeting ||
    !elements.firstName ||
    !elements.lastName ||
    !elements.tagline ||
    !elements.cta
  )
    return;

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(elements.greeting, {
      opacity: 0,
      y: 20,
      duration: 0.4,
    })
      .from(
        elements.firstName,
        {
          y: 60,
          opacity: 0,
          duration: 0.6,
        },
        "+=0.1"
      )
      .from(
        elements.lastName,
        {
          y: 60,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.3"
      )
      .from(
        elements.tagline,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
        },
        "-=0.2"
      )
      .from(
        elements.cta,
        {
          opacity: 0,
          scale: 0.9,
          duration: 0.4,
        },
        "-=0.2"
      );
  });

  return ctx;
};
