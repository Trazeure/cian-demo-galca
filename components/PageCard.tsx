"use client";

import {
  FileText, ListChecks, BookOpen, Library, ScrollText,
  Calendar, GraduationCap, ClipboardList, Wrench, Hammer,
  LayoutDashboard, Activity, Landmark, Building2, Target,
  Network, Gavel, ClipboardCheck, Share2, Mail, LucideProps,
} from "lucide-react";
import { useRouter } from "next/navigation";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  FileText, ListChecks, BookOpen, Library, ScrollText,
  Calendar, GraduationCap, ClipboardList, Wrench, Hammer,
  LayoutDashboard, Activity, Landmark, Building2, Target,
  Network, Gavel, ClipboardCheck, Share2, Mail,
};

interface PageCardProps {
  icon: string;
  label: string;
  borderColor: string;
  navigateTo?: string;
  onToast?: (msg: string) => void;
}

export default function PageCard({ icon, label, borderColor, navigateTo, onToast }: PageCardProps) {
  const router = useRouter();
  const Icon = iconMap[icon] || FileText;
  const isClickable = !!navigateTo;

  const handleClick = () => {
    if (navigateTo) router.push(navigateTo);
    else if (onToast) onToast(`"${label}" — próximamente disponible`);
  };

  return (
    <div
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
      className={`relative bg-white flex flex-col items-center justify-center gap-3 min-h-[130px] px-4 py-5 cursor-pointer transition-all duration-200 group outline-none focus-visible:ring-2 focus-visible:ring-[#008100]/40 rounded-r-md overflow-hidden`}
      style={{ borderLeft: `5px solid ${borderColor}`, boxShadow: "0 1px 4px rgba(0,0,0,0.07), -2px 2px 12px rgba(0,0,0,0.05)" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px rgba(0,0,0,0.1), -4px 4px 20px rgba(0,0,0,0.08)`;
        (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 4px rgba(0,0,0,0.07), -2px 2px 12px rgba(0,0,0,0.05)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {/* Accent background on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ background: `linear-gradient(135deg, ${borderColor}08 0%, transparent 60%)` }}
      />

      {/* Navigate indicator */}
      {isClickable && (
        <span
          className="absolute top-2 right-2 text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full text-white"
          style={{ background: borderColor }}
        >
          Ir
        </span>
      )}

      <Icon size={38} strokeWidth={1.4} style={{ color: "#374151", position: "relative" }} />
      <span className="text-[12.5px] text-center text-[#374151] font-medium leading-snug px-1 relative">
        {label}
      </span>
    </div>
  );
}
