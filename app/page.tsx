"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useMotionValue, useTransform } from "motion/react";

// Dynamically import components to avoid SSR issues with GSAP/window
const SplitText = dynamic(() => import("@/components/SplitText"), {
  ssr: false,
});
const AnimatedContent = dynamic(() => import("@/components/AnimatedContent"), {
  ssr: false,
});
const CardSwap = dynamic(() => import("@/components/CardSwap"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});
const CountUp = dynamic(() => import("@/components/CountUp"), { ssr: false });
const FadeContent = dynamic(() => import("@/components/FadeContent"), {
  ssr: false,
});
const FaultyTerminal = dynamic(() => import("@/components/FaultyTerminal"), {
  ssr: false,
});
const GlareHover = dynamic(() => import("@/components/GlareHover"), {
  ssr: false,
});
const RotatingText = dynamic(() => import("@/components/RotatingText"), {
  ssr: false,
});
const ScrollFloat = dynamic(() => import("@/components/ScrollFloat"), {
  ssr: false,
});
const StaggeredMenu = dynamic(() => import("@/components/StaggeredMenu"), {
  ssr: false,
});
const StarBorder = dynamic(() => import("@/components/StarBorder"), {
  ssr: false,
});
const DotGrid = dynamic(() => import("@/components/DotGrid"), {
  ssr: false,
});
import { Card as SwapCard } from "@/components/CardSwap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ChevronDown,
  ArrowUpRight,
  ChartNoAxesCombined,
  Utensils,
  Sun,
  Moon,
  Pencil,
  Trash2,
  UtensilsCrossed,
  Ticket,
  Package,
  User,
  DollarSign,
  ClipboardList,
} from "lucide-react";

type HowItWorksStep = {
  title: string;
  description: string;
};

const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    title: "Schedule kickoff",
    description:
      "Align on scope, structure, and timeline. Whether it’s a quick setup or a full migration, we’ll take it from there.",
  },
  {
    title: "Real-time collaboration",
    description:
      "Work alongside our team with full visibility. Every step follows best practices and thorough QA to ensure quality.",
  },
  {
    title: "Launch and scale",
    description:
      "Go live with confidence. Our AI continuously learns and improves, helping your team scale effortlessly.",
  },
];

