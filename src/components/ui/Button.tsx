// src/components/ui/Button.tsx

import type { ReactNode } from 'react';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost';
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ 
  variant, 
  href, 
  onClick, 
  children, 
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  const fullClass = `${baseClass} ${variantClass} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={fullClass}>
        {children}
      </a>
    );
  }
  
  return (
    <button type={type} onClick={onClick} className={fullClass}>
      {children}
    </button>
  );
}
