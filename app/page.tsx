import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Clock3, Compass } from "lucide-react";
import { ArticleCard } from "@/components/common/article-card";
import { categories, featuredArticles } from "@/data/mock-content";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <Image
          src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=2200&q=85"
          alt="Céu estrelado sobre montanhas, visto do espaço"
          fill
          priority
          sizes="100vw"
          className="hero__image"
        />
        <div className="hero__scrim" />
        <div className="hero__content page-shell">
          <p className="eyebrow hero__eyebrow">
            <span className="eyebrow__mark" />
            Um universo de ideias, ao seu alcance
          </p>
          <h1>
            Explore how
            <br />
            the world <span>works.</span>
          </h1>
          <p className="hero__intro">
            Conhecimento para olhar de novo para o que sempre esteve ao seu redor.
            Ciência, natureza e tecnologia explicadas com curiosidade.
          </p>
          <div className="hero__actions">
            <Link className="button button--accent" href="#categories">
              Comece a explorar <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <a className="text-link hero__secondary" href="#latest">
              Descubra uma história <ArrowDown size={15} aria-hidden="true" />
            </a>
          </div>
          <div className="hero__note">
            <Compass size={15} aria-hidden="true" />
            <span>Curiosidade é o começo de toda descoberta.</span>
          </div>
        </div>
        <div className="hero__index" aria-hidden="true">
          <span>01</span>
          <span className="hero__index-line" />
          <span>03</span>
        </div>
        <a className="hero__scroll" href="#categories" aria-label="Explorar categorias">
          <span>Explore</span>
          <ArrowDown size={16} aria-hidden="true" />
        </a>
      </section>

      <section className="section section--categories page-shell" id="categories">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow__mark" /> Explore por interesse</p>
            <h2>O mundo tem <span>camadas.</span></h2>
          </div>
          <p className="section-heading__aside">
            Escolha um caminho. Cada assunto abre portas para muitos outros.
          </p>
        </div>

        <div className="category-grid">
          {categories.map((category, index) => (
            <Link
              className={`category-card category-card--${category.slug}`}
              href={`/categories/${category.slug}`}
              key={category.slug}
            >
              <Image
                src={category.image}
                alt={category.imageAlt}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw"
                className="category-card__image"
              />
              <span className="category-card__number">0{index + 1}</span>
              <span className="category-card__content">
                <span className="category-card__kicker">{category.kicker}</span>
                <span className="category-card__title">{category.name}</span>
                <span className="category-card__description">{category.description}</span>
                <span className="category-card__link">
                  Explorar categoria <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section section--latest" id="latest">
        <div className="page-shell">
          <div className="section-heading section-heading--latest">
            <div>
              <p className="eyebrow"><span className="eyebrow__mark" /> Leituras para despertar ideias</p>
              <h2>Uma descoberta <span>de cada vez.</span></h2>
            </div>
            <div className="section-heading__aside">
              <p>Pequenas perguntas. Grandes perspectivas.</p>
              <span className="demo-label">Prévia editorial · conteúdo demonstrativo</span>
            </div>
          </div>
          <div className="article-grid">
            {featuredArticles.map((article, index) => (
              <ArticleCard article={article} index={index} key={article.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="discovery" id="about">
        <div className="discovery__orb discovery__orb--one" aria-hidden="true" />
        <div className="discovery__orb discovery__orb--two" aria-hidden="true" />
        <div className="discovery__inner page-shell">
          <div className="discovery__icon"><BookOpen size={22} aria-hidden="true" /></div>
          <p className="eyebrow">Conhecimento que conecta</p>
          <h2>O extraordinário começa<br />com um simples <span>“por quê?”</span></h2>
          <p className="discovery__copy">
            Siga sua curiosidade por ideias, histórias e explicações feitas para
            ampliar a forma como você enxerga o mundo.
          </p>
          <Link className="button button--light" href="#categories">
            Encontre seu próximo assunto <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <div className="discovery__footnote">
            <Clock3 size={14} aria-hidden="true" />
            <span>Leia no seu ritmo. Descubra no seu tempo.</span>
          </div>
        </div>
      </section>
    </main>
  );
}
