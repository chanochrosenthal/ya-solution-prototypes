/**
 * Lumana AI Page - Y&A Solution
 * Design: Dark theme, immersive hero, rich animations, glassmorphism cards
 * Sections: Hero, VIA-1 Tech, Platform, Capabilities, AI Features, Industries, Search, CTA
 */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import { useCountUp } from "@/hooks/useCountUp";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight,
  Shield,
  Cpu,
  Cloud,
  Eye,
  Search,
  Zap,
  BarChart3,
  Camera,
  Lock,
  GraduationCap,
  Factory,
  Building2,
  ShoppingBag,
  Heart,
  Hotel,
  ChevronRight,
  Check,
  Crosshair,
  AlertTriangle,
  HardHat,
  PersonStanding,
  Car,
  UserX,
  Users,
  Wind,
} from "lucide-react";

const IMAGES = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/95509065/A6VaLmJCJgb2gb6sz7viix/lumana_hero_command_center-Cv2ArTrtGKeGMoxxSuEXKV.webp",
  aiVision: "https://d2xsxph8kpxj0f.cloudfront.net/95509065/A6VaLmJCJgb2gb6sz7viix/lumana_ai_vision-2W7KCNMV8C27wNi6kNqyxt.webp",
  dashboard: "https://d2xsxph8kpxj0f.cloudfront.net/95509065/A6VaLmJCJgb2gb6sz7viix/lumana_platform_dashboard-jgN3WMHXA8XTzZLRQgviPu.webp",
  industries: "https://d2xsxph8kpxj0f.cloudfront.net/95509065/A6VaLmJCJgb2gb6sz7viix/lumana_industries_grid-WwBesiXzz9TJytnFEV5hA2.webp",
  search: "https://d2xsxph8kpxj0f.cloudfront.net/95509065/A6VaLmJCJgb2gb6sz7viix/lumana_search_interface-ZSQTz7cKETqLNu2hxjoiEi.webp",
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeChild = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Counter component
function Counter({ end, suffix = "", label }: { end: number; suffix?: string; label: string }) {
  const { count, ref } = useCountUp(end, 2000);
  return (
    <div className="text-center" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="text-4xl md:text-5xl font-bold text-[#2563EB] glow-text-blue" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {count}{suffix}
      </div>
      <div className="mt-2 text-xs font-medium tracking-[0.15em] text-white/40 uppercase">{label}</div>
    </div>
  );
}

