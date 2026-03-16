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
        title="Cardápio Digital"
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
            <p className="text-neutral-300 text-lg md:text-xl leading-relaxed border-l-2 border-red-500 pl-5">
              Um{" "}
              <strong className="text-white font-medium">
                cardápio digital
              </strong>{" "}
              permite que restaurantes, hamburguerias, pizzarias e lanchonetes
              mostrem seus produtos online de forma prática e moderna. Com
              apenas um link, seus clientes podem visualizar o menu completo,
              escolher produtos e fazer pedidos rapidamente pelo WhatsApp ou
              pelo sistema de pedidos.
            </p>

            {/* Section 1 */}
            <section aria-labelledby="por-que-section" className="mt-16">
              <AnimatedSectionTitle>
                <h2 id="por-que-section">Por que usar um Cardápio Digital?</h2>
              </AnimatedSectionTitle>

              <p className="text-neutral-300 mt-4 text-lg leading-relaxed">
                O cardápio digital se tornou uma ferramenta essencial para
                restaurantes que querem vender mais no delivery. Diferente de
                cardápios tradicionais ou PDFs, ele permite atualizar preços,
                adicionar novos produtos e compartilhar o menu facilmente em
                redes sociais, Google ou WhatsApp. Além disso, melhora a
                experiência do cliente e ajuda a profissionalizar o atendimento
                do seu negócio.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Compartilhe seu cardápio online por link no WhatsApp, Instagram ou Google",
                  "Atualize preços e produtos em tempo real sem precisar reimprimir cardápios",
                  "Permite que clientes façam pedidos de forma rápida e organizada",
                  "Melhora a apresentação dos produtos com fotos, descrições e categorias",
                  "Ideal para hamburguerias, pizzarias, açaiterias, sorveterias e restaurantes",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-neutral-300 text-lg"
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
            <section aria-labelledby="seo-section" className="mt-16 w-full">
              <AnimatedSectionTitle>
                <h3 id="seo-section">
                  Cardápio Digital para Restaurantes e Delivery
                </h3>
              </AnimatedSectionTitle>

              <p className="text-neutral-300 mt-4 text-lg leading-relaxed">
                Utilizar um cardápio digital para restaurantes é uma das formas
                mais eficientes de aumentar as vendas no delivery. Com ele, os
                clientes podem acessar o menu pelo celular, escolher produtos,
                visualizar preços atualizados e enviar pedidos diretamente pelo
                WhatsApp ou pelo painel de pedidos. Essa tecnologia facilita o
                atendimento, reduz erros nos pedidos e ajuda o restaurante a ter
                mais controle sobre o cardápio e promoções. Além disso, um
                cardápio online melhora a presença digital do restaurante,
                ajudando a atrair novos clientes que pesquisam no Google por
                restaurantes, delivery ou pedidos de comida online.
              </p>
            </section>

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

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="overflow-hidden">
              <img
                src="/image-banner.png"
                alt="Entre em contato - Link Food"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="max-w-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
