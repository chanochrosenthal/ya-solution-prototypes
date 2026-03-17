/* 
 * Brand Configuration — Swiss Precision Tech Design System
 * Each variant derives its palette, logo, and hero from one of the 5 logo concepts.
 */

export interface BrandVariant {
  id: string;
  name: string;
  subtitle: string;
  logo: string;
  hero: string;
  accent: string;
  accentLight: string;
  accentDark: string;
  heroTextColor: "light" | "dark";
  navBg: string;
  navText: string;
  ctaBg: string;
  ctaText: string;
  sectionBg: string;
  cardBorder: string;
}

export const brands: BrandVariant[] = [
  {
    id: "geometric-monogram",
    name: "Concept 1 — Geometric Monogram",
    subtitle: "Angular Y&A fusion with navy-to-blue gradient",
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/95509065/A6VaLmJCJgb2gb6sz7viix/YA_concept1_geometric_monogram_74b3f5d7.png",
    hero: "https://d2xsxph8kpxj0f.cloudfront.net/95509065/A6VaLmJCJgb2gb6sz7viix/hero_abstract_tech_1-fc5NgbL3mfjefqeyppZkPT.webp",
    accent: "#2563EB",
    accentLight: "#DBEAFE",
    accentDark: "#0A1628",
    heroTextColor: "light",
    navBg: "#0A1628",
    navText: "#F8FAFC",
    ctaBg: "#2563EB",
    ctaText: "#FFFFFF",
    sectionBg: "#F1F5F9",
    cardBorder: "#2563EB",
  },
  {
    id: "circuit-network",
    name: "Concept 2 — Circuit Network",
    subtitle: "Hexagonal node structure with electric blue",
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/95509065/A6VaLmJCJgb2gb6sz7viix/YA_concept2_circuit_network_b6bf2ae9.png",
    hero: "https://d2xsxph8kpxj0f.cloudfront.net/95509065/A6VaLmJCJgb2gb6sz7viix/hero_abstract_tech_2-AfiYFwonKu54cbt4WkxA3y.webp",
    accent: "#2563EB",
    accentLight: "#E0E7FF",
    accentDark: "#0F172A",
    heroTextColor: "light",
    navBg: "#0F172A",
    navText: "#F8FAFC",
    ctaBg: "#2563EB",
    ctaText: "#FFFFFF",
    sectionBg: "#F0F4FF",
    cardBorder: "#475569",
  },
  {
    id: "bold-ampersand",
    name: "Concept 3 — Bold Ampersand",
    subtitle: "Cyan-to-blue gradient ampersand hero",
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/95509065/A6VaLmJCJgb2gb6sz7viix/YA_concept3_bold_ampersand_a25109f0.png",
    hero: "https://d2xsxph8kpxj0f.cloudfront.net/95509065/A6VaLmJCJgb2gb6sz7viix/hero_abstract_tech_3-niVKYabMyriQiiijmkTgmP.webp",
    accent: "#06B6D4",
    accentLight: "#CFFAFE",
    accentDark: "#1E293B",
    heroTextColor: "light",
    navBg: "#1E293B",
    navText: "#F8FAFC",
    ctaBg: "#06B6D4",
    ctaText: "#FFFFFF",
    sectionBg: "#F0FDFA",
    cardBorder: "#06B6D4",
  },
  {
    id: "negative-space",
    name: "Concept 4 — Negative Space",
    subtitle: "Clever Y&A cutout in midnight square",
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/95509065/A6VaLmJCJgb2gb6sz7viix/YA_concept4_negative_space_2b35362e.png",
    hero: "https://d2xsxph8kpxj0f.cloudfront.net/95509065/A6VaLmJCJgb2gb6sz7viix/hero_abstract_tech_4-ackYomCzVGurwbineEAfLJ.webp",
    accent: "#0F172A",
    accentLight: "#E2E8F0",
    accentDark: "#0F172A",
    heroTextColor: "light",
    navBg: "#0F172A",
    navText: "#F8FAFC",
    ctaBg: "#0F172A",
    ctaText: "#FFFFFF",
    sectionBg: "#F8FAFC",
    cardBorder: "#0F172A",
  },
  {
    id: "minimal-wordmark",
    name: "Concept 5 — Minimal Wordmark",
    subtitle: "Pure typography with blue accent line",
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/95509065/A6VaLmJCJgb2gb6sz7viix/YA_concept5_minimal_wordmark_79b73c7e.png",
    hero: "https://d2xsxph8kpxj0f.cloudfront.net/95509065/A6VaLmJCJgb2gb6sz7viix/hero_abstract_tech_5-N2oUKPDcpxymyGLeN3LFZZ.webp",
    accent: "#2563EB",
    accentLight: "#EFF6FF",
    accentDark: "#0A0A0A",
    heroTextColor: "dark",
    navBg: "#FFFFFF",
    navText: "#0A0A0A",
    ctaBg: "#0A0A0A",
    ctaText: "#FFFFFF",
    sectionBg: "#F9FAFB",
    cardBorder: "#2563EB",
  },
];
