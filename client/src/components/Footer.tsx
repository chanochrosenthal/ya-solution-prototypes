/**
 * Footer - Y&A Solution branded footer
 * Dark design with logo, links, and copyright
 */

import { Link } from "wouter";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/95509065/A6VaLmJCJgb2gb6sz7viix/YA_concept1_geometric_monogram_21251de9.png";

export default function Footer() {
  return (
    <footer className="bg-[#060d1b] border-t border-white/5">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={LOGO_URL} alt="Y&A Solution" className="h-10 w-auto mb-4" />
            <p className="text-white/40 text-sm leading-relaxed">
              Engineering precision. Delivering excellence. Your trusted technology partner.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-xs font-semibold text-white/60 tracking-[0.2em] uppercase mb-4">Solutions</h4>
            <ul className="space-y-3">
              <li><Link href="/lumana-ai"><span className="text-sm text-white/40 hover:text-white transition-colors">Lumana AI</span></Link></li>
              <li><span className="text-sm text-white/40 hover:text-white transition-colors cursor-pointer">Cloud Infrastructure</span></li>
              <li><span className="text-sm text-white/40 hover:text-white transition-colors cursor-pointer">Cybersecurity</span></li>
              <li><span className="text-sm text-white/40 hover:text-white transition-colors cursor-pointer">AI Integration</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-white/60 tracking-[0.2em] uppercase mb-4">Company</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-white/40 hover:text-white transition-colors cursor-pointer">About Us</span></li>
              <li><span className="text-sm text-white/40 hover:text-white transition-colors cursor-pointer">Careers</span></li>
              <li><span className="text-sm text-white/40 hover:text-white transition-colors cursor-pointer">Blog</span></li>
              <li><span className="text-sm text-white/40 hover:text-white transition-colors cursor-pointer">Contact</span></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-semibold text-white/60 tracking-[0.2em] uppercase mb-4">Connect</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-white/40 hover:text-white transition-colors cursor-pointer">LinkedIn</span></li>
              <li><span className="text-sm text-white/40 hover:text-white transition-colors cursor-pointer">GitHub</span></li>
              <li><span className="text-sm text-white/40 hover:text-white transition-colors cursor-pointer">Twitter / X</span></li>
              <li><span className="text-sm text-white/40 hover:text-white transition-colors cursor-pointer">hello@yasolution.com</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; 2026 Y&A Solution. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-white/30 hover:text-white/60 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="text-xs text-white/30 hover:text-white/60 transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
