"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export function AnimatedCounter({ from, to, duration = 2, suffix = "", prefix = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [started, setStarted] = useState(false);

  const spring = useSpring(from, {
    stiffness: 50,
    damping: 20,
    duration: duration * 1000,
  });

  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (inView && !started) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStarted(true);
      setTimeout(() => spring.set(to), 0);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, started, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
