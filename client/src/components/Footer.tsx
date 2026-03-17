/**
 * DESIGN: Cyberpunk Terminal Footer
 * Terminal-style links (> prefix), JetBrains Mono, dashed borders
 * "Built by NexFlow AI Automation" branding at the very bottom
 */

import { Link } from "wouter";

const LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/95509065/A6VaLmJCJgb2gb6sz7viix/YA_logo_bright_9d85f1ae.png";

const mono: React.CSSProperties = { fontFamily: "'JetBrains Mono', monospace" };

function FooterLink({ label, href }: { label: string; href?: string }) {
  const inner = (
    <span
      className="text-[13px] transition-all duration-300 hover:text-[#22d3ee] hover:translate-x-1 inline-block"
      style={{ ...mono, color: "#64748b" }}
    >
      &gt; {label}
    </span>
  );
  if (href?.startsWith("/")) return <Link href={href}>{inner}</Link>;
  return <span className="cursor-pointer">{inner}</span>;
}

export default function Footer() {
  return (
    <footer style={{ background: "#020617", borderTop: "1px solid rgba(14,165,233,0.1)" }}>
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={LOGO} alt="Y&A Solution" className="h-14 w-auto mb-5" />
            <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
              Engineering precision. Delivering excellence. Your trusted technology partner.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div style={{ width: "6px", height: "6px", background: "#22d3ee", boxShadow: "0 0 10px #22d3ee", animation: "pulse-glow 2s infinite" }} />
              <span style={{ ...mono, fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#06b6d4" }}>
                SYS.ONLINE
              </span>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="mb-5" style={{ ...mono, fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#22d3ee" }}>
              Solutions
            </h4>
            <ul className="space-y-3">
              <li><FooterLink label="Lumana_AI" href="/lumana-ai" /></li>
              <li><FooterLink label="Cloud_Infra" /></li>
              <li><FooterLink label="Cybersec" /></li>
              <li><FooterLink label="AI_Integrate" /></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-5" style={{ ...mono, fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#22d3ee" }}>
              Company
            </h4>
            <ul className="space-y-3">
              <li><FooterLink label="About" /></li>
              <li><FooterLink label="Careers" /></li>
              <li><FooterLink label="Blog" /></li>
              <li><FooterLink label="Contact" /></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-5" style={{ ...mono, fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#22d3ee" }}>
              Connect
            </h4>
            <ul className="space-y-3">
              <li><FooterLink label="LinkedIn" /></li>
              <li><FooterLink label="GitHub" /></li>
              <li><FooterLink label="Twitter/X" /></li>
              <li><FooterLink label="hello@yasolution.com" /></li>
            </ul>
          </div>
        </div>

        {/* Copyright row */}
        <div className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px dashed rgba(14,165,233,0.1)" }}>
          <p style={{ ...mono, fontSize: "11px", color: "#334155" }}>
            &copy; 2026 Y&A Solution. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="cursor-pointer transition-colors hover:text-[#22d3ee]" style={{ ...mono, fontSize: "11px", color: "#334155" }}>PRIVACY_POLICY</span>
            <span className="cursor-pointer transition-colors hover:text-[#22d3ee]" style={{ ...mono, fontSize: "11px", color: "#334155" }}>TERMS_OF_SERVICE</span>
          </div>
        </div>

        {/* NexFlow AI Automation branding */}
        <div className="mt-8 pt-6 flex flex-col items-center gap-2"
          style={{ borderTop: "1px solid rgba(14,165,233,0.05)" }}>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div style={{ width: "4px", height: "4px", background: "#8b5cf6", boxShadow: "0 0 8px #8b5cf6" }} />
              <div style={{ width: "4px", height: "4px", background: "#a78bfa", boxShadow: "0 0 8px #a78bfa" }} />
              <div style={{ width: "4px", height: "4px", background: "#c4b5fd", boxShadow: "0 0 8px #c4b5fd" }} />
            </div>
            <span style={{ ...mono, fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#64748b" }}>
              Built by
            </span>
            <a
              href="https://nexflow.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:opacity-100"
              style={{ opacity: 0.8 }}
            >
              <span style={{
                ...mono,
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                NEXFLOW AI AUTOMATION
              </span>
            </a>
            <div className="flex items-center gap-1.5">
              <div style={{ width: "4px", height: "4px", background: "#c4b5fd", boxShadow: "0 0 8px #c4b5fd" }} />
              <div style={{ width: "4px", height: "4px", background: "#a78bfa", boxShadow: "0 0 8px #a78bfa" }} />
              <div style={{ width: "4px", height: "4px", background: "#8b5cf6", boxShadow: "0 0 8px #8b5cf6" }} />
            </div>
          </div>
          <p style={{ ...mono, fontSize: "9px", letterSpacing: "0.1em", color: "#1e293b" }}>
            AI-POWERED AUTOMATION SOLUTIONS FOR SMBS
          </p>
        </div>
      </div>
    </footer>
  );
}
