// src/components/ui/Badge.tsx

interface BadgeProps {
  text: string;
  variant?: 'skill' | 'tech' | 'tech-lg';
}

export default function Badge({ text, variant = 'tech' }: BadgeProps) {
  const baseClass = 'badge';
  const sizeClass = variant === 'tech-lg' ? 'px-4 py-2 text-base' : '';
  
  return (
    <span className={`${baseClass} ${sizeClass}`}>
      {text}
    </span>
  );
}
