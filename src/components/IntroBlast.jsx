import { useEffect, useState } from "react";

export default function IntroBlast() {
  const [active, setActive] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Start fading out shockwave after 1.6s
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 1600);

    // Complete removal after 2.6s
    const removeTimer = setTimeout(() => {
      setActive(false);
    }, 2600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!active) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#020617] transition-opacity duration-1000 ease-out ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      {/* Outer ambient energy wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.25)_0%,_rgba(2,6,23,0.95)_70%)]" />

      {/* Primary Nuclear Detonation Core */}
      <div className="animate-nuclear-core relative flex h-32 w-32 items-center justify-center rounded-full bg-cyan-300 shadow-[0_0_120px_60px_rgba(0,240,255,0.9)]">
        {/* Inner white-hot photon center */}
        <div className="h-16 w-16 rounded-full bg-white shadow-[0_0_80px_40px_rgba(255,255,255,1)]" />
      </div>

      {/* Expanding Shockwave Ring 1 */}
      <div className="animate-nuclear-ring-1 absolute h-[600px] w-[600px] rounded-full border-2 border-cyan-400/80 shadow-[0_0_100px_rgba(56,189,248,0.8)]" />

      {/* Expanding Shockwave Ring 2 */}
      <div className="animate-nuclear-ring-2 absolute h-[900px] w-[900px] rounded-full border border-sky-300/60 shadow-[0_0_140px_rgba(96,165,250,0.6)]" />

      {/* High Intensity Flash Overlay */}
      <div className="animate-nuclear-flash pointer-events-none absolute inset-0 bg-cyan-200/20 mix-blend-overlay" />
    </div>
  );
}
