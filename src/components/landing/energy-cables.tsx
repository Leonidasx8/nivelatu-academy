import { cn } from "@/lib/utils";

interface EnergyCablesProps {
  className?: string;
}

export function EnergyCables({ className }: EnergyCablesProps) {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-full", className)}
      aria-hidden="true"
    >
      {/* Main horizontal cable */}
      <path
        d="M-50 300 Q200 280 400 300 Q600 320 850 300"
        stroke="#FF6B00"
        strokeWidth="1.5"
        strokeDasharray="10 5"
        className="animate-[cableFlow_6s_linear_infinite]"
        opacity="0.4"
      />
      {/* Upper arc cable */}
      <path
        d="M100 100 Q300 50 500 120 Q650 180 750 100"
        stroke="#FF6B00"
        strokeWidth="1"
        strokeDasharray="8 6"
        className="animate-[cableFlow_8s_linear_infinite]"
        opacity="0.25"
      />
      {/* Lower arc cable */}
      <path
        d="M0 450 Q200 500 400 440 Q580 380 800 460"
        stroke="#FF6B00"
        strokeWidth="1"
        strokeDasharray="12 4"
        className="animate-[cableFlow_10s_linear_infinite_reverse]"
        opacity="0.2"
      />
      {/* Diagonal cable top-left */}
      <path
        d="M0 0 Q100 150 200 300 Q300 450 400 600"
        stroke="#FF6B00"
        strokeWidth="1"
        strokeDasharray="6 8"
        className="animate-[cableFlow_7s_linear_infinite]"
        opacity="0.15"
      />
      {/* Diagonal cable top-right */}
      <path
        d="M800 0 Q700 150 600 300 Q500 450 400 600"
        stroke="#FF6B00"
        strokeWidth="1"
        strokeDasharray="6 8"
        className="animate-[cableFlow_9s_linear_infinite_reverse]"
        opacity="0.15"
      />
      {/* Node dots */}
      <circle cx="400" cy="300" r="3" fill="#FF6B00" opacity="0.6" className="animate-[nodeGlow_2s_ease-in-out_infinite]" />
      <circle cx="200" cy="280" r="2" fill="#FF6B00" opacity="0.4" />
      <circle cx="600" cy="320" r="2" fill="#FF6B00" opacity="0.4" />
      <circle cx="100" cy="100" r="1.5" fill="#FF6B00" opacity="0.3" />
      <circle cx="700" cy="100" r="1.5" fill="#FF6B00" opacity="0.3" />
    </svg>
  );
}
