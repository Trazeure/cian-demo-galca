"use client";

import PageCard from "./PageCard";
import { MenuItem } from "@/lib/constants";

interface SectionGridProps {
  title: string;
  color: string;
  items: MenuItem[];
  searchQuery: string;
}

export default function SectionGrid({ title, color, items, searchQuery }: SectionGridProps) {
  const filtered = searchQuery
    ? items.filter((item) =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : items;

  if (filtered.length === 0) return null;

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="inline-flex flex-col pb-4" style={{ borderBottom: `3px solid #008100` }}>
        <span className="font-bold text-[#2d3748] whitespace-nowrap" style={{ fontSize: "23px" }}>
          {title}
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((item) => (
          <PageCard
            key={item.id}
            icon={item.icon}
            label={item.label}
            borderColor={color}
            navigateTo={item.navigateTo}
          />
        ))}
      </div>
    </div>
  );
}
