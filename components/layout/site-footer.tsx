import Link from "next/link";
import { Compass } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell">
        <div className="site-footer__main">
          <div className="site-footer__brand-column">
            <Link className="brand" href="/" aria-label="EXPL WORLD — página inicial">
              <span className="brand__symbol"><Compass size={19} strokeWidth={1.6} aria-hidden="true" /></span>
              <span className="brand__wordmark">EXPL<span>WORLD</span></span>
            </Link>
            <p className="site-footer__about">
              Explore how the world works. Um espaço para seguir sua curiosidade
              e descobrir as ideias que conectam o nosso mundo.
            </p>
          </div>
          <div>
            <h2 className="site-footer__heading">Navegue</h2>
            <nav className="site-footer__links" aria-label="Links institucionais">
              <Link href="/">Início</Link>
              <Link href="/#categories">Explorar categorias</Link>
              <Link href="/#latest">Artigos</Link>
              <Link href="/#about">Sobre o projeto</Link>
            </nav>
          </div>
          <div>
            <h2 className="site-footer__heading">Categorias</h2>
            <nav className="site-footer__links" aria-label="Categorias">
              <Link href="/categories/animais">Animais</Link>
              <Link href="/categories/carros">Carros</Link>
              <Link href="/categories/energia">Energia</Link>
            </nav>
          </div>
          <div>
            <h2 className="site-footer__heading">EXPL WORLD</h2>
            <nav className="site-footer__links" aria-label="Informações do projeto">
              <Link href="/login">Acesso de usuário</Link>
              <Link href="/#about">Nossa proposta</Link>
            </nav>
          </div>
        </div>
        <div className="site-footer__bottom">
          <p>© EXPL WORLD. Todos os direitos reservados.</p>
          <p>Conhecimento para olhar o mundo de um jeito novo.</p>
        </div>
      </div>
    </footer>
  );
}
