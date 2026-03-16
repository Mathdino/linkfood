"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ChevronDown, ArrowUpRight, Sun, Moon } from "lucide-react";
import StaggeredMenu from "@/components/StaggeredMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isLight, setIsLight] = useState(false);

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

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isLight ? "bg-[#ffffff] border-b border-neutral-200" : "bg-[#ee121c] border-b border-[#ee121c]"}`}
    >
      <div className="md:hidden">
        <StaggeredMenu
          position="right"
          items={[
            { label: "Home", ariaLabel: "Página Inicial", link: "/" },
            { label: "Products", ariaLabel: "View products", link: "#xxxxx" },
            { label: "Depoimentos", ariaLabel: "Depoimentos", link: "#xxxxx" },
            { label: "Preços", ariaLabel: "Preço", link: "#xxxxx" },
            { label: "Blog", ariaLabel: "Blog", link: "/blog" },
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
          <Image
            src={isLight ? "/logo_branco.png" : "/logo.png"}
            alt="Logo"
            width={160}
            height={48}
          />
        </div>
        <nav className="flex items-center gap-8">
          <a
            href="#"
            className="text-sm font-medium hover:text-red-500 transition-colors flex items-center gap-1 group"
          >
            Products{" "}
            <ChevronDown className="w-4 h-4 text-neutral-200 group-hover:text-red-500 transition-colors" />
          </a>
          <a
            href="#"
            className="text-sm font-medium hover:text-red-500 transition-colors flex items-center gap-1 group"
          >
            Resources{" "}
            <ChevronDown className="w-4 h-4 text-neutral-200 group-hover:text-red-500 transition-colors" />
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium hover:text-red-500 transition-colors"
          >
            Pricing
          </a>
          <Link
            href="/blog"
            className="text-sm font-medium hover:text-red-500 transition-colors"
          >
            Blog
          </Link>
        </nav>
        <div className="flex items-center gap-6">
          <Link href="#" className="flex items-center group">
            <span className="bg-white text-neutral-950 text-sm font-bold px-5 py-2.5 rounded-l-full group-hover:bg-neutral-200 transition-colors">
              Entre em Contato
            </span>
            <span className="bg-red-500 text-neutral-950 p-2.5 rounded-r-full group-hover:bg-red-400 transition-colors">
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </Link>
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
  );
}
