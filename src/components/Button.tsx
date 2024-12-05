import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

export function Button({ href, children }: ButtonProps) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
    >
      {children}
      <ArrowRight className="w-4 h-4" />
    </a>
  );
}