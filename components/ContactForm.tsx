"use client";
import { useState } from "react";
import {
  Send,
  User,
  Mail,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(
    null,
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      setStatus({ ok: res.ok, msg: data.message || "Enviado" });
      if (res.ok) {
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch {
      setStatus({ ok: false, msg: "Falha ao enviar. Tente novamente." });
    } finally {
      setLoading(false);
    }
  }

  /* ── shared input classes ── */
  const inputBase =
    "w-full bg-white/[0.04] border border-white/[0.08] rounded-[14px] " +
    "text-white text-sm placeholder:text-white/20 outline-none caret-red-500 " +
    "transition-all duration-200 " +
    "hover:bg-white/[0.06] hover:border-white/[0.15] " +
    "focus:bg-red-500/[0.03] focus:border-red-500/40 focus:ring-[3px] focus:ring-red-500/10";

  return (
    <form
      onSubmit={onSubmit}
      aria-labelledby="contact-form-title"
      className="
        relative overflow-hidden
        bg-gradient-to-br from-[#111118] to-[#0e0e14]
        border border-white/[0.07] rounded-3xl
        px-8 py-10 md:px-11 md:py-11
        max-w-3xl
      "
    >
      {/* ── Ambient glows ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(239,68,68,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -left-16 w-52 h-52 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(239,68,68,0.05) 0%, transparent 70%)",
        }}
      />

      {/* ── Header ── */}
      <div className="relative z-10 mb-8">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-red-400 bg-red-500/[0.08] border border-red-500/20 px-3 py-1 rounded-full mb-4">
          <span
            className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"
            aria-hidden
          />
          Contato
        </span>
        <h3
          id="contact-form-title"
          className="text-[26px] font-bold text-white tracking-tight leading-tight"
        >
          Fale com a gente
        </h3>
        <p className="text-sm text-white/40 mt-1.5 leading-relaxed">
          Preencha os campos abaixo e retornaremos em breve.
        </p>
      </div>

      {/* ── Divider ── */}
      <div
        aria-hidden
        className="relative z-10 h-px mb-8"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)",
        }}
      />

      {/* ── Name + Email row ── */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Nome */}
        <div className="group">
          <label
            htmlFor="cf-name"
            className="block text-[11px] font-semibold uppercase tracking-[0.06em] text-white/35 mb-2 transition-colors group-focus-within:text-red-400/80"
          >
            Nome <span className="text-red-500/50">*</span>
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-white/20 transition-colors group-focus-within:text-red-400/60">
              <User size={15} />
            </span>
            <input
              id="cf-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Seu nome completo"
              className={`${inputBase} pl-10 pr-4 py-3`}
            />
          </div>
        </div>

        {/* E-mail */}
        <div className="group">
          <label
            htmlFor="cf-email"
            className="block text-[11px] font-semibold uppercase tracking-[0.06em] text-white/35 mb-2 transition-colors group-focus-within:text-red-400/80"
          >
            E-mail <span className="text-red-500/50">*</span>
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-white/20 transition-colors group-focus-within:text-red-400/60">
              <Mail size={15} />
            </span>
            <input
              id="cf-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="voce@empresa.com"
              className={`${inputBase} pl-10 pr-4 py-3`}
            />
          </div>
        </div>
      </div>

      {/* ── Mensagem ── */}
      <div className="relative z-10 group mb-7">
        <label
          htmlFor="cf-message"
          className="block text-[11px] font-semibold uppercase tracking-[0.06em] text-white/35 mb-2 transition-colors group-focus-within:text-red-400/80"
        >
          Mensagem <span className="text-red-500/50">*</span>
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute left-3.5 top-3.5 text-white/20 transition-colors group-focus-within:text-red-400/60">
            <MessageSquare size={15} />
          </span>
          <textarea
            id="cf-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            placeholder="Conte mais sobre sua necessidade"
            className={`${inputBase} pl-10 pr-4 py-3 resize-y`}
          />
        </div>
      </div>

      {/* ── Bottom row ── */}
      <div className="relative z-10 flex items-center justify-between gap-4 flex-wrap">
        <span className="text-xs text-white/20">
          Campos com <span className="text-red-500/50">*</span> são obrigatórios
        </span>

        <button
          type="submit"
          disabled={loading}
          className="
            relative overflow-hidden inline-flex items-center gap-2.5
            px-7 py-3.5 rounded-full
            bg-gradient-to-br from-red-500 to-red-600
            text-white text-sm font-semibold tracking-[0.01em]
            shadow-[0_4px_20px_rgba(239,68,68,0.25)]
            transition-all duration-200
            hover:-translate-y-px hover:shadow-[0_8px_28px_rgba(239,68,68,0.4)]
            active:translate-y-0 active:opacity-90
            disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0
            before:absolute before:inset-0
            before:bg-gradient-to-br before:from-white/10 before:to-transparent
          "
        >
          <Send
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
          {loading ? "Enviando…" : "Enviar mensagem"}
        </button>
      </div>

      {/* ── Status feedback ── */}
      {status && (
        <div
          role="status"
          aria-live="polite"
          className={`
            relative z-10 mt-5 flex items-center gap-2.5
            px-4 py-3 rounded-xl text-sm font-medium
            ${
              status.ok
                ? "bg-green-500/[0.08] border border-green-500/20 text-green-400"
                : "bg-red-500/[0.08] border border-red-500/20 text-red-400"
            }
          `}
        >
          {status.ok ? (
            <CheckCircle2 size={16} className="flex-shrink-0" />
          ) : (
            <AlertCircle size={16} className="flex-shrink-0" />
          )}
          {status.msg}
        </div>
      )}
    </form>
  );
}
