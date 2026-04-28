import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const smoothX = useSpring(x, { stiffness: 80, damping: 22, mass: 0.4 });
  const smoothY = useSpring(y, { stiffness: 80, damping: 22, mass: 0.4 });

  useEffect(() => {
    const onMove = (event) => {
      x.set(event.clientX - 160);
      y.set(event.clientY - 160);
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-50 hidden h-80 w-80 rounded-full bg-electric/10 blur-3xl lg:block"
      style={{ x: smoothX, y: smoothY }}
    />
  );
}
