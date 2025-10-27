"use client";
import { useLang } from "@/providers/lang-provider";
import { motion } from "framer-motion";

const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export function LangSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center gap-2 isolate">
      <motion.div
        custom={1}
        initial="hidden"
        animate="visible"
        variants={navItemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative flex gap-1 bg-muted rounded-full p-1 overflow-hidden min-w-[100px] shadow-sm">
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
            className={`relative z-10 flex items-center justify-center w-1/2 px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              lang === "en" ? "text-white" : "text-muted-foreground"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLang("th")}
            className={`relative z-10 flex items-center justify-center w-1/2 px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              lang === "th" ? "text-white" : "text-muted-foreground"
            }`}
          >
            TH
          </button>
        </div>
      </motion.div>
    </div>
  );
}
