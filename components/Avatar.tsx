"use client";

import { ChevronDown } from "lucide-react";

interface AvatarProps {
  name?: string;
  role?: string;
  onClick?: () => void;
}

export default function Avatar({ name = "Usuario", role = "Administrativo", onClick }: AvatarProps) {
  const initial = name.charAt(0).toUpperCase();
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2.5 px-3 py-2 rounded-xl border border-[#e2e8f0] bg-white hover:bg-[#f8fafc] hover:border-[#008100]/30 transition-all duration-150 group cursor-pointer"
    >
      <div className="w-8 h-8 rounded-full bg-[#008100] flex items-center justify-center flex-shrink-0 shadow-sm">
        <span className="text-white font-bold text-sm leading-none">{initial}</span>
      </div>
      <div className="flex flex-col items-start leading-none">
        <span className="text-[#1e1e1e] font-semibold text-[13px] whitespace-nowrap">{name}</span>
        <span className="text-[#6b7280] text-[11px] whitespace-nowrap mt-0.5">{role}</span>
      </div>
      <ChevronDown size={14} className="text-[#9ca3af] group-hover:text-[#008100] transition-colors ml-1" />
    </button>
  );
}
