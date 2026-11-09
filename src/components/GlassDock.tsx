"use client";

import { useLayoutEffect, useRef, useState } from "react";
import "./GlassDock.css";
import { useLang } from "../context/LanguageContext";

type Key = "about" | "skills" | "projects" | "contact";
type Item = { key: Key };

/* las mismas opciones que tenía el navbar; key = id de la sección */
const DOCK: Item[] = [
  { key: "about" },
  { key: "skills" },
  { key: "projects" },
  { key: "contact" },
];

const goTo = (key: string) => {
  document.getElementById(key)?.scrollIntoView({ behavior: "smooth" });
};

/* ══ dock, distance based magnification ═══════════════════
   Scale falls off with distance from the cursor rather than
   applying only to the hovered item, which is what stops it
   reading as a row of buttons that happen to grow. */

export function GlassDock({
  /* what the glyph under the cursor grows to */
  magnify = 1.32,
  /* how many neighbours either side feel it */
  spread = 2,
  /* how far the nearest glyph rises out of the bar */
  lift = 8,
  /* the name that appears over whatever is under the cursor */
  labels = true,
}: {
  magnify?: number;
  spread?: number;
  lift?: number;
  labels?: boolean;
}) {
  const { t } = useLang();
  const [hover, setHover] = useState<number | null>(null);
  const [active, setActive] = useState(DOCK[0].key);

  /* The bar reads the pointer, the items do not: one handler on the
     bar, and the index comes from the nearest item centre to the
     pointer's x. */
  const bar = useRef<HTMLElement | null>(null);
  const down = useRef(false);
  /* set when a finger has already chosen on lift, so the click the
     browser sends afterwards does not undo the choice. */
  const chose = useRef(false);

  const at = (clientX: number) => {
    const items = bar.current?.querySelectorAll(".gdock-item");
    if (!items?.length) return null;
    let best = 0;
    let gap = Infinity;
    items.forEach((el, i) => {
      const b = el.getBoundingClientRect();
      const d = Math.abs(clientX - (b.left + b.width / 2));
      if (d < gap) {
        gap = d;
        best = i;
      }
    });
    return best;
  };

  const to = (i: number | null) => setHover(i);

  const track = (e: React.PointerEvent) => {
    /* a mouse magnifies on hover; a finger has to be down */
    if (e.pointerType !== "mouse" && !down.current) return;
    to(at(e.clientX));
  };

  return (
    <nav
      className="gdock"
      aria-label="Dock"
      ref={bar}
      /* capture phase: each item stops pointerdown propagating, so
         bubbling handlers here would never run. */
      onPointerDownCapture={(e) => {
        down.current = true;
        /* disarmed at the start of the next gesture, whatever the
           browser decided to do with the last one */
        chose.current = false;
        to(at(e.clientX));
      }}
      onPointerMoveCapture={track}
      /* a finger picks on lift: whichever item it came to rest over */
      onPointerUpCapture={(e) => {
        if (down.current && e.pointerType !== "mouse") {
          const i = at(e.clientX);
          if (i !== null) {
            chose.current = true;
            if (DOCK[i].key !== active) {
              setActive(DOCK[i].key);
            }
            goTo(DOCK[i].key);
          }
        }
        down.current = false;
        if (e.pointerType !== "mouse") to(null);
      }}
      onPointerCancelCapture={() => {
        down.current = false;
        to(null);
      }}
      onPointerLeave={() => {
        if (!down.current) to(null);
      }}
    >
      {DOCK.map(({ key }, i) => {
        const label = t.nav[key];
        const d = hover === null ? 99 : Math.abs(i - hover);
        /* a raised cosine over the reach: 1 under the cursor, easing
           to 0 at the edge of the reach, and flat zero past it */
        const f =
          d > spread ? 0 : (1 + Math.cos((Math.PI * d) / (spread + 1))) / 2;
        const scale = 1 + (magnify - 1) * f;
        return (
          <button
            key={key}
            className="gdock-item"
            aria-label={label}
            aria-current={active === key ? "page" : undefined}
            data-near={d <= 1 ? d : undefined}
            data-active={active === key}
            onClick={() => {
              /* the lift already chose */
              if (chose.current) return;
              setActive(key);
              goTo(key);
            }}
            onPointerDown={(e) => e.stopPropagation()}
          >
            {/* the glyph magnifies, not the button */}
            <span
              className="gdock-glyph"
              style={{
                transform: `translateY(${-lift * f}px) scale(${scale})`,
              }}
            >
              {label}
            </span>
            <span className="gdock-dot" data-on={active === key} />
          </button>
        );
      })}
      {labels && <DockTip bar={bar} at={hover} />}
    </nav>
  );
}

/* One tip that travels: slides along to whichever icon is under the
   pointer and changes width to fit the new word. It keeps the last
   word while it fades. */
function DockTip({
  bar,
  at,
}: {
  bar: React.RefObject<HTMLElement | null>;
  at: number | null;
}) {
  const { t } = useLang();
  const [last, setLast] = useState(0);
  const [place, setPlace] = useState<{ x: number; w: number } | null>(null);
  const word = useRef<HTMLSpanElement>(null);
  /* the first placing must not slide in from the bar's left edge */
  const [ready, setReady] = useState(false);
  if (at !== null && at !== last) setLast(at);

  useLayoutEffect(() => {
    const nav = bar.current;
    const item = nav?.querySelectorAll<HTMLElement>(".gdock-item")[last];
    const text = word.current;
    if (!nav || !item || !text) return;
    /* offsetLeft is layout, so the glyph's own scale does not skew it */
    const w = Math.ceil(text.scrollWidth) + 24;
    setPlace({ x: item.offsetLeft + item.offsetWidth / 2 - w / 2, w });
  }, [last, bar, t]);
  useLayoutEffect(() => {
    if (!place || ready) return;
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, [place, ready]);

  return (
    <span
      className="gdock-tip"
      aria-hidden="true"
      data-on={at !== null && !!place}
      data-ready={ready || undefined}
      style={
        place
          ? { width: place.w, transform: `translateX(${place.x}px)` }
          : undefined
      }
    >
      <span ref={word}>{t.nav[DOCK[last].key]}</span>
    </span>
  );
}
