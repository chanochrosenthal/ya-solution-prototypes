/**
 * Home Page - Y&A Solution
 * Design: Dark theme, Space Grotesk headings, animated hero with particles
 * Brief landing that directs to /lumana-ai as the main offering
 */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Shield, Cpu, Cloud, Eye } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <ParticleField count={50} />
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        {/* Decorative orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-[120px] pulse-glow" />
        <div className="absolute bottom-1/3 left-1/6 w-72 h-72 bg-[#06B6D4]/8 rounded-full blur-[100px] pulse-glow" style={{ animationDelay: "1.5s" }} />

        <div className="container relative z-10 pt-24">
          <div className="max-w-4xl">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-light mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
              <span className="text-xs font-medium tracking-[0.15em] text-white/70 uppercase">
                Technology Solutions Partner
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[0.95]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="text-white">Engineering</span>
              <br />
              <span className="text-white">Tomorrow's</span>
              <br />
              <span className="text-[#2563EB] glow-text-blue">Digital Edge</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8 text-lg md:text-xl text-white/50 max-w-xl leading-relaxed"
            >
              We architect scalable, secure, and intelligent systems that
              transform how businesses operate. From strategy to
              deployment — precision at every layer.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link href="/lumana-ai">
                <motion.span
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-[#2563EB] rounded-lg glow-blue"
                  whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(37, 99, 235, 0.6)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  Explore Lumana AI
                  <ArrowRight size={16} />
                </motion.span>
              </Link>
              <motion.span
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white/80 glass-light rounded-lg"
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.97 }}
              >
                View Our Work
              </motion.span>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-xs text-white/30 tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
            >
              <div className="w-1 h-2 rounded-full bg-white/40" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section className="py-32 relative" id="services">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-[#2563EB] uppercase">What We Do</span>
            <h2
              className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Solutions Built
              <br />
              for Scale
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Eye, title: "AI Video Intelligence", desc: "Enterprise-grade AI video security powered by Lumana. Transform any camera into an intelligent agent.", accent: "#2563EB", link: "/lumana-ai" },
              { icon: Shield, title: "Cybersecurity", desc: "Zero-trust architecture and end-to-end encryption to protect your most critical assets.", accent: "#06B6D4", link: null },
              { icon: Cloud, title: "Cloud Infrastructure", desc: "Hybrid-cloud solutions that scale with your business. Reliable, fast, and always available.", accent: "#8B5CF6", link: null },
              { icon: Cpu, title: "AI Integration", desc: "Custom AI solutions that automate workflows and generate actionable insights from your data.", accent: "#10B981", link: null },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                {item.link ? (
                  <Link href={item.link}>
                    <SolutionCard item={item} />
                  </Link>
                ) : (
                  <SolutionCard item={item} />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lumana AI Feature Banner */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/10 to-[#06B6D4]/5" />
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-xs font-semibold tracking-[0.2em] text-[#06B6D4] uppercase">Featured Solution</span>
                <h2
                  className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Lumana AI
                  <br />
                  <span className="text-[#2563EB]">Video Intelligence</span>
                </h2>
                <p className="mt-6 text-lg text-white/50 leading-relaxed max-w-lg">
                  The world's first video intelligence agent. Transform any camera into a
                  continuously learning AI agent with perception, reasoning, and real-time
                  action capabilities.
                </p>
                <Link href="/lumana-ai">
                  <motion.span
                    className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 text-sm font-semibold text-white bg-[#2563EB] rounded-lg glow-blue"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </motion.span>
                </Link>
              </motion.div>
            </div>
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden glow-blue">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/95509065/A6VaLmJCJgb2gb6sz7viix/lumana_hero_command_center-Cv2ArTrtGKeGMoxxSuEXKV.webp"
                  alt="Lumana AI Command Center"
                  className="w-full rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function SolutionCard({ item }: { item: { icon: React.ElementType; title: string; desc: string; accent: string } }) {
  const Icon = item.icon;
  return (
    <motion.div
      className="group glass rounded-xl p-6 h-full transition-all duration-300 hover:border-white/15"
      whileHover={{ y: -4, boxShadow: `0 0 30px ${item.accent}20` }}
    >
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
        style={{ backgroundColor: `${item.accent}15` }}
      >
        <Icon size={22} style={{ color: item.accent }} />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {item.title}
      </h3>
      <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
    </motion.div>
  );
}
