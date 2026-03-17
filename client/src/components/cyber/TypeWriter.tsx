import { useEffect, useRef, useState } from "react";

interface TypeWriterProps {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
  cursorColor?: string;
}

export default function TypeWriter({
  text,
  className = "",
  speed = 25,
  startDelay = 800,
  cursorColor = "#22d3ee",
}: TypeWriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true;
          setTimeout(() => setStarted(true), startDelay);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed + Math.random() * 20);
    return () => clearInterval(interval);
  }, [started, text, speed]);

  return (
    <p ref={ref} className={className}>
      {displayed}
      <span
        style={{
          display: "inline-block",
          width: "8px",
          height: "1em",
          backgroundColor: cursorColor,
          verticalAlign: "bottom",
          marginLeft: "4px",
          animation: "blink-cursor 1s step-end infinite",
        }}
      />
    </p>
  );
}
