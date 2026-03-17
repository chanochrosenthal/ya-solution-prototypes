/**
 * Navbar - Y&A Solution branded navigation
 * Design: Dark transparent glassmorphism nav, Space Grotesk display font
 * Sticky with backdrop blur, logo on left, links center, CTA right
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/95509065/A6VaLmJCJgb2gb6sz7viix/YA_concept1_geometric_monogram_21251de9.png";

const navLinks = [
  { label: "Lumana AI", href: "/lumana-ai" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-18 md:h-20">
        {/* Logo */}
        <Link href="/">
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src={LOGO_URL}
              alt="Y&A Solution"
              className="h-9 md:h-10 w-auto"
            />
          </motion.div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <motion.span
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                  location === link.href
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
                whileHover={{ y: -1 }}
              >
                {link.label}
                {location === link.href && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#2563EB] rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link href="/lumana-ai">
            <motion.span
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#2563EB] rounded-lg hover:bg-[#1d4ed8] transition-colors glow-blue"
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(37, 99, 235, 0.5)" }}
              whileTap={{ scale: 0.97 }}
            >
              Get Started
            </motion.span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white/80 hover:text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/5"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={link.href}>
                    <span
                      className="block text-lg font-medium text-white/80 hover:text-white py-2"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <Link href="/lumana-ai">
                <span
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-semibold text-white bg-[#2563EB] rounded-lg mt-2"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Started
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
