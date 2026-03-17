export default function RadarSweep() {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "1000px",
        height: "1000px",
        borderRadius: "50%",
        background:
          "conic-gradient(from 0deg, transparent 70%, rgba(6,182,212,0.1) 90%, rgba(6,182,212,0.5) 100%)",
        animation: "radar-sweep 4s linear infinite",
        pointerEvents: "none",
        maskImage: "radial-gradient(circle, black 20%, transparent 60%)",
        WebkitMaskImage: "radial-gradient(circle, black 20%, transparent 60%)",
      }}
    />
  );
}
