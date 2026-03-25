"use client";

interface AvatarProps {
  name?: string;
  role?: string;
}

export default function Avatar({ name = "Usuario", role = "Rol" }: AvatarProps) {
  const initial = name.charAt(0).toUpperCase();

  return (
    <div className="flex items-center gap-3 px-5 py-2.5 rounded-[30px] bg-white/10 backdrop-blur-sm">
      <div className="w-10 h-10 rounded-full bg-[#f4e04d] flex items-center justify-center flex-shrink-0">
        <span className="text-white font-semibold text-base leading-none">{initial}</span>
      </div>
      <div className="flex flex-col items-start">
        <span className="text-white font-bold text-[15px] leading-tight whitespace-nowrap">{name}</span>
        <span className="text-white/80 text-xs leading-tight whitespace-nowrap">{role}</span>
      </div>
    </div>
  );
}