export default function LumanaAI() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const [activeCapability, setActiveCapability] = useState(0);

  const capabilities = [
    {
      icon: Eye,
      title: "Monitor",
      subtitle: "Automate Surveillance",
      desc: "Eliminate monitoring fatigue with AI that never sleeps. Receive real-time alerts for specific activities — from unauthorized access to safety violations. Your cameras become proactive sentinels, not passive recorders.",
      features: ["Real-time threat alerts", "Eliminate monitoring fatigue", "Custom activity detection", "24/7 automated surveillance"],
    },
    {
      icon: Search,
      title: "Investigate",
      subtitle: "Accelerate Discovery",
      desc: "Find precise footage in seconds, not hours. Use natural language search to query your entire camera network. Type 'person in red jacket near entrance' and instantly get results across all cameras.",
      features: ["Natural language search", "Cross-camera tracking", "Smart multi-parameter search", "Seconds instead of hours"],
    },
    {
      icon: Zap,
      title: "Respond",
      subtitle: "Streamline Actions",
      desc: "Respond as incidents unfold with automatic deterrence and active response capabilities. Trigger loudspeakers, initiate lockdowns, and dispatch emergency services — all from a single platform.",
      features: ["Automatic alert verification", "Emergency dispatch", "Loudspeaker triggers", "Lockdown initiation"],
    },
    {
      icon: BarChart3,
      title: "Insight",
      subtitle: "Generate Intelligence",
      desc: "Turn video data into actionable business intelligence. Visualize trends, identify patterns, and solve issues before they escalate. Real-time analytics that transform how you operate.",
      features: ["Real-time analytics", "Trend visualization", "Predictive insights", "Operational optimization"],
    },
  ];

  const aiFeatures = [
    { icon: Crosshair, title: "Gun Detection", desc: "Real-time weapon identification and instant alerts" },
    { icon: AlertTriangle, title: "Violence Detection", desc: "Behavioral analysis for aggressive activity" },
    { icon: HardHat, title: "PPE Compliance", desc: "Automated safety equipment monitoring" },
    { icon: PersonStanding, title: "Slip & Fall", desc: "Instant detection of fall incidents" },
    { icon: UserX, title: "Unknown Person", desc: "Identify unauthorized individuals" },
    { icon: Car, title: "License Plate", desc: "Vehicle identification and tracking" },
    { icon: Users, title: "Max Occupancy", desc: "Real-time capacity monitoring" },
    { icon: Wind, title: "Vape Detection", desc: "Detect vaping in restricted areas" },
  ];

  const industries = [
    { icon: GraduationCap, title: "Education", desc: "Campus security with gun detection and real-time threat response", color: "#2563EB" },
    { icon: Factory, title: "Manufacturing", desc: "Worker safety, PPE compliance, and operational efficiency", color: "#06B6D4" },
    { icon: Heart, title: "Healthcare", desc: "Patient safety, fall detection, and medicine security", color: "#10B981" },
    { icon: ShoppingBag, title: "Retail", desc: "Loss prevention, customer analytics, and store operations", color: "#F59E0B" },
    { icon: Building2, title: "Government", desc: "Public safety, secure access, and community safeguarding", color: "#8B5CF6" },
    { icon: Hotel, title: "Hospitality", desc: "Guest safety, property protection, and multi-location management", color: "#EC4899" },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <ParticleField count={60} />

        {/* Background image with parallax */}
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img src={IMAGES.hero} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/80" />
        </motion.div>

        <motion.div className="container relative z-10 pt-24" style={{ opacity: heroOpacity }}>
          <div className="max-w-4xl">
            <motion.div
              custom={0} variants={fadeUp} initial="hidden" animate="visible"
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass-light mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
              <span className="text-xs font-medium tracking-[0.15em] text-[#06B6D4] uppercase">
                Powered by Y&A Solution
              </span>
            </motion.div>

            <motion.h1
              custom={1} variants={fadeUp} initial="hidden" animate="visible"
              className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[0.95]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="text-white">Lumana</span>
              <br />
              <span className="text-[#2563EB] glow-text-blue">AI Video</span>
              <br />
              <span className="text-white">Intelligence</span>
            </motion.h1>

            <motion.p
              custom={2} variants={fadeUp} initial="hidden" animate="visible"
              className="mt-8 text-lg md:text-xl text-white/50 max-w-xl leading-relaxed"
            >
              The world's first video intelligence agent. Transform any camera into
              a continuously learning AI with perception, reasoning, and real-time
              action capabilities.
            </motion.p>

            <motion.div
              custom={3} variants={fadeUp} initial="hidden" animate="visible"
              className="mt-10 flex flex-wrap gap-4"
            >
              <motion.span
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-[#2563EB] rounded-lg glow-blue cursor-pointer"
                whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(37, 99, 235, 0.6)" }}
                whileTap={{ scale: 0.97 }}
              >
                Schedule a Demo
                <ArrowRight size={16} />
              </motion.span>
              <motion.span
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white/80 glass-light rounded-lg cursor-pointer"
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.97 }}
              >
                Watch Overview
              </motion.span>
            </motion.div>
          </div>

          {/* Hero stats */}
          <motion.div
            custom={4} variants={fadeUp} initial="hidden" animate="visible"
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl"
          >
            <Counter end={90} suffix="%" label="Fewer False Alerts" />
            <Counter end={100} suffix="+" label="Object Types" />
            <Counter end={6} suffix="" label="Industries Served" />
            <Counter end={24} suffix="/7" label="AI Monitoring" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════ VIA-1 TECHNOLOGY ═══════════════════ */}
      <section className="py-32 relative">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs font-semibold tracking-[0.2em] text-[#06B6D4] uppercase">Core Technology</span>
              <h2
                className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                VIA-1
                <br />
                <span className="text-[#2563EB]">Video Intelligence</span>
                <br />
                Agent
              </h2>
              <p className="mt-6 text-lg text-white/50 leading-relaxed">
                The world's first proprietary video intelligence model. VIA-1 continually
                learns and adapts to your environment, transforming cameras into AI agents
                with perception, reasoning, and real-time action capabilities.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Camera agnostic — works with any IP camera",
                  "Best-in-class accuracy with 90% fewer false alerts",
                  "Continuously learning system that gets smarter over time",
                  "Real-time processing with enterprise-grade GPUs",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 w-5 h-5 rounded-full bg-[#2563EB]/20 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-[#2563EB]" />
                    </div>
                    <span className="text-sm text-white/60">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img src={IMAGES.aiVision} alt="VIA-1 AI Vision" className="w-full rounded-2xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
              {/* Floating stat card */}
              <motion.div
                className="absolute -bottom-6 -left-6 glass rounded-xl p-5 glow-blue"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <div className="text-3xl font-bold text-[#2563EB]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>90%</div>
                <div className="text-xs text-white/50 mt-1">Fewer False Alerts</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ PLATFORM COMPONENTS ═══════════════════ */}
      <section className="py-32 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-[#2563EB] uppercase">Platform Architecture</span>
            <h2
              className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Four Pillars of
              <br />
              <span className="text-[#2563EB]">Intelligent Security</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Cpu,
                title: "Core",
                desc: "AI engine and video processor. Replaces or works with existing NVRs. Real-time processing using enterprise-grade GPUs with local AI for heavy workloads.",
                accent: "#2563EB",
              },
              {
                icon: Cloud,
                title: "Cloud",
                desc: "Hybrid-cloud architecture where most processing runs locally. Cloud adds remote access, additional processing power, and seamless updates.",
                accent: "#06B6D4",
              },
              {
                icon: Eye,
                title: "VMS+",
                desc: "AI-driven control center accessible from any browser or mobile device. Centralized management with unlimited cameras, users, and cloud archiving.",
                accent: "#8B5CF6",
              },
              {
                icon: Camera,
                title: "Cameras",
                desc: "Works with any IP camera. Transforms existing cameras into continuous-learning AI agents for automatic monitoring and analysis.",
                accent: "#10B981",
              },
            ].map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <motion.div
                    className="glass rounded-xl p-7 h-full relative overflow-hidden transition-all duration-500"
                    whileHover={{ y: -6, borderColor: `${pillar.accent}40` }}
                  >
                    {/* Glow effect on hover */}
                    <div
                      className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-3xl"
                      style={{ backgroundColor: pillar.accent }}
                    />

                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 relative z-10"
                      style={{ backgroundColor: `${pillar.accent}15` }}
                    >
                      <Icon size={26} style={{ color: pillar.accent }} />
                    </div>
                    <h3
                      className="text-xl font-semibold text-white mb-3 relative z-10"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed relative z-10">{pillar.desc}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Dashboard image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-16 relative rounded-2xl overflow-hidden glow-blue"
          >
            <img src={IMAGES.dashboard} alt="Lumana VMS+ Dashboard" className="w-full rounded-2xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/20" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ CAPABILITIES ═══════════════════ */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2563EB]/3 to-transparent" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-[#06B6D4] uppercase">Key Capabilities</span>
            <h2
              className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              See. Understand. Act.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Tabs */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col gap-3">
              {capabilities.map((cap, i) => {
                const Icon = cap.icon;
                const isActive = activeCapability === i;
                return (
                  <motion.button
                    key={cap.title}
                    onClick={() => setActiveCapability(i)}
                    className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 w-full ${
                      isActive
                        ? "glass border-[#2563EB]/30 glow-blue"
                        : "hover:bg-white/5"
                    }`}
                    whileHover={{ x: isActive ? 0 : 4 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                      isActive ? "bg-[#2563EB]/20" : "bg-white/5"
                    }`}>
                      <Icon size={20} className={isActive ? "text-[#2563EB]" : "text-white/40"} />
                    </div>
                    <div className="hidden lg:block">
                      <div className={`text-sm font-semibold ${isActive ? "text-white" : "text-white/50"}`}>
                        {cap.title}
                      </div>
                      <div className={`text-xs ${isActive ? "text-white/50" : "text-white/30"}`}>
                        {cap.subtitle}
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Content */}
            <div className="lg:col-span-8">
              <motion.div
                key={activeCapability}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="glass rounded-2xl p-8 md:p-10"
              >
                <div className="flex items-center gap-3 mb-6">
                  {(() => {
                    const Icon = capabilities[activeCapability].icon;
                    return <Icon size={28} className="text-[#2563EB]" />;
                  })()}
                  <h3
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {capabilities[activeCapability].title}
                  </h3>
                </div>
                <p className="text-white/50 leading-relaxed mb-8">
                  {capabilities[activeCapability].desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {capabilities[activeCapability].features.map((feature, i) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.3 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/5"
                    >
                      <ChevronRight size={14} className="text-[#2563EB] shrink-0" />
                      <span className="text-sm text-white/70">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ AI DETECTION FEATURES ═══════════════════ */}
      <section className="py-32 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-[#2563EB] uppercase">AI Detection</span>
            <h2
              className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Intelligent Threat
              <br />
              <span className="text-[#2563EB]">Detection Suite</span>
            </h2>
            <p className="mt-4 text-lg text-white/40 max-w-2xl mx-auto">
              Industry-leading AI features that detect, classify, and alert on critical events in real-time.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {aiFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  variants={fadeChild}
                  className="group"
                >
                  <motion.div
                    className="glass rounded-xl p-6 text-center h-full transition-all duration-300"
                    whileHover={{ y: -4, borderColor: "rgba(37, 99, 235, 0.3)", boxShadow: "0 0 30px rgba(37, 99, 235, 0.15)" }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#2563EB]/20 transition-colors">
                      <Icon size={22} className="text-[#2563EB]" />
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {feature.title}
                    </h4>
                    <p className="text-xs text-white/35">{feature.desc}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ INDUSTRIES ═══════════════════ */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.industries} alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-[#06B6D4] uppercase">Industries</span>
            <h2
              className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Built for Every
              <br />
              <span className="text-[#06B6D4]">Industry</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <motion.div
                    className="glass rounded-xl p-7 h-full group transition-all duration-300"
                    whileHover={{ y: -4, borderColor: `${industry.color}30` }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors"
                      style={{ backgroundColor: `${industry.color}15` }}
                    >
                      <Icon size={24} style={{ color: industry.color }} />
                    </div>
                    <h3
                      className="text-lg font-semibold text-white mb-2"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {industry.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed">{industry.desc}</p>
                    <div className="mt-4 flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: industry.color }}>
                      Learn more <ChevronRight size={12} />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SEARCH CAPABILITIES ═══════════════════ */}
      <section className="py-32 relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs font-semibold tracking-[0.2em] text-[#2563EB] uppercase">AI Search</span>
              <h2
                className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Find Anything.
                <br />
                <span className="text-[#2563EB]">Instantly.</span>
              </h2>
              <p className="mt-6 text-lg text-white/50 leading-relaxed">
                Use natural language to search your entire camera network. Type a query like
                "person in red jacket near entrance" and Lumana's AI instantly finds matching
                footage across all cameras.
              </p>

              <div className="mt-8 space-y-6">
                <div className="glass rounded-xl p-5">
                  <h4 className="text-sm font-semibold text-[#2563EB] mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Text Search
                  </h4>
                  <p className="text-sm text-white/40">
                    Natural language processing understands context, behaviors, interactions, and timelines.
                    No special training required.
                  </p>
                </div>
                <div className="glass rounded-xl p-5">
                  <h4 className="text-sm font-semibold text-[#06B6D4] mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Smart Search
                  </h4>
                  <p className="text-sm text-white/40">
                    Layer multiple parameters — people attributes, vehicle details, 100+ object types,
                    event tags, and facial recognition.
                  </p>
                </div>
                <div className="glass rounded-xl p-5">
                  <h4 className="text-sm font-semibold text-[#10B981] mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Cross-Camera Tracking
                  </h4>
                  <p className="text-sm text-white/40">
                    Track a person or vehicle across all cameras with a single click. Follow their
                    complete path through your facility.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden glow-cyan">
                <img src={IMAGES.search} alt="AI Video Search" className="w-full rounded-2xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECURITY & TRUST ═══════════════════ */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/5 to-[#06B6D4]/5" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Lock, title: "Zero-Trust Architecture", desc: "Every access request is verified, validated, and encrypted. No implicit trust." },
              { icon: Shield, title: "End-to-End Encryption", desc: "Protects video data across edge, cloud, and all connected devices." },
              { icon: Users, title: "Enterprise Access Controls", desc: "Granular permissions with role-based access. Unlimited users and cameras." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass rounded-xl p-7 text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#2563EB]/10 flex items-center justify-center mx-auto mb-5">
                    <Icon size={26} className="text-[#2563EB]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/40">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2563EB]/10 rounded-full blur-[150px]" />

        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-[#2563EB] uppercase">Ready to Transform?</span>
            <h2
              className="mt-6 text-4xl md:text-6xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Upgrade Your Security
              <br />
              <span className="text-[#2563EB]">Infrastructure Today</span>
            </h2>
            <p className="mt-6 text-lg text-white/40 max-w-xl mx-auto">
              Join organizations worldwide that trust Lumana AI to protect their people,
              assets, and operations. Schedule a personalized demo today.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <motion.span
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-[#2563EB] rounded-lg glow-blue cursor-pointer"
                whileHover={{ scale: 1.03, boxShadow: "0 0 50px rgba(37, 99, 235, 0.6)" }}
                whileTap={{ scale: 0.97 }}
              >
                Schedule a Consultation
                <ArrowRight size={16} />
              </motion.span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
