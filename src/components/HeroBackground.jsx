import { useEffect, useRef } from "react";

export default function HeroBackground() {
  const particlesRef = useRef(null);

  useEffect(() => {
    const container = particlesRef.current;

    if (!container) return;

    const particleCount = 55;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("span");

      particle.className = "hero-particle";

      const size = Math.random() * 2.5 + 1;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${10 + Math.random() * 12}s`;
      particle.style.animationDelay = `${Math.random() * -12}s`;
      particle.style.opacity = `${0.12 + Math.random() * 0.35}`;

      container.appendChild(particle);
      particles.push(particle);
    }

    const handleMouseMove = (event) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;

      const spheres = document.querySelectorAll(".hero-sphere");

      spheres.forEach((sphere, index) => {
        const strength = index === 0 ? 18 : index === 1 ? 12 : 8;

        sphere.style.transform = `
          translate(${x * strength}px, ${y * strength}px)
        `;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      particles.forEach((particle) => {
        particle.remove();
      });
    };
  }, []);

  return (
    <div className="hero-background" aria-hidden="true">
      {/* Gradient spheres */}
      <div className="hero-sphere hero-sphere-one" />
      <div className="hero-sphere hero-sphere-two" />
      <div className="hero-sphere hero-sphere-three" />

      {/* Center glow */}
      <div className="hero-center-glow" />

      {/* Grid */}
      <div className="hero-grid" />

      {/* Particles */}
      <div
        ref={particlesRef}
        className="hero-particles"
      />

      {/* Noise */}
      <div className="hero-noise" />
    </div>
  );
}