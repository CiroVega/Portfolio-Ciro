"use client";

import { useLang } from "../context/LanguageContext";
import { Carousel } from "./Carousel";

export default function Projects() {
  const { t } = useLang();

  return (
    <section id="projects" className="projects">
      <h2>{t.projects.title}</h2>

      <div className="projects-carrusel">
        <Carousel />
      </div>
    </section>
  );
}
