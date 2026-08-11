"use client";

import { useEffect, useRef, useState } from "react";

const modules = [
  { name: "Overview", status: "planned" },
  { name: "Traffic", status: "planned" },
  { name: "Applications", status: "planned" },
  { name: "Satellites", status: "planned" },
  { name: "Classification", status: "active" },
  { name: "Models", status: "active" },
  { name: "Anomalies", status: "planned" },
  { name: "Alerts", status: "planned" },
  { name: "Settings", status: "planned" },
];

export function Architecture() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="architecture"
      className="py-24 px-6"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-widest mb-4"
            style={{
              color: "var(--accent)",
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            ARCHITECTURE
          </p>
          <h2
            className="text-2xl sm:text-3xl font-bold mb-4"
            style={{ color: "var(--fg-primary)", letterSpacing: "-0.02em" }}
          >
            Modular by Design
          </h2>
          <p
            className="text-sm max-w-md mx-auto"
            style={{ color: "var(--fg-secondary)" }}
          >
            A composable system of modules, each focused on a specific dimension
            of network intelligence.
          </p>
        </div>

        {/* Architecture tree */}
        <div className="max-w-lg mx-auto">
          {/* Root */}
          <div
            className="flex items-center gap-3 mb-6 p-4 rounded-xl transition-all duration-500"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-12px)",
            }}
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: "var(--accent)" }}
            />
            <span
              className="text-sm font-semibold"
              style={{
                color: "var(--fg-primary)",
                fontFamily: "var(--font-geist-mono)",
              }}
            >
              FlowConX
            </span>
          </div>

          {/* Modules */}
          <div className="ml-6 space-y-1.5">
            {modules.map((module, i) => (
              <div
                key={module.name}
                className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(-12px)",
                  transitionDelay: `${(i + 1) * 60}ms`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--bg-card-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {/* Tree connector */}
                <span
                  className="text-xs"
                  style={{
                    color: "var(--fg-ghost)",
                    fontFamily: "var(--font-geist-mono)",
                  }}
                >
                  {i === modules.length - 1 ? "└─" : "├─"}
                </span>

                {/* Module name */}
                <span
                  className="text-sm"
                  style={{
                    color: "var(--fg-secondary)",
                    fontFamily: "var(--font-geist-mono)",
                  }}
                >
                  {module.name}
                </span>

                {/* Status badge */}
                <span
                  className="text-[10px] tracking-wider px-2 py-0.5 rounded-full ml-auto"
                  style={{
                    color:
                      module.status === "active"
                        ? "#48c7a2"
                        : "var(--fg-tertiary)",
                    border: `1px solid ${
                      module.status === "active"
                        ? "rgba(72, 199, 162, 0.2)"
                        : "var(--border)"
                    }`,
                    fontFamily: "var(--font-geist-mono)",
                  }}
                >
                  {module.status.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
