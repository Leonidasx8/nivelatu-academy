interface StatItemProps {
  value: string;
  label: string;
}

export function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-5xl font-sans font-black text-text-primary leading-none">
        {value}
      </span>
      <span className="text-sm font-body text-text-secondary">
        {label}
      </span>
    </div>
  );
}
