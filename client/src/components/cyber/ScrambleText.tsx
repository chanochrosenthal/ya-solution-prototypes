import { useEffect, useRef, useState } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

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
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [triggerOnView, delay]);

  function scramble() {
    const target = text;
    const length = target.length;
    const queue: { from: string; to: string; start: number; end: number }[] = [];

    for (let i = 0; i < length; i++) {
      const start = Math.floor(Math.random() * 30);
      const end = start + Math.floor(Math.random() * 30);
      queue.push({ from: "", to: target[i], start, end });
    }

    let frame = 0;
    function update() {
      let output = "";
      let complete = 0;
      for (let i = 0; i < queue.length; i++) {
        const { to, start, end } = queue[i];
        if (frame >= end) {
          complete++;
          output += to;
        } else if (frame >= start) {
          output += CHARS[Math.floor(Math.random() * CHARS.length)];
        } else {
          output += "";
        }
      }
      setDisplay(output);
      if (complete < queue.length) {
        frame++;
        requestAnimationFrame(update);
      } else {
        setDisplay(target);
      }
    }
    requestAnimationFrame(update);
  }

  return (
    <Tag ref={ref as any} className={className}>
      {display}
    </Tag>
  );
}
