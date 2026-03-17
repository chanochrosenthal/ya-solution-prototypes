import { createContext, useContext, useState, type ReactNode } from "react";
import { brands, type BrandVariant } from "@/lib/brands";

interface BrandContextType {
  brand: BrandVariant;
  brandIndex: number;
  setBrandIndex: (index: number) => void;
}

const BrandContext = createContext<BrandContextType | null>(null);

export function BrandProvider({ children }: { children: ReactNode }) {
  const [brandIndex, setBrandIndex] = useState(0);
  const brand = brands[brandIndex];

  return (
    <BrandContext.Provider value={{ brand, brandIndex, setBrandIndex }}>
      {children}
    </BrandContext.Provider>
  );
}

export function useBrand() {
  const ctx = useContext(BrandContext);
  if (!ctx) throw new Error("useBrand must be used within BrandProvider");
  return ctx;
}
