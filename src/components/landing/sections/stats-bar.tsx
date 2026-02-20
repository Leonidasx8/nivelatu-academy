import { StatItem } from "../stat-item";

const STATS = [
  { value: "200+", label: "academias lanzadas" },
  { value: "7", label: "agentes de IA" },
  { value: "90", label: "días promedio" },
  { value: "SOSTAC", label: "metodología probada" },
];

export function StatsBar() {
  return (
    <section className="bg-bg-card border-y border-glass-border py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <StatItem key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
