import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_ENTRIES } from "@/lib/blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog | Link Food",
  description:
    "Conteúdos focados em SEO para delivery e restaurantes. Explore guias por palavra‑chave.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Link Food",
    description:
      "Conteúdos focados em SEO para delivery e restaurantes. Explore guias por palavra‑chave.",
    type: "website",
    url: "/blog",
  },
  twitter: {
    card: "summary",
    title: "Blog | Link Food",
    description:
      "Conteúdos focados em SEO para delivery e restaurantes. Explore guias por palavra‑chave.",
  },
};

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Header />
      <section className="relative pt-28">
        <div className="absolute inset-0 -z-10">
          <div
            className="w-full h-64 md:h-80 bg-cover bg-center"
            style={{ backgroundImage: "url(/image-banner.png)" }}
          />
        </div>
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="p-4 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-center bg-black/40 px-6 py-3 rounded-2xl">
              Blog Link Food
            </h1>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-6 md:px-12 lg:px-24 py-12">
        <p className="text-neutral-400 text-lg max-w-2xl">
          Páginas otimizadas por palavra‑chave para ranquear melhor no Google e
          aumentar pedidos do seu delivery.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_ENTRIES.map((entry) => (
            <article
              key={entry.slug}
              className="group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 hover:border-red-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/10"
            >
              {entry.heroImage && (
                <div
                  className="h-36 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${entry.heroImage})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 to-transparent" />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-2xl font-bold">
                  <Link href={`/${entry.slug}`}>{entry.title}</Link>
                </h2>
                <p className="text-neutral-400 mt-2">{entry.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.keywords.slice(0, 4).map((k) => (
                    <span
                      key={k}
                      className="text-xs px-2 py-1 rounded-full bg-neutral-800 text-neutral-300"
                    >
                      {k}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <Link
                    href={`/${entry.slug}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#ee121c] text-white text-sm font-semibold hover:bg-red-600 transition-colors"
                  >
                    Ler guia
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
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
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
