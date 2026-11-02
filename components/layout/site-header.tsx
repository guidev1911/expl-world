"use client";

import Link from "next/link";
import { useState } from "react";
import { Compass, Menu, Search, X } from "lucide-react";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href="/" aria-label="EXPL WORLD — página inicial" onClick={closeMenu}>
          <span className="brand__symbol"><Compass size={19} strokeWidth={1.6} aria-hidden="true" /></span>
          <span className="brand__wordmark">EXPL<span>WORLD</span></span>
        </Link>

        <nav id="primary-navigation" className={`site-nav${menuOpen ? " site-nav--open" : ""}`} aria-label="Navegação principal">
          <Link className="site-nav__link" href="/" onClick={closeMenu}>Início</Link>
          <Link className="site-nav__link" href="/#categories" onClick={closeMenu}>Explorar</Link>
          <Link className="site-nav__link" href="/#latest" onClick={closeMenu}>Artigos</Link>
          <Link className="site-nav__link" href="/#about" onClick={closeMenu}>Sobre</Link>
        </nav>

        <div className="header-actions">
          <button
            className="header-actions__search"
            type="button"
            aria-label={searchOpen ? "Fechar pesquisa" : "Abrir pesquisa"}
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen((open) => !open)}
          >
            {searchOpen ? <X size={16} aria-hidden="true" /> : <Search size={16} aria-hidden="true" />}
            <span>Pesquisar</span>
          </button>
          <Link className="header-actions__login" href="/login" onClick={closeMenu}>Entrar</Link>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
        </button>

        {searchOpen && (
          <div className="search-panel">
            <label className="search-panel__label" htmlFor="site-search">O que você quer descobrir?</label>
            <form className="search-panel__form" action="/search" role="search">
              <input id="site-search" name="q" type="search" placeholder="Experimente “energia solar”" />
              <button type="submit" aria-label="Pesquisar"><Search size={17} aria-hidden="true" /></button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
}
