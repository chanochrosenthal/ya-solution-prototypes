import { useState } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: "span" | "div" | "h1" | "h2" | "h3";
}

export default function GlitchText({ text, className = "", as: Tag = "span" }: GlitchTextProps) {
  const [hovering, setHovering] = useState(false);

  return (
    <Tag
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      style={{ cursor: "crosshair" }}
    >
      {text}
      {hovering && (
        <>
          <span
            aria-hidden
            className="absolute top-0 left-[3px] opacity-90 pointer-events-none"
            style={{
              color: "#22d3ee",
              animation: "glitch-1 0.2s linear infinite",
            }}
          >
            {text}
          </span>
          <span
            aria-hidden
            className="absolute top-0 left-[-3px] opacity-90 pointer-events-none"
            style={{
              color: "#8b5cf6",
              animation: "glitch-2 0.3s linear infinite",
            }}
          >
            {text}
          </span>
        </>
      )}
    </Tag>
  );
}
