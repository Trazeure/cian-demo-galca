"use client";

import {
  FileText, ListChecks, BookOpen, Library, ScrollText,
  Calendar, GraduationCap, ClipboardList, Wrench, Hammer,
  LayoutDashboard, Activity, Landmark, Building2, Target,
  Network, Gavel, ClipboardCheck, Share2, Mail, LucideProps,
} from "lucide-react";
import { useRouter } from "next/navigation";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  FileText,
  ListChecks,
  BookOpen,
  Library,
  ScrollText,
  Calendar,
  GraduationCap,
  ClipboardList,
  Wrench,
  Hammer,
  LayoutDashboard,
  Activity,
  Landmark,
  Building2,
  Target,
  Network,
  Gavel,
  ClipboardCheck,
  Share2,
  Mail,
};

interface PageCardProps {
  icon: string;
  label: string;
  borderColor: string;
  navigateTo?: string;
}

export default function PageCard({ icon, label, borderColor, navigateTo }: PageCardProps) {
  const router = useRouter();
  const Icon = iconMap[icon] || FileText;

  return (
    <div
      onClick={() => navigateTo && router.push(navigateTo)}
      className="bg-white flex flex-col items-center justify-center gap-2.5 min-h-[130px] px-4 py-5 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 group"
      style={{
        borderLeft: `6px solid ${borderColor}`,
        boxShadow: "-4px 4px 20px 2px rgba(162, 162, 162, 0.2)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "-10px 10px 100px 5px rgba(162, 162, 162, 0.5)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "-4px 4px 20px 2px rgba(162, 162, 162, 0.2)";
      }}
    >
      <Icon size={44} color="#2d3748" strokeWidth={1.4} />
      <span className="text-[14px] text-center text-black font-normal leading-snug">
        {label}
      </span>
    </div>
  );
}
