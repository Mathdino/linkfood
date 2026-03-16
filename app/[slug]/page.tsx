import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import Link from "next/link";
import { BLOG_ENTRIES, getBlogEntryBySlug } from "@/lib/blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactWhatsApp from "@/components/ContactWhatsApp";
import ContactForm from "@/components/ContactForm";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return BLOG_ENTRIES.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const entry = getBlogEntryBySlug(params.slug);
  if (!entry) return {};
  const url = `/${entry.slug}`;
  return {
    title: `${entry.title} | Link Food`,
    description: entry.description,
    alternates: { canonical: url },
    keywords: entry.keywords,
    openGraph: {
      title: `${entry.title} | Link Food`,
      description: entry.description,
      type: "article",
      url,
      images: entry.heroImage
        ? [{ url: entry.heroImage, alt: entry.title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${entry.title} | Link Food`,
      description: entry.description,
      images: entry.heroImage ? [entry.heroImage] : undefined,
    },
  };
}

export default function KeywordPage({ params }: { params: Params }) {
  const entry = getBlogEntryBySlug(params.slug);
  if (!entry) return notFound();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: entry.title,
    description: entry.description,
    keywords: entry.keywords.join(", "),
    author: { "@type": "Organization", name: "Link Food" },
    mainEntityOfPage: { "@type": "WebPage", "@id": `/${entry.slug}` },
    image: entry.heroImage ? [entry.heroImage] : undefined,
  };
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Header />
      <Script
        id="jsonld-root-blogposting"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative pt-28">
        <div className="absolute inset-0 -z-10">
          <div
            className="w-full h-64 md:h-80 bg-cover bg-center"
            style={{
              backgroundImage: `url(${entry.heroImage || "/image-banner.png"})`,
            }}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="h-64 md:h-80 flex items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-center bg-black/40 px-6 py-3 rounded-2xl">
              {entry.title}
            </h1>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-6 md:px-12 lg:px-24 py-12">
        <div className="flex items-center justify-between gap-6 mb-6">
          <Link
            href="/blog"
            className="text-sm px-4 py-2 rounded-full border border-neutral-700 text-neutral-300 hover:border-neutral-500 hover:text-white hover:bg-neutral-900 transition-colors"
          >
            Voltar ao Blog
          </Link>
        </div>
        <article className="prose prose-invert max-w-none">
          <p className="text-neutral-300 text-lg">{entry.description}</p>
          {entry.content.sections.map((s) => (
            <section key={s.heading} className="mt-8">
              <h2 className="text-2xl md:text-3xl font-bold">{s.heading}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i} className="text-neutral-300 mt-3 leading-relaxed">
                  {p}
                </p>
              ))}
            </section>
          ))}
          <ContactWhatsApp />
          <div className="mt-10 flex flex-wrap gap-2">
            {entry.keywords.map((k) => (
              <span
                key={k}
                className="text-xs px-2 py-1 rounded-full bg-neutral-800 text-neutral-300"
              >
                {k}
              </span>
            ))}
          </div>
        </article>
        <ContactForm />
      </section>
      <Footer />
    </main>
  );
}
