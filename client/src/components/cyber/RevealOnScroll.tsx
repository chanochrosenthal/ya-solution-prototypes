import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "scale";
  delay?: number;
  threshold?: number;
}

export default function RevealOnScroll({
  children,
  className = "",
  direction = "up",
  delay = 0,
  threshold = 0.15,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold, rootMargin: "-50px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const baseStyle: React.CSSProperties = {
    transition: `all 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
  };

  const hiddenStyle: React.CSSProperties = {
    opacity: 0,
    transform:
      direction === "up"
        ? "translateY(30px)"
        : direction === "left"
          ? "translateX(-40px)"
          : direction === "right"
            ? "translateX(40px)"
            : "scale(0.9)",
  };

  const visibleStyle: React.CSSProperties = {
    opacity: 1,
    transform: direction === "scale" ? "scale(1)" : "translate(0, 0)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...baseStyle,
        ...(visible ? visibleStyle : hiddenStyle),
      }}
    >
      {children}
    </div>
  );
}
