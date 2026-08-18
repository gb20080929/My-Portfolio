import { useEffect, useRef } from "react";

export default function PhotonCursor() {
  const spotlightRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let animationFrameId = null;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const render = () => {
      // Smooth lerp interpolation for 60-120fps motion without main-thread jank
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;

      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
      aria-hidden="true"
    >
      {/* Soft photon radial spotlight follower */}
      <div
        ref={spotlightRef}
        className="absolute h-[420px] w-[420px] rounded-full will-change-transform"
        style={{
          left: 0,
          top: 0,
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(14, 165, 233, 0.04) 45%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* Electric cyan cursor core particle */}
      <div
        ref={dotRef}
        className="absolute h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_4px_rgba(56,189,248,0.7)] will-change-transform"
        style={{
          left: 0,
          top: 0,
        }}
      />
    </div>
  );
}
