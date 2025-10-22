"use client";
import { useLang } from "@/providers/lang-provider";

export function LangSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex gap-2 text-sm">
      <button
        onClick={() => setLang("en")}
        className={`px-2 py-1 rounded ${
          lang === "en" ? "bg-primary text-white" : "text-muted-foreground"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("th")}
        className={`px-2 py-1 rounded ${
          lang === "th" ? "bg-primary text-white" : "text-muted-foreground"
        }`}
      >
        TH
      </button>
    </div>
  );
}
