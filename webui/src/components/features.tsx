"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/* ── Intersection observer hook ────────────────────────────────────────────── */

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ── Feature Card ──────────────────────────────────────────────────────────── */

interface CardProps {
  label: string;
  title: string;
  description: string;
  delay: number;
  visible: boolean;
}

function Card({ label, title, description, delay, visible }: CardProps) {
  return (
    <div
      className="group p-6 sm:p-8 rounded-xl transition-all duration-500"
      style={{
        background: "var(--bg-elevated)",
        border: "1px solid var(--border)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${delay}ms`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--border-strong)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
      }}
    >
      <p
        className="text-[10px] tracking-[0.12em] uppercase mb-4"
        style={{
          color: "var(--accent-secondary)",
          fontFamily: "var(--font-geist-mono)",
        }}
      >
        {label}
      </p>
      <h3
        className="text-[15px] font-semibold mb-2"
        style={{ color: "var(--fg)", letterSpacing: "-0.01em" }}
      >
        {title}
      </h3>
      <p
        className="text-[13px] leading-[1.65]"
        style={{ color: "var(--fg-muted)" }}
      >
        {description}
      </p>
    </div>
  );
}

/* ── Features Section ──────────────────────────────────────────────────────── */

const items = [
  {
    label: "Classification",
    title: "ML-Powered Flow Analysis",
    description:
      "Transformer models identify applications from encrypted traffic patterns — no deep packet inspection required.",
  },
  {
    label: "Infrastructure",
    title: "Satellite-Aware Intelligence",
    description:
      "Purpose-built for LEO, MEO, and GEO satellite links with orbital-aware latency modeling and handover prediction.",
  },
  {
    label: "Observability",
    title: "Real-Time Telemetry Pipeline",
    description:
      "Sub-second flow metrics, classification confidence scores, and anomaly detection streamed to your existing stack.",
  },
  {
    label: "Performance",
    title: "Edge-Native Architecture",
    description:
      "Lightweight Rust agent classifies traffic at line rate on commodity hardware. No GPU required for inference.",
  },
  {
    label: "Operations",
    title: "Terminal & Web Interfaces",
    description:
      "Operator-grade terminal UI and web console designed for NOC environments and engineering workflows.",
  },
  {
    label: "Integration",
    title: "Open Protocol Support",
    description:
      "Export to Prometheus, Grafana, Kafka, or any OTLP-compatible backend. First-class gRPC and REST APIs.",
  },
];

export function Features() {
  const { ref, visible } = useInView();

  return (
    <section
      id="features"
      className="py-28 sm:py-36 px-6"
      style={{ background: "var(--bg-subtle)" }}
      ref={ref}
    >
      <div className="max-w-[1080px] mx-auto">
        {/* Header */}
        <div className="max-w-[480px] mb-16">
          <p
            className="text-[11px] tracking-[0.12em] uppercase mb-3"
            style={{
              color: "var(--accent-secondary)",
              fontFamily: "var(--font-geist-mono)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(12px)",
              transition: "all 0.6s ease",
            }}
          >
            Capabilities
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
            Everything you need for network intelligence.
          </h2>
          <p
            className="text-[14px] leading-[1.65]"
            style={{
              color: "var(--fg-muted)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(12px)",
              transition: "all 0.6s ease 0.1s",
            }}
          >
            Each component is purpose-built for high-throughput classification
            and real-time observability.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {items.map((item, i) => (
            <Card key={item.label} {...item} delay={i * 60} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
