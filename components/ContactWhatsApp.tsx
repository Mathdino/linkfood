import Link from "next/link";

export default function ContactWhatsApp() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511999999999";
  const href = `https://wa.me/${number}?text=Ol%C3%A1%2C%20vim%20pelo%20blog%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es`;

  return (
    <div className="my-10">
      <div className="relative overflow-hidden rounded-[22px] border border-white/[0.07] bg-gradient-to-br from-[#111118] to-[#0e0e14] px-8 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        {/* Left green border accent */}
        <div
          aria-hidden
          className="absolute left-0 top-3 bottom-3 w-[3px] rounded-r-[3px]"
          style={{ background: "linear-gradient(to bottom, #1adb60, #0cb84e)" }}
        />

        {/* Green ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-10 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(8,201,80,0.10) 0%, transparent 70%)",
          }}
        />

        {/* Top hairline */}
        <div
          aria-hidden
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)",
          }}
        />

        {/* ── Left: text ── */}
        <div className="relative z-10">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-green-400 bg-green-500/[0.08] border border-green-500/20 px-3 py-1 rounded-full mb-3">
            <span
              className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"
              aria-hidden
            />
            Online agora
          </span>
          <p className="text-[18px] font-bold text-white tracking-tight leading-tight">
            Precisa de ajuda agora?
          </p>
          <p className="text-sm text-white/38 mt-1.5 leading-relaxed">
            Fale com a gente no WhatsApp e tire suas dúvidas rapidamente.
          </p>
        </div>

        {/* ── Button ── */}
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="
            relative z-10 flex-shrink-0 overflow-hidden
            inline-flex items-center gap-2.5
            px-6 py-3.5 rounded-full
            bg-gradient-to-br from-[#1adb60] to-[#0cb84e]
            text-white text-sm font-semibold tracking-[0.01em]
            shadow-[0_4px_20px_rgba(8,201,80,0.22)]
            transition-all duration-200
            hover:-translate-y-px hover:shadow-[0_8px_28px_rgba(8,201,80,0.38)]
            active:translate-y-0
            before:absolute before:inset-0 before:rounded-full
            before:bg-gradient-to-br before:from-white/[0.13] before:to-transparent
          "
        >
          {/* WhatsApp logo */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
            className="flex-shrink-0"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Falar no WhatsApp
          {/* Arrow */}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
            className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
