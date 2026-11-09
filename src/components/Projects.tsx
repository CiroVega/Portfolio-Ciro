"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "../context/LanguageContext";
import { Carousel } from "./Carousel";

/* The carousel has a fixed stage (see STAGE_W / STAGE_H in Carousel.tsx).
   On narrow screens it is scaled down to fit the card; on wide screens the
   scale stays at 1, so desktop is untouched. */
const STAGE_W = 690;
const STAGE_H = 770;

export default function Projects() {
  const { t } = useLang();
  const box = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const fit = () => setScale(Math.min(1, el.clientWidth / STAGE_W));
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <section id="projects" className="projects">
      <h2>{t.projects.title}</h2>

      <div
        ref={box}
        className="projects-carrusel"
        style={{ height: STAGE_H * scale, overflow: scale < 1 ? "hidden" : undefined }}
      >
        <div
          style={{
            width: STAGE_W,
            height: STAGE_H,
            flex: "none",
            transform: `scale(${scale})`,
            transformOrigin: "top center",
          }}
        >
          <Carousel />
        </div>
      </div>
    </section>
  );
}
