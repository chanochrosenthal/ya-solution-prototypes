import { useEffect, useRef, useState } from "react";

interface ScrollTypeWriterProps {
  texts: string[];
  className?: string;
  speed?: number;
  startDelay?: number;
  cursorColor?: string;
  paragraphGap?: string;
}

/**
 * Types out multiple paragraphs sequentially when scrolled into view.
 * Each paragraph starts typing after the previous one finishes.
 */
export default function ScrollTypeWriter({
  texts,
  className = "",
  speed = 12,
  startDelay = 300,
  cursorColor = "#22d3ee",
  paragraphGap = "mt-4",
}: ScrollTypeWriterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasTriggered = useRef(false);
  const [started, setStarted] = useState(false);
  const [displayedTexts, setDisplayedTexts] = useState<string[]>(texts.map(() => ""));
  const [activeParagraph, setActiveParagraph] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Trigger on scroll into view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true;
          setTimeout(() => setStarted(true), startDelay);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [startDelay]);

  // Type out each paragraph sequentially
  useEffect(() => {
    if (!started || activeParagraph >= texts.length) {
      if (activeParagraph >= texts.length) setIsComplete(true);
      return;
    }

    const currentText = texts[activeParagraph];
    let charIndex = 0;

    const interval = setInterval(() => {
      if (charIndex < currentText.length) {
        charIndex++;
        setDisplayedTexts((prev) => {
          const next = [...prev];
          next[activeParagraph] = currentText.slice(0, charIndex);
          return next;
        });
      } else {
        clearInterval(interval);
        // Small pause before next paragraph
        setTimeout(() => {
          setActiveParagraph((prev) => prev + 1);
        }, 200);
      }
    }, speed + Math.random() * 8);

    return () => clearInterval(interval);
  }, [started, activeParagraph, texts, speed]);

  return (
    <div ref={containerRef}>
      {texts.map((_, i) => (
        <p
          key={i}
          className={`text-lg leading-relaxed ${i > 0 ? paragraphGap : ""} ${className}`}
          style={{
            color: "#94a3b8",
            minHeight: displayedTexts[i] ? undefined : "0px",
            opacity: i <= activeParagraph || isComplete ? 1 : 0.15,
            transition: "opacity 0.3s ease",
          }}
        >
          {displayedTexts[i]}
          {/* Show cursor only on the active paragraph */}
          {i === activeParagraph && !isComplete && (
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
          )}
        </p>
      ))}
    </div>
  );
}
