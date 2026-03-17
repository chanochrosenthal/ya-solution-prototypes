export default function ScannerLine() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "4px",
        background: "#22d3ee",
        boxShadow: "0 0 20px #22d3ee, 0 0 40px #22d3ee",
        opacity: 0.8,
        zIndex: 10,
        animation: "scanline-move 4s linear infinite",
        pointerEvents: "none",
      }}
    />
  );
}
