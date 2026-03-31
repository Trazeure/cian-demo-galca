"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      setError("Por favor ingresa usuario y contraseña.");
      return;
    }
    setError("");
    router.push("/menu");
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleLogin();
  };

  const formFields = (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex flex-col gap-1.5">
        <label className="text-[#374151] text-sm font-medium">Usuario o correo</label>
        <input
          type="text"
          value={username}
          onChange={(e) => { setUsername(e.target.value); setError(""); }}
          onKeyDown={handleKey}
          className="w-full h-11 px-4 border border-[#d1d5db] rounded-lg text-sm text-[#111827] outline-none focus:border-[#008100] focus:ring-2 focus:ring-[#008100]/20 transition-all bg-white"
          placeholder="ej. juan@grupogalca.com"
          autoComplete="username"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[#374151] text-sm font-medium">Contraseña</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(""); }}
            onKeyDown={handleKey}
            className="w-full h-11 px-4 pr-11 border border-[#d1d5db] rounded-lg text-sm text-[#111827] outline-none focus:border-[#008100] focus:ring-2 focus:ring-[#008100]/20 transition-all bg-white"
            placeholder="••••••••"
            autoComplete="current-password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-[#374151] transition-colors"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </div>

      {error && <p className="text-red-500 text-xs -mt-2">{error}</p>}

      <div className="flex items-center justify-between">
        <label
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => setRememberMe(!rememberMe)}
        >
          <div
            className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 transition-all"
            style={{
              background: rememberMe ? "#008100" : "white",
              border: rememberMe ? "none" : "1.5px solid #d1d5db",
            }}
          >
            {rememberMe && (
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
          <span className="text-[#374151] text-sm">Recuérdame</span>
        </label>
        <button className="text-[#2d73b1] text-sm font-medium hover:underline">
          ¿Olvidaste la contraseña?
        </button>
      </div>

      <button
        onClick={handleLogin}
        className="w-full bg-[#008100] text-white text-sm font-semibold py-3 rounded-lg hover:bg-[#005900] active:scale-[0.98] transition-all duration-150 shadow-sm mt-1"
      >
        Iniciar sesión
      </button>
    </div>
  );

  return (
    <div className="min-h-screen flex">

      {/* ── LEFT — Form (desktop) ── */}
      <div className="hidden md:flex md:w-[42%] lg:w-[38%] bg-white flex-col justify-center px-10 lg:px-16 py-12 gap-8">
        <Image
          src="/cian-demo-galca/logo-dark.png"
          alt="Grupo Galca"
          width={155}
          height={38}
          className="object-contain"
          priority
          unoptimized
        />

        <div className="flex flex-col gap-1">
          <p className="text-[#9ca3af] text-lg">¡Bienvenido!</p>
          <h1 className="text-[#111827] text-[40px] font-normal leading-tight">
            Iniciar sesión
          </h1>
          <p className="text-[#6b7280] text-sm mt-1">
            Ingresa tus credenciales para acceder al sistema
          </p>
        </div>

        {formFields}

        <p className="text-[#9ca3af] text-xs text-center mt-2">
          © 2026 Grupo Galca — SCPA v1.0
        </p>
      </div>

      {/* ── RIGHT — Photo (desktop) — CSS background para máxima nitidez ── */}
      <div
        className="hidden md:flex md:w-[58%] lg:w-[62%] relative items-end p-10 lg:p-14"
        style={{
          backgroundImage: "url('/cian-demo-galca/login-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Gradiente overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0) 100%)",
          }}
        />
        {/* Texto inferior */}
        <div className="relative z-10">
          <p className="text-white text-2xl lg:text-3xl font-bold leading-snug max-w-md">
            Sistema de Capacitación y Procesos Administrativos
          </p>
          <p className="text-white/65 text-sm mt-2">Grupo Galca — Plataforma interna</p>
        </div>
      </div>

      {/* ── MOBILE — foto de fondo + card ── */}
      <div
        className="flex md:hidden w-full min-h-screen items-center justify-center p-5"
        style={{
          backgroundImage: "url('/cian-demo-galca/login-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 bg-white rounded-2xl px-7 py-8 w-full max-w-[400px] flex flex-col gap-6 shadow-2xl">
          <Image
            src="/cian-demo-galca/logo-dark.png"
            alt="Grupo Galca"
            width={140}
            height={34}
            className="object-contain mx-auto"
            unoptimized
          />
          <div className="flex flex-col gap-0.5">
            <p className="text-[#9ca3af] text-base">¡Bienvenido!</p>
            <h1 className="text-[#111827] text-3xl font-normal">Iniciar sesión</h1>
          </div>
          {formFields}
          <p className="text-[#9ca3af] text-xs text-center">© 2026 Grupo Galca</p>
        </div>
      </div>

    </div>
  );
}
