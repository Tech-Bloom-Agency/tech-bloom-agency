"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string | number;
  label?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  value,
  label,
  duration = 2,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    // Extraire la valeur numérique (enlève les %, +, etc.)
    const numericValue = parseFloat(value.toString().replace(/[^0-9.]/g, ""));
    if (isNaN(numericValue)) {
      // Remise à zéro si la prop `value` passe à une valeur non numérique.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplayValue(0);
      return;
    }

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // Ease-out quart
      const easeOut = 1 - Math.pow(1 - progress, 4);
      
      const currentValue = Math.floor(easeOut * numericValue);
      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(numericValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  // Formater la valeur pour l'affichage
  const formatValue = (val: number) => {
    const originalValue = value.toString();
    const hasDecimal = originalValue.includes(".");
    const suffix = originalValue.replace(/[0-9.]/g, "");
    
    if (hasDecimal) {
      return val + suffix;
    }
    return val.toLocaleString("fr-FR") + suffix;
  };

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <div className="text-5xl md:text-7xl font-bold text-red mb-2">
        {formatValue(displayValue)}
      </div>
      {label && (
        <div className="text-sm md:text-base font-medium uppercase tracking-widest text-gray">
          {label}
        </div>
      )}
    </div>
  );
}
