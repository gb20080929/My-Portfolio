import { useEffect, useRef } from "react";

export default function HeroBackground() {
  const particlesRef = useRef(null);
  const sphereOneRef = useRef(null);
  const sphereTwoRef = useRef(null);
  const sphereThreeRef = useRef(null);

  useEffect(() => {
    const container = particlesRef.current;

    if (!container) return;

    const particleCount = 40;
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

    let mouseX = 0;
    let mouseY = 0;
    let ticking = false;

    const updateSpheres = () => {
      if (sphereOneRef.current) {
        sphereOneRef.current.style.transform = `translate3d(${mouseX * 16}px, ${mouseY * 16}px, 0)`;
      }
      if (sphereTwoRef.current) {
        sphereTwoRef.current.style.transform = `translate3d(${mouseX * 10}px, ${mouseY * 10}px, 0)`;
      }
      if (sphereThreeRef.current) {
        sphereThreeRef.current.style.transform = `translate3d(${mouseX * 6}px, ${mouseY * 6}px, 0)`;
      }
      ticking = false;
    };

    const handleMouseMove = (event) => {
      mouseX = event.clientX / window.innerWidth - 0.5;
      mouseY = event.clientY / window.innerHeight - 0.5;

      if (!ticking) {
        requestAnimationFrame(updateSpheres);
        ticking = true;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

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
      <div ref={sphereOneRef} className="hero-sphere hero-sphere-one" />
      <div ref={sphereTwoRef} className="hero-sphere hero-sphere-two" />
      <div ref={sphereThreeRef} className="hero-sphere hero-sphere-three" />

      {/* Center glow */}
      <div className="hero-center-glow" />

      {/* Grid */}
      <div className="hero-grid" />

      {/* Particles */}
      <div ref={particlesRef} className="hero-particles" />

      {/* Noise */}
      <div className="hero-noise" />
    </div>
  );
}