import { useEffect, useState } from "react";

export default function PhotonCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden transition-opacity duration-500"
      aria-hidden="true"
    >
      {/* Soft photon radial spotlight follower */}
      <div
        className="absolute rounded-full transition-transform duration-75 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: "450px",
          height: "450px",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.14) 0%, rgba(14, 165, 233, 0.05) 45%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* Electric cyan cursor core particle */}
      <div
        className="absolute h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_15px_5px_rgba(56,189,248,0.8)] transition-transform duration-75 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}
