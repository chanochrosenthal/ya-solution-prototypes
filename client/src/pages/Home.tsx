/*
 * Y&A SOLUTION Landing Page Prototype
 * Design: Swiss Precision Tech — neo-Swiss typographic style
 * Font: Space Grotesk (headings) + DM Sans (body)
 * Each section adapts to the active brand variant's color palette.
 */

import { useBrand } from "@/contexts/BrandContext";
import BrandSelector from "@/components/BrandSelector";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Zap,
  BarChart3,
  Globe,
  Code,
  Headphones,
  ChevronRight,
  Check,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Home() {
  const { brand } = useBrand();

  return (
    <div className="min-h-screen font-['DM_Sans']">
      {/* ─── NAVBAR ─── */}
      <nav
        className="fixed top-0 left-0 right-0 z-40 transition-colors duration-500"
        style={{ backgroundColor: brand.navBg }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={brand.logo}
              alt="Y&A Solution"
              className="h-9 w-auto object-contain"
            />
          </div>
          <div
            className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide"
            style={{ color: brand.navText + "CC" }}
          >
            <span className="hover:opacity-100 opacity-70 transition-opacity cursor-pointer">
              Services
            </span>
            <span className="hover:opacity-100 opacity-70 transition-opacity cursor-pointer">
              About
            </span>
            <span className="hover:opacity-100 opacity-70 transition-opacity cursor-pointer">
              Work
            </span>
            <span className="hover:opacity-100 opacity-70 transition-opacity cursor-pointer">
              Contact
            </span>
          </div>
          <button
            className="px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: brand.ctaBg, color: brand.ctaText }}
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${brand.hero})` }}
        />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <motion.p
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.25em] mb-6 font-['Space_Grotesk']"
              style={{
                color:
                  brand.heroTextColor === "light"
                    ? brand.accent
                    : brand.accent,
              }}
            >
              Technology Solutions
            </motion.p>

            <motion.h1
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeUp}
              className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6 font-['Space_Grotesk']"
              style={{
                color:
                  brand.heroTextColor === "light" ? "#FFFFFF" : "#0F172A",
              }}
            >
              Engineering
              <br />
              Tomorrow's
              <br />
              <span style={{ color: brand.accent }}>Digital Edge</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeUp}
              className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
              style={{
                color:
                  brand.heroTextColor === "light"
                    ? "rgba(255,255,255,0.8)"
                    : "rgba(15,23,42,0.7)",
              }}
            >
              We architect scalable, secure, and intelligent systems that
              transform how businesses operate. From strategy to deployment —
              precision at every layer.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeUp}
              className="flex flex-wrap gap-4"
            >
              <button
                className="px-8 py-3.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  backgroundColor: brand.ctaBg,
                  color: brand.ctaText,
                }}
              >
                Start a Project <ArrowRight className="w-4 h-4" />
              </button>
              <button
                className="px-8 py-3.5 rounded-lg text-sm font-semibold border-2 transition-all duration-300 hover:scale-105"
                style={{
                  borderColor:
                    brand.heroTextColor === "light"
                      ? "rgba(255,255,255,0.3)"
                      : "rgba(15,23,42,0.2)",
                  color:
                    brand.heroTextColor === "light" ? "#FFFFFF" : "#0F172A",
                  backgroundColor: "transparent",
                }}
              >
                View Our Work
              </button>
            </motion.div>
          </div>
        </div>

        {/* Section number watermark */}
        <span
          className="absolute bottom-8 right-8 text-[120px] font-bold font-['Space_Grotesk'] leading-none select-none"
          style={{
            color:
              brand.heroTextColor === "light"
                ? "rgba(255,255,255,0.05)"
                : "rgba(0,0,0,0.03)",
          }}
        >
          01
        </span>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-28 transition-colors duration-500" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 mb-20">
            <div className="md:col-span-5">
              <p
                className="text-sm font-semibold uppercase tracking-[0.25em] mb-4 font-['Space_Grotesk']"
                style={{ color: brand.accent }}
              >
                What We Do
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight font-['Space_Grotesk'] tracking-tight">
                Solutions Built
                <br />
                for Scale
              </h2>
            </div>
            <div className="md:col-span-7 flex items-end">
              <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
                We deliver end-to-end technology services that help businesses
                modernize, automate, and grow. Every solution is tailored to
                your unique operational landscape.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Custom Development",
                desc: "Full-stack applications built with modern architectures. APIs, microservices, and cloud-native solutions.",
              },
              {
                icon: Shield,
                title: "Cybersecurity",
                desc: "Comprehensive security audits, penetration testing, and zero-trust architecture implementation.",
              },
              {
                icon: BarChart3,
                title: "Data & Analytics",
                desc: "Transform raw data into actionable intelligence with custom dashboards and ML pipelines.",
              },
              {
                icon: Globe,
                title: "Cloud Infrastructure",
                desc: "Multi-cloud strategy, migration, and optimization. AWS, Azure, and GCP expertise.",
              },
              {
                icon: Zap,
                title: "AI Integration",
                desc: "Embed intelligent automation into your workflows with custom AI models and LLM integration.",
              },
              {
                icon: Headphones,
                title: "Managed Services",
                desc: "24/7 monitoring, incident response, and continuous optimization of your technology stack.",
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i}
                variants={fadeUp}
                className="group p-8 rounded-xl border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 cursor-pointer"
                style={{
                  ["--hover-border" as string]: brand.cardBorder,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    brand.cardBorder + "40";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "#f3f4f6";
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300"
                  style={{ backgroundColor: brand.accentLight }}
                >
                  <service.icon
                    className="w-6 h-6"
                    style={{ color: brand.accent }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-['Space_Grotesk']">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {service.desc}
                </p>
                <div
                  className="mt-6 flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: brand.accent }}
                >
                  Learn more <ChevronRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section number watermark */}
        <div className="max-w-7xl mx-auto px-6 relative">
          <span className="absolute -bottom-8 right-0 text-[120px] font-bold font-['Space_Grotesk'] leading-none text-gray-50 select-none">
            02
          </span>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section
        className="py-16 transition-colors duration-500"
        style={{ backgroundColor: brand.accentDark }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "150+", label: "Projects Delivered" },
              { value: "99.9%", label: "Uptime Guarantee" },
              { value: "40+", label: "Enterprise Clients" },
              { value: "12", label: "Countries Served" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-2"
                  style={{ color: brand.accent }}
                >
                  {stat.value}
                </p>
                <p className="text-sm text-white/60 uppercase tracking-widest font-['Space_Grotesk']">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT / WHY US ─── */}
      <section
        className="py-28 transition-colors duration-500"
        style={{ backgroundColor: brand.sectionBg }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5">
              <p
                className="text-sm font-semibold uppercase tracking-[0.25em] mb-4 font-['Space_Grotesk']"
                style={{ color: brand.accent }}
              >
                Why Y&A Solution
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight font-['Space_Grotesk'] tracking-tight mb-6">
                Precision
                <br />
                Meets Vision
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                We combine deep technical expertise with strategic thinking to
                deliver solutions that don't just work — they transform. Our
                approach is methodical, transparent, and results-driven.
              </p>
              <div className="space-y-4">
                {[
                  "Architecture-first approach to every project",
                  "Dedicated engineering teams with domain expertise",
                  "Transparent timelines and milestone-based delivery",
                  "Post-launch support and continuous optimization",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 shrink-0"
                      style={{ backgroundColor: brand.accent }}
                    >
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="p-8 rounded-2xl col-span-2 transition-colors duration-500"
                  style={{ backgroundColor: brand.accentDark }}
                >
                  <p className="text-white/60 text-sm uppercase tracking-widest font-['Space_Grotesk'] mb-2">
                    Our Mission
                  </p>
                  <p className="text-white text-lg font-medium leading-relaxed">
                    To empower organizations with technology that is as elegant
                    as it is powerful — engineered for today, architected for
                    tomorrow.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100">
                  <p
                    className="text-3xl font-bold font-['Space_Grotesk'] mb-1"
                    style={{ color: brand.accent }}
                  >
                    8+
                  </p>
                  <p className="text-gray-500 text-sm">
                    Years of delivering enterprise-grade solutions
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100">
                  <p
                    className="text-3xl font-bold font-['Space_Grotesk'] mb-1"
                    style={{ color: brand.accent }}
                  >
                    50+
                  </p>
                  <p className="text-gray-500 text-sm">
                    Senior engineers across multiple disciplines
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="py-28 transition-colors duration-500"
        style={{ backgroundColor: brand.accentDark }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p
            className="text-sm font-semibold uppercase tracking-[0.25em] mb-4 font-['Space_Grotesk']"
            style={{ color: brand.accent }}
          >
            Ready to Start?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight font-['Space_Grotesk'] tracking-tight mb-6 max-w-2xl mx-auto">
            Let's Build Something
            <br />
            Exceptional Together
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-lg mx-auto">
            Tell us about your project. We'll respond within 24 hours with a
            tailored strategy proposal.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              className="px-10 py-4 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: brand.ctaBg === brand.accentDark ? "#FFFFFF" : brand.ctaBg, color: brand.ctaBg === brand.accentDark ? brand.accentDark : brand.ctaText }}
            >
              Schedule a Consultation <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-gray-950 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <img
                src={brand.logo}
                alt="Y&A Solution"
                className="h-10 w-auto object-contain mb-4 brightness-0 invert"
              />
              <p className="text-gray-500 text-sm leading-relaxed">
                Engineering precision. Delivering excellence. Your trusted
                technology partner.
              </p>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold uppercase tracking-widest font-['Space_Grotesk'] mb-4">
                Services
              </h4>
              <div className="space-y-3">
                {[
                  "Custom Development",
                  "Cloud Infrastructure",
                  "Cybersecurity",
                  "AI Integration",
                ].map((item) => (
                  <p
                    key={item}
                    className="text-gray-500 text-sm hover:text-gray-300 transition-colors cursor-pointer"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold uppercase tracking-widest font-['Space_Grotesk'] mb-4">
                Company
              </h4>
              <div className="space-y-3">
                {["About Us", "Careers", "Blog", "Contact"].map((item) => (
                  <p
                    key={item}
                    className="text-gray-500 text-sm hover:text-gray-300 transition-colors cursor-pointer"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold uppercase tracking-widest font-['Space_Grotesk'] mb-4">
                Connect
              </h4>
              <div className="space-y-3">
                {["LinkedIn", "GitHub", "Twitter / X", "hello@yasolution.com"].map(
                  (item) => (
                    <p
                      key={item}
                      className="text-gray-500 text-sm hover:text-gray-300 transition-colors cursor-pointer"
                    >
                      {item}
                    </p>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-xs">
              &copy; 2026 Y&A Solution. All rights reserved.
            </p>
            <div className="flex gap-6">
              <span className="text-gray-600 text-xs hover:text-gray-400 transition-colors cursor-pointer">
                Privacy Policy
              </span>
              <span className="text-gray-600 text-xs hover:text-gray-400 transition-colors cursor-pointer">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* ─── BRAND SELECTOR ─── */}
      <BrandSelector />
    </div>
  );
}
