/**
 * DESIGN: Cyberpunk Terminal Aesthetic
 * Deep space black + cyan accents + JetBrains Mono terminal font
 * Clip-path angled cuts, scanlines, glitch effects, 3D tilt cards
 * Scanner lines on images, scramble text, typewriter hero
 */

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Eye, Search, Zap, BarChart3, Shield, Lock, Users,
  Crosshair, AlertTriangle, HardHat, Activity,
  UserX, Car, UsersRound, Wind,
  GraduationCap, Factory, Heart, ShoppingBag, Building2, Hotel,
  Cpu, Cloud, Monitor, Camera, ChevronRight,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrambleText from "@/components/cyber/ScrambleText";
import TypeWriter from "@/components/cyber/TypeWriter";
import GlitchText from "@/components/cyber/GlitchText";
import ScannerLine from "@/components/cyber/ScannerLine";
import SpotlightCard from "@/components/cyber/SpotlightCard";
import DataParticles from "@/components/cyber/DataParticles";
import RadarSweep from "@/components/cyber/RadarSweep";
import RevealOnScroll from "@/components/cyber/RevealOnScroll";
import { useCountUp } from "@/hooks/useCountUp";

const LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/95509065/A6VaLmJCJgb2gb6sz7viix/YA_logo_bright_9d85f1ae.png";
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/95509065/A6VaLmJCJgb2gb6sz7viix/lumana_hero_command_center-Cv2ArTrtGKeGMoxxSuEXKV.webp";
const AI_VISION = "https://d2xsxph8kpxj0f.cloudfront.net/95509065/A6VaLmJCJgb2gb6sz7viix/lumana_ai_vision-2W7KCNMV8C27wNi6kNqyxt.webp";
const DASHBOARD = "https://d2xsxph8kpxj0f.cloudfront.net/95509065/A6VaLmJCJgb2gb6sz7viix/lumana_platform_dashboard-jgN3WMHXA8XTzZLRQgviPu.webp";
const INDUSTRIES_BG = "https://d2xsxph8kpxj0f.cloudfront.net/95509065/A6VaLmJCJgb2gb6sz7viix/lumana_industries_grid-WwBesiXzz9TJytnFEV5hA2.webp";
const SEARCH_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/95509065/A6VaLmJCJgb2gb6sz7viix/lumana_search_interface-ZSQTz7cKETqLNu2hxjoiEi.webp";

