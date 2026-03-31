"use client";

import { useEffect } from "react";
import { CheckCircle, Info } from "lucide-react";

interface ToastProps {
  message: string;
  type?: "info" | "success";
  onClose: () => void;
}

export default function Toast({ message, type = "info", onClose }: ToastProps) {
  useEffect(() => {
    const t = setTimeout(onClose, 2500);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 animate-fade-up">
      <div
        className="flex items-center gap-3 px-5 py-3 rounded-xl shadow-lg text-white text-sm font-medium max-w-xs"
        style={{ background: type === "success" ? "#008100" : "#2d3748" }}
      >
        {type === "success"
          ? <CheckCircle size={18} strokeWidth={1.8} />
          : <Info size={18} strokeWidth={1.8} />
        }
        {message}
      </div>
    </div>
  );
}