function HowItWorksTimeline() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const computeProgress = () => {
      const rect = container.getBoundingClientRect();
      const viewHeight = window.innerHeight || 1;
      const sectionTop = window.scrollY + rect.top;
      const sectionHeight = rect.height || 1;
      const scrollY = window.scrollY + viewHeight * 0.35;

      let raw =
        (scrollY - sectionTop) / (sectionHeight - viewHeight * 0.4 || 1);
      raw = Math.min(1, Math.max(0, raw));
      setProgress(raw);

      let currentIndex = 0;

      stepRefs.current.forEach((el, index) => {
        if (!el) return;

        const top = el.offsetTop + container.offsetTop;

        if (scrollY >= top - viewHeight * 0.35) {
          currentIndex = index;
        }
      });

      setActiveIndex(currentIndex);
    };

    computeProgress();
    window.addEventListener("scroll", computeProgress);
    window.addEventListener("resize", computeProgress);

    return () => {
      window.removeEventListener("scroll", computeProgress);
      window.removeEventListener("resize", computeProgress);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Linha central */}
      <div className="absolute left-4 md:left-6 top-6 h-[420px] md:h-[1200px] w-[3px] bg-neutral-800 rounded-full">
        <div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-red-300 via-red-400 to-red-500 shadow-[0_0_12px_rgba(243, 27, 31,0.8)] transition-all duration-300"
          style={{ height: `${progress * 100}%` }}
        />
      </div>

      {/* Steps */}
      <div className="space-y-8 md:space-y-100 pb-6">
        {HOW_IT_WORKS_STEPS.map((step, index) => {
          const isActive = index <= activeIndex;
          const isLast = index === HOW_IT_WORKS_STEPS.length - 1;

          return (
            <div
              key={step.title}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
              className={`relative flex py-4 md:py-6 ${isLast ? "mt-16 md:mt-30" : ""}`}
            >
              {/* Circle */}
              <div className="absolute left-4 md:left-6 top-4 md:top-6 -translate-x-1/2 z-10">
                <div
                  className={`
                    w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-full
                    transition-all duration-500
                    text-sm md:text-base
                    ${
                      isActive
                        ? "bg-red-500 text-neutral-950 shadow-[0_0_20px_rgba(239,68,68,0.7)]"
                        : "bg-neutral-900 border border-neutral-700 text-neutral-500"
                    }
                  `}
                >
                  {index === 0 && <ChartNoAxesCombined size={18} />}
                  {index === 1 && <Utensils size={18} />}
                  {index === 2 && <ChartNoAxesCombined size={18} />}
                </div>
              </div>

              {/* Card */}
              <div
                className="
                  max-w-md
                  ml-16 md:ml-20
                  bg-neutral-900/60
                  border border-neutral-800
                  backdrop-blur
                  rounded-xl
                  p-4 md:p-6
                  transition-all duration-300
                  hover:border-neutral-700
                "
              >
                <h3
                  className={`text-lg md:text-xl font-semibold ${
                    isActive ? "text-white" : "text-neutral-400"
                  }`}
                >
                  {step.title}
                </h3>

                <p className="text-neutral-400 mt-2 md:mt-3 text-xs md:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const activeRingMobileRef = useRef<SVGCircleElement | null>(null);
  const activeRingDesktopRef = useRef<SVGCircleElement | null>(null);
  const titleTestimonialsRef = useRef<HTMLHeadingElement | null>(null);
  const quoteRef = useRef<HTMLDivElement | null>(null);
  const brandRefs = useRef<(HTMLImageElement | null)[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);
  const testimonialDuration = 5;
  const TESTIMONIALS = [
    {
      name: "Amanda Chen",
      role: "CX Director @ FocalPoint",
      quote:
        "As automações elevaram nossa experiência do cliente. Cada interação ficou mais pessoal e escalável.",
      avatar: "https://i.pravatar.cc/100?img=12",
      logo: "/vercel.svg",
    },
    {
      name: "Diego Nunes",
      role: "Head de Operações @ Interlock",
      quote:
        "Integração fluida e métricas em tempo real nos deram velocidade sem perder qualidade.",
      avatar: "https://i.pravatar.cc/100?img=23",
      logo: "/next.svg",
    },
    {
      name: "Beatriz Lima",
      role: "Product Lead @ Acme Corp",
      quote:
        "A plataforma trouxe previsibilidade para o roadmap e reduziu gargalos do time.",
      avatar: "https://i.pravatar.cc/100?img=34",
      logo: "/globe.svg",
    },
    {
      name: "Rafael Sousa",
      role: "CTO @ Command+R",
      quote:
        "Escalamos com confiança mantendo estabilidade e uma experiência impecável.",
      avatar: "https://i.pravatar.cc/100?img=45",
      logo: "/window.svg",
    },
  ] as const;
  const BRAND_LOGOS = [
    { src: "/hamburgueria.png", label: "Hamburgueria" },
    { src: "/marmita.png", label: "Marmita" },
    { src: "/pizzaria.png", label: "Pizzaria" },
    { src: "/bolo.png", label: "Bolo" },
  ] as const;
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mql.matches);
    update();
    mql.addEventListener?.("change", update);
    return () => mql.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (isLight) {
      root.classList.remove("dark");
      body.classList.add("theme-light");
    } else {
      body.classList.remove("theme-light");
      root.classList.add("dark");
    }
  }, [isLight]);
  useEffect(() => {
    if (!titleTestimonialsRef.current) return;
    ScrollTrigger.create({
      trigger: titleTestimonialsRef.current,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.fromTo(
          titleTestimonialsRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        );
      },
    });
  }, []);
  useEffect(() => {
    const ring = isDesktop
      ? activeRingDesktopRef.current
      : activeRingMobileRef.current;
    if (!ring) return;
    const len = ring.getTotalLength ? ring.getTotalLength() : 100;
    gsap.set(ring, { strokeDasharray: len, strokeDashoffset: len });
    gsap.to(ring, {
      strokeDashoffset: 0,
      duration: testimonialDuration,
      ease: "none",
      onComplete: () => {
        setActiveTestimonial((v) => (v + 1) % TESTIMONIALS.length);
      },
    });
    if (quoteRef.current) {
      gsap.fromTo(
        quoteRef.current,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
      );
    }
    brandRefs.current.forEach((el, idx) => {
      if (!el) return;
      gsap.to(el, {
        scale: idx === activeTestimonial ? 1.1 : 1,
        opacity: idx === activeTestimonial ? 1 : 0.3,
        duration: 0.5,
        ease: "power3.out",
      });
    });
    return () => {
      if (ring) gsap.killTweensOf(ring);
    };
  }, [activeTestimonial, isDesktop]);
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-red-500 selection:text-neutral-950 font-sans overflow-x-hidden">
      {/* Navigation */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isLight
            ? "bg-[#ffffff] border-b border-neutral-200"
            : "bg-[#ee121c] border-b border-[#ee121c]"
        }`}
      >
        {/* Mobile Menu Trigger & Content */}
        <div className="md:hidden">
          <StaggeredMenu
            position="right"
            items={[
              { label: "Home", ariaLabel: "Página Inicial", link: "/" },
              {
                label: "Products",
                ariaLabel: "View products",
                link: "#xxxxx",
              },
              {
                label: "Depoimentos",
                ariaLabel: "Depoimentos",
                link: "#xxxxx",
              },
              { label: "Preços", ariaLabel: "Preço", link: "#xxxxx" },
              { label: "Contato", ariaLabel: "Contato", link: "#xxxxx" },
            ]}
            socialItems={[
              { label: "Twitter", link: "https://twitter.com" },
              { label: "GitHub", link: "https://github.com" },
            ]}
            logoUrl="/logo_mobile.png" // No logo for now, or use text
            menuButtonColor="#ffffff"
            openMenuButtonColor="#000000"
            accentColor="#ee121c"
            isFixed={true}
          />
        </div>

        {/* Desktop Header */}
        <div
          className={`hidden md:flex items-center justify-between px-8 py-4 transition-all duration-500 ${
            scrolled ? "max-w-[70%] mx-auto" : "max-w-7xl mx-auto"
          } ${isLight ? "text-neutral-950" : "text-white"}`}
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={isLight ? "/logo_branco.png" : "/logo.png"}
              alt="Logo"
              className="h-15 w-auto"
            />
          </div>

          {/* Nav Links */}
          <nav className="flex items-center gap-8">
            <a
              href="#"
              className="text-sm font-medium hover:text-red-500 transition-colors flex items-center gap-1 group"
            >
              Products{" "}
              <ChevronDown className="w-4 h-4 text-neutral-500 group-hover:text-red-500 transition-colors" />
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-red-500 transition-colors flex items-center gap-1 group"
            >
              Resources{" "}
              <ChevronDown className="w-4 h-4 text-neutral-500 group-hover:text-red-500 transition-colors" />
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium hover:text-red-500 transition-colors"
            >
              Pricing
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            {/* Styled 'Try for free' Button */}
            <button className="flex items-center group">
              <span className="bg-white text-neutral-950 text-sm font-bold px-5 py-2.5 rounded-l-full group-hover:bg-neutral-200 transition-colors">
                Entre em Contato
              </span>
              <span className="bg-red-500 text-neutral-950 p-2.5 rounded-r-full group-hover:bg-red-400 transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </button>

            <button
              aria-label="Alternar tema"
              onClick={() => setIsLight((v) => !v)}
              className="mt-4 md:mt-0 w-10 h-10 rounded-full bg-neutral-950/10 flex items-center justify-center cursor-pointer hover:bg-neutral-950/20 transition-colors"
            >
              {isLight ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 flex flex-col items-center text-center min-h-screen justify-center overflow-hidden">
        {/* Background DotGrid */}
        <div className="absolute inset-0 z-0">
          <DotGrid
            dotSize={2}
            gap={20}
            baseColor="#271E37"
            activeColor="#fb2c36"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
            className="w-full h-full opacity-50"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-sm text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              Link Food
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Cardápio Online <br />
              <div className="flex justify-start gap-2 flex-wrap">
                <span>para Restaurantes</span>
                <RotatingText
                  texts={[
                    "Venda Mais",
                    "Gerencie Melhor",
                    "Cresça Rápido",
                    "Venda Sem Taxas",
                  ]}
                  mainClassName="bg-red-500 text-neutral-950 px-2 rounded-lg"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </div>
            </h1>

            <FadeContent
              blur={true}
              duration={1000}
              ease="power2.out"
              initialOpacity={0}
            >
              <p className="text-xl text-neutral-400 max-w-xl">
                Crie seu cardápio online, compartilhe seu link e receba pedidos
                automaticamente no WhatsApp e no painel de pedidos.
              </p>
            </FadeContent>

            <div className="flex flex-col sm:flex-row gap-4 justify-start items-start">
              <StarBorder
                as="button"
                className="text-lg font-semibold"
                color="#fb2c36"
                speed="4s"
              >
                Criar meu Cardápio
              </StarBorder>
              <button className="px-8 py-4 rounded-full bg-neutral-900 text-white font-semibold hover:bg-neutral-800 transition-colors">
                Ver Demonstração
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="hidden lg:flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="relative"
            >
              <div className="p-6">
                <img
                  src="/image-banner.png"
                  className="w-[1200px] object-cover"
                  alt="imagem de computador e celular do link food"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="products" className="py-32 px-6">
        <div className="container mx-auto">
          <div className="mb-20">
            <SplitText
              text="Ferramentas que fazem seu delivery vender mais"
              className="text-4xl md:text-6xl font-bold text-center"
              delay={50}
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.2}
              rootMargin="-50px"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Card 1: Guided Onboarding (Tall, Left) */}
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              duration={0.8}
              delay={0}
              threshold={0.1}
              className="md:row-span-2 md:col-span-1 h-full"
            >
              <div className="bg-[#ee121c] rounded-[2rem] p-8 h-full flex flex-col justify-between relative overflow-hidden group hover:scale-[1.01] hover:shadow-2xl hover:shadow-red-700/40 transition-all duration-300">
                {/* Decorative circles */}
                <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
                <div className="absolute -bottom-24 -left-12 w-72 h-72 rounded-full bg-black/10 pointer-events-none" />

                <div className="relative z-10">
                  <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
                    Cardápio Digital
                  </span>
                  <h3 className="text-4xl font-bold mb-4 text-white leading-tight">
                    Crie seu Cardápio em Minutos
                  </h3>

                  <div className="space-y-2 mt-4">
                    {[
                      "Cadastre hambúrgueres, pizzas, combos e bebidas",
                      "Atualize preços e produtos quando quiser",
                      "Fique pronto para receber pedidos rapidamente",
                    ].map((text) => (
                      <div key={text} className="flex items-start gap-2">
                        <span className="mt-0.5 w-4 h-4 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0">
                          <svg
                            width="8"
                            height="8"
                            viewBox="0 0 8 8"
                            fill="none"
                          >
                            <path
                              d="M1.5 4L3.5 6L6.5 2"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <p className="text-white/90 text-sm leading-snug">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Phone mockup */}
                <div className="mt-8 bg-neutral-950 rounded-t-3xl border-t-8 border-x-8 border-neutral-900 shadow-2xl translate-y-4 group-hover:translate-y-1 transition-transform duration-500 relative w-full overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-neutral-900 rounded-b-xl z-20" />

                  <div className="p-5 pt-10 bg-neutral-950">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-white font-bold text-base">
                        Meu Cardápio
                      </p>
                      <span className="bg-green-500/20 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        Online
                      </span>
                    </div>

                    {/* Product cards */}
                    <div className="space-y-2">
                      {[
                        {
                          name: "X-Carne",
                          cat: "Hambúrguer",
                          price: "R$ 28,00",
                          img: "./hb.png",
                        },
                        {
                          name: "Pizza Bacon",
                          cat: "Pizza",
                          price: "R$ 54,00",
                          img: "./pizza_bacon.png",
                        },
                      ].map((item, i) => (
                        <div
                          key={item.name}
                          className={`bg-white rounded-xl p-2.5 flex items-center gap-2.5 transition-transform duration-300 ${
                            i === 0
                              ? "group-hover:translate-x-1"
                              : "group-hover:-translate-x-1"
                          }`}
                        >
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="text-[10px] text-gray-400">
                              {item.cat}
                            </div>
                            <div className="text-gray-900 font-semibold text-xs">
                              {item.name}
                            </div>
                            <div className="flex items-center gap-1 mt-1">
                              <button className="w-5 h-5 flex items-center justify-center rounded border border-gray-200 text-gray-400">
                                <Pencil size={9} />
                              </button>
                              <button className="w-5 h-5 flex items-center justify-center rounded bg-red-50 border border-red-100 text-red-400">
                                <Trash2 size={9} />
                              </button>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-1 flex-shrink-0">
                            <span className="text-gray-900 font-bold text-xs">
                              {item.price}
                            </span>
                            <span className="text-[9px] px-1.5 py-0.5 rounded-full border text-green-600 border-green-200 bg-green-50">
                              Ativo
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Add button */}
                    <button className="mt-3 w-full bg-[#ee121c] text-white text-xs font-bold py-2 rounded-xl flex items-center justify-center gap-1 opacity-90 hover:opacity-100 transition-opacity">
                      <span className="text-base leading-none">+</span>{" "}
                      Adicionar produto
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedContent>

            {/* Card 2: Real-time Data (Wide, Top Right) */}
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              duration={0.8}
              delay={0.2}
              threshold={0.1}
              className="md:col-span-2 h-[400px]"
            >
              <div className="bg-neutral-900 rounded-[2rem] p-8 h-full flex flex-row justify-between relative overflow-hidden group border border-neutral-800 hover:border-red-500/20 hover:shadow-2xl hover:shadow-red-500/5 transition-all duration-300">
                {/* Decorative glow */}
                <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-red-500/5 blur-3xl pointer-events-none group-hover:bg-red-500/10 transition-colors duration-500" />

                <div className="relative z-10 max-w-sm flex flex-col justify-center">
                  <span className="inline-block bg-red-500/10 text-red-400 text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wide uppercase w-fit">
                    Tempo Real
                  </span>
                  <h3 className="text-4xl font-bold mb-4 text-white leading-tight">
                    Pedidos em <br />
                    <span className="text-[#ee121c]">Tempo Real</span>
                  </h3>

                  <div className="space-y-2 mt-1">
                    {[
                      "Acompanhe todos os pedidos instantaneamente",
                      "Visualize status e informações do cliente",
                      "Tudo em um único painel centralizado",
                    ].map((text) => (
                      <div key={text} className="flex items-start gap-2">
                        <span className="mt-0.5 w-4 h-4 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                          <svg
                            width="8"
                            height="8"
                            viewBox="0 0 8 8"
                            fill="none"
                          >
                            <path
                              d="M1.5 4L3.5 6L6.5 2"
                              stroke="#ee121c"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <p className="text-neutral-400 text-sm leading-snug">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Live indicator */}
                  <div className="flex items-center gap-2 mt-6 bg-neutral-800/60 rounded-full px-4 py-2 w-fit border border-neutral-700">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs text-neutral-300 font-medium">
                      3 novos pedidos agora
                    </span>
                  </div>
                </div>

                {/* Phone mockup */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-56 bg-neutral-950 rounded-[2.5rem] border-8 border-neutral-800 p-2 shadow-2xl rotate-[-5deg] group-hover:rotate-0 group-hover:right-8 transition-all duration-500 hidden md:block">
                  <div className="bg-white rounded-[2rem] h-[340px] w-full flex flex-col relative overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-neutral-200 rounded-full z-20" />

                    {/* Header */}
                    <div className="mt-6 px-4 py-2 border-b border-gray-100 flex items-center justify-between">
                      <p className="text-[10px] text-gray-800 font-bold">
                        Pedidos
                      </p>
                    </div>

                    {/* Orders */}
                    <div className="flex flex-col gap-1.5 px-2 pt-2 overflow-hidden">
                      {[
                        {
                          id: "#0492",
                          name: "Carlos Silva",
                          item: "X-Bacon",
                          total: "R$ 32,00",
                          status: "Novo",
                          statusColor: "bg-blue-500",
                        },
                        {
                          id: "#0491",
                          name: "Ana Lima",
                          item: "Combo Família",
                          total: "R$ 76,00",
                          status: "Preparo",
                          statusColor: "bg-yellow-500",
                        },
                        {
                          id: "#0490",
                          name: "Matheus B.",
                          item: "Pizza 4Q",
                          total: "R$ 54,00",
                          status: "Entregue",
                          statusColor: "bg-green-500",
                        },
                      ].map((order, i) => (
                        <div
                          key={order.id}
                          className={`bg-white rounded-xl border border-gray-100 shadow-sm px-2.5 py-2 transition-transform duration-300 ${i === 0 ? "group-hover:-translate-y-0.5" : ""}`}
                        >
                          <div className="flex items-center justify-between mb-0.5">
                            <div className="flex items-center gap-1">
                              <span className="font-bold text-[10px] text-gray-900">
                                {order.id}
                              </span>
                            </div>
                            <span
                              className={`${order.statusColor} text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full`}
                            >
                              {order.status}
                            </span>
                          </div>
                          <p className="text-[9px] text-gray-500">
                            {order.name} · {order.item}
                          </p>
                          <p className="text-[10px] font-bold text-gray-800 mt-0.5">
                            {order.total}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Bottom bar */}
                    <div className="mt-auto mx-2 mb-2 bg-gray-50 rounded-xl px-3 py-2 flex items-center justify-between border border-gray-100">
                      <span className="text-[9px] text-gray-500">
                        Total hoje
                      </span>
                      <span className="text-[11px] font-bold text-gray-900">
                        R$ 1.240,00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedContent>

            {/* Card 3: Pedidos no WhatsApp */}
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              duration={0.8}
              delay={0.4}
              threshold={0.1}
              className="md:col-span-1 h-[320px]"
            >
              <div className="bg-neutral-900 rounded-[2rem] p-8 h-full flex flex-col justify-between relative overflow-hidden border border-neutral-800 hover:border-red-500/30 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300 cursor-pointer">
                <div>
                  <h3 className="text-3xl font-bold mb-2 text-white">
                    Pedidos direto no WhatsApp
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Receba os pedidos dos seus clientes diretamente no WhatsApp
                    da empresa. Todas as informações chegam organizadas:
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { icon: <Package size={14} />, label: "produtos" },
                      { icon: <User size={14} />, label: "cliente" },
                      {
                        icon: <DollarSign size={14} />,
                        label: "valor do pedido",
                      },
                      {
                        icon: <ClipboardList size={14} />,
                        label: "observações",
                      },
                    ].map(({ icon, label }) => (
                      <div
                        key={label}
                        className="bg-neutral-800/60 rounded-xl px-3 py-2 flex items-center gap-2 hover:bg-red-500/20 hover:scale-105 hover:border-red-500/30 border border-transparent transition-all duration-200 cursor-pointer"
                      >
                        <span className="text-neutral-400 group-hover:text-red-400 transition-colors">
                          {icon}
                        </span>
                        <span className="text-neutral-300 text-xs font-medium">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedContent>

            {/* Card 4: Controle do Cardápio */}
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              duration={0.8}
              delay={0.6}
              threshold={0.1}
              className="md:col-span-1 h-[320px]"
            >
              <div
                style={{ backgroundColor: "#ee121c" }}
                className="rounded-[2rem] p-8 h-full flex flex-col gap-14 relative overflow-hidden hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-700/40 hover:brightness-110 transition-all duration-300 cursor-pointer"
              >
                <div>
                  <h3 className="text-4xl font-bold mb-2 text-white">
                    Controle total do cardápio
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Gerencie seu cardápio digital com total liberdade.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { icon: <Pencil size={14} />, label: "altere preços" },
                      {
                        icon: <UtensilsCrossed size={14} />,
                        label: "adicione produtos",
                      },
                      { icon: <Ticket size={14} />, label: "crie promoções" },
                    ].map(({ icon, label }) => (
                      <div
                        key={label}
                        className="bg-white/20 rounded-xl px-2 py-3 flex flex-col items-center gap-2 text-center hover:bg-white/35 hover:scale-110 transition-all duration-200 cursor-pointer"
                      >
                        <span className="text-white">{icon}</span>
                        <span className="text-white text-[10px] font-medium leading-tight">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-white/70 text-xs pt-1 font-medium">
                    Tudo em poucos cliques.
                  </p>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 border-y border-neutral-900 bg-neutral-950/50">
        <div className="container mx-auto px-6">
          <p className="text-neutral-500 mb-12 uppercase tracking-widest text-sm font-semibold text-center">
            Trusted by industry leaders
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Clientes Ativos */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-red-500 mb-3">
                <CountUp to={10} from={0} separator="." duration={2} />
                k+
              </div>
              <p className="text-neutral-400 text-lg">Clientes Ativos</p>
            </div>

            {/* Pessoas que já usaram o Link Food */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-red-500 mb-3">
                <CountUp to={35} from={0} separator="." duration={2} />
                k+
              </div>
              <p className="text-neutral-400 text-lg">
                Pessoas que já usaram o Link Food
              </p>
            </div>

            {/* Valor em Pedidos */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-red-500 mb-3">
                R$ <CountUp to={1} from={0} separator="." duration={2} />M
              </div>
              <p className="text-neutral-400 text-lg">Valor em Pedidos</p>
            </div>

            {/* Aumento de Vendas */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-red-500 mb-3">
                <CountUp to={20} from={0} separator="." duration={2} />%
              </div>
              <p className="text-neutral-400 text-lg">Aumento de Vendas</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-20 md:py-32 bg-neutral-950">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] gap-8 lg:gap-16 items-stretch">
            {/* Left copy */}
            <div className="flex flex-col justify-between space-y-8 md:space-y-38">
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center md:text-left">
                  How it works
                </h2>
                <p className="text-neutral-400 text-base md:text-lg max-w-md mx-auto md:mx-0 text-center md:text-left">
                  Your platform, configured by experts and launched on an{" "}
                  <span className="font-semibold text-white">
                    Enterprise plan
                  </span>
                  , ready to grow with you.
                </p>
                <button className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-neutral-950 font-semibold text-sm shadow-lg hover:bg-neutral-200 transition-colors w-full md:w-auto mx-auto md:mx-0">
                  Schedule kickoff
                </button>
              </div>

              {/* Phones abaixo do título (dois, em coluna) */}
              <div className="flex flex-col gap-6 md:gap-10 w-full max-w-[280px] mx-auto">
                {[0, 1].map((i) => (
                  <div key={i} className="w-full mb-8 md:mb-20">
                    <div className="relative rounded-[2rem] md:rounded-[2.5rem] border border-neutral-800 bg-neutral-900/60 px-2 md:px-3 pt-4 md:pt-6 pb-3 md:pb-4 shadow-[0_24px_80px_rgba(0,0,0,0.75)]">
                      <div className="absolute left-1/2 -translate-x-1/2 -top-2 md:-top-3 w-16 md:w-20 h-5 md:h-6 rounded-full bg-neutral-900 border border-neutral-700/80" />
                      <div className="aspect-[9/19] w-full rounded-[1.5rem] md:rounded-[1.75rem] overflow-hidden bg-black border border-neutral-800">
                        {/* Substituir esse div por um <video> quando tiver o arquivo */}
                        <div className="w-full h-full flex items-center justify-center text-[10px] text-neutral-500">
                          Phone video placeholder
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="lg:pl-8">
              <HowItWorksTimeline />
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="pb-28 bg-neutral-950">
        <div className="container mx-auto px-6 max-w-6xl">
          <SplitText
            text="Trusted by teams worldwide"
            className="text-3xl md:text-5xl font-bold text-center mb-24"
            delay={50}
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="-50px"
          />

          <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 md:gap-24 items-start">
            {/* Avatares - Mobile: apenas 1 por vez */}
            <div className="flex items-center justify-center lg:hidden mb-4">
              {(() => {
                const i = activeTestimonial;
                const t = TESTIMONIALS[i];
                return (
                  <button
                    key={t.name}
                    onClick={() =>
                      setActiveTestimonial((i + 1) % TESTIMONIALS.length)
                    }
                    className="relative rounded-full flex items-center justify-center transition-all duration-500 scale-110"
                    aria-label={`Ver próximo depoimento de ${t.name}`}
                  >
                    {/* RING (progress) */}
                    <svg
                      className="absolute"
                      viewBox="0 0 96 96"
                      width="96"
                      height="96"
                      aria-hidden="true"
                    >
                      <circle
                        cx="48"
                        cy="48"
                        r="46"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="2"
                        fill="none"
                      />
                      <circle
                        ref={(el) => {
                          activeRingMobileRef.current = el;
                        }}
                        cx="48"
                        cy="48"
                        r="46"
                        stroke="#ee121c"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                    {/* AVATAR */}
                    <div
                      className="rounded-full overflow-hidden border-8 border-[#ee121c] transition-all duration-300"
                      style={{ width: 82, height: 82 }}
                    >
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </button>
                );
              })()}
            </div>

            {/* Avatares - Desktop: lista completa */}
            <div className="hidden lg:flex items-center justify-center lg:justify-start gap-10">
              {TESTIMONIALS.map((t, i) => {
                const active = i === activeTestimonial;

                return (
                  <button
                    key={t.name}
                    onClick={() => setActiveTestimonial(i)}
                    className={`relative rounded-full flex items-center justify-center transition-all duration-500
        ${active ? "scale-110" : "opacity-50 grayscale"}
        `}
                    aria-label={`Ver depoimento de ${t.name}`}
                  >
                    {/* RING (progress) */}
                    {active && (
                      <svg
                        className="absolute"
                        viewBox="0 0 96 96"
                        width="96"
                        height="96"
                        aria-hidden="true"
                      >
                        <circle
                          cx="48"
                          cy="48"
                          r="46"
                          stroke="rgba(255,255,255,0.2)"
                          strokeWidth="2"
                          fill="none"
                        />
                        <circle
                          ref={(el) => {
                            if (active) activeRingDesktopRef.current = el;
                          }}
                          cx="48"
                          cy="48"
                          r="46"
                          stroke="#ee121c"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}

                    {/* AVATAR */}
                    <div
                      className={`rounded-full overflow-hidden border-8 transition-all duration-300 ${
                        active ? "border-[#ee121c]" : "border-transparent"
                      }`}
                      style={{
                        width: active ? 82 : 70,
                        height: active ? 82 : 70,
                      }}
                    >
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            <div ref={quoteRef} className="text-left">
              <p className="text-neutral-300 text-lg md:text-xl leading-relaxed max-w-2xl">
                “{TESTIMONIALS[activeTestimonial].quote}”
              </p>
              <div className="mt-4 text-sm md:text-base">
                <span className="text-white font-bold">
                  {TESTIMONIALS[activeTestimonial].name}
                </span>
                <span className="text-neutral-400">
                  , {TESTIMONIALS[activeTestimonial].role}
                </span>
              </div>
            </div>
          </div>

          {/* Logos - Desktop: linha completa; Mobile: apenas a ativa */}
          <div className="mt-16 hidden md:flex flex-wrap items-center justify-between gap-x-12 gap-y-8">
            {BRAND_LOGOS.map((b, i) => (
              <img
                key={b.label}
                ref={(el) => {
                  brandRefs.current[i] = el;
                }}
                src={b.src}
                alt={b.label}
                className={`h-14 md:h-20 lg:h-24 xl:h-24 object-contain transition-all duration-500 ${
                  i === activeTestimonial ? "opacity-100" : "opacity-30"
                }`}
                style={{
                  filter:
                    i === activeTestimonial
                      ? "none"
                      : "grayscale(100%) blur(2px)",
                }}
              />
            ))}
          </div>
          <div className="mt-12 flex md:hidden items-center justify-center">
            <img
              src={BRAND_LOGOS[activeTestimonial].src}
              alt={BRAND_LOGOS[activeTestimonial].label}
              className="h-24 sm:h-28 object-contain transition-all duration-500 opacity-100"
              style={{ filter: "none" }}
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 bg-neutral-950">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Simple, transparent pricing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="bg-neutral-950 border border-neutral-800 rounded-3xl p-8 flex flex-col hover:border-neutral-700 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            >
              <h3 className="text-xl font-medium text-neutral-400 mb-4">
                Starter
              </h3>
              <div className="text-5xl font-bold mb-6">
                $24
                <span className="text-xl font-normal text-neutral-500">
                  /mo
                </span>
              </div>
              <ul className="space-y-4 mb-8 text-neutral-300 flex-1">
                <li className="flex items-center gap-3">
                  <span className="text-red-500">✓</span> 2 Team Members
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">✓</span> Basic Analytics
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">✓</span> 24/7 Support
                </li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl border border-neutral-800 hover:bg-neutral-900 transition-colors"
              >
                Get Started
              </motion.button>
            </motion.div>

            {/* Premium */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-b from-red-500 to-red-700 rounded-[26px] opacity-20 blur-lg"></div>
              <div className="bg-neutral-900 border border-red-500/30 rounded-3xl p-8 flex flex-col relative h-full hover:border-red-500/50 hover:shadow-[0_20px_40px_rgba(239,68,68,0.15)]">
                <div className="absolute top-0 right-0 bg-red-500 text-black text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                  POPULAR
                </div>
                <h3 className="text-xl font-medium text-white mb-4">Premium</h3>
                <div className="text-5xl font-bold mb-6">
                  $99
                  <span className="text-xl font-normal text-neutral-500">
                    /mo
                  </span>
                </div>
                <ul className="space-y-4 mb-8 text-neutral-300 flex-1">
                  <li className="flex items-center gap-3">
                    <span className="text-red-500">✓</span> 10 Team Members
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-red-500">✓</span> Advanced Analytics
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-red-500">✓</span> Priority Support
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-red-500">✓</span> Custom Domain
                  </li>
                </ul>
                <StarBorder
                  as="button"
                  className="w-full font-semibold"
                  color="#ef4444"
                  speed="3s"
                >
                  Get Started
                </StarBorder>
              </div>
            </motion.div>

            {/* Enterprise */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="bg-neutral-950 border border-neutral-800 rounded-3xl p-8 flex flex-col hover:border-neutral-700 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            >
              <h3 className="text-xl font-medium text-neutral-400 mb-4">
                Enterprise
              </h3>
              <div className="text-5xl font-bold mb-6">
                $125
                <span className="text-xl font-normal text-neutral-500">
                  /mo
                </span>
              </div>
              <ul className="space-y-4 mb-8 text-neutral-300 flex-1">
                <li className="flex items-center gap-3">
                  <span className="text-red-500">✓</span> Unlimited Members
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">✓</span> Custom Reporting
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">✓</span> Dedicated Manager
                </li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl border border-neutral-800 hover:bg-neutral-900 transition-colors"
              >
                Contact Sales
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-[#f0121d] pt-32 pb-12 mt-32 rounded-t-[3rem]">
        {/* CTA Card - positioned absolute to overlap */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-6 z-20">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-neutral-950 mb-10 tracking-tight leading-tight">
                Start building something <br /> truly amazing today
              </h2>

              <div className="max-w-lg mx-auto bg-neutral-950 p-2 rounded-full flex items-center shadow-lg border border-neutral-800">
                <div className="pl-6 text-neutral-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent border-none text-white px-4 py-3 focus:outline-none placeholder:text-neutral-500"
                />
                <button className="bg-white text-neutral-950 font-bold px-6 py-3 rounded-full hover:bg-neutral-200 transition-colors flex items-center gap-2">
                  Join Waitlist
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="container mx-auto px-6 pt-32 md:pt-40 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 text-neutral-950">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-6 mt-6">
                <img src="/logo.png" alt="Logo" className="h-20 w-auto" />
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-sm tracking-wider text-white uppercase">
                Menu
              </h4>
              <ul className="space-y-4 font-medium">
                <li>
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    Customers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-sm tracking-wider text-white uppercase">
                Company
              </h4>
              <ul className="space-y-4 font-medium">
                <li>
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    Help
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    Security
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-sm tracking-wider text-white uppercase">
                Social
              </h4>
              <ul className="space-y-4 font-medium">
                <li>
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    X (Twitter)
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-950/10 pt-8 flex flex-col md:flex-row justify-between items-center text-neutral-950/60 text-sm">
            <p>© 2026 Circular. All rights reserved.</p>
          </div>
        </div>
      </footer>
      {/* WhatsApp Fixed Button */}
      <a
        href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#08c950] hover:bg-[#089537] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="transition-transform group-hover:scale-110"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
        </svg>
      </a>
    </div>
  );
}
