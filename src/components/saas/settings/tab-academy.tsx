"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GlassCard } from "@/components/shared/glass-card";
import type { Academy } from "@/types/saas";
import { Upload } from "lucide-react";

interface TabAcademyProps {
  academy: Academy;
}

const TIMEZONES = [
  { value: "America/Mexico_City", label: "Ciudad de México (UTC-6)" },
  { value: "America/Bogota", label: "Bogotá (UTC-5)" },
  { value: "America/Lima", label: "Lima (UTC-5)" },
  { value: "America/Santiago", label: "Santiago (UTC-3)" },
  { value: "America/Buenos_Aires", label: "Buenos Aires (UTC-3)" },
  { value: "America/Caracas", label: "Caracas (UTC-4)" },
  { value: "Europe/Madrid", label: "Madrid (UTC+1)" },
];

const LANGUAGES = [
  { value: "es", label: "Español" },
  { value: "en", label: "English" },
  { value: "pt", label: "Português" },
];

export function TabAcademy({ academy }: TabAcademyProps) {
  const [name, setName] = useState(academy.name);
  const [description, setDescription] = useState(academy.description ?? "");
  const [primaryColor, setPrimaryColor] = useState(academy.primaryColor ?? "#FF6B00");
  const [timezone, setTimezone] = useState(academy.timezone);
  const [language, setLanguage] = useState("es");
  const DESC_MAX = 500;

  return (
    <div className="flex flex-col gap-6">
      <GlassCard className="p-5">
        <h3 className="text-sm font-semibold text-white mb-4">Información de la academia</h3>

        <div className="flex flex-col gap-4">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-xl bg-white/[0.04] border-2 border-dashed border-white/[0.12] flex items-center justify-center flex-shrink-0 hover:border-[#FF6B00]/40 transition-colors cursor-pointer group">
              <Upload className="w-5 h-5 text-[#6B7280] group-hover:text-[#FF6B00] transition-colors" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Logo de la academia</p>
              <p className="text-xs text-[#6B7280] mt-0.5">PNG, JPG o SVG. Máx 2MB.</p>
              <Button size="sm" variant="outline" className="border-white/10 text-[#9CA3AF] hover:text-white text-xs mt-2">
                Subir logo
              </Button>
            </div>
          </div>

          {/* Academy name */}
          <div className="space-y-1.5">
            <Label className="text-xs text-[#9CA3AF]">Nombre de la academia</Label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white/[0.04] border-white/[0.10] text-white focus:border-[#FF6B00]"
            />
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <Label className="text-xs text-[#9CA3AF]">Descripción</Label>
              <span className="text-xs text-[#6B7280]">{description.length}/{DESC_MAX}</span>
            </div>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={DESC_MAX}
              rows={3}
              placeholder="Describe brevemente de qué trata tu academia..."
              className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.10] text-white text-sm placeholder:text-[#4B5563] focus:border-[#FF6B00] focus:outline-none resize-none transition-colors"
            />
          </div>

          {/* Primary color */}
          <div className="space-y-1.5">
            <Label className="text-xs text-[#9CA3AF]">Color primario</Label>
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-lg border border-white/[0.15] flex-shrink-0 cursor-pointer"
                style={{ backgroundColor: primaryColor }}
              />
              <Input
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                placeholder="#FF6B00"
                className="bg-white/[0.04] border-white/[0.10] text-white focus:border-[#FF6B00] font-mono"
              />
            </div>
          </div>

          {/* Timezone */}
          <div className="space-y-1.5">
            <Label className="text-xs text-[#9CA3AF]">Zona horaria</Label>
            <Select value={timezone} onValueChange={setTimezone}>
              <SelectTrigger className="bg-white/[0.04] border-white/[0.10] text-white focus:border-[#FF6B00]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#141418] border-white/[0.10]">
                {TIMEZONES.map((tz) => (
                  <SelectItem key={tz.value} value={tz.value} className="text-[#9CA3AF] hover:text-white focus:text-white">
                    {tz.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Language */}
          <div className="space-y-1.5">
            <Label className="text-xs text-[#9CA3AF]">Idioma</Label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="bg-white/[0.04] border-white/[0.10] text-white focus:border-[#FF6B00]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#141418] border-white/[0.10]">
                {LANGUAGES.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value} className="text-[#9CA3AF] hover:text-white focus:text-white">
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            className="w-fit text-white font-semibold"
            style={{ backgroundColor: "#FF6B00" }}
          >
            Guardar cambios
          </Button>
        </div>
      </GlassCard>
    </div>
  );
}
