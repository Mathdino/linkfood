"use client";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function ContactPanel() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511999999999";
  const email =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "mmtheus69@gmail.com";
  const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+55 11 99999‑9999";
  const address = process.env.NEXT_PUBLIC_CONTACT_ADDRESS || "São Paulo, SP";
  const whatsappHref = `https://wa.me/${number}?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es`;

  const contacts = [
    { icon: Mail, label: "E-mail", value: email, href: `mailto:${email}` },
    {
      icon: Phone,
      label: "Telefone",
      value: phone,
      href: `tel:${phone.replace(/\D/g, "")}`,
    },
    { icon: MapPin, label: "Localização", value: address, href: undefined },
  ];

  return (
    <div className="my-12">
      {/* ── Outer card ── */}
      <div className="relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-gradient-to-br from-[#111118] to-[#0e0e14]">
        {/* Ambient glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(239,68,68,0.10) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(239,68,68,0.07) 0%, transparent 70%)",
          }}
        />

        {/* Top accent line */}
        <div
          aria-hidden
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(239,68,68,0.35), transparent)",
          }}
        />

        {/* ── Inner layout ── */}
        <div className="relative z-10 p-10 md:p-11 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center">
          {/* ── Left: info ── */}
          <div>
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-red-400 bg-red-500/[0.08] border border-red-500/20 px-3 py-1 rounded-full mb-4">
              <span
                className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"
                aria-hidden
              />
              Suporte
            </span>

            <h3 className="text-2xl font-bold text-white tracking-tight leading-tight">
              Entre em contato
            </h3>
            <p className="text-sm text-white/40 mt-2 leading-relaxed max-w-md">
              Fale com a equipe e tire suas dúvidas. Respondemos rápido!
            </p>

            {/* Contact cards */}
            <div className="mt-6 flex flex-col gap-2.5">
              {contacts.map(({ icon: Icon, label, value, href }) => {
                const Wrapper = href ? Link : "div";
                return (
                  <Wrapper
                    key={label}
                    {...(href ? { href } : {})}
                    className="group flex items-center gap-3.5 px-4 py-3 rounded-[14px] border border-white/[0.06] bg-white/[0.03] transition-all duration-200 hover:border-red-500/25 hover:bg-red-500/[0.04]"
                  >
                    {/* Icon box */}
                    <span className="flex-shrink-0 w-9 h-9 rounded-[10px] bg-red-500/10 border border-red-500/[0.18] flex items-center justify-center text-red-400 transition-colors group-hover:bg-red-500/[0.16]">
                      <Icon size={15} />
                    </span>
                    {/* Text */}
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-white/30 mb-0.5">
                        {label}
                      </p>
                      <p className="text-sm text-white/75 font-medium">
                        {value}
                      </p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>

            {/* Response time pill */}
            <div
              aria-hidden
              className="h-px mt-6 mb-5"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)",
              }}
            />
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.6)]" />
              <span className="text-xs text-white/25">
                Tempo médio de resposta: menos de 2 horas
              </span>
            </div>
          </div>

          {/* ── Right: CTAs ── */}
          <div className="flex flex-col gap-3 min-w-[200px]">
            {/* WhatsApp */}
            <Link
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="
                relative overflow-hidden inline-flex items-center justify-center gap-2.5
                px-6 py-3.5 rounded-full
                bg-gradient-to-br from-[#1adb60] to-[#0cb84e]
                text-white text-sm font-semibold tracking-[0.01em]
                shadow-[0_4px_20px_rgba(8,201,80,0.22)]
                transition-all duration-200
                hover:-translate-y-px hover:shadow-[0_8px_28px_rgba(8,201,80,0.35)]
                active:translate-y-0
                before:absolute before:inset-0 before:rounded-full
                before:bg-gradient-to-br before:from-white/10 before:to-transparent
              "
            >
              <MessageSquare size={16} />
              Falar no WhatsApp
            </Link>

            {/* E-mail */}
            <Link
              href={`mailto:${email}`}
              className="
                inline-flex items-center justify-center gap-2.5
                px-6 py-3.5 rounded-full
                border border-white/10
                text-white/55 text-sm font-medium
                transition-all duration-200
                hover:border-white/25 hover:text-white hover:bg-white/[0.05]
              "
            >
              <Mail size={15} />
              Enviar e‑mail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
