"use client";

import "bootstrap-icons/font/bootstrap-icons.css";
import { useLang } from "../context/LanguageContext";
import { ASCIIWake } from "./ASCIIWake";

const ICONS = ["code-slash", "database-fill", "lightbulb-fill"];

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="about">
      <h2>{t.about.title}</h2>

      <div className="about-contenido">
        <div className="about-foto">
          <ASCIIWake fluid />
        </div>

        <div className="about-caja">
          {t.about.items.map((item, i) => (
            <div key={item.title} className="about-item">
              <i className={`bi bi-${ICONS[i]}`}></i>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
