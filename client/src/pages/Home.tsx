/**
 * DESIGN: Cyberpunk Terminal Home Page — Full Sections
 * Deep space black + cyan accents, terminal naming, clip-path buttons
 * Sections: Hero, About, Solutions, Why Choose Us, Featured (Lumana), Stats, Testimonials, CTA, Footer
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
import RadarSweep from "@/components/cyber/RadarSweep";
import { useCountUp } from "@/hooks/useCountUp";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Shield, Cpu, Cloud, Eye, ChevronRight, Target, Zap, Users,
  CheckCircle2, ArrowRight, Star, Quote, Layers, Lock, BarChart3,
} from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/95509065/A6VaLmJCJgb2gb6sz7viix/lumana_hero_command_center-Cv2ArTrtGKeGMoxxSuEXKV.webp";
const AI_VISION = "https://d2xsxph8kpxj0f.cloudfront.net/95509065/A6VaLmJCJgb2gb6sz7viix/lumana_ai_vision-2W7KCNMV8C27wNi6kNqyxt.webp";
const DASHBOARD = "https://d2xsxph8kpxj0f.cloudfront.net/95509065/A6VaLmJCJgb2gb6sz7viix/lumana_platform_dashboard-jgN3WMHXA8XTzZLRQgviPu.webp";

const mono: React.CSSProperties = { fontFamily: "'JetBrains Mono', monospace" };

/* ── Stat counter ── */
function StatBox({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { ref, count } = useCountUp(end, 2000);
  return (
    <div className="text-center">
      <div ref={ref} className="text-white font-bold" style={{ ...mono, fontSize: "clamp(2rem, 4vw, 3rem)", textShadow: "0 0 15px rgba(255,255,255,0.3)" }}>
        {count}{suffix}
      </div>
      <div className="mt-2" style={{ ...mono, fontSize: "10px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#06b6d4", opacity: 0.8 }}>
        {label}
      </div>
    </div>
  );
}

/* ── Section label ── */
function SysLabel({ text }: { text: string }) {
  return (
    <div style={{ ...mono, fontSize: "12px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#06b6d4" }}>
      <ScrambleText text={text} className="block mb-4" as="div" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#020617" }}>
      <Navbar />
      <div className="scanlines" />

      {/* ═══════════════════════════════════════════════
          HERO
         ═══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ paddingTop: "96px" }}>
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
              <span style={{ ...mono, fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#06b6d4" }}>
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
              <a href="#about" className="btn-cyber-ghost">
                ABOUT_US.exe
              </a>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span style={{ ...mono, fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#64748b" }}>SCROLL</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
              className="w-5 h-8 flex items-start justify-center pt-1.5"
              style={{ border: "1px solid rgba(14,165,233,0.2)" }}>
              <div className="w-1 h-2 bg-[#22d3ee]" style={{ boxShadow: "0 0 6px #22d3ee" }} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          ABOUT
         ═══════════════════════════════════════════════ */}
      <section className="py-28 relative" id="about">
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 70% 30%, rgba(6,182,212,0.06), transparent 60%)" }} />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll direction="left">
              <SysLabel text="SYS.ABOUT" />
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
                Who We <span className="text-glow" style={{ color: "#22d3ee" }}>Are</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed" style={{ color: "#94a3b8" }}>
                Y&A Solution is a technology consulting firm specializing in AI-driven security, cloud infrastructure, and intelligent automation. We partner with organizations to design, deploy, and manage systems that are secure, scalable, and future-ready.
              </p>
              <p className="mt-4 text-lg leading-relaxed" style={{ color: "#94a3b8" }}>
                Our team combines deep technical expertise with a consultative approach — understanding your business before writing a single line of code. From startups to enterprise, we deliver solutions that create measurable impact.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: Target, label: "Mission-Driven" },
                  { icon: Layers, label: "Full-Stack Expertise" },
                  { icon: Lock, label: "Security-First" },
                  { icon: BarChart3, label: "Data-Informed" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-3 py-3 px-4" style={{ border: "1px solid rgba(14,165,233,0.1)", background: "rgba(15,23,42,0.4)" }}>
                      <Icon size={18} style={{ color: "#22d3ee" }} />
                      <span className="text-sm font-medium text-white">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right">
              <div className="img-tech-container glow-cyan">
                <div className="img-tech-inner">
                  <ScannerLine />
                  <img src={DASHBOARD} alt="Y&A Solution Platform" />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SOLUTIONS
         ═══════════════════════════════════════════════ */}
      <section className="py-28 relative" id="services">
        <div className="grid-pattern absolute inset-0" style={{ opacity: 0.5 }} />
        <div className="container relative z-10">
          <RevealOnScroll className="text-center mb-16">
            <SysLabel text="SYS.SOLUTIONS" />
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Solutions Built for <span className="text-glow" style={{ color: "#22d3ee" }}>Scale</span>
            </h2>
            <p className="mt-4 mx-auto text-lg" style={{ color: "#94a3b8", maxWidth: "600px" }}>
              Four core pillars of technology excellence, each engineered to solve real business challenges.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Eye, title: "AI Video Intelligence", desc: "Enterprise-grade AI video security powered by Lumana. Transform any camera into an intelligent agent that monitors, investigates, and responds in real-time.", color: "#22d3ee", link: "/lumana-ai" },
              { icon: Shield, title: "Cybersecurity", desc: "Zero-trust architecture and end-to-end encryption to protect your most critical assets. Penetration testing, compliance audits, and 24/7 threat monitoring.", color: "#60a5fa", link: null },
              { icon: Cloud, title: "Cloud Infrastructure", desc: "Hybrid-cloud solutions that scale with your business. AWS, Azure, and GCP architecture design, migration, and ongoing optimization.", color: "#8b5cf6", link: null },
              { icon: Cpu, title: "AI Integration", desc: "Custom AI solutions that automate workflows and generate actionable insights. Machine learning pipelines, NLP systems, and predictive analytics.", color: "#34d399", link: null },
            ].map((item, i) => {
              const Icon = item.icon;
              const card = (
                <SpotlightCard className="glass p-8 h-full flex flex-col">
                  <div className="mb-6 w-12 h-12 flex items-center justify-center" style={{ border: `1px solid ${item.color}33`, background: `${item.color}10` }}>
                    <Icon size={24} style={{ color: item.color }} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "#94a3b8" }}>{item.desc}</p>
                  <div className="flex items-center gap-2 mt-6"
                    style={{ ...mono, fontSize: "12px", fontWeight: 600, textTransform: "uppercase", color: item.link ? "#22d3ee" : "#475569" }}>
                    {item.link ? <>Load Module <ChevronRight size={14} /></> : <>Coming Soon</>}
                  </div>
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

      {/* ═══════════════════════════════════════════════
          WHY CHOOSE US
         ═══════════════════════════════════════════════ */}
      <section className="py-28 relative">
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 20% 60%, rgba(6,182,212,0.06), transparent 60%)" }} />
        <div className="container relative z-10">
          <RevealOnScroll className="text-center mb-16">
            <SysLabel text="SYS.ADVANTAGES" />
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Why <span className="text-glow" style={{ color: "#22d3ee" }}>Y&A Solution</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Rapid Deployment",
                desc: "From concept to production in weeks, not months. Our agile methodology and pre-built frameworks accelerate time-to-value for every project.",
                accent: "#22d3ee",
              },
              {
                icon: Users,
                title: "Dedicated Experts",
                desc: "Every engagement is led by senior engineers with 10+ years of domain expertise. No juniors, no handoffs — direct access to the people building your system.",
                accent: "#60a5fa",
              },
              {
                icon: Shield,
                title: "Security by Design",
                desc: "Security isn't an afterthought — it's embedded in every architecture decision. SOC 2 compliant processes, encrypted pipelines, and zero-trust defaults.",
                accent: "#8b5cf6",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <RevealOnScroll key={i} delay={i * 0.15}>
                  <SpotlightCard className="glass p-10 h-full">
                    <div className="mb-6 w-14 h-14 flex items-center justify-center" style={{ border: `1px solid ${item.accent}33`, background: `${item.accent}10` }}>
                      <Icon size={28} style={{ color: item.accent }} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>{item.desc}</p>
                    <div className="mt-6 flex flex-col gap-2">
                      {["Enterprise-grade reliability", "24/7 monitoring & support", "Transparent communication"].map((point, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <CheckCircle2 size={14} style={{ color: item.accent }} />
                          <span className="text-xs" style={{ color: "#64748b" }}>{point}</span>
                        </div>
                      ))}
                    </div>
                  </SpotlightCard>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FEATURED: LUMANA AI
         ═══════════════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 30% 50%, rgba(6,182,212,0.08), transparent 60%)" }} />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll direction="left">
              <SysLabel text="SYS.FEATURED_SOLUTION" />
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
                Lumana AI<br /><span className="text-glow" style={{ color: "#22d3ee" }}>Video Intelligence</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed" style={{ color: "#94a3b8", maxWidth: "480px" }}>
                The world's first video intelligence agent. Transform any camera into a continuously learning AI agent with perception, reasoning, and real-time action capabilities.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "90% fewer false alerts with VIA-1 intelligence model",
                  "Natural language search across entire camera networks",
                  "100+ object types detected in real-time",
                  "Works with any existing IP camera system",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="mt-1 shrink-0" style={{ color: "#22d3ee" }} />
                    <span className="text-sm" style={{ color: "#94a3b8" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/lumana-ai" className="btn-cyber-primary mt-8 inline-flex">
                Learn More <ArrowRight size={16} />
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

      {/* ═══════════════════════════════════════════════
          STATS
         ═══════════════════════════════════════════════ */}
      <section className="py-20 relative">
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(6,182,212,0.03), rgba(59,130,246,0.03))" }} />
        <div className="container relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" style={{ borderTop: "1px solid rgba(14,165,233,0.15)", borderBottom: "1px solid rgba(14,165,233,0.15)", padding: "48px 0" }}>
            <StatBox end={50} suffix="+" label="Enterprise Clients" />
            <StatBox end={99} suffix="%" label="System Uptime" />
            <StatBox end={24} suffix="/7" label="Support & Monitoring" />
            <StatBox end={6} suffix="+" label="Industries Served" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          TESTIMONIALS
         ═══════════════════════════════════════════════ */}
      <section className="py-28 relative">
        <div className="container relative z-10">
          <RevealOnScroll className="text-center mb-16">
            <SysLabel text="SYS.CLIENT_FEEDBACK" />
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Trusted by <span className="text-glow" style={{ color: "#22d3ee" }}>Industry Leaders</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Y&A Solution transformed our entire security infrastructure. The Lumana AI deployment reduced our false alarm rate by 90% and gave us capabilities we didn't know were possible.",
                name: "David K.",
                role: "CTO, SecureVault Inc.",
                stars: 5,
              },
              {
                quote: "Their cloud migration was flawless. Zero downtime, ahead of schedule, and the ongoing support has been exceptional. They truly understand enterprise needs.",
                name: "Sarah M.",
                role: "VP Engineering, DataFlow Corp",
                stars: 5,
              },
              {
                quote: "The AI integration project delivered 3x ROI within the first quarter. Y&A's team is technically brilliant and communicates clearly at every step.",
                name: "Michael R.",
                role: "CEO, InnovateTech",
                stars: 5,
              },
            ].map((t, i) => (
              <RevealOnScroll key={i} delay={i * 0.15}>
                <SpotlightCard className="glass p-8 h-full flex flex-col">
                  <Quote size={24} className="mb-4" style={{ color: "#22d3ee", opacity: 0.5 }} />
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "#94a3b8" }}>
                    "{t.quote}"
                  </p>
                  <div className="mt-6 pt-6" style={{ borderTop: "1px dashed rgba(14,165,233,0.15)" }}>
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: t.stars }).map((_, j) => (
                        <Star key={j} size={12} fill="#22d3ee" style={{ color: "#22d3ee" }} />
                      ))}
                    </div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs" style={{ ...mono, color: "#475569" }}>{t.role}</p>
                  </div>
                </SpotlightCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CTA
         ═══════════════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden text-center" id="cta">
        <div className="grid-pattern absolute inset-0" style={{ opacity: 0.3 }} />
        <RadarSweep />
        <div className="container relative z-10">
          <RevealOnScroll>
            <SysLabel text="SYS.INITIALIZE" />
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Ready to Transform<br /><span className="text-glow" style={{ color: "#22d3ee" }}>Your Infrastructure?</span>
            </h2>
            <p className="mt-6 text-lg mx-auto" style={{ color: "#94a3b8", maxWidth: "540px" }}>
              Schedule a free consultation with our engineering team. We'll analyze your current systems and design a roadmap for the future.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:hello@yasolution.com"
                className="btn-cyber-primary"
                style={{ padding: "14px 32px", fontSize: "13px" }}
              >
                Init_Consultation.exe <ChevronRight size={16} />
              </a>
              <Link href="/lumana-ai" className="btn-cyber-ghost">
                Explore Lumana AI
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}
