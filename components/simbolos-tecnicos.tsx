"use client";

import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface SimboloProps {
  className?: string;
  size?: number;
}

// Componente para ver el símbolo en detalle
export const DetalleSimbolo = ({ 
  children, 
  title, 
  description 
}: { 
  children: ReactNode; 
  title: string;
  description?: string;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="hover:scale-110 transition-transform cursor-zoom-in focus:outline-none flex items-center justify-center">
          {children}
        </button>
      </DialogTrigger>
      <DialogContent className="w-[90vw] max-w-[600px] aspect-square flex flex-col items-center justify-center bg-white">
        <DialogHeader className="w-full text-center">
          <DialogTitle className="text-2xl font-bold text-blue-700">{title}</DialogTitle>
          {description && <p className="text-gray-500 text-sm mt-1">{description}</p>}
        </DialogHeader>
        <div className="flex-1 w-full flex items-center justify-center p-8 text-blue-600">
          {React.isValidElement(children) 
            ? React.cloneElement(children as React.ReactElement<any>, { size: 300, className: "w-full h-full max-w-[400px] max-h-[400px]" }) 
            : children}
        </div>
        <div className="text-center text-xs text-gray-400 mt-4">
          Simbología Técnica Oficial USAG
        </div>
      </DialogContent>
    </Dialog>
  );
};

// --- SIMBOLOS DE SALTO ---

export const SimboloSaltoExtendido = ({ className = "", size = 24 }: SimboloProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 20V4M8 8l4-4 4 4" />
    <line x1="8" y1="20" x2="16" y2="20" />
  </svg>
);

export const SimboloResorte = ({ className = "", size = 24 }: SimboloProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    <path d="M16 12l4 4-4 4" />
    <circle cx="4" cy="12" r="1" fill="currentColor" />
  </svg>
);

// --- SIMBOLOS DE BARRAS ---

export const SimboloKip = ({ className = "", size = 24 }: SimboloProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 18l8-12 8 12" />
    <path d="M12 6v12" strokeDasharray="2 2" />
  </svg>
);

export const SimboloVueltaAtras = ({ className = "", size = 24 }: SimboloProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="8" />
    <path d="M12 4a8 8 0 0 1 8 8" strokeWidth="3" />
    <path d="M20 12l-3-3m3 3l-3 3" />
  </svg>
);

export const SimboloVueltaApoyoLibre = ({ className = "", size = 24 }: SimboloProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="8" />
    <line x1="12" y1="2" x2="12" y2="10" />
    <path d="M8 12h8" />
  </svg>
);

export const SimboloStalder = ({ className = "", size = 24 }: SimboloProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="8" />
    <path d="M7 7l5 5 5-5" />
    <path d="M12 12v8" />
  </svg>
);

export const SimboloSubBalanceo = ({ className = "", size = 24 }: SimboloProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4c0 8 16 8 16 0" />
    <path d="M18 6l2-2-2-2" />
  </svg>
);

// --- SIMBOLOS DE VIGA ---

export const SimboloArabesca = ({ className = "", size = 24 }: SimboloProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="20" x2="12" y2="4" />
    <path d="M12 10l8-4" />
    <path x1="10" y1="20" x2="14" y2="20" />
  </svg>
);

export const SimboloSissonne = ({ className = "", size = 24 }: SimboloProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 16l4-8 4 8 4-8 4 8" />
  </svg>
);

// --- SIMBOLOS DE SUELO / GENERALES ---

export const SimboloHandstand = ({ className = "", size = 24 }: SimboloProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="4" x2="12" y2="16" />
    <path d="M8 20h8" />
    <circle cx="12" cy="2" r="1" fill="currentColor" />
  </svg>
);

export const SimboloRedondilla = ({ className = "", size = 24 }: SimboloProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8" />
    <path d="M12 4l-2 4h4l-2-4z" />
    <path d="M12 20l2-4h-4l2 4z" />
  </svg>
);

export const SimboloFlicFlac = ({ className = "", size = 24 }: SimboloProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 12c0-5.5-4.5-10-10-10S2 6.5 2 12s4.5 10 10 10" />
    <path d="M12 22l-4-4h8l-4 4z" />
  </svg>
);

export const SimboloSplit = ({ angle = "180", className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 16l8-8 8 8" />
    <text x="12" y="22" fontSize="8" textAnchor="middle" fill="currentColor" stroke="none">{angle}°</text>
  </svg>
);

export const SimboloMortalAtras = ({ className = "", size = 24 }: SimboloProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="8" />
    <path d="M12 4v4" />
    <path d="M12 16v4" />
    <path d="M4 12h4" />
    <path d="M16 12h4" />
  </svg>
);

export const SimboloCartwheel = ({ className = "", size = 24 }: SimboloProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2L4 22h16L12 2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