/* ── Stat counter ── */
function StatBox({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { ref, count } = useCountUp(end, 2000);
  return (
    <div className="relative pl-4" style={{ borderLeft: "2px solid rgba(6,182,212,0.3)" }}>
      <div ref={ref} className="text-white font-bold" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", textShadow: "0 0 15px rgba(255,255,255,0.3)" }}>
        {count}{suffix}
      </div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#06b6d4", opacity: 0.8, marginTop: "4px" }}>
        {label}
      </div>
    </div>
  );
}

/* ── Section label ── */
function SysLabel({ text }: { text: string }) {
  return (
    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#06b6d4" }}>
      <ScrambleText
        text={text}
        className="block mb-4"
        as="div"
      />
    </div>
  );
}

/* ── Data ── */
const capData = [
  { icon: Eye, title: "Monitor_", subtitle: "Automate Surveillance", desc: "Eliminate monitoring fatigue with AI that never sleeps. Receive real-time alerts for specific activities — from unauthorized access to safety violations. Your cameras become proactive sentinels, not passive recorders.", features: ["Real-time threat alerts", "Eliminate monitoring fatigue", "Custom activity detection", "24/7 automated surveillance"] },
  { icon: Search, title: "Investigate_", subtitle: "Accelerate Discovery", desc: "Find precise footage in seconds, not hours. Use natural language search to query your entire camera network. Type \"person in red jacket near entrance\" and instantly get results across all nodes.", features: ["Natural language search", "Cross-camera tracking", "Smart multi-parameter search", "Seconds instead of hours"] },
  { icon: Zap, title: "Respond_", subtitle: "Streamline Actions", desc: "Respond as incidents unfold with automatic deterrence and active response capabilities. Trigger loudspeakers, initiate lockdowns, and dispatch emergency services — all from a single terminal.", features: ["Automatic alert verification", "Emergency dispatch", "Loudspeaker triggers", "Lockdown initiation"] },
  { icon: BarChart3, title: "Insight_", subtitle: "Generate Intelligence", desc: "Turn raw video data into actionable business intelligence. Visualize trends, identify behavioral patterns, and solve operational bottlenecks before they escalate.", features: ["Real-time analytics", "Trend visualization", "Predictive insights", "Operational optimization"] },
];

const aiDetections = [
  { icon: Crosshair, title: "Weapon Detect", desc: "Real-time firearm identification and automated lockdown alerts." },
  { icon: AlertTriangle, title: "Violence Detect", desc: "Aggression behavioral modeling and physical altercation flags." },
  { icon: HardHat, title: "PPE Compliance", desc: "Automated safety gear auditing on facility floors." },
  { icon: Activity, title: "Slip & Fall", desc: "Kinematic tracking for immediate medical dispatch." },
  { icon: UserX, title: "Unknown Vector", desc: "Identify unauthorized entities in restricted zones." },
  { icon: Car, title: "ALPR System", desc: "Automated License Plate Recognition logging." },
  { icon: UsersRound, title: "Max Occupancy", desc: "Real-time spatial density and capacity limits." },
  { icon: Wind, title: "Vapor Detect", desc: "Identify smoke or vapor plumes in restricted airspace." },
];

const industries = [
  { icon: GraduationCap, title: "Education", desc: "Campus security with gun detection and real-time threat response protocols." },
  { icon: Factory, title: "Manufacturing", desc: "Worker safety metrics, PPE compliance, and production floor efficiency." },
  { icon: Heart, title: "Healthcare", desc: "Patient kinematic tracking, fall detection, and restricted pharmacy access." },
  { icon: ShoppingBag, title: "Retail", desc: "Loss prevention algorithms, footfall analytics, and queue monitoring." },
  { icon: Building2, title: "Government", desc: "Public infrastructure safeguarding and authorized clearance tracking." },
  { icon: Hotel, title: "Hospitality", desc: "Guest liability protection and multi-site perimeter surveillance." },
];

const pillars = [
  { icon: Cpu, num: "01", title: "Core Edge", desc: "AI engine and video processor. Real-time processing using enterprise-grade GPUs with local AI for zero-latency heavy workloads." },
  { icon: Cloud, num: "02", title: "Cloud Sync", desc: "Hybrid-cloud architecture. Most processing runs locally while the cloud adds remote access and seamless global model updates." },
  { icon: Monitor, num: "03", title: "VMS+ Terminal", desc: "AI-driven control center accessible from any browser. Centralized management with unlimited cameras and infinite cloud archiving." },
  { icon: Camera, num: "04", title: "Camera Nodes", desc: "Agnostic hardware support. Transforms existing legacy cameras into continuous-learning AI agents for automated tracking." },
];

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export default function LumanaAI() {
  const [activeTab, setActiveTab] = useState(0);
  const activeCap = capData[activeTab];
  const ActiveIcon = activeCap.icon;

  return (
    <div className="min-h-screen" style={{ background: "#020617" }}>
      <Navbar />
      {/* Scanlines */}
      <div className="scanlines" />

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ paddingTop: "80px" }}>
        <DataParticles count={40} />
        <div className="grid-pattern absolute inset-0" />

        {/* BG */}
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover" style={{ opacity: 0.35, mixBlendMode: "luminosity" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(2,6,23,0.3), #020617)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 70% 50%, transparent, #020617 70%)" }} />
        </div>

        {/* Glow orbs */}
        <div className="absolute pointer-events-none" style={{ top: "20%", right: "20%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(60px)", animation: "pulse-glow 4s ease-in-out infinite" }} />
        <div className="absolute pointer-events-none" style={{ bottom: "20%", left: "10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(50px)", animation: "pulse-glow 4s ease-in-out infinite 2s" }} />

        <div className="container relative z-10 w-full">
          <div style={{ maxWidth: "850px" }}>
            {/* Badge */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-8"
              style={{ padding: "6px 16px", border: "1px solid rgba(14,165,233,0.3)", background: "rgba(6,182,212,0.05)", backdropFilter: "blur(10px)", clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)" }}>
              <div style={{ width: "6px", height: "6px", background: "#22d3ee", boxShadow: "0 0 10px #22d3ee", animation: "pulse-glow 2s infinite" }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#06b6d4" }}>Powered by Y&A Solution</span>
            </motion.div>

            {/* Title */}
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.05 }}>
              <GlitchText text="Lumana" className="block" as="span" />
              <br />
              <span className="text-glow" style={{ color: "#22d3ee" }}>AI Video</span>{" "}Intelligence
            </motion.h1>

            {/* Typewriter */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6" style={{ maxWidth: "560px", borderLeft: "2px solid #06b6d4", paddingLeft: "16px" }}>
              <TypeWriter
                text="The world's first video intelligence agent. Transform any camera into a continuously learning AI with perception, reasoning, and real-time action capabilities."
                className="text-lg leading-relaxed"
                speed={20}
              />
            </motion.div>

            {/* Buttons */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4">
              <a href="#cta" className="btn-cyber-primary">Request a Demo <ChevronRight size={16} /></a>
              <a href="#platform" className="btn-cyber-ghost">Platform Overview</a>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
            style={{ maxWidth: "800px", borderTop: "1px solid rgba(14,165,233,0.15)", paddingTop: "32px" }}>
            <StatBox end={90} suffix="%" label="Fewer False Alerts" />
            <StatBox end={100} suffix="+" label="Object Types" />
            <StatBox end={6} suffix="" label="Industries Served" />
            <StatBox end={24} suffix="/7" label="AI Monitoring" />
          </motion.div>
        </div>
      </section>

      {/* ═══ VIA-1 ═══ */}
      <section className="py-32 relative">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll direction="left">
              <SysLabel text="CORE TECHNOLOGY" />
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
                VIA-1 <span className="text-glow" style={{ color: "#22d3ee" }}>Intelligence Agent</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed" style={{ color: "#94a3b8" }}>
                The world's first proprietary video intelligence model. VIA-1 continually learns and adapts to your environment, transforming cameras into AI agents with perception, reasoning, and real-time action capabilities.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                {["Camera agnostic — works with any IP camera protocol", "Best-in-class accuracy with 90% fewer false alerts", "Continuously learning neural network adaptation", "Real-time processing with enterprise-grade GPUs"].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 transition-all duration-300 hover:translate-x-2"
                    style={{ padding: "12px 16px", background: "rgba(14,165,233,0.03)", border: "1px solid rgba(14,165,233,0.1)" }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", color: "#22d3ee", fontWeight: "bold", fontSize: "14px", marginTop: "2px" }}>[+]</span>
                    <span className="text-[15px] text-white">{item}</span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right">
              <div className="relative">
                <div className="img-tech-container glow-cyan">
                  <div className="img-tech-inner">
                    <ScannerLine />
                    <img src={AI_VISION} alt="VIA-1 AI Vision" />
                  </div>
                </div>
                {/* Float stat */}
                <div className="absolute z-20" style={{ bottom: "-20px", right: "-10px", padding: "16px 24px", border: "1px solid #06b6d4", background: "rgba(2,6,23,0.9)", backdropFilter: "blur(10px)", clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "2rem", fontWeight: 800, color: "#22d3ee", lineHeight: 1 }}>90%</div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", textTransform: "uppercase", color: "#94a3b8", marginTop: "8px", letterSpacing: "0.1em" }}>False Alert Reduction</div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ═══ PLATFORM ═══ */}
      <section className="py-32 relative" id="platform">
        <div className="grid-pattern absolute inset-0" style={{ opacity: 0.5 }} />
        <div className="container relative z-10">
          <RevealOnScroll className="text-center mb-20">
            <SysLabel text="PLATFORM ARCHITECTURE" />
            <h2 className="mt-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Four Pillars of <span className="text-glow" style={{ color: "#22d3ee" }}>Intelligence</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <RevealOnScroll key={i} delay={i * 0.1}>
                  <SpotlightCard className="glass p-8 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-6 pb-4" style={{ borderBottom: "1px solid rgba(14,165,233,0.15)" }}>
                      <Icon size={28} style={{ color: "#22d3ee" }} />
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "rgba(14,165,233,0.3)", fontWeight: "bold" }}>{p.num}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{p.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>{p.desc}</p>
                  </SpotlightCard>
                </RevealOnScroll>
              );
            })}
          </div>

          <RevealOnScroll className="mt-20">
            <div className="relative overflow-hidden" style={{ border: "1px solid rgba(14,165,233,0.2)", background: "#020617" }}>
              <ScannerLine />
              <img src={DASHBOARD} alt="Lumana VMS+ Dashboard" className="w-full block" />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══ CAPABILITIES ═══ */}
      <section className="py-32 relative" id="capabilities">
        <div className="container">
          <RevealOnScroll className="text-center mb-20">
            <SysLabel text="KEY CAPABILITIES" />
            <h2 className="mt-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              See. <span className="text-glow" style={{ color: "#22d3ee" }}>Understand.</span> Act.
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
            {/* Tabs */}
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
              {capData.map((cap, i) => {
                const Icon = cap.icon;
                const isActive = activeTab === i;
                return (
                  <button key={i} onClick={() => setActiveTab(i)}
                    className="cap-tab flex items-center gap-4 p-4 text-left w-full min-w-[200px] lg:min-w-0 transition-all duration-300"
                    style={{
                      borderLeft: isActive ? "3px solid #22d3ee" : "3px solid transparent",
                      border: isActive ? "1px solid rgba(14,165,233,0.2)" : "1px solid transparent",
                      borderLeftWidth: "3px",
                      borderLeftColor: isActive ? "#22d3ee" : "transparent",
                      background: isActive ? "rgba(14,165,233,0.08)" : "transparent",
                    }}>
                    <Icon size={22} style={{ color: isActive ? "#22d3ee" : "#64748b", filter: isActive ? "drop-shadow(0 0 8px rgba(34,211,238,0.5))" : "none", transition: "all 0.3s", flexShrink: 0 }} />
                    <div>
                      <h4 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "14px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: isActive ? "#22d3ee" : "#64748b", transition: "color 0.3s" }}>{cap.title}</h4>
                      <p className="text-[12px] mt-0.5 hidden sm:block" style={{ color: "rgba(255,255,255,0.35)" }}>{cap.subtitle}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Content */}
            <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
              className="p-10"
              style={{ background: "radial-gradient(circle at top right, rgba(14,165,233,0.08), transparent 50%), rgba(15,23,42,0.5)", border: "1px solid rgba(14,165,233,0.2)", clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)" }}>
              <h3 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-white mb-4">
                <ActiveIcon size={30} style={{ color: "#22d3ee" }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace" }}>{activeCap.title}</span>
              </h3>
              <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: "#e2e8f0", opacity: 0.9 }}>{activeCap.desc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeCap.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 p-3" style={{ background: "rgba(0,0,0,0.3)", borderLeft: "2px solid #06b6d4" }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", color: "#06b6d4", fontWeight: "bold", fontSize: "13px" }}>&gt;_</span>
                    <span className="text-sm font-medium text-white">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SEARCH ═══ */}
      <section className="py-32 relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll direction="left">
              <SysLabel text="AI-POWERED SEARCH" />
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
                Find Anything.<br /><span className="text-glow" style={{ color: "#22d3ee" }}>Instantly.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed" style={{ color: "#94a3b8" }}>
                Use natural language to search your entire camera network. Type a query like "person in red jacket near entrance" and Lumana's AI instantly parses the network to locate matching footprint parameters.
              </p>
              <div className="mt-10 flex flex-col gap-4">
                {[
                  { title: "NLP Text Search", desc: "Natural language processing understands context, behaviors, interactions, and timelines without SQL syntax.", color: "#22d3ee" },
                  { title: "Deep Smart Search", desc: "Layer multiple parameters — physiological attributes, vehicle details, 100+ object vectors, and facial recognition.", color: "#60a5fa" },
                  { title: "Cross-Node Tracking", desc: "Track targets across all camera nodes with a single click. Map complete trajectories through the facility matrix.", color: "#8b5cf6" },
                ].map((card, i) => (
                  <div key={i} className="group p-6 transition-all duration-300"
                    style={{ background: "rgba(15,23,42,0.4)", borderLeft: `2px solid ${i === 0 ? "rgba(14,165,233,0.3)" : "rgba(14,165,233,0.12)"}` }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderLeftColor = "#22d3ee"; e.currentTarget.style.background = "rgba(15,23,42,0.8)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderLeftColor = "rgba(14,165,233,0.12)"; e.currentTarget.style.background = "rgba(15,23,42,0.4)"; }}>
                    <h4 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: card.color, marginBottom: "8px" }}>{card.title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>{card.desc}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right">
              <div className="img-tech-container glow-cyan">
                <div className="img-tech-inner">
                  <ScannerLine />
                  <img src={SEARCH_IMG} alt="AI Video Search" />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ═══ AI DETECTION ═══ */}
      <section className="py-32 relative" id="detection">
        <div className="container">
          <RevealOnScroll className="text-center mb-16">
            <SysLabel text="THREAT DETECTION" />
            <h2 className="mt-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Intelligent Threat<br /><span className="text-glow" style={{ color: "#22d3ee" }}>Detection Suite</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {aiDetections.map((d, i) => {
              const Icon = d.icon;
              return (
                <RevealOnScroll key={i} delay={i * 0.08}>
                  <SpotlightCard className="p-6 h-full" style={{ background: "rgba(15,23,42,0.4)", border: "1px solid rgba(14,165,233,0.12)" } as any}>
                    <Icon size={28} className="mb-5" style={{ color: "#06b6d4" }} />
                    <h4 className="text-base font-semibold text-white mb-2">{d.title}</h4>
                    <p className="text-[13px] leading-relaxed" style={{ color: "#94a3b8" }}>{d.desc}</p>
                  </SpotlightCard>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIES ═══ */}
      <section className="py-32 relative overflow-hidden" id="industries">
        <div className="absolute inset-0">
          <img src={INDUSTRIES_BG} alt="" className="w-full h-full object-cover" style={{ opacity: 0.12, filter: "grayscale(100%) contrast(1.2)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #020617, rgba(2,6,23,0.8), #020617)" }} />
        </div>
        <div className="container relative z-10">
          <RevealOnScroll className="text-center mb-16">
            <SysLabel text="INDUSTRIES SERVED" />
            <h2 className="mt-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Built for Every <span className="text-glow" style={{ color: "#22d3ee" }}>Sector</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <RevealOnScroll key={i} delay={i * 0.08}>
                  <div className="group relative p-8 h-full overflow-hidden transition-all duration-300 hover:bg-[rgba(15,23,42,0.8)]"
                    style={{ background: "rgba(15,23,42,0.5)", border: "1px solid rgba(255,255,255,0.05)" }}>
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-[#06b6d4] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    <Icon size={32} className="mb-6" style={{ color: "#22d3ee" }} />
                    <h3 className="text-lg font-semibold text-white mb-3">{ind.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>{ind.desc}</p>
                    <div className="flex items-center gap-2 mt-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                      style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", color: "#22d3ee" }}>
                      Learn More <ChevronRight size={14} />
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ SECURITY ═══ */}
      <section className="py-20 relative">
        <div className="container">
          <RevealOnScroll className="text-center mb-12">
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#06b6d4" }}>
              <ScrambleText text="SECURITY & COMPLIANCE" />
            </div>
            <h2 className="mt-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Enterprise-Grade <span className="text-glow" style={{ color: "#22d3ee" }}>Security</span>
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Lock, title: "Zero-Trust Framework", desc: "Every internal/external request is cryptographically verified and validated. No implicit trust zones." },
              { icon: Shield, title: "End-to-End Encryption", desc: "Military-grade encryption protects video data streams across edge, cloud, and connected terminal devices." },
              { icon: Users, title: "Granular Access Control", desc: "Enterprise RBAC permissions with strict audit logging. Scale to unlimited operational personnel." },
            ].map((t, i) => {
              const Icon = t.icon;
              return (
                <RevealOnScroll key={i} delay={i * 0.1}>
                  <div className="p-8 text-center h-full" style={{ border: "1px dashed rgba(14,165,233,0.2)", background: "rgba(2,6,23,0.8)", backdropFilter: "blur(10px)" }}>
                    <Icon size={32} className="mx-auto mb-6" style={{ color: "#22d3ee" }} />
                    <h3 className="text-lg font-semibold text-white mb-3">{t.title}</h3>
                    <p className="text-sm" style={{ color: "#94a3b8" }}>{t.desc}</p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-32 relative text-center overflow-hidden" id="cta"
        style={{ borderTop: "1px solid rgba(14,165,233,0.15)", background: "radial-gradient(circle at 50% 100%, rgba(6,182,212,0.1), #020617)" }}>
        <div className="grid-pattern absolute inset-0" style={{ opacity: 0.3 }} />
        <RadarSweep />
        <div className="container relative z-10">
          <RevealOnScroll>
            <SysLabel text="GET STARTED" />
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Upgrade Your Security<br /><span className="text-glow" style={{ color: "#22d3ee" }}>Infrastructure Today</span>
            </h2>
            <p className="mt-6 text-lg mx-auto" style={{ color: "#94a3b8", maxWidth: "540px" }}>
              Deploy the world's most advanced AI video intelligence platform. Schedule a precise technical demonstration.
            </p>
            <div className="mt-10">
              <a href="mailto:hello@yasolution.com" className="btn-cyber-primary" style={{ padding: "16px 36px" }}>
                Schedule a Demo <ChevronRight size={16} />
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}
