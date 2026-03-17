import { useMemo } from "react";

interface DataParticlesProps {
  count?: number;
}

export default function DataParticles({ count = 40 }: DataParticlesProps) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${Math.random() * 8 + 4}s`,
      delay: `${Math.random() * 5}s`,
      size: `${Math.random() * 2 + 1}px`,
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            width: p.size,
            height: p.size,
            background: "#22d3ee",
            boxShadow: "0 0 10px #22d3ee",
            borderRadius: "50%",
            left: p.left,
            animation: `float-up ${p.duration} linear ${p.delay} infinite`,
            pointerEvents: "none",
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}
