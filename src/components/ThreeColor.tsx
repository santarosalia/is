import { motion } from "framer-motion";

export const ThreeColor = () => {
  return (
    <span
      className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      style={{ zIndex: 2 }}
    >
      {/* 빨강 원 */}
      <motion.span
        className="absolute"
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: "rgba(255,0,0,1)",
          mixBlendMode: "screen",
        }}
        animate={{
          x: [Math.random() * -30 - 20, 0, Math.random() * 30 + 20],
          y: [Math.random() * -20 - 10, 0, Math.random() * 20 + 10],
          scale: [1.2, 1.7, 1.2],
          opacity: [0.85, 1, 0.85],
          background: ["rgba(255,0,0,1)", "rgba(255,0,0,1)", "rgba(255,0,0,1)"],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
      {/* 초록 원 */}
      <motion.span
        className="absolute"
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: "rgba(0,255,0,1)",
          mixBlendMode: "screen",
        }}
        animate={{
          x: [Math.random() * 30 + 20, 0, Math.random() * -30 - 20],
          y: [Math.random() * -20 - 10, 0, Math.random() * 20 + 10],
          scale: [1.2, 1.7, 1.2],
          opacity: [0.85, 1, 0.85],
          background: ["rgba(0,255,0,1)", "rgba(0,255,0,1)", "rgba(0,255,0,1)"],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
      {/* 파랑 원 */}
      <motion.span
        className="absolute"
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: "rgba(0,0,255,1)",
          mixBlendMode: "screen",
        }}
        animate={{
          x: [Math.random() * 20 - 10, 0, Math.random() * -20 + 10],
          y: [Math.random() * 30 + 20, 0, Math.random() * -30 - 20],
          scale: [1.2, 1.7, 1.2],
          opacity: [0.85, 1, 0.85],
          background: ["rgba(0,0,255,1)", "rgba(0,0,255,1)", "rgba(0,0,255,1)"],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
    </span>
  );
};
