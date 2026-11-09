"use client";

import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";
import foto from "../assets/photo.jpeg";
import { useLang } from "../context/LanguageContext";
import { EyeTracker } from "./EyeTracker";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="hero">
      <div className="hero-texto">
        <h1>{t.hero.title}</h1>
        <p>{t.hero.text}</p>
        <div className="hero-botones">
          <a href="mailto:CiroSolanoVega04@outlook.com" className="boton">
            <i className="bi bi-envelope-fill"></i> {t.hero.contact}
          </a>
          <a
            href="https://github.com/CiroVega"
            target="_blank"
            rel="noopener noreferrer"
            className="boton boton-borde"
          >
            <i className="bi bi-github"></i> {t.hero.github}
          </a>
        </div>

        <div className="hero-dock">
          <EyeTracker within=".hero-texto" />
        </div>
      </div>

      <div className="hero-foto">
        <Image src={foto} alt="Foto de Ciro" />
        <div className="hero-nombre">
          <strong>Ciro Sebastián Solano Vega</strong>
        </div>
      </div>
    </section>
  );
}
