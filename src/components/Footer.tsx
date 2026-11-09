"use client";

import "bootstrap-icons/font/bootstrap-icons.css";
import { useLang } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer id="contact" className="footer">
      <div className="footer-contenido">
        <div className="footer-texto">
          <h2>{t.footer.title}</h2>
          <p>{t.footer.text}</p>
        </div>

        <ul className="footer-lista">
          <li>
            <i className="bi bi-envelope-fill"></i>
            <a href="mailto:CiroSolanoVega04@outlook.com">
              CiroSolanoVega04@outlook.com
            </a>
          </li>
          <li>
            <i className="bi bi-linkedin"></i>
            <a
              href="https://linkedin.com/in/ciro-solano-vega-4a5581448"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/ciro-solano-vega-4a5581448
            </a>
          </li>
          <li>
            <i className="bi bi-telephone-fill"></i>
            <a href="tel:+50685858466">+506 8585-8466</a>
          </li>
          <li>
            <i className="bi bi-geo-alt-fill"></i>
            <span>Turrialba, Cartago, Costa Rica</span>
          </li>
        </ul>
      </div>
    </footer>
  );
}
