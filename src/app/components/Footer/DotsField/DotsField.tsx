"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./dotField.module.css";

const PATTERNS = [
  [
    "------------------",
    "------------------",
    "------------------",
    "--------11--------",
    "-----1--11--1-----",
    "----111-11-111----",
    "-----11----11-----",
    "------------------",
    "---111------111---",
    "---111------111---",
    "------------------",
    "-----11----11-----",
    "----111-11-111----",
    "-----1--11--1-----",
    "--------11--------",
    "------------------",
    "------------------",
    "------------------",
  ],
  [
    "------------------",
    "------------------",
    "------------------",
    "------------------",
    "------11--11------",
    "----1111111111----",
    "---111111111111---",
    "---111111111111---",
    "---111111111111---",
    "----1111111111----",
    "-----11111111-----",
    "------111111------",
    "-------1111-------",
    "--------11--------",
    "------------------",
    "------------------",
    "------------------",
    "------------------",
  ],
  [
    "------------------",
    "------------------",
    "------------------",
    "--------1---------",
    "--------11--------",
    "--------11--------",
    "-------1111-------",
    "------111111------",
    "----1111--11111---",
    "---11111--1111----",
    "------111111------",
    "-------1111-------",
    "--------11--------",
    "--------11--------",
    "---------1--------",
    "------------------",
    "------------------",
    "------------------",
  ],
  [
    "------------------",
    "------------------",
    "------------------",
    "-------1111-------",
    "------111111------",
    "-----11111111-----",
    "-----11111111-----",
    "-----11111111-----",
    "------111111------",
    "-------1111-------",
    "------111111------",
    "-----111--111-----",
    "----11------11----",
    "----11------11----",
    "----1--------1----",
    "------------------",
    "------------------",
    "------------------",
  ],
  [
    "------------------",
    "------------------",
    "--------111-------",
    "-------11111------",
    "------111-111-----",
    "-----111---111----",
    "----111-----111---",
    "---111-------111--",
    "--111---------111-",
    "--111---------111-",
    "---111-------111--",
    "----111-----111---",
    "-----111---111----",
    "------111-111-----",
    "-------11111------",
    "--------111-------",
    "------------------",
    "------------------",
  ],
  [
    "------------------",
    "---111111111111---",
    "------------------",
    "----1111111111----",
    "------------------",
    "-----11111111-----",
    "------------------",
    "------111111------",
    "------------------",
    "-------1111-------",
    "------------------",
    "--------11--------",
    "------------------",
    "--------11--------",
    "------------------",
    "--------11--------",
    "------------------",
    "------------------",
  ],
];

const CLOUD_RADIUS = 12;
const TOTAL_DURATION = 1;
const FIGURE_PAUSE = 1;
const GROUPS = 20;
const CHAOS_OPACITY = 0.35;
const STAGGER_GROUP = TOTAL_DURATION / GROUPS;
const STAGGER_INSIDE = STAGGER_GROUP / 4;
const ROWS = 14;

function getMode(width: number): "desktop" | "tablet" | "mobile" {
  if (width >= 992) return "desktop";
  if (width >= 768) return "tablet";
  return "mobile";
}

function getCols(
  mode: "desktop" | "tablet" | "mobile",
  containerWidth: number,
): number {
  const dotSize = mode === "mobile" ? 12 : 24;
  const gap = mode === "mobile" ? 12 : 24;
  return Math.floor(containerWidth / (dotSize + gap));
}

