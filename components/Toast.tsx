"use client";

import { useEffect } from "react";
import { Info, CheckCircle, X } from "lucide-react";

interface ToastProps {
  message: string;
  type?: "info" | "success";
  onClose: () => void;
}

export default function Toast({ message, type = "info", onClose }: ToastProps) {
  useEffect(() => {
    const t = setTimeout(onClose, 3000);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div className="fixed bottom-20 md:bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fade-up px-4 w-full max-w-sm">
      <div
        className="flex items-center gap-3 w-full px-4 py-3 rounded-xl shadow-lg text-white text-sm font-medium"
        style={{ background: type === "success" ? "#008100" : "#1f2937" }}
      >
        {type === "success"
          ? <CheckCircle size={17} strokeWidth={1.8} className="flex-shrink-0" />
          : <Info size={17} strokeWidth={1.8} className="flex-shrink-0" />
        }
        <span className="flex-1 leading-snug">{message}</span>
        <button onClick={onClose} className="flex-shrink-0 opacity-70 hover:opacity-100">
          <X size={15} />
        </button>
      </div>
    </div>
  );
}
