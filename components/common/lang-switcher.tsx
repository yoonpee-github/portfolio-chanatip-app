"use client";
import { useLang } from "@/providers/lang-provider";
import { motion } from "framer-motion";

export function LangSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center gap-2">
      <div className="relative flex gap-1 bg-muted rounded-full p-1 overflow-hidden">
        <motion.div
          layout
          className="absolute top-1 left-1 w-[calc(50%-4px)] h-[calc(100%-8px)] bg-primary rounded-full z-0"
          animate={{
            x: lang === "en" ? 0 : "100%",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
        />
        <button
          onClick={() => setLang("en")}
          className={`relative z-10 flex items-center justify-center gap-1 px-3 py-1 rounded-full text-sm transition ${
            lang === "en" ? "text-white" : "text-muted-foreground"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLang("th")}
          className={`relative z-10 flex items-center justify-center gap-1 px-3 py-1 rounded-full text-sm transition ${
            lang === "th" ? "text-white" : "text-muted-foreground"
          }`}
        >
          TH
        </button>
      </div>
    </div>
  );
}
