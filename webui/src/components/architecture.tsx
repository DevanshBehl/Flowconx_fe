"use client";

import { useEffect, useRef, useState } from "react";

const modules = [
  { name: "Overview", desc: "System-wide health and metrics dashboard" },
  { name: "Traffic", desc: "Live flow table with filtering and drill-down" },
  { name: "Applications", desc: "Per-app traffic breakdown and trends" },
  { name: "Satellites", desc: "Orbital link status and handover tracking" },
  { name: "Classification", desc: "Model inference results and confidence" },
  { name: "Models", desc: "Transformer lifecycle and performance" },
  { name: "Anomalies", desc: "Behavioral outlier detection and alerts" },
  { name: "Alerts", desc: "Threshold-based and ML-driven notifications" },
  { name: "Settings", desc: "Agent config, export targets, and API keys" },
];

export function Architecture() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="architecture"
      className="py-28 sm:py-36 px-6"
      style={{ background: "var(--bg)" }}
      ref={ref}
    >
      <div className="max-w-[1080px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Copy */}
          <div className="max-w-[440px]">
            <p
              className="text-[11px] tracking-[0.12em] uppercase mb-3"
              style={{
                color: "var(--accent-secondary)",
                fontFamily: "var(--font-geist-mono)",
                opacity: visible ? 1 : 0,
                transition: "opacity 0.6s ease",
              }}
            >
              System Design
            </p>
            <h2
              className="text-[clamp(1.5rem,3.5vw,2rem)] font-semibold mb-4"
              style={{
                color: "var(--fg)",
                letterSpacing: "-0.03em",
                lineHeight: 1.2,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(12px)",
                transition: "all 0.6s ease 0.05s",
              }}
            >
              Modular, composable architecture.
            </h2>
            <p
              className="text-[14px] leading-[1.65] mb-6"
              style={{
                color: "var(--fg-muted)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(12px)",
                transition: "all 0.6s ease 0.1s",
              }}
            >
              Every module operates independently with clean boundaries.
              Enable only what you need — from traffic classification to
              anomaly detection.
            </p>
            <div
              className="text-[13px] leading-[1.6]"
              style={{
                color: "var(--fg-subtle)",
                fontFamily: "var(--font-geist-mono)",
                opacity: visible ? 1 : 0,
                transition: "opacity 0.6s ease 0.2s",
              }}
            >
              Built with Rust. Deployed at the edge.
            </div>
          </div>

          {/* Right: Module tree */}
          <div>
            {/* Root node */}
            <div
              className="flex items-center gap-3 px-4 py-3 rounded-lg mb-2"
              style={{
                background: "var(--bg-elevated)",
                border: "1px solid var(--border)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-8px)",
                transition: "all 0.5s ease 0.15s",
              }}
            >
              <span
                className="w-[6px] h-[6px] rounded-full"
                style={{ background: "var(--accent-secondary)" }}
              />
              <span
                className="text-[13px] font-semibold"
                style={{ color: "var(--fg)", fontFamily: "var(--font-geist-mono)" }}
              >
                flowconx
              </span>
            </div>

            {/* Child modules */}
            <div className="ml-4 border-l" style={{ borderColor: "var(--border)" }}>
              {modules.map((mod, i) => (
                <div
                  key={mod.name}
                  className="flex items-start gap-3 pl-5 py-2.5 -ml-px transition-colors duration-200 rounded-r-lg"
                  style={{
                    borderLeft: "1px solid transparent",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(-8px)",
                    transition: `all 0.4s ease ${0.2 + i * 0.04}s`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--bg-muted)";
                    e.currentTarget.style.borderLeftColor = "var(--accent-secondary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderLeftColor = "transparent";
                  }}
                >
                  <div className="flex-1 min-w-0">
                    <span
                      className="text-[13px] block"
                      style={{
                        color: "var(--fg)",
                        fontFamily: "var(--font-geist-mono)",
                      }}
                    >
                      {mod.name}
                    </span>
                    <span
                      className="text-[12px] block mt-0.5"
                      style={{ color: "var(--fg-subtle)" }}
                    >
                      {mod.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
