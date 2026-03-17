import { useBrand } from "@/contexts/BrandContext";
import { brands } from "@/lib/brands";
import { ChevronLeft, ChevronRight, Palette } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BrandSelector() {
  const { brandIndex, setBrandIndex, brand } = useBrand();
  const [open, setOpen] = useState(true);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 w-[420px] max-w-[95vw]"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-gray-500" />
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest font-['Space_Grotesk']">
                  Brand Variant
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
              >
                Minimize
              </button>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <button
                onClick={() =>
                  setBrandIndex(
                    (brandIndex - 1 + brands.length) % brands.length
                  )
                }
                className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex-1 text-center">
                <p className="text-sm font-semibold text-gray-900 font-['Space_Grotesk']">
                  {brand.name}
                </p>
                <p className="text-xs text-gray-500">{brand.subtitle}</p>
              </div>

              <button
                onClick={() =>
                  setBrandIndex((brandIndex + 1) % brands.length)
                }
                className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex gap-1.5 justify-center">
              {brands.map((b, i) => (
                <button
                  key={b.id}
                  onClick={() => setBrandIndex(i)}
                  className={`w-16 h-10 rounded-lg border-2 transition-all overflow-hidden ${
                    i === brandIndex
                      ? "border-gray-900 shadow-md scale-105"
                      : "border-gray-200 hover:border-gray-400 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={b.logo}
                    alt={b.name}
                    className="w-full h-full object-contain p-1"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setOpen(true)}
            className="bg-white rounded-full shadow-2xl border border-gray-200 p-3 hover:scale-110 transition-transform"
          >
            <Palette className="w-5 h-5 text-gray-700" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
