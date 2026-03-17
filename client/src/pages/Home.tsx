/**
 * DESIGN: Cyberpunk Terminal Home Page
 * Deep space black + cyan accents, terminal naming, clip-path buttons
 * Brief landing that directs to /lumana-ai as the main offering
 */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DataParticles from "@/components/cyber/DataParticles";
import GlitchText from "@/components/cyber/GlitchText";
import TypeWriter from "@/components/cyber/TypeWriter";
import ScrambleText from "@/components/cyber/ScrambleText";
import SpotlightCard from "@/components/cyber/SpotlightCard";
import RevealOnScroll from "@/components/cyber/RevealOnScroll";
import ScannerLine from "@/components/cyber/ScannerLine";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Shield, Cpu, Cloud, Eye, ChevronRight } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/95509065/A6VaLmJCJgb2gb6sz7viix/lumana_hero_command_center-Cv2ArTrtGKeGMoxxSuEXKV.webp";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#020617" }}>
      <Navbar />
      <div className="scanlines" />

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ paddingTop: "80px" }}>
        <DataParticles count={35} />
        <div className="grid-pattern absolute inset-0" />

        {/* Glow orbs */}
        <div className="absolute pointer-events-none" style={{ top: "15%", right: "25%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(60px)", animation: "pulse-glow 4s ease-in-out infinite" }} />
        <div className="absolute pointer-events-none" style={{ bottom: "25%", left: "10%", width: "350px", height: "350px", background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(50px)", animation: "pulse-glow 4s ease-in-out infinite 2s" }} />

        <div className="container relative z-10 pt-12">
          <div style={{ maxWidth: "850px" }}>
            {/* Badge */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-8"
              style={{ padding: "6px 16px", border: "1px solid rgba(14,165,233,0.3)", background: "rgba(6,182,212,0.05)", backdropFilter: "blur(10px)", clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)" }}>
              <div style={{ width: "6px", height: "6px", background: "#22d3ee", boxShadow: "0 0 10px #22d3ee", animation: "pulse-glow 2s infinite" }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#06b6d4" }}>
                Technology Solutions Partner
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.05 }}>
              <GlitchText text="Engineering" className="block" as="span" />
              <br />
              Tomorrow's
              <br />
              <span className="text-glow" style={{ color: "#22d3ee" }}>Digital Edge</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6" style={{ maxWidth: "540px", borderLeft: "2px solid #06b6d4", paddingLeft: "16px" }}>
              <TypeWriter
                text="We architect scalable, secure, and intelligent systems that transform how businesses operate. From strategy to deployment — precision at every layer."
                className="text-lg leading-relaxed"
                speed={18}
              />
            </motion.div>

            {/* Buttons */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4">
              <Link href="/lumana-ai" className="btn-cyber-primary">
                Explore Lumana AI <ChevronRight size={16} />
              </Link>
              <button className="btn-cyber-ghost">VIEW_PORTFOLIO.exe</button>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#64748b" }}>SCROLL</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
              className="w-5 h-8 flex items-start justify-center pt-1.5"
              style={{ border: "1px solid rgba(14,165,233,0.2)" }}>
              <div className="w-1 h-2 bg-[#22d3ee]" style={{ boxShadow: "0 0 6px #22d3ee" }} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ SOLUTIONS ═══ */}
      <section className="py-32 relative" id="services">
        <div className="container">
          <RevealOnScroll className="mb-16">
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#06b6d4", marginBottom: "16px" }}>
              <ScrambleText text="SYS.SOLUTIONS" />
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Solutions Built<br />for <span className="text-glow" style={{ color: "#22d3ee" }}>Scale</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Eye, title: "AI Video Intelligence", desc: "Enterprise-grade AI video security powered by Lumana. Transform any camera into an intelligent agent.", color: "#22d3ee", link: "/lumana-ai" },
              { icon: Shield, title: "Cybersecurity", desc: "Zero-trust architecture and end-to-end encryption to protect your most critical assets.", color: "#60a5fa", link: null },
              { icon: Cloud, title: "Cloud Infrastructure", desc: "Hybrid-cloud solutions that scale with your business. Reliable, fast, and always available.", color: "#8b5cf6", link: null },
              { icon: Cpu, title: "AI Integration", desc: "Custom AI solutions that automate workflows and generate actionable insights from your data.", color: "#34d399", link: null },
            ].map((item, i) => {
              const Icon = item.icon;
              const card = (
                <SpotlightCard className="glass p-8 h-full flex flex-col">
                  <Icon size={28} className="mb-6" style={{ color: item.color }} />
                  <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "#94a3b8" }}>{item.desc}</p>
                  {item.link && (
                    <div className="flex items-center gap-2 mt-6"
                      style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", color: "#22d3ee" }}>
                      Load Module <ChevronRight size={14} />
                    </div>
                  )}
                </SpotlightCard>
              );
              return (
                <RevealOnScroll key={i} delay={i * 0.1}>
                  {item.link ? <Link href={item.link}>{card}</Link> : card}
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ LUMANA FEATURE BANNER ═══ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 30% 50%, rgba(6,182,212,0.08), transparent 60%)" }} />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll direction="left">
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#06b6d4", marginBottom: "16px" }}>
                <ScrambleText text="SYS.FEATURED_SOLUTION" />
              </div>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
                Lumana AI<br /><span className="text-glow" style={{ color: "#22d3ee" }}>Video Intelligence</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed" style={{ color: "#94a3b8", maxWidth: "480px" }}>
                The world's first video intelligence agent. Transform any camera into a continuously learning AI agent with perception, reasoning, and real-time action capabilities.
              </p>
              <Link href="/lumana-ai" className="btn-cyber-primary mt-8 inline-flex">
                Learn More <ChevronRight size={16} />
              </Link>
            </RevealOnScroll>

            <RevealOnScroll direction="right">
              <div className="img-tech-container glow-cyan">
                <div className="img-tech-inner">
                  <ScannerLine />
                  <img src={HERO_BG} alt="Lumana AI Command Center" />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
