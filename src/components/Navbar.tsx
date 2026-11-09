"use client";

import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "flag-icons/css/flag-icons.min.css";
import { GlassDock } from "./GlassDock";
import { useLang } from "../context/LanguageContext";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="gdock-escena">
      <span className="marca">Portfolio</span>

      <GlassDock magnify={1.32} spread={2} lift={4} labels={false} />

      {/* en celular: menú hamburguesa (el dock se oculta con CSS) */}
      <button
        className="btn-solid theme-secondary hamburguesa"
        type="button"
        onClick={() => setAbierto((a) => !a)}
        aria-label="Menu"
        aria-expanded={abierto}
      >
        <i className={`bi ${abierto ? "bi-x-lg" : "bi-list"}`}></i>
      </button>
      <nav className="menu menu-movil" data-open={abierto || undefined} data-bs-theme="dark">
        {(["about", "skills", "projects"] as const).map((k) => (
          <a key={k} className="menu-item" href={`#${k}`} onClick={() => setAbierto(false)}>
            {t.nav[k]}
          </a>
        ))}
        <hr className="menu-divider" />
        <a className="menu-item" href="#contact" onClick={() => setAbierto(false)}>
          {t.nav.contact}
        </a>
      </nav>


      <div className="idioma" role="group" aria-label="Idioma / Language">
        <button
          className="idioma-btn"
          data-active={lang === "es"}
          onClick={() => setLang("es")}
          aria-label="Español"
          aria-pressed={lang === "es"}
        >
          <span className="fi fi-es"></span>
        </button>
        <button
          className="idioma-btn"
          data-active={lang === "en"}
          onClick={() => setLang("en")}
          aria-label="English"
          aria-pressed={lang === "en"}
        >
          <span className="fi fi-us"></span>
        </button>
      </div>

    </div>
  );
}
