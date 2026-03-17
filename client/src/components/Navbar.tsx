/**
 * DESIGN: Cyberpunk Terminal Navbar
 * Numbered nav items (01_LUMANA_AI), clip-path CTA, glass background
 * Logo sized prominently, INIT_SYSTEM scrolls to #cta or navigates to /lumana-ai#cta
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

const LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/95509065/A6VaLmJCJgb2gb6sz7viix/YA_concept1_geometric_monogram_21251de9.png";

const navLinks = [
  { href: "/lumana-ai", label: "01_LUMANA_AI" },
  { href: "/lumana-ai#platform", label: "02_PLATFORM" },
  { href: "/lumana-ai#capabilities", label: "03_CAPABILITIES" },
  { href: "/lumana-ai#industries", label: "04_INDUSTRIES" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location, navigate] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchorClick = (href: string) => {
    setMobileOpen(false);
    const hash = href.split("#")[1];
    if (hash && location.startsWith("/lumana-ai")) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  };

  const handleInitSystem = () => {
    setMobileOpen(false);
    // If on home page, scroll to contact section; otherwise navigate to contact section
    const ctaEl = document.getElementById("cta");
    if (ctaEl) {
      ctaEl.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to lumana-ai page which has the CTA
      navigate("/lumana-ai");
      setTimeout(() => {
        const el = document.getElementById("cta");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(2,6,23,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(14,165,233,0.1)" : "1px solid transparent",
      }}
    >
      <div className="container flex items-center justify-between h-20 md:h-24">
        {/* Logo — click scrolls to top, or navigates home */}
        <button
          onClick={() => {
            if (location === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              navigate("/");
              setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
            }
          }}
          className="flex items-center gap-3"
          aria-label="Back to top"
        >
          <img src={LOGO} alt="Y&A Solution" className="h-14 md:h-16 w-auto" />
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => handleAnchorClick(link.href)}
              className="relative px-4 py-2 text-[13px] font-medium transition-all duration-300 hover:text-[#22d3ee]"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "0.05em",
                color: location === "/lumana-ai" && link.href.startsWith("/lumana-ai") ? "#94a3b8" : "#64748b",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA — functional: scrolls to contact/CTA */}
        <div className="hidden md:block">
          <button
            onClick={handleInitSystem}
            className="btn-cyber-primary"
            style={{ padding: "10px 20px", fontSize: "12px" }}
          >
            INIT_SYSTEM
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-[2px] transition-all duration-300 origin-center"
            style={{
              background: "#22d3ee",
              transform: mobileOpen ? "rotate(45deg) translate(3px, 3px)" : "none",
            }}
          />
          <span
            className="block w-5 h-[2px] transition-all duration-300"
            style={{ background: "#22d3ee", opacity: mobileOpen ? 0 : 1 }}
          />
          <span
            className="block w-5 h-[2px] transition-all duration-300 origin-center"
            style={{
              background: "#22d3ee",
              transform: mobileOpen ? "rotate(-45deg) translate(3px, -3px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
            style={{
              background: "rgba(2,6,23,0.95)",
              backdropFilter: "blur(20px)",
              borderTop: "1px solid rgba(14,165,233,0.1)",
            }}
          >
            <div className="container py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => handleAnchorClick(link.href)}
                    className="block px-4 py-3 text-[13px] font-medium transition-colors hover:text-[#22d3ee] hover:bg-[rgba(14,165,233,0.05)]"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      letterSpacing: "0.05em",
                      color: "#64748b",
                      borderLeft: "2px solid transparent",
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-4 px-4">
                <button
                  onClick={handleInitSystem}
                  className="btn-cyber-primary w-full justify-center"
                  style={{ padding: "12px 20px", fontSize: "12px" }}
                >
                  INIT_SYSTEM
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
