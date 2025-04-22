// components/ParticleBackground.tsx
import { motion } from "motion/react";
import React from "react";

export const ParticleBackground = () => {
  const particles = Array.from({ length: 50 }).map((_, i) => (
    <motion.div
      key={i}
      style={{
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: '#2B6CB0',
        position: 'absolute',
        top: `${Math.random() * 100}vh`,
        left: `${Math.random() * 100}vw`,
        opacity: 0.2,
        zIndex: -1,
      }}
      animate={{
        y: [-15, 15, -15],
      }}
      transition={{
        duration: 5 + Math.random() * 5,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
    />
  ));

  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      {particles}
    </div>
  );
};
