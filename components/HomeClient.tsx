"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { Card as SwapCard } from "@/components/CardSwap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ChevronDown,
  ArrowUpRight,
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
const DotGrid = dynamic(() => import("@/components/DotGrid"), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

const HOW_STEPS = [
  {
    tag: "Passo 1",
    tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    accentColor: "#3b82f6",
    glowColor: "rgba(59,130,246,0.15)",
    title: "Crie sua conta",
    subtitle: "Simples e rápido",
    description:
      "Cadastre sua loja em minutos. Informe o nome, segmento e dados do seu negócio para começar a vender online.",
    checks: [
      "Cadastro sem burocracia",
      "Personalização da loja",
      "Suporte na configuração",
    ],
    video: "/video1.mp4",
  },
  {
    tag: "Passo 2",
    tagColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    accentColor: "#eab308",
    glowColor: "rgba(234,179,8,0.15)",
    title: "Monte seu cardápio",
    subtitle: "Total liberdade",
    description:
      "Adicione produtos, fotos e preços. Crie combos e promoções com poucos cliques e atualize quando quiser.",
    checks: [
      "Fotos e descrições detalhadas",
      "Combos e promoções",
      "Preços editáveis a qualquer hora",
    ],
    video: "/video2.mp4",
  },
  {
    tag: "Passo 3",
    tagColor: "bg-green-500/10 text-green-400 border-green-500/20",
    accentColor: "#22c55e",
    glowColor: "rgba(34,197,94,0.15)",
    title: "Receba pedidos no WhatsApp",
    subtitle: "Sem intermediários",
    description:
      "Compartilhe seu link e receba pedidos organizados direto no WhatsApp da sua empresa.",
    checks: [
      "Pedidos com todas as informações",
      "Notificação instantânea",
      "Histórico completo",
    ],
    video: "/video3.mp4",
  },
] as const;

export default function HomeClient() {
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
  const howSectionRef = useRef<HTMLElement>(null);
  const howTitleRef = useRef<HTMLDivElement>(null);
  const howPhoneRefs = useRef<(HTMLDivElement | null)[]>([]);
  const howTextRefs = useRef<(HTMLDivElement | null)[]>([]);
  const howVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const howCheckRefs = useRef<(HTMLDivElement | null)[][]>([[], [], []]);
  const pricingSectionRef = useRef<HTMLElement>(null);
  const pricingHeaderRef = useRef<HTMLDivElement>(null);
  const pricingCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pricingNoteRef = useRef<HTMLParagraphElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const footerCtaRef = useRef<HTMLDivElement>(null);
  const footerContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerCtaRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerCtaRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        },
      );
      gsap.fromTo(
        footerContentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    }, footerRef);
    return () => ctx.revert();
  }, []);

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
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
    const ctx = gsap.context(() => {
      gsap.to(pricingHeaderRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: pricingHeaderRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
      pricingCardRefs.current.forEach((card, i) => {
        if (!card) return;
        const fromX = i === 0 ? -50 : i === 2 ? 50 : 0;
        const fromY = i === 1 ? 30 : 0;
        gsap.fromTo(
          card,
          { opacity: 0, x: fromX, y: fromY, scale: i === 1 ? 0.95 : 1 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: pricingHeaderRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          },
        );
      });
      gsap.to(pricingNoteRef.current, {
        opacity: 1,
        duration: 0.6,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: pricingNoteRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }, pricingSectionRef);
    return () => ctx.revert();
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
      onComplete: () =>
        setActiveTestimonial((v) => (v + 1) % TESTIMONIALS.length),
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleWords = howTitleRef.current?.querySelectorAll(".title-word");
      if (titleWords) {
        gsap.fromTo(
          titleWords,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: howTitleRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      }
      (HOW_STEPS as readonly any[]).forEach((step, i) => {
        const phone = howPhoneRefs.current[i];
        const textBlock = howTextRefs.current[i];
        const video = howVideoRefs.current[i];
        const checks = howCheckRefs.current[i];
        const isLeft = i % 2 === 0;
        if (!phone || !textBlock) return;
        gsap.fromTo(
          phone,
          { y: 60, opacity: 0, rotateY: isLeft ? -15 : 15 },
          {
            y: 0,
            opacity: 1,
            rotateY: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: phone,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          },
        );
        gsap.fromTo(
          textBlock.querySelector(".step-badge"),
          { x: isLeft ? 30 : -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
            delay: 0.1,
            scrollTrigger: {
              trigger: phone,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
        gsap.fromTo(
          textBlock.querySelector(".step-number"),
          { scale: 0.5, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: phone,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
        gsap.fromTo(
          textBlock.querySelector(".step-title"),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            delay: 0.2,
            scrollTrigger: {
              trigger: phone,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
        gsap.fromTo(
          textBlock.querySelector(".step-line"),
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.35,
            scrollTrigger: {
              trigger: phone,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
        gsap.fromTo(
          textBlock.querySelector(".step-desc"),
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            delay: 0.3,
            scrollTrigger: {
              trigger: phone,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
        if (checks?.length) {
          gsap.fromTo(
            checks,
            { x: isLeft ? -20 : 20, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power3.out",
              stagger: 0.1,
              delay: 0.4,
              scrollTrigger: {
                trigger: phone,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            },
          );
        }
        if (video) {
          video.load();
          ScrollTrigger.create({
            trigger: phone,
            start: "top 75%",
            end: "bottom 20%",
            onEnter: () => video.play().catch(() => {}),
            onLeave: () => video.pause(),
            onEnterBack: () => video.play().catch(() => {}),
            onLeaveBack: () => video.pause(),
          });
        }
      });
    }, howSectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-red-500 selection:text-neutral-950 font-sans overflow-x-hidden">
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isLight ? "bg-[#ffffff] border-b border-neutral-200" : "bg-[#ee121c] border-b border-[#ee121c]"}`}
      >
        <div className="md:hidden">
          <StaggeredMenu
            position="right"
            items={[
              { label: "Home", ariaLabel: "Página Inicial", link: "/" },
              { label: "Products", ariaLabel: "View products", link: "#xxxxx" },
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
            logoUrl="/logo_mobile.png"
            menuButtonColor="#ffffff"
            openMenuButtonColor="#000000"
            accentColor="#ee121c"
            isFixed={true}
          />
        </div>
        <div
          className={`hidden md:flex items-center justify-between px-8 py-4 transition-all duration-500 ${scrolled ? "max-w-[70%] mx-auto" : "max-w-7xl mx-auto"} ${isLight ? "text-neutral-950" : "text-white"}`}
        >
          <div className="flex items-center gap-2">
            <img
              src={isLight ? "/logo_branco.png" : "/logo.png"}
              alt="Logo"
              className="h-15 w-auto"
            />
          </div>
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
          <div className="flex items-center gap-6">
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
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 flex flex-col items-center text-center min-h-screen justify-center overflow-hidden">
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
                <div className="mt-8 bg-neutral-950 rounded-t-3xl border-t-8 border-x-8 border-neutral-900 shadow-2xl translate-y-4 group-hover:translate-y-1 transition-transform duration-500 relative w-full overflow-hidden">
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
                          className={`bg-white rounded-xl p-2.5 flex items-center gap-2.5 transition-transform duration-300 ${i === 0 ? "group-hover:translate-x-1" : "group-hover:-translate-x-1"}`}
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
                    <button className="mt-3 w-full bg-[#ee121c] text-white text-xs font-bold py-2 rounded-xl flex items-center justify-center gap-1 opacity-90 hover:opacity-100 transition-opacity">
                      <span className="text-base leading-none">+</span>{" "}
                      Adicionar produto
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedContent>
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
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-56 bg-neutral-950 rounded-[2.5rem] border-8 border-neutral-800 p-2 shadow-2xl rotate-[-5deg] group-hover:rotate-0 group-hover:right-8 transition-all duration-500 hidden md:block">
                  <div className="bg-white rounded-[2rem] h-[340px] w-full flex flex-col relative overflow-hidden">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-neutral-200 rounded-full z-20" />
                    <div className="mt-6 px-4 py-2 border-b border-gray-100 flex items-center justify-between">
                      <p className="text-[10px] text-gray-800 font-bold">
                        Pedidos
                      </p>
                    </div>
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
                            <span className="font-bold text-[10px] text-gray-900">
                              {order.id}
                            </span>
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
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { icon: <Package size={14} />, label: "produtos" },
                    { icon: <User size={14} />, label: "cliente" },
                    {
                      icon: <DollarSign size={14} />,
                      label: "valor do pedido",
                    },
                    { icon: <ClipboardList size={14} />, label: "observações" },
                  ].map(({ icon, label }) => (
                    <div
                      key={label}
                      className="bg-neutral-800/60 rounded-xl px-3 py-2 flex items-center gap-2 hover:bg-red-500/20 hover:scale-105 border border-transparent hover:border-red-500/30 transition-all duration-200 cursor-pointer"
                    >
                      <span className="text-neutral-400">{icon}</span>
                      <span className="text-neutral-300 text-xs font-medium">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedContent>
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
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>
      <section className="py-20 border-y border-neutral-900 bg-neutral-950/50">
        <div className="container mx-auto px-6">
          <p className="text-neutral-500 mb-12 uppercase tracking-widest text-sm font-semibold text-center">
            Trusted by industry leaders
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { value: 10, suffix: "k+", label: "Clientes Ativos" },
              {
                value: 35,
                suffix: "k+",
                label: "Pessoas que já usaram o Link Food",
              },
              {
                value: 1,
                prefix: "R$ ",
                suffix: "M",
                label: "Valor em Pedidos",
              },
              { value: 20, suffix: "%", label: "Aumento de Vendas" },
            ].map(({ value, suffix, prefix, label }) => (
              <div key={label} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-red-500 mb-3">
                  {prefix}
                  <CountUp to={value} from={0} separator="." duration={2} />
                  {suffix}
                </div>
                <p className="text-neutral-400 text-lg">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        ref={howSectionRef}
        className="relative bg-neutral-950 overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-900/8 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-5xl">
          <div ref={howTitleRef} className="py-20 md:py-28 text-center">
            <span className="inline-block bg-red-500/10 text-red-400 text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase border border-red-500/20">
              Como Funciona
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 overflow-hidden">
              {"Do cadastro ao primeiro pedido".split(" ").map((word, i) => (
                <span
                  key={i}
                  className="title-word inline-block mr-3 opacity-0"
                >
                  {word === "primeiro" || word === "pedido" ? (
                    <span className="text-[#ee121c]">{word}</span>
                  ) : (
                    word
                  )}
                </span>
              ))}
            </h2>
            <p className="text-neutral-400 text-base md:text-lg max-w-xl mx-auto">
              Configure sua loja em minutos e comece a receber pedidos pelo
              WhatsApp hoje mesmo.
            </p>
          </div>
          <div className="flex flex-col pb-24">
            {HOW_STEPS.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={step.title}
                  className={`flex flex-col ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-10 md:gap-16 py-16 md:py-24 border-t border-neutral-800/60`}
                >
                  <div
                    ref={(el) => {
                      howPhoneRefs.current[i] = el;
                    }}
                    className="flex-shrink-0 relative"
                    style={{ perspective: "1000px" }}
                  >
                    <div
                      className="absolute inset-[-20px] rounded-[3rem] blur-3xl pointer-events-none"
                      style={{ background: step.glowColor }}
                    />
                    <div className="relative bg-neutral-950 rounded-[2.8rem] border-[7px] border-neutral-800 p-2 shadow-[0_32px_80px_rgba(0,0,0,0.8)]">
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-neutral-900 rounded-full z-20" />
                      <div className="rounded-[2.2rem] overflow-hidden bg-black w-[200px] aspect-[9/19.5]">
                        <video
                          ref={(el) => {
                            howVideoRefs.current[i] = el;
                          }}
                          src={step.video}
                          loop
                          muted
                          playsInline
                          preload="auto"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div
                      className="absolute -top-4 -right-4 w-10 h-10 rounded-full flex items-center justify-center text-sm font-black shadow-lg border-2 border-neutral-900"
                      style={{
                        backgroundColor: step.accentColor,
                        color: "#0a0a0a",
                      }}
                    >
                      {i + 1}
                    </div>
                  </div>
                  <div
                    ref={(el) => {
                      howTextRefs.current[i] = el;
                    }}
                    className="flex flex-col gap-4 max-w-sm"
                  >
                    <span
                      className={`step-badge inline-block text-xs font-bold px-3 py-1 rounded-full border w-fit opacity-0 ${step.tagColor}`}
                    >
                      {step.tag}
                    </span>
                    <div>
                      <p className="step-number text-xs text-neutral-500 font-mono mb-1 opacity-0">
                        {String(i + 1).padStart(2, "0")} /{" "}
                        {String(HOW_STEPS.length).padStart(2, "0")}
                      </p>
                      <h3 className="step-title text-3xl md:text-4xl font-bold text-white leading-tight opacity-0">
                        {step.title}
                      </h3>
                      <div
                        className="step-line mt-3 h-[3px] w-16 rounded-full"
                        style={{
                          backgroundColor: step.accentColor,
                          transform: "scaleX(0)",
                        }}
                      />
                    </div>
                    <p className="step-desc text-neutral-400 text-base leading-relaxed opacity-0">
                      {step.description}
                    </p>
                    <div className="flex flex-col gap-2 mt-1">
                      {step.checks.map((item, j) => (
                        <div
                          key={item}
                          ref={(el) => {
                            howCheckRefs.current[i][j] = el;
                          }}
                          className="flex items-center gap-3 opacity-0"
                        >
                          <span
                            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: `${step.accentColor}25` }}
                          >
                            <svg
                              width="9"
                              height="9"
                              viewBox="0 0 8 8"
                              fill="none"
                            >
                              <path
                                d="M1.5 4L3.5 6L6.5 2"
                                stroke={step.accentColor}
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <span className="text-neutral-300 text-sm">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="pb-5 bg-neutral-950">
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
                    <div
                      className={`rounded-full overflow-hidden border-8 transition-all duration-300 ${active ? "border-[#ee121c]" : "border-transparent"}`}
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
          <div className="mt-16 hidden md:flex flex-wrap items-center justify-between gap-x-12 gap-y-8">
            {BRAND_LOGOS.map((b, i) => (
              <img
                key={b.label}
                ref={(el) => {
                  brandRefs.current[i] = el;
                }}
                src={b.src}
                alt={b.label}
                className={`h-14 md:h-20 lg:h-24 xl:h-24 object-contain transition-all duration-500 ${i === activeTestimonial ? "opacity-100" : "opacity-30"}`}
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
      <section
        id="pricing"
        ref={pricingSectionRef}
        className="relative py-32 bg-neutral-950 overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-900/8 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl">
          <div ref={pricingHeaderRef} className="text-center mb-20 opacity-0">
            <span className="inline-block bg-red-500/10 text-red-400 text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase border border-red-500/20">
              Planos
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Preço simples e{" "}
              <span className="text-[#ee121c]">transparente</span>
            </h2>
            <p className="text-neutral-400 text-lg max-w-lg mx-auto">
              Sem taxas por pedido. Sem surpresas. Escolha o plano ideal para o
              seu negócio.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div
              ref={(el) => {
                pricingCardRefs.current[0] = el;
              }}
              className="opacity-0 relative bg-neutral-900 border border-neutral-800 rounded-[2rem] p-8 flex flex-col gap-6 hover:border-neutral-700 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-300 group"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
              <div>
                <p className="text-neutral-500 text-sm font-semibold uppercase tracking-widest mb-4">
                  Starter
                </p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-6xl font-black text-white leading-none">
                    R$49
                  </span>
                  <span className="text-neutral-500 text-base mb-2">/mês</span>
                </div>
                <p className="text-neutral-500 text-sm">Ideal para começar</p>
              </div>
              <div className="h-px bg-neutral-800" />
              <ul className="flex flex-col gap-3 flex-1">
                {[
                  "1 cardápio digital",
                  "Pedidos via WhatsApp",
                  "Até 30 produtos",
                  "Suporte por e-mail",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-neutral-400 text-sm"
                  >
                    <span className="w-4 h-4 rounded-full bg-neutral-800 flex items-center justify-center flex-shrink-0">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path
                          d="M1.5 4L3.5 6L6.5 2"
                          stroke="#9ca3af"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3.5 rounded-xl border border-neutral-700 text-neutral-300 text-sm font-semibold hover:bg-neutral-800 hover:border-neutral-600 hover:text-white transition-all duration-200">
                Começar grátis
              </button>
            </div>
            <div
              ref={(el) => {
                pricingCardRefs.current[1] = el;
              }}
              className="opacity-0 relative md:-my-6 rounded-[2rem] z-10"
            >
              <div className="absolute -inset-[2px] bg-gradient-to-b from-red-500 to-red-800 rounded-[2rem] opacity-60 blur-sm pointer-events-none" />
              <div className="absolute -inset-[1px] bg-gradient-to-b from-red-500 to-red-700 rounded-[2rem] pointer-events-none" />
              <div className="relative bg-neutral-950 rounded-[2rem] p-8 flex flex-col gap-6 h-full">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#ee121c] text-white text-[11px] font-black px-4 py-1.5 rounded-full tracking-widest uppercase shadow-lg shadow-red-500/30">
                    Mais Popular
                  </span>
                </div>
                <div className="mt-4">
                  <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-4">
                    Pro
                  </p>
                  <div className="flex items-end gap-1 mb-1">
                    <span className="text-6xl font-black text-white leading-none">
                      R$99
                    </span>
                    <span className="text-neutral-500 text-base mb-2">
                      /mês
                    </span>
                  </div>
                  <p className="text-neutral-400 text-sm">
                    Para negócios em crescimento
                  </p>
                </div>
                <div className="h-px bg-red-500/20" />
                <ul className="flex flex-col gap-3 flex-1">
                  {[
                    "Cardápios ilimitados",
                    "Pedidos via WhatsApp + Painel",
                    "Produtos ilimitados",
                    "Cupons e promoções",
                    "Relatórios de vendas",
                    "Suporte prioritário",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-neutral-200 text-sm"
                    >
                      <span className="w-4 h-4 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path
                            d="M1.5 4L3.5 6L6.5 2"
                            stroke="#ee121c"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3.5 rounded-xl bg-[#ee121c] text-white text-sm font-bold hover:bg-red-600 transition-colors shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:scale-[1.02] transition-all duration-200">
                  Assinar agora →
                </button>
              </div>
            </div>
            <div
              ref={(el) => {
                pricingCardRefs.current[2] = el;
              }}
              className="opacity-0 relative bg-neutral-900 border border-neutral-800 rounded-[2rem] p-8 flex flex-col gap-6 hover:border-neutral-700 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-300 group"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
              <div>
                <p className="text-neutral-500 text-sm font-semibold uppercase tracking-widest mb-4">
                  Enterprise
                </p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-6xl font-black text-white leading-none">
                    R$199
                  </span>
                  <span className="text-neutral-500 text-base mb-2">/mês</span>
                </div>
                <p className="text-neutral-500 text-sm">
                  Para redes e franquias
                </p>
              </div>
              <div className="h-px bg-neutral-800" />
              <ul className="flex flex-col gap-3 flex-1">
                {[
                  "Tudo do plano Pro",
                  "Multi-unidades",
                  "API de integração",
                  "Gerente dedicado",
                  "SLA garantido",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-neutral-400 text-sm"
                  >
                    <span className="w-4 h-4 rounded-full bg-neutral-800 flex items-center justify-center flex-shrink-0">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path
                          d="M1.5 4L3.5 6L6.5 2"
                          stroke="#9ca3af"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3.5 rounded-xl border border-neutral-700 text-neutral-300 text-sm font-semibold hover:bg-neutral-800 hover:border-neutral-600 hover:text-white transition-all duration-200">
                Falar com vendas
              </button>
            </div>
          </div>
          <p
            ref={pricingNoteRef}
            className="text-center text-neutral-600 text-sm mt-10 opacity-0"
          >
            Todos os planos incluem 14 dias grátis · Cancele quando quiser · Sem
            cartão de crédito
          </p>
        </div>
      </section>
      <div className="relative">
        <div className="relative z-20 px-6 flex justify-center">
          <div
            ref={footerCtaRef}
            className="w-full max-w-5xl bg-neutral-950 rounded-[2.5rem] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden border border-neutral-800 opacity-0 group hover:border-neutral-700 transition-colors duration-500"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-red-500/5 group-hover:bg-red-500/10 rounded-full blur-3xl pointer-events-none transition-colors duration-700" />
            <div className="relative z-10">
              <span className="inline-block bg-red-500/10 text-red-400 text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase border border-red-500/20">
                Comece hoje
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
                Pronto para vender <span className="text-[#ee121c]">mais?</span>
              </h2>
              <p className="text-neutral-400 text-base mb-10 max-w-md mx-auto">
                Crie seu cardápio digital e comece a receber pedidos pelo
                WhatsApp hoje mesmo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#ee121c] text-white font-bold text-sm hover:bg-red-600 hover:scale-105 hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300"
                >
                  Criar meu cardápio grátis
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-neutral-700 text-neutral-300 font-semibold text-sm hover:border-neutral-500 hover:text-white hover:bg-neutral-900 transition-all duration-300"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
        <footer
          ref={footerRef}
          className="relative bg-[#ee121c] -mt-20 pt-32 pb-12 rounded-t-[3rem] overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-800/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-900/40 rounded-full blur-3xl pointer-events-none" />
          <div
            ref={footerContentRef}
            className="container mx-auto px-6 relative z-10 opacity-0"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
              <div className="col-span-2 md:col-span-1">
                <img
                  src="/logo.png"
                  alt="Link Food"
                  className="h-16 w-auto mb-4 hover:opacity-80 transition-opacity duration-200"
                />
                <p className="text-white/60 text-sm leading-relaxed max-w-[200px]">
                  Cardápio digital e pedidos via WhatsApp para o seu negócio.
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white hover:text-[#ee121c] flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                  >
                    <svg
                      width="15"
                      height="15"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white hover:text-[#ee121c] flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                  >
                    <svg
                      width="15"
                      height="15"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-5 text-[11px] tracking-widest text-white/90 uppercase">
                  Produto
                </h4>
                <ul className="space-y-3">
                  {[
                    "Cardápio Digital",
                    "Pedidos via WhatsApp",
                    "Painel de Pedidos",
                    "Relatórios",
                    "Cupons",
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-white/70 hover:text-white text-sm transition-all duration-200 hover:translate-x-1 inline-flex items-center gap-1 group"
                      >
                        <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-white/90">
                          →
                        </span>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-5 text-[11px] tracking-widest text-white/90 uppercase">
                  Empresa
                </h4>
                <ul className="space-y-3">
                  {[
                    "Sobre nós",
                    "Blog",
                    "Carreiras",
                    "Termos de uso",
                    "Privacidade",
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-white/70 hover:text-white text-sm transition-all duration-200 hover:translate-x-1 inline-flex items-center gap-1 group"
                      >
                        <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-white/90">
                          →
                        </span>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-5 text-[11px] tracking-widest text-white/90 uppercase">
                  Suporte
                </h4>
                <ul className="space-y-3">
                  {[
                    "Central de Ajuda",
                    "Contato",
                    "Status do sistema",
                    "WhatsApp",
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-white/70 hover:text-white text-sm transition-all duration-200 hover:translate-x-1 inline-flex items-center gap-1 group"
                      >
                        <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-white/90">
                          →
                        </span>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/30 text-sm">
                © 2026 Link Food. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-6">
                {["Termos", "Privacidade", "Cookies"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-white/30 hover:text-white/70 text-xs transition-colors duration-200"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
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
