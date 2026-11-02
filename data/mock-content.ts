import type { MockArticle, MockCategory, MockTopic } from "@/types/content";

export const categories: MockCategory[] = [
  {
    slug: "animais",
    name: "Animais",
    kicker: "Vida em movimento",
    description: "Comportamentos, habitats e as conexões que sustentam a vida.",
    longDescription:
      "Dos pequenos polinizadores aos grandes viajantes, descubra os comportamentos e as relações que tornam a vida selvagem tão fascinante.",
    image:
      "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Raposa observando a paisagem em seu habitat natural",
  },
  {
    slug: "carros",
    name: "Carros",
    kicker: "Engenharia em movimento",
    description: "A engenharia, as máquinas e as ideias por trás de cada viagem.",
    longDescription:
      "Explore como design, engenharia e novas tecnologias estão transformando a maneira como nos movemos pelo mundo.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Detalhe de um carro esportivo moderno",
  },
  {
    slug: "energia",
    name: "Energia",
    kicker: "O que move o mundo",
    description: "Fontes, sistemas e descobertas que alimentam o nosso futuro.",
    longDescription:
      "Entenda como a energia é gerada, transformada e distribuída — e conheça as ideias que estão redesenhando o futuro.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Turbinas eólicas gerando energia em uma paisagem aberta",
  },
];

export const topics: MockTopic[] = [
  {
    slug: "polinizacao",
    name: "Polinização",
    description: "Os encontros entre plantas e animais que ajudam ecossistemas inteiros a florescer.",
    categorySlug: "animais",
    image:
      "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=1100&q=85",
  },
  {
    slug: "carros-eletricos",
    name: "Carros elétricos",
    description: "Baterias, motores e tecnologias por trás de uma nova forma de dirigir.",
    categorySlug: "carros",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1100&q=85",
  },
  {
    slug: "energia-solar",
    name: "Energia solar",
    description: "Como a luz do Sol pode se transformar em eletricidade para o nosso dia a dia.",
    categorySlug: "energia",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1100&q=85",
  },
];

export const articles: MockArticle[] = [
  {
    slug: "polinizadores-pequenos-grandes-impactos",
    title: "Pequenos polinizadores, grandes impactos",
    description:
      "Como o trabalho silencioso de abelhas e outros animais ajuda a manter ecossistemas inteiros em movimento.",
    categorySlug: "animais",
    topicSlug: "polinizacao",
    image:
      "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Abelha visitando uma flor",
    readTime: "5 min de leitura",
    sections: [
      {
        id: "encontros-essenciais",
        title: "Encontros essenciais",
        body:
          "Quando um animal visita uma flor em busca de néctar ou pólen, pode carregar grãos de pólen de uma planta para outra. Esse encontro, chamado polinização, permite que muitas plantas produzam sementes e frutos. Abelhas são visitantes conhecidos, mas borboletas, aves e morcegos também participam desse processo.",
      },
      {
        id: "uma-rede-de-vida",
        title: "Uma rede de vida",
        body:
          "A polinização conecta plantas, animais e os ambientes onde vivem. A diversidade de visitantes ajuda diferentes espécies de plantas a se reproduzir, enquanto flores oferecem recursos para os animais. O resultado é uma rede de relações que sustenta habitats variados.",
      },
      {
        id: "cuidar-dos-habitats",
        title: "Cuidar dos habitats",
        body:
          "Espaços com variedade de plantas e flores ao longo das estações oferecem alimento e abrigo para muitos polinizadores. Observar essas interações é um jeito simples de perceber como mudanças em um ambiente podem repercutir por toda a comunidade de seres vivos.",
      },
    ],
  },
  {
    slug: "como-funciona-um-carro-eletrico",
    title: "Como funciona um carro elétrico?",
    description:
      "Uma explicação direta sobre bateria, motor e a energia que transforma eletricidade em movimento.",
    categorySlug: "carros",
    topicSlug: "carros-eletricos",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Carro elétrico conectado a um carregador",
    readTime: "6 min de leitura",
    sections: [
      {
        id: "energia-armazenada",
        title: "Energia armazenada",
        body:
          "Em um carro elétrico, uma bateria recarregável armazena energia. Ao pressionar o acelerador, sistemas eletrônicos controlam a quantidade de energia enviada ao motor. Diferentes modelos usam arquiteturas variadas, mas a ideia central é converter energia elétrica em movimento.",
      },
      {
        id: "do-motor-as-rodas",
        title: "Do motor às rodas",
        body:
          "O motor elétrico cria rotação que é transmitida às rodas. Como motores elétricos podem entregar força de maneira rápida, muitos veículos conseguem acelerar sem a sequência de marchas típica de vários carros a combustão.",
      },
      {
        id: "recarregar-e-recuperar",
        title: "Recarregar e recuperar",
        body:
          "A bateria pode ser carregada usando equipamentos compatíveis com o veículo. Em alguns modelos, a frenagem regenerativa também transforma parte da energia do movimento em eletricidade que retorna à bateria. A autonomia e o tempo de recarga variam de acordo com o carro, a bateria e as condições de uso.",
      },
    ],
  },
  {
    slug: "como-a-luz-do-sol-vira-eletricidade",
    title: "Como a luz do Sol vira eletricidade?",
    description:
      "Do primeiro raio ao circuito: conheça o caminho da energia solar até os aparelhos da sua casa.",
    categorySlug: "energia",
    topicSlug: "energia-solar",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Painéis solares recebendo luz do Sol",
    readTime: "4 min de leitura",
    sections: [
      {
        id: "a-luz-encontra-o-painel",
        title: "A luz encontra o painel",
        body:
          "Painéis fotovoltaicos são formados por células que respondem à luz. Quando a luz solar atinge essas células, sua energia põe cargas elétricas em movimento dentro do material, produzindo corrente elétrica.",
      },
      {
        id: "energia-pronta-para-usar",
        title: "Energia pronta para usar",
        body:
          "A eletricidade gerada pelos painéis passa por equipamentos que ajustam suas características para que possa ser utilizada com segurança. Em instalações conectadas à rede, a energia pode seguir para o consumo e o excedente pode ser tratado segundo as regras locais.",
      },
      {
        id: "do-sol-ao-cotidiano",
        title: "Do Sol ao cotidiano",
        body:
          "A quantidade de eletricidade produzida depende de fatores como incidência solar, orientação, sombreamento e características do sistema. É um exemplo de como uma fonte natural pode ser convertida em uma forma de energia útil no dia a dia.",
      },
    ],
  },
];

export const featuredArticles = articles;

export function getCategoryBySlug(slug: string): MockCategory | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getTopicBySlug(slug: string): MockTopic | undefined {
  return topics.find((topic) => topic.slug === slug);
}

export function getArticleBySlug(slug: string): MockArticle | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getTopicsByCategory(categorySlug: string): MockTopic[] {
  return topics.filter((topic) => topic.categorySlug === categorySlug);
}

export function getArticlesByTopic(topicSlug: string): MockArticle[] {
  return articles.filter((article) => article.topicSlug === topicSlug);
}
