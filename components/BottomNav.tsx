"use client";

import { Home, FileText, User } from "lucide-react";

export default function BottomNav() {
  return (
    <div
      className="sticky bottom-0 w-full flex items-center justify-around px-6 py-3 z-10"
      style={{
        background: "#f7fafc",
        borderTop: "1px solid #e2e8f0",
      }}
    >
      <button className="flex flex-col items-center gap-1 py-2 px-5 rounded-[10px] transition-opacity hover:opacity-70">
        <Home size={24} color="#4a5568" strokeWidth={1.5} />
        <span className="text-[#4a5568] text-[13px] font-normal">Inicio</span>
      </button>
      <button className="flex flex-col items-center gap-1 py-2 px-5 rounded-[10px] transition-opacity hover:opacity-70">
        <FileText size={24} color="#4a5568" strokeWidth={1.5} />
        <span className="text-[#4a5568] text-[13px] font-normal">Documentos</span>
      </button>
      <button className="flex flex-col items-center gap-1 py-2 px-5 rounded-[10px] transition-opacity hover:opacity-70">
        <User size={24} color="#4a5568" strokeWidth={1.5} />
        <span className="text-[#4a5568] text-[13px] font-normal">Perfil</span>
      </button>
    </div>
  );
}
