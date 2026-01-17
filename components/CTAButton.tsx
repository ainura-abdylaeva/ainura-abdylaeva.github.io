import React from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
}

export function CTAButton({ children, href, variant = 'primary', icon }: CTAButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-full w-full transition-all shadow-lg";
  
  const variants = {
    primary: "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]",
    secondary: "bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50 active:scale-[0.98]"
  };

  return (
    <a 
      href={href}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {icon && icon}
      {children}
    </a>
  );
}
