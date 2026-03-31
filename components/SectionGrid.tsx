"use client";

import PageCard from "./PageCard";
import { MenuItem } from "@/lib/constants";

interface SectionGridProps {
  title: string;
  color: string;
  items: MenuItem[];
  searchQuery: string;
  onCardClick?: (msg: string) => void;
}

export default function SectionGrid({ title, color, items, searchQuery, onCardClick }: SectionGridProps) {
  const filtered = searchQuery
    ? items.filter((item) => item.label.toLowerCase().includes(searchQuery.toLowerCase()))
    : items;

  if (filtered.length === 0) return null;

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Section header */}
      <div className="flex items-center gap-3">
        <div className="w-1 h-7 rounded-full flex-shrink-0" style={{ background: color }} />
        <h2 className="font-bold text-[#111827] text-[17px] leading-tight">{title}</h2>
        <span className="ml-auto text-[11px] text-[#9ca3af] font-medium bg-[#f3f4f6] px-2 py-0.5 rounded-full">
          {filtered.length}
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {filtered.map((item) => (
          <PageCard
            key={item.id}
            icon={item.icon}
            label={item.label}
            borderColor={color}
            navigateTo={item.navigateTo}
            onToast={onCardClick}
          />
        ))}
      </div>
    </div>
  );
}
