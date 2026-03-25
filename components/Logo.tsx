"use client";

interface LogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

export default function Logo({ variant = "dark", size = "md" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-[#2d3748]";
  const sizes = {
    sm: { circle: "w-7 h-7 text-xs", text: "text-sm" },
    md: { circle: "w-9 h-9 text-sm", text: "text-base" },
    lg: { circle: "w-11 h-11 text-base", text: "text-lg" },
  };

  return (
    <div className="flex items-center gap-2">
      <div
        className={`${sizes[size].circle} bg-[#008100] rounded-full flex items-center justify-center font-bold text-white flex-shrink-0`}
      >
        G
      </div>
      <span
        className={`${textColor} ${sizes[size].text} font-bold tracking-widest uppercase leading-tight`}
      >
        GRUPO GALCA
      </span>
    </div>
  );
}
