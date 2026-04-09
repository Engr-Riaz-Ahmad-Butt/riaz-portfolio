"use client"; // Required for state and event handlers

import * as React from "react";
import { mergeClasses as cn } from "@/lib/utils";

// --- PROPS INTERFACE ---
export interface InteractiveProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  logoUrl: string;
  title: string;
  description: string;
  price: string;
}

// --- COMPONENT DEFINITION ---
export function InteractiveProductCard({
  className,
  imageUrl,
  logoUrl,
  title,
  description,
  price,
  ...props
}: InteractiveProductCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [style, setStyle] = React.useState<React.CSSProperties>({});

  // --- MOUSE MOVE HANDLER ---
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = (y - height / 2) / (height / 2) * -8; // Max rotation 8deg
    const rotateY = (x - width / 2) / (width / 2) * 8;   // Max rotation 8deg

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: "transform 0.1s ease-out",
      transformStyle: "preserve-3d"
    });
  };

  // --- MOUSE LEAVE HANDLER ---
  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.4s ease-in-out",
      transformStyle: "preserve-3d"
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={cn(
        "relative w-full max-w-[340px] aspect-[9/12] rounded-3xl bg-[#09090b] shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden",
        "transform-style-3d", // Enables 3D transformations for children
        className
      )}
      {...props}
    >
      {/* Background Image - scales slightly to avoid showing edges on tilt */}
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover rounded-3xl transition-transform duration-300 group-hover:scale-110 opacity-70"
        style={{ transform: "translateZ(-20px) scale(1.1)" }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 rounded-3xl" />

      {/* Main Content with 3D effect */}
      <div
        className="absolute inset-0 p-5 flex flex-col"
        style={{ transform: "translateZ(40px)" }}
      >
        {/* Glassmorphism Header */}
        <div className="flex items-start justify-between rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-white leading-tight">{title}</h3>
            <p className="text-xs text-white/70 mt-1">{description}</p>
          </div>
          <img src={logoUrl} alt="Brand Logo" className="h-8 w-auto bg-white/20 p-1 rounded-md ml-2" />
        </div>

        {/* Price Tag - Absolute position for pixel perfection */}
        <div className="absolute top-[108px] left-5">
          <div className="rounded-full bg-blue-600 border border-blue-400/30 px-3 py-1.5 text-xs font-semibold text-white shadow-[0_0_15px_rgba(37,99,235,0.5)] backdrop-blur-sm">
            {price}
          </div>
        </div>

        {/* Pagination Dots - Pushed to the bottom */}
        <div className="mt-auto flex w-full justify-end gap-2 pb-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className={cn(
                "h-1.5 w-1.5 rounded-full",
                index === 0 ? "bg-white shadow-[0_0_5px_white]" : "bg-white/30"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
