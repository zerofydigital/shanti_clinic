"use client";

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  className = "",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // keyboard step when using arrow keys
  const STEP = 2; // percent

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const nextPosition = (x / rect.width) * 100;

    setSliderPosition(Math.min(Math.max(nextPosition, 0), 100));
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
    updatePosition(event.clientX);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(event.clientX);
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setIsDragging(false);
    event.currentTarget.releasePointerCapture?.(event.pointerId);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((p) => Math.max(0, p - STEP));
      e.preventDefault();
    } else if (e.key === "ArrowRight") {
      setSliderPosition((p) => Math.min(100, p + STEP));
      e.preventDefault();
    }
  };

  useEffect(() => {
    return () => setIsDragging(false);
  }, []);

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      role="slider"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(sliderPosition)}
      aria-label="Before / After slider"
      onKeyDown={handleKeyDown}
      className={`relative select-none overflow-hidden rounded-2xl shadow-soft-lg group cursor-ew-resize touch-none ${className}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {/* Base (Before) image - fills the container */}
      <img
        src={beforeImage}
        alt="Before Treatment"
        className="absolute inset-0 w-full h-full object-contain object-center pointer-events-none bg-muted/5"
      />

      {/* Before badge clipped to the visible before area */}
      <div
        className="absolute inset-y-0 left-0 pointer-events-none overflow-hidden"
        style={{ width: `${sliderPosition}%`, transition: isDragging ? "none" : "width 320ms cubic-bezier(.22,1,.36,1)" }}
      >
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-lg pointer-events-none uppercase tracking-wider">
          Before
        </div>
      </div>

      {/* After image overlay (visible from slider to right edge) */}
      <div
        className="absolute inset-y-0 right-0 overflow-hidden pointer-events-none"
        style={{ left: `${sliderPosition}%`, transition: isDragging ? "none" : "left 320ms cubic-bezier(.22,1,.36,1)" }}
      >
        <img
          src={afterImage}
          alt="After Treatment"
          className="absolute inset-0 w-full h-full object-contain object-center pointer-events-none bg-muted/5"
        />

        <div className="absolute top-4 right-4 bg-primary/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-lg pointer-events-none uppercase tracking-wider">
          After
        </div>
      </div>

      <div
        className="absolute inset-y-0 w-0.5 bg-white pointer-events-none"
        style={{ left: `${sliderPosition}%`, transition: isDragging ? "none" : "left 320ms cubic-bezier(.22,1,.36,1)" }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110 active:scale-95 border-2 border-primary">
          <MoveHorizontal className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
