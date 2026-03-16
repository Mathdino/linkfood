 "use client";
import { motion } from "motion/react";

export default function AnimatedSectionTitle({
  children,
}: {
  children: string;
}) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
      className="text-2xl md:text-3xl font-bold relative inline-block"
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute -z-0 inset-x-0 -bottom-1 h-2 bg-gradient-to-r from-red-500/40 via-red-700/40 to-red-500/40 rounded-full blur-[2px]" />
    </motion.h2>
  );
}
