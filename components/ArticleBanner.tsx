import Link from "next/link";
import Image from "next/image";

interface ArticleBannerProps {
  title: string;
  subtitle?: string;
  image: string;
  backHref?: string;
  backLabel?: string;
  category?: string;
  readTime?: string;
}

export default function ArticleBanner({
  title,
  subtitle,
  image,
  backHref = "/blog",
  backLabel = "Voltar ao Blog",
  category = "Guia",
  readTime = "5 min de leitura",
}: ArticleBannerProps) {
  return (
    <section
      aria-label="Banner do artigo"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "clamp(340px, 52vw, 560px)" }}
    >
      {/* ── Background image ── */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* ── Dark overlay — two layers for depth ── */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.55) 50%, rgba(10,10,10,0.88) 100%)",
        }}
      />
      {/* subtle left vignette */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(10,10,10,0.6) 0%, transparent 60%)",
        }}
      />

      {/* ── Red accent line at bottom ── */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-[3px]"
        style={{
          background:
            "linear-gradient(to right, #ef4444 0%, #dc2626 40%, transparent 100%)",
        }}
      />

      {/* ── Content ── */}
      <div
        className="relative z-10 flex h-full flex-col justify-between px-4 sm:px-8 md:px-14 lg:px-24 pt-7 pb-10 md:pb-14"
        style={{ minHeight: "clamp(340px, 52vw, 560px)" }}
      >
        {/* Top row — back button */}
        <div>
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors group w-fit"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm group-hover:bg-white/20 group-hover:border-white/40 transition-all">
              <svg
                className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
            </span>
            <span className="font-medium tracking-wide">{backLabel}</span>
          </Link>
        </div>

        {/* Bottom — title block */}
        <div className="max-w-3xl">
          {/* Badges row */}
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-red-400 bg-red-500/10 border border-red-500/25 px-3 py-1 rounded-full backdrop-blur-sm">
              <span
                aria-hidden
                className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"
              />
              {category}
            </span>
            <span className="text-xs text-white/40 font-medium">
              {readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-lg">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed max-w-xl">
              {subtitle}
            </p>
          )}

          {/* Decorative separator */}
          <div className="mt-6 flex items-center gap-3">
            <div className="h-px w-10 bg-red-500" />
            <div className="h-px w-4 bg-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
