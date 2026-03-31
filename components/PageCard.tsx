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

  const handleClick = () => {
    if (navigateTo) {
      router.push(navigateTo);
    } else if (onToast) {
      onToast(`"${label}" — módulo en desarrollo`);
    }
  };

  return (
    <div
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
      className="bg-white flex flex-col items-center justify-center gap-2.5 min-h-[130px] px-4 py-5 cursor-pointer transition-all duration-200 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#008100]/40 rounded-r-sm"
      style={{
        borderLeft: `6px solid ${borderColor}`,
        boxShadow: "-4px 4px 20px 2px rgba(162, 162, 162, 0.2)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "-8px 8px 40px 4px rgba(162, 162, 162, 0.45)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "-4px 4px 20px 2px rgba(162, 162, 162, 0.2)";
      }}
    >
      <Icon size={42} color="#2d3748" strokeWidth={1.4} />
      <span className="text-[13px] text-center text-[#2d3748] font-normal leading-snug px-1">
        {label}
      </span>
    </div>
  );
}