export default function DotsField() {
  const fieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const field = fieldRef.current;
    if (!field) return;

    let lastMode: string | null = null;
    let cancelled = false;
    let timeouts: ReturnType<typeof setTimeout>[] = [];

    // ── Build the dot grid ──────────────────────────────────────────────────

    function buildDots() {
      const mode = getMode(window.innerWidth);
      if (mode === lastMode) return;
      lastMode = mode;

      // Kill any running tweens before wiping the DOM
      gsap.killTweensOf(field!.querySelectorAll(`.${styles.dot}`));
      timeouts.forEach(clearTimeout);
      timeouts = [];

      field!.innerHTML = "";

      const COLS = getCols(mode, field!.offsetWidth);
      field!.style.gridTemplateColumns = `repeat(${COLS}, var(--dot-size))`;

      const total = COLS * ROWS;
      const fragment = document.createDocumentFragment();

      for (let i = 0; i < total; i++) {
        const dot = document.createElement("div");
        dot.className = styles.dot;
        dot.dataset.index = String(i);
        dot.dataset.col = String(i % COLS);
        dot.dataset.row = String(Math.floor(i / COLS));
        fragment.appendChild(dot);
      }

      field!.appendChild(fragment);

      // Re-start the animation loop with fresh dots
      if (!cancelled) startLoop();
    }

    // ── Pattern → coordinate sets ───────────────────────────────────────────

    function buildStates(COLS: number) {
      const cx = Math.floor(COLS / 2);
      const cy = Math.floor(ROWS / 2);

      return PATTERNS.map((pattern) => {
        const set = new Set<string>();
        pattern.forEach((rowStr, r) => {
          [...rowStr].forEach((ch, i) => {
            if (ch === "1") set.add(`${cx - 9 + i}:${cy - 9 + r}`);
          });
        });
        return set;
      });
    }

    // ── Animation helpers ───────────────────────────────────────────────────

    function groupedShuffle(dots: Element[]) {
      const shuffled = [...dots].sort(() => Math.random() - 0.5);
      const groupSize = Math.ceil(shuffled.length / GROUPS);
      const groups: Element[][] = [];
      for (let i = 0; i < GROUPS; i++) {
        groups.push(shuffled.slice(i * groupSize, (i + 1) * groupSize));
      }
      return groups;
    }

    function showCloud(dots: Element[], cx: number, cy: number) {
      const groups = groupedShuffle(dots);
      groups.forEach((group, gIndex) => {
        group.forEach((dot) => {
          const el = dot as HTMLElement;
          const dx = Number(el.dataset.col) - cx;
          const dy = Number(el.dataset.row) - cy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const coreFactor = Math.max(0, 1 - dist / CLOUD_RADIUS);

          let opacity =
            0.15 + coreFactor * 0.7 + (Math.random() - 0.5) * CHAOS_OPACITY;
          opacity = Math.min(1, Math.max(0.15, opacity));

          gsap.to(el, {
            opacity,
            duration: TOTAL_DURATION,
            delay: gIndex * STAGGER_GROUP + Math.random() * STAGGER_INSIDE,
            ease: "steps(2)",
          });
        });
      });
    }

    function showPattern(dots: Element[], state: Set<string>) {
      const groups = groupedShuffle(dots);
      groups.forEach((group, gIndex) => {
        group.forEach((dot) => {
          const el = dot as HTMLElement;
          const key = `${el.dataset.col}:${el.dataset.row}`;
          gsap.to(el, {
            opacity: state.has(key) ? 1 : 0.15,
            duration: TOTAL_DURATION,
            delay: gIndex * STAGGER_GROUP + Math.random() * STAGGER_INSIDE,
            ease: "steps(2)",
          });
        });
      });
    }

    // ── Main animation loop ─────────────────────────────────────────────────

    function startLoop() {
      if (cancelled) return;

      const dots = Array.from(field!.querySelectorAll(`.${styles.dot}`));
      if (!dots.length) return;

      const COLS = getCols(getMode(window.innerWidth), field!.offsetWidth);
      const cx = Math.floor(COLS / 2);
      const cy = Math.floor(ROWS / 2);
      const states = buildStates(COLS);

      let index = 0;

      function cycle() {
        if (cancelled) return;
        const currentDots = Array.from(
          field!.querySelectorAll(`.${styles.dot}`),
        );

        showPattern(currentDots, states[index]);

        const t1 = setTimeout(
          () => {
            if (cancelled) return;
            index = (index + 1) % states.length;
            const freshDots = Array.from(
              field!.querySelectorAll(`.${styles.dot}`),
            );
            showCloud(freshDots, cx, cy);

            const t2 = setTimeout(cycle, TOTAL_DURATION * 1000);
            timeouts.push(t2);
          },
          TOTAL_DURATION * 1000 + FIGURE_PAUSE * 1000,
        );

        timeouts.push(t1);
      }

      showCloud(dots, cx, cy);
      const t0 = setTimeout(cycle, TOTAL_DURATION * 1000);
      timeouts.push(t0);
    }

    function handleMouseMove(e: MouseEvent) {
      const MAX_DISTANCE = 200;
      const MIN_SCALE = 0.25;

      const dots = Array.from(field!.querySelectorAll(`.${styles.dot}`));
      dots.forEach((dot) => {
        const el = dot as HTMLElement;
        const rect = el.getBoundingClientRect();
        const dotX = rect.left + rect.width / 2;
        const dotY = rect.top + rect.height / 2;
        const dx = dotX - e.clientX;
        const dy = dotY - e.clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const scale = Math.max(
          MIN_SCALE,
          Math.min(
            1,
            1 -
              (1 - MIN_SCALE) *
                Math.max(0, (MAX_DISTANCE - dist) / MAX_DISTANCE),
          ),
        );
        gsap.to(el, { scale, duration: 0.2, ease: "power2.out" });
      });
    }

    // ── Bootstrap ───────────────────────────────────────────────────────────

    buildDots();
    window.addEventListener("resize", buildDots);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
      gsap.killTweensOf(field.querySelectorAll(`.${styles.dot}`));
      window.removeEventListener("resize", buildDots);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div ref={fieldRef} className={styles.dotsField} />;
}
