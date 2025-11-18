"use client";
import { useLang } from "@/providers/lang-provider";
import Image from "next/image";

interface ModalZoomProps {
  open: boolean;
  onClose: () => void;
  src?: string;
  title?: string;
}

export default function ModalZoom({
  open,
  onClose,
  src,
  title,
}: ModalZoomProps) {
  const { lang } = useLang();
  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0 z-50 flex items-center justify-center 
        bg-black/60 backdrop-blur-md animate-fade-in
      "
      onClick={onClose}
    >
      <div
        className="
          relative max-w-4xl w-[95%] max-h-[90vh] 
          rounded-2xl p-4 bg-white/10 backdrop-blur-xl 
          shadow-xl border border-white/20 
          animate-scale-in
        "
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="
            absolute top-3 right-3 px-3 py-1 rounded-lg 
            bg-white/80 hover:bg-white 
            shadow-sm text-sm
          "
        >
          {lang === "th" ? "ปิด" : "Close"}
        </button>
        <div className="flex flex-col items-center gap-2">
          <div className="w-full max-h-[80vh] overflow-hidden rounded-lg shadow-lg">
            {src ? (
              <Image
                src={src}
                alt={title || "certificate"}
                width={1400}
                height={900}
                className="w-full h-auto object-contain rounded"
              />
            ) : (
              <div className="w-full h-64 flex items-center justify-center bg-gray-200 rounded">
                {lang === "th" ? "ไม่มีรูปภาพ" : "No image"}
              </div>
            )}
          </div>
          {title && (
            <h3 className="text-white text-lg font-semibold">{title}</h3>
          )}
        </div>
      </div>
    </div>
  );
}
