// src/components/ui/StatCard.tsx

interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-accent-primary mb-2">
        {value}
      </div>
      <p className="text-text-secondary text-sm">{label}</p>
    </div>
  );
}
