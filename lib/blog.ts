export type BlogEntry = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  heroImage?: string;
  content: {
    sections: { heading: string; paragraphs: string[] }[];
  };
};

export const BLOG_ENTRIES: BlogEntry[] = [
  {
    slug: "cardapio-digital",
    title: "Cardápio Digital para Restaurantes",
    description:
      "Como criar um cardápio digital otimizado para aumentar pedidos e presença no Google.",
    keywords: [
      "cardápio digital",
      "cardápio online",
      "menu eletrônico",
      "delivery",
      "restaurante",
    ],
    heroImage: "/image-banner.png",
    content: {
      sections: [
        {
          heading: "Por que ter um cardápio digital",
          paragraphs: [
            "Um cardápio digital melhora a experiência do cliente e facilita atualizações de preços e promoções.",
            "Com um cardápio online, seu restaurante aparece para mais buscas como cardápio digital e delivery na sua região.",
          ],
        },
        {
          heading: "Boas práticas de SEO",
          paragraphs: [
            "Inclua palavras‑chave como cardápio digital e cardápio online em títulos, descrições e textos.",
            "Use URLs amigáveis, headings claros e imagens otimizadas para aumentar relevância.",
          ],
        },
      ],
    },
  },
  {
    slug: "pedidos-whatsapp",
    title: "Pedidos no WhatsApp para Delivery",
    description:
      "Receba pedidos organizados no WhatsApp e aumente a conversão do seu delivery.",
    keywords: ["pedidos whatsapp", "delivery whatsapp", "link de pedido"],
    heroImage: "/logo.png",
    content: {
      sections: [
        {
          heading: "Vantagens do WhatsApp",
          paragraphs: [
            "Clientes preferem canais rápidos e familiares como o WhatsApp.",
            "Automatize informações de produto, cliente e preço para confirmar pedidos com agilidade.",
          ],
        },
        {
          heading: "Como configurar",
          paragraphs: [
            "Crie um link único e exiba botões claros como Pedir pelo WhatsApp.",
            "Mantenha mensagem inicial com palavras‑chave relevantes como delivery whatsapp.",
          ],
        },
      ],
    },
  },
  {
    slug: "aumentar-vendas-delivery",
    title: "Como Aumentar Vendas no Delivery",
    description:
      "Estratégias práticas para aumentar vendas do delivery com SEO e experiência.",
    keywords: ["aumentar vendas", "delivery", "promoções", "combos"],
    heroImage: "/pizzaria.png",
    content: {
      sections: [
        {
          heading: "Estratégias de visibilidade",
          paragraphs: [
            "Otimize páginas com termos aumentar vendas e delivery para atrair buscas qualificadas.",
            "Crie páginas específicas para produtos e regiões para melhorar posicionamento local.",
          ],
        },
        {
          heading: "Conversão e recorrência",
          paragraphs: [
            "Use combos, cupons e layouts simples focados em ação.",
            "Facilite o pedido, reduza fricções e destaque diferenciais como frete ou tempo médio.",
          ],
        },
      ],
    },
  },
  {
    slug: "menu-para-hamburgueria",
    title: "Menu Digital para Hamburgueria",
    description:
      "Crie um menu online para hamburgueria com SEO local e fotos otimizadas.",
    keywords: [
      "menu hamburgueria",
      "cardápio hambúrguer",
      "delivery hambúrguer",
      "SEO local",
    ],
    heroImage: "/hamburgueria.png",
    content: {
      sections: [
        {
          heading: "SEO local",
          paragraphs: [
            "Inclua bairro e cidade nas descrições e headings.",
            "Use palavras‑chave como delivery hambúrguer e menu hamburgueria.",
          ],
        },
        {
          heading: "Fotos e descrição",
          paragraphs: [
            "Imagens leves com texto alternativo descritivo ajudam no ranqueamento.",
            "Descreva ingredientes e diferenciais para aumentar conversão.",
          ],
        },
      ],
    },
  },
  {
    slug: "menu-para-pizzaria",
    title: "Menu Digital para Pizzaria",
    description:
      "Guia de SEO para criar páginas de sabores e combos que ranqueiam.",
    keywords: ["menu pizzaria", "pizza delivery", "sabores de pizza"],
    heroImage: "/pizzaria.png",
    content: {
      sections: [
        {
          heading: "Arquitetura de páginas",
          paragraphs: [
            "Crie páginas por sabor com headings e descrições únicas.",
            "Inclua termos como pizza delivery e menu pizzaria em títulos e meta.",
          ],
        },
        {
          heading: "Snippet e destaque",
          paragraphs: [
            "Use FAQs e listas para responder dúvidas comuns.",
            "Estruture conteúdo para aparecer em rich results.",
          ],
        },
      ],
    },
  },
  {
    slug: "cardapio-online-simples",
    title: "Cardápio Online Simples",
    description:
      "Como montar um cardápio online simples e eficaz para seu negócio.",
    keywords: ["cardápio simples", "menu online", "loja virtual de comida"],
    heroImage: "/marmita.png",
    content: {
      sections: [
        {
          heading: "Estrutura mínima",
          paragraphs: [
            "Título claro, descrição objetiva e preços visíveis aumentam confiança.",
            "Inclua chamadas de ação diretas como Pedir agora.",
          ],
        },
        {
          heading: "SEO essencial",
          paragraphs: [
            "Meta description com palavras‑chave principais como cardápio online.",
            "URLs curtas e headings semânticos para facilitar leitura.",
          ],
        },
      ],
    },
  },
  {
    slug: "delivery-com-promocoes",
    title: "Delivery com Promoções que Convertem",
    description:
      "Estratégias de promoções e cupons para aumentar pedidos do delivery.",
    keywords: ["promoções delivery", "cupons", "combos", "frete grátis"],
    heroImage: "/logo-footer.png",
    content: {
      sections: [
        {
          heading: "Tipos de promoção",
          paragraphs: [
            "Crie combos e cupons com regras claras e tempo limitado.",
            "Use termos como promoções delivery e frete grátis quando aplicável.",
          ],
        },
        {
          heading: "Medição e ajuste",
          paragraphs: [
            "Acompanhe taxa de conversão por campanha.",
            "Teste diferentes textos e imagens para melhorar performance.",
          ],
        },
      ],
    },
  },
  {
    slug: "seo-para-delivery",
    title: "SEO para Delivery e Restaurantes",
    description:
      "Passo a passo de SEO para ranquear páginas de delivery e cardápio.",
    keywords: ["SEO delivery", "SEO restaurante", "otimização de conteúdo"],
    heroImage: "/globe.svg",
    content: {
      sections: [
        {
          heading: "Pesquisa de palavras‑chave",
          paragraphs: [
            "Mapeie termos com intenção de compra como pedir comida e delivery perto.",
            "Crie páginas dedicadas para palavras com alto volume e relevância.",
          ],
        },
        {
          heading: "On‑page e técnica",
          paragraphs: [
            "Otimize title, description, headings e imagens.",
            "Estruture dados com JSON‑LD para aparecer em resultados aprimorados.",
          ],
        },
      ],
    },
  },
  {
    slug: "landing-page-delivery",
    title: "Landing Page para Delivery",
    description:
      "Como construir landing pages de delivery que ranqueiam e convertem.",
    keywords: ["landing page delivery", "página de vendas", "CTA"],
    heroImage: "/logo.png",
    content: {
      sections: [
        {
          heading: "Elementos essenciais",
          paragraphs: [
            "Título com benefício, prova social e CTA acima da dobra.",
            "Conteúdo escaneável com listas e blocos visuais.",
          ],
        },
        {
          heading: "Copy e intenção",
          paragraphs: [
            "Use linguagem direta e termos como landing page delivery.",
            "Alinhe expectativa com oferta e próximo passo.",
          ],
        },
      ],
    },
  },
  {
    slug: "faq-delivery",
    title: "FAQ de Delivery para SEO",
    description:
      "Perguntas frequentes estruturadas para aumentar visibilidade e confiança.",
    keywords: ["FAQ delivery", "perguntas frequentes", "rich results"],
    heroImage: "/file.svg",
    content: {
      sections: [
        {
          heading: "Estruture perguntas e respostas",
          paragraphs: [
            "Liste dúvidas comuns e responda com clareza em blocos.",
            "Marque com dados estruturados para potencial rich results.",
          ],
        },
        {
          heading: "Atualização contínua",
          paragraphs: [
            "Revise conteúdo com base em buscas e feedback de clientes.",
            "Mantenha respostas curtas e objetivas com palavras‑chave de cauda longa.",
          ],
        },
      ],
    },
  },
  {
    slug: "cardapio-para-marmitaria",
    title: "Cardápio Online para Marmitaria",
    description:
      "Otimize seu cardápio de marmitas com SEO local e fotos reais.",
    keywords: ["marmitas", "cardápio marmitaria", "delivery marmita"],
    heroImage: "/marmita.png",
    content: {
      sections: [
        {
          heading: "Palavras‑chave locais",
          paragraphs: [
            "Combine bairro e tipos de marmita nas descrições.",
            "Inclua termos como delivery marmita e cardápio marmitaria.",
          ],
        },
        {
          heading: "Fotos e variações",
          paragraphs: [
            "Mostre porções, acompanhamentos e preços com clareza.",
            "Crie páginas por variação para ranquear diferentes combinações.",
          ],
        },
      ],
    },
  },
];

export function getBlogEntryBySlug(slug: string): BlogEntry | undefined {
  return BLOG_ENTRIES.find((e) => e.slug === slug);
}
