"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface FadeOutParagraphProps {
  className?: string;
  text: string;
}

export default function FadeOutParagraph({
  className = "",
  text,
}: FadeOutParagraphProps) {
  const container = useRef<HTMLDivElement>(null);

  const timeline = useRef<gsap.core.Timeline | null>(null);

  const lastX = useRef(0);
  const lastTrigger = useRef(0);

  useEffect(() => {
    if (!container.current) return;

    const chars = container.current.querySelectorAll<HTMLElement>(".char");

    gsap.set(chars, {
      willChange: "transform, opacity",
      transformPerspective: 400,
    });

    timeline.current = gsap
      .timeline({ paused: true })
      .to(chars, {
        yPercent: -110,
        opacity: 0,
        duration: 0.18,
        ease: "power2.in",
        stagger: {
          each: 0.025,
          from: "start",
        },
      })
      .set(chars, {
        yPercent: 110,
      })
      .to(chars, {
        yPercent: 0,
        opacity: 1,
        duration: 0.22,
        ease: "power3.out",
        stagger: {
          each: 0.025,
          from: "end",
        },
      });

    return () => {
      timeline.current?.kill();
    };
  }, []);

  const playAnimation = () => {
    if (!timeline.current) return;

    const now = performance.now();

    // throttle
    if (now - lastTrigger.current < 120) return;

    lastTrigger.current = now;

    timeline.current.timeScale(1.2);

    // reverse direction dynamically
    timeline.current.invalidate();

    const chars = container.current?.querySelectorAll<HTMLElement>(".char");
    if (!chars) return;
    gsap.set(chars, {
      yPercent: 0,
    });

    timeline.current.restart();
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    lastX.current = e.clientX;
    playAnimation();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const dx = e.clientX - lastX.current;

    lastX.current = e.clientX;

    if (Math.abs(dx) > 16) {
      playAnimation();
    }
  };

  return (
    <div
      ref={container}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      className="w-fit overflow-hidden cursor-pointer"
    >
      <p className={className}>
        {text.split("").map((char, index) => (
          <span key={index} className="char inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </p>
    </div>
  );
}
