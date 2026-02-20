"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { GlassCard } from "@/components/shared/glass-card";
import { ChipSelector } from "@/components/shared/forms/chip-selector";
import type { User } from "@/types/saas";
import { cn } from "@/lib/utils";
import { Camera } from "lucide-react";

interface TabProfileProps {
  user: User;
}

const ROLE_OPTIONS = [
  { value: "Coach", label: "Coach" },
  { value: "Consultor", label: "Consultor" },
  { value: "Docente", label: "Docente" },
  { value: "Creador", label: "Creador" },
  { value: "Emprendedor", label: "Emprendedor" },
];
const INDUSTRY_OPTIONS = [
  { value: "Marketing", label: "Marketing" },
  { value: "Negocios", label: "Negocios" },
  { value: "Salud", label: "Salud" },
  { value: "Tecnología", label: "Tecnología" },
  { value: "Arte", label: "Arte" },
  { value: "Educación", label: "Educación" },
];
const EXPERIENCE_LEVELS = [
  { value: "beginner", label: "Principiante" },
  { value: "intermediate", label: "Intermedio" },
  { value: "advanced", label: "Avanzado" },
  { value: "expert", label: "Experto" },
];

export function TabProfile({ user }: TabProfileProps) {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [roles, setRoles] = useState<string[]>(user.role);
  const [industries, setIndustries] = useState<string[]>(user.industry);
  const [experienceLevel, setExperienceLevel] = useState(user.experienceLevel);
  const [bio, setBio] = useState("");
  const BIO_MAX = 280;

  return (
    <div className="flex flex-col gap-6">
      {/* Avatar & name */}
      <GlassCard className="p-5">
        <h3 className="text-sm font-semibold text-white mb-4">Información personal</h3>

        <div className="flex flex-col sm:flex-row gap-4 mb-5">
          {/* Avatar */}
          <div className="flex flex-col items-center gap-2 flex-shrink-0">
            <div className="w-20 h-20 rounded-full bg-white/[0.06] border-2 border-white/[0.10] flex items-center justify-center relative group cursor-pointer hover:border-[#FF6B00]/40 transition-colors">
              <span className="text-3xl">
                {user.firstName.charAt(0)}{user.lastName.charAt(0)}
              </span>
              <div className="absolute inset-0 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Camera className="w-5 h-5 text-white" />
              </div>
            </div>
            <Button size="sm" variant="outline" className="border-white/10 text-[#9CA3AF] hover:text-white text-xs">
              Cambiar
            </Button>
          </div>

          {/* Name fields */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="text-xs text-[#9CA3AF]">Nombre</Label>
              <Input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-white/[0.04] border-white/[0.10] text-white focus:border-[#FF6B00]"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs text-[#9CA3AF]">Apellido</Label>
              <Input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="bg-white/[0.04] border-white/[0.10] text-white focus:border-[#FF6B00]"
              />
            </div>
          </div>
        </div>

        <Separator className="bg-white/[0.06] mb-5" />

        {/* Role chips */}
        <div className="mb-5">
          <Label className="text-xs text-[#9CA3AF] mb-2 block">Rol profesional</Label>
          <ChipSelector
            options={ROLE_OPTIONS}
            selected={roles}
            onChange={setRoles}
          />
        </div>

        {/* Industry chips */}
        <div className="mb-5">
          <Label className="text-xs text-[#9CA3AF] mb-2 block">Industria</Label>
          <ChipSelector
            options={INDUSTRY_OPTIONS}
            selected={industries}
            onChange={setIndustries}
          />
        </div>

        {/* Experience level slider */}
        <div className="mb-5">
          <Label className="text-xs text-[#9CA3AF] mb-3 block">Nivel de experiencia</Label>
          <div className="grid grid-cols-4 gap-2">
            {EXPERIENCE_LEVELS.map((level) => (
              <button
                key={level.value}
                onClick={() => setExperienceLevel(level.value as User["experienceLevel"])}
                className={cn(
                  "px-3 py-2 rounded-lg text-xs font-medium border transition-all duration-150",
                  experienceLevel === level.value
                    ? "border-[#FF6B00]/60 bg-[#FF6B00]/10 text-[#FF6B00]"
                    : "border-white/[0.08] text-[#6B7280] hover:border-white/20 hover:text-[#9CA3AF]"
                )}
              >
                {level.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bio */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-1.5">
            <Label className="text-xs text-[#9CA3AF]">Bio</Label>
            <span className={cn("text-xs", bio.length > BIO_MAX ? "text-[#EF4444]" : "text-[#6B7280]")}>
              {bio.length}/{BIO_MAX}
            </span>
          </div>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            maxLength={BIO_MAX}
            rows={3}
            placeholder="Cuéntanos sobre ti y tu experiencia..."
            className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.10] text-white text-sm placeholder:text-[#4B5563] focus:border-[#FF6B00] focus:outline-none resize-none transition-colors"
          />
        </div>

        <Button
          className="text-white font-semibold"
          style={{ backgroundColor: "#FF6B00" }}
        >
          Guardar cambios
        </Button>
      </GlassCard>
    </div>
  );
}
