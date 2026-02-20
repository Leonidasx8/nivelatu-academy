"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface StepProfileProps {
  onNext: () => void;
  onBack: () => void;
  formData: Record<string, string>;
  onChange: (field: string, value: string) => void;
}

const ROLES = ["Coach", "Consultor", "Docente", "Creador", "Emprendedor", "Otro"];
const INDUSTRIES = [
  "Marketing",
  "Negocios",
  "Salud",
  "Tecnología",
  "Arte",
  "Educación",
  "Otro",
];
const EXPERIENCE_LEVELS = ["Principiante", "Intermedio", "Avanzado", "Experto"];

function ChipGroup({
  options,
  selected,
  onToggle,
}: {
  options: string[];
  selected: string[];
  onToggle: (val: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const isSelected = selected.includes(opt);
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onToggle(opt)}
            className={cn(
              "px-3 py-1.5 rounded-full text-xs font-sans font-semibold transition-all duration-200",
              isSelected
                ? "bg-accent text-white border border-accent"
                : "border border-glass-border text-text-secondary hover:border-glass-border-hover hover:text-text-primary"
            )}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

export function StepProfile({ onNext, onBack, formData, onChange }: StepProfileProps) {
  const [roles, setRoles] = useState<string[]>([]);
  const [industries, setIndustries] = useState<string[]>([]);
  const [experienceIndex, setExperienceIndex] = useState(0);

  const toggleRole = (val: string) => {
    setRoles((prev) =>
      prev.includes(val) ? prev.filter((r) => r !== val) : [...prev, val]
    );
  };

  const toggleIndustry = (val: string) => {
    setIndustries((prev) =>
      prev.includes(val) ? prev.filter((i) => i !== val) : [...prev, val]
    );
  };

  const academyName = formData.academyName || "";

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-sans font-black text-text-primary mb-1">
          Cuéntanos sobre ti
        </h2>
        <p className="text-text-secondary font-body text-sm">
          Esto ayuda a tus agentes IA a personalizar el proceso
        </p>
      </div>

      {/* Academy name */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label className="text-text-secondary font-body text-xs">
            Nombre de tu academia
          </label>
          <span className="text-text-disabled font-body text-xs">
            {academyName.length}/60
          </span>
        </div>
        <input
          type="text"
          maxLength={60}
          placeholder="Ej: Academia de Marketing Digital Pro"
          value={academyName}
          onChange={(e) => onChange("academyName", e.target.value)}
          className="glass-input w-full rounded-lg px-4 py-3 text-text-primary font-body text-sm outline-none transition-all duration-200 placeholder:text-text-disabled"
        />
      </div>

      {/* Role chips */}
      <div>
        <label className="block text-text-secondary font-body text-xs mb-2.5">
          ¿Cuál es tu perfil? (selecciona los que apliquen)
        </label>
        <ChipGroup options={ROLES} selected={roles} onToggle={toggleRole} />
      </div>

      {/* Industry chips */}
      <div>
        <label className="block text-text-secondary font-body text-xs mb-2.5">
          ¿En qué industria o nicho se enfoca tu academia?
        </label>
        <ChipGroup
          options={INDUSTRIES}
          selected={industries}
          onToggle={toggleIndustry}
        />
      </div>

      {/* Experience slider */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="text-text-secondary font-body text-xs">
            Nivel de experiencia en tu área
          </label>
          <span className="text-accent font-sans font-semibold text-xs">
            {EXPERIENCE_LEVELS[experienceIndex]}
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={3}
          value={experienceIndex}
          onChange={(e) => setExperienceIndex(parseInt(e.target.value))}
          className="w-full accent-accent cursor-pointer"
        />
        <div className="flex justify-between mt-1.5">
          {EXPERIENCE_LEVELS.map((level, i) => (
            <span
              key={level}
              className={cn(
                "text-[10px] font-body transition-colors duration-200",
                i === experienceIndex ? "text-accent font-semibold" : "text-text-disabled"
              )}
            >
              {level}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 py-3.5 rounded-xl border border-glass-border text-text-secondary hover:text-text-primary hover:bg-glass-bg-hover font-sans font-semibold text-sm transition-all duration-200"
        >
          ← Volver
        </button>
        <button
          type="button"
          onClick={onNext}
          className="flex-[2] flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white font-sans font-semibold py-3.5 rounded-xl btn-glow transition-all duration-200 text-sm"
        >
          Continuar →
        </button>
      </div>
    </div>
  );
}
