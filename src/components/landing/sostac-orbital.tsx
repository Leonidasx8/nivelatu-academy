import { SOSTAC_PHASES } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface SOSTACOrbitalProps {
  className?: string;
}

const PHASE_POSITIONS = [
  { cx: 200, cy: 60 },   // S - top
  { cx: 360, cy: 30 },   // O - top-right
  { cx: 390, cy: 190 },  // ST - right
  { cx: 300, cy: 320 },  // T - bottom-right
  { cx: 100, cy: 320 },  // A - bottom-left
  { cx: 10, cy: 190 },   // C - left
];

const CENTER = { cx: 200, cy: 185 };

export function SOSTACOrbital({ className }: SOSTACOrbitalProps) {
  return (
    <svg
      viewBox="0 0 410 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-full max-w-[400px]", className)}
      aria-label="Diagrama orbital SOSTAC"
    >
      {/* Outer orbital ring */}
      <ellipse
        cx={CENTER.cx}
        cy={CENTER.cy}
        rx="180"
        ry="150"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="1"
        strokeDasharray="4 6"
      />

      {/* Connection lines from center to each phase */}
      {SOSTAC_PHASES.map((phase, i) => {
        const pos = PHASE_POSITIONS[i];
        return (
          <line
            key={phase.letter}
            x1={CENTER.cx}
            y1={CENTER.cy}
            x2={pos.cx + 22}
            y2={pos.cy + 22}
            stroke={phase.color}
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity="0.35"
          />
        );
      })}

      {/* Center node */}
      <rect
        x={CENTER.cx - 44}
        y={CENTER.cy - 20}
        width="88"
        height="40"
        rx="8"
        fill="#141418"
        stroke="rgba(255,107,0,0.4)"
        strokeWidth="1.5"
      />
      <text
        x={CENTER.cx}
        y={CENTER.cy + 6}
        textAnchor="middle"
        fill="#FF6B00"
        fontSize="14"
        fontWeight="700"
        fontFamily="Inter, sans-serif"
        letterSpacing="2"
      >
        SOSTAC
      </text>

      {/* Phase nodes */}
      {SOSTAC_PHASES.map((phase, i) => {
        const pos = PHASE_POSITIONS[i];
        return (
          <g key={phase.letter}>
            {/* Glow circle */}
            <circle
              cx={pos.cx + 22}
              cy={pos.cy + 22}
              r="28"
              fill={phase.color}
              opacity="0.06"
            />
            {/* Node background */}
            <rect
              x={pos.cx}
              y={pos.cy}
              width="44"
              height="44"
              rx="8"
              fill="#141418"
              stroke={phase.color}
              strokeWidth="1.5"
            />
            {/* Phase letter */}
            <text
              x={pos.cx + 22}
              y={pos.cy + 17}
              textAnchor="middle"
              fill={phase.color}
              fontSize="12"
              fontWeight="700"
              fontFamily="Inter, sans-serif"
            >
              {phase.letter}
            </text>
            {/* Phase name */}
            <text
              x={pos.cx + 22}
              y={pos.cy + 30}
              textAnchor="middle"
              fill="rgba(255,255,255,0.5)"
              fontSize="7"
              fontFamily="Inter, sans-serif"
            >
              {phase.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
