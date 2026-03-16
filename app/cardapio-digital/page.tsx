import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactWhatsApp from "@/components/ContactWhatsApp";
import ContactForm from "@/components/ContactForm";
import AnimatedSectionTitle from "@/components/AnimatedSectionTitle";
import ContactPanel from "@/components/ContactPanel";
import ArticleBanner from "@/components/ArticleBanner";

export const metadata: Metadata = {
  title: "Cardápio Digital para Restaurantes | Link Food",
  description:
    "Como criar um cardápio digital otimizado para aumentar pedidos e presença no Google.",
  alternates: { canonical: "/cardapio-digital" },
  keywords: [
    "cardápio digital",
    "cardápio online",
    "menu eletrônico",
    "delivery",
    "restaurante",
  ],
  openGraph: {
    title: "Cardápio Digital para Restaurantes | Link Food",
    description:
      "Como criar um cardápio digital otimizado para aumentar pedidos e presença no Google.",
    type: "article",
    url: "/cardapio-digital",
    images: [{ url: "/image-banner.png", alt: "Cardápio Digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cardápio Digital para Restaurantes | Link Food",
    description:
      "Como criar um cardápio digital otimizado para aumentar pedidos e presença no Google.",
    images: ["/image-banner.png"],
  },
};

const seoCards = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 6h16M4 12h8m-8 6h16" />
      </svg>
    ),
    title: "Título otimizado",
    desc: "Use termos principais no início do título e mantenha clareza para o leitor e para os buscadores.",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    ),
    title: "Imagens leves",
    desc: "Comprima e defina texto alternativo com palavras-chave relevantes para melhorar o ranqueamento.",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    title: "Seções escaneáveis",
    desc: "Divida em blocos curtos com listas e subtítulos para facilitar a leitura e a indexação.",
  },
];

const tags = [
  "cardápio digital",
  "cardápio online",
  "menu eletrônico",
  "delivery",
  "restaurante",
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Cardápio Digital para Restaurantes",
    description:
      "Como criar um cardápio digital otimizado para aumentar pedidos e presença no Google.",
    keywords:
      "cardápio digital, cardápio online, menu eletrônico, delivery, restaurante",
    author: { "@type": "Organization", name: "Link Food" },
    mainEntityOfPage: { "@type": "WebPage", "@id": "/cardapio-digital" },
    image: ["/image-banner.png"],
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Header />
      <Script
        id="jsonld-cardapio-digital"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Banner com botão "Voltar ao Blog" integrado ── */}
      <ArticleBanner
        title="Cardápio Digital para Restaurantes"
        subtitle="Como criar um cardápio digital otimizado para aumentar pedidos e presença no Google."
        image="/banner-blog.png"
        backHref="/blog"
        backLabel="Voltar ao Blog"
        category="Guia"
        readTime="5 min de leitura"
      />

      {/* ── Corpo do artigo ── */}
      <section className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent"
        />

        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-14 md:py-20">
          <article className="max-w-3xl mx-auto lg:max-w-none">
            {/* Intro */}
            <p className="text-neutral-300 text-lg md:text-xl leading-relaxed max-w-2xl border-l-2 border-red-500 pl-5">
              Um cardápio digital melhora a experiência do cliente, facilita
              atualizações e aumenta sua presença em buscas como{" "}
              <strong className="text-white font-medium">
                cardápio digital
              </strong>{" "}
              e <strong className="text-white font-medium">delivery</strong>.
            </p>

            {/* Section 1 */}
            <section aria-labelledby="por-que-section" className="mt-16">
              <AnimatedSectionTitle>
                <span id="por-que-section">
                  Por que ter um cardápio digital
                </span>
              </AnimatedSectionTitle>

              <p className="text-neutral-300 mt-4 leading-relaxed max-w-2xl">
                Com um cardápio online, seu restaurante aparece para mais
                buscas, pode lançar promoções com rapidez e reduzir o tempo de
                atualização de preços e fotos.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Atualize preços e fotos em tempo real, sem imprimir nada",
                  "Apareça para quem busca delivery e cardápio online na sua cidade",
                  "Reduza erros de pedido com descrições e imagens detalhadas",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-neutral-300"
                  >
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 6l3 3 5-5" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* CTA WhatsApp */}
            <div className="mt-12">
              <ContactWhatsApp />
            </div>

            {/* Section 2 */}
            <section aria-labelledby="seo-section" className="mt-16">
              <AnimatedSectionTitle>
                <span id="seo-section">Boas práticas de SEO</span>
              </AnimatedSectionTitle>

              <p className="text-neutral-300 mt-4 leading-relaxed max-w-2xl">
                Inclua palavras-chave em títulos, descrições e headings. Use
                URLs amigáveis, imagens otimizadas e conteúdo escaneável para
                aumentar relevância.
              </p>
            </section>

            {/* SEO Cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {seoCards.map((card) => (
                <div
                  key={card.title}
                  className="group relative rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm p-6 hover:border-red-500/40 hover:bg-neutral-900 transition-all duration-300 overflow-hidden"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 20%, rgba(239,68,68,0.06) 0%, transparent 70%)",
                    }}
                  />
                  <div className="w-10 h-10 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-red-400 mb-4 group-hover:border-red-500/40 transition-colors">
                    {card.icon}
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact Panel */}
            <div className="mt-14">
              <ContactPanel />
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-neutral-800/60">
              <p className="text-xs uppercase tracking-widest text-neutral-500 mb-4 font-medium">
                Tópicos relacionados
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((k) => (
                  <span
                    key={k}
                    className="text-xs px-3 py-1.5 rounded-full bg-neutral-800/80 border border-neutral-700/60 text-neutral-300 hover:border-red-500/30 hover:text-white transition-colors cursor-default"
                  >
                    {k}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Contact Form */}
          <div className="mt-20 max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
