// src/components/shared/SectionDivider.tsx

interface SectionDividerProps {
  variant: 'dark-to-light' | 'light-to-dark';
}

export default function SectionDivider({ variant }: SectionDividerProps) {
  if (variant === 'dark-to-light') {
    return (
      <div className="w-full overflow-hidden leading-none bg-bg-primary">
        <svg 
          className="w-full h-16 md:h-28 text-bg-light block"
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,40 L1200,120 L0,120 Z" 
            fill="currentColor"
          ></path>
        </svg>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden leading-none bg-bg-light">
      <svg 
        className="w-full h-16 md:h-28 text-bg-primary block"
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
      >
        <path 
          d="M0,0 C200,90 400,-20 600,60 C800,140 1050,10 1200,50 L1200,120 L0,120 Z" 
          fill="currentColor"
        ></path>
      </svg>
    </div>
  );
}
