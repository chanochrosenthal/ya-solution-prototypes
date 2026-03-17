import { useEffect, useRef, useState, useCallback } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

interface ScrambleTextProps {
  text: string;
  className?: string;
  as?: "span" | "div" | "p" | "h1" | "h2" | "h3" | "h4";
  triggerOnView?: boolean;
  delay?: number;
}

export default function ScrambleText({
  text,
  className = "",
  as: Tag = "span",
  triggerOnView = true,
  delay = 0,
}: ScrambleTextProps) {
  const ref = useRef<HTMLElement>(null);
  const [display, setDisplay] = useState(text);
  const hasAnimated = useRef(false);
  const animFrameRef = useRef<number>(0);

  const scramble = useCallback(() => {
    const target = text;
    const length = target.length;
    const totalFrames = 40; // total animation frames
    const revealOrder: number[] = [];

    // Create a shuffled order for revealing characters
    for (let i = 0; i < length; i++) revealOrder.push(i);
    for (let i = revealOrder.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [revealOrder[i], revealOrder[j]] = [revealOrder[j], revealOrder[i]];
    }

    // Each character gets a reveal frame
    const revealAt = new Array(length).fill(0);
    for (let i = 0; i < length; i++) {
      const idx = revealOrder[i];
      // Spread reveals across frames 10 to totalFrames
      revealAt[idx] = Math.floor(10 + (i / length) * (totalFrames - 10));
    }

    let frame = 0;

    function update() {
      const chars: string[] = [];
      let allDone = true;

      for (let i = 0; i < length; i++) {
        if (frame >= revealAt[i]) {
          chars.push(target[i]);
        } else {
          allDone = false;
          if (target[i] === " ") {
            chars.push(" ");
          } else {
            chars.push(CHARS[Math.floor(Math.random() * CHARS.length)]);
          }
        }
      }

      setDisplay(chars.join(""));

      if (!allDone && frame < totalFrames + 5) {
        frame++;
        animFrameRef.current = requestAnimationFrame(update);
      } else {
        // Always force the final correct text
        setDisplay(target);
      }
    }

    animFrameRef.current = requestAnimationFrame(update);
  }, [text]);

  useEffect(() => {
    if (!triggerOnView) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            setTimeout(() => scramble(), delay);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [triggerOnView, delay, scramble]);

  return (
    <Tag ref={ref as any} className={className}>
      {display}
    </Tag>
  );
}
