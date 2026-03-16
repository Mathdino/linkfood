 "use client";
import { motion } from "motion/react";

export default function KeywordHero({
  title,
  image,
}: {
  title: string;
  image?: string;
}) {
  return (
    <section className="relative pt-28">
      <div className="absolute inset-0 -z-10">
        <div
          className="w-full h-64 md:h-80 bg-cover bg-center"
          style={{
            backgroundImage: `url(${image || "/image-banner.png"})`,
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-red-900/10 blur-3xl" />
      </div>
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="h-64 md:h-80 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-3xl md:text-5xl font-bold text-center bg-black/40 px-6 py-3 rounded-2xl backdrop-blur-sm"
          >
            {title}
          </motion.h1>
        </div>
      </div>
    </section>
  );
}
