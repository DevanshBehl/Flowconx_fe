"use client";

import { useEffect, useRef, useState } from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
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
    <div
      ref={ref}
      className="p-6 rounded-xl transition-all duration-300"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(16px)",
        transitionDelay: `${delay}ms`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--border-hover)";
        e.currentTarget.style.boxShadow = "var(--shadow-md)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div
        className="text-lg mb-4 w-9 h-9 rounded-lg flex items-center justify-center"
        style={{
          background: "var(--accent-ghost)",
          fontSize: "1rem",
        }}
      >
        {icon}
      </div>
      <h3
        className="text-sm font-semibold mb-2"
        style={{ color: "var(--fg-primary)" }}
      >
        {title}
      </h3>
      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--fg-secondary)" }}
      >
        {description}
      </p>
    </div>
  );
}

const features = [
  {
    icon: "◆",
    title: "Flow Classification",
    description:
      "ML-powered traffic classification identifying applications from raw network flows in real-time.",
  },
  {
    icon: "◇",
    title: "Satellite Intelligence",
    description:
      "Purpose-built for satellite connectivity analysis with orbital-aware traffic profiling.",
  },
  {
    icon: "▲",
    title: "Real-time Telemetry",
    description:
      "Sub-second observability pipeline delivering flow metrics, anomaly detection, and classification confidence.",
  },
  {
    icon: "○",
    title: "Transformer Backend",
    description:
      "State-of-the-art transformer models trained on proprietary network traffic datasets.",
  },
  {
    icon: "□",
    title: "Operator Console",
    description:
      "Terminal-native and web interfaces designed for network operations centers and engineering teams.",
  },
  {
    icon: "◈",
    title: "Edge Deployment",
    description:
      "Lightweight agent architecture enabling classification at the network edge with minimal overhead.",
  },
];

export function Features() {
  return (
    <section
      className="py-24 px-6"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-widest mb-4"
            style={{
              color: "var(--accent)",
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            CAPABILITIES
          </p>
          <h2
            className="text-2xl sm:text-3xl font-bold mb-4"
            style={{ color: "var(--fg-primary)", letterSpacing: "-0.02em" }}
          >
            Built for Network Intelligence
          </h2>
          <p
            className="text-sm max-w-md mx-auto"
            style={{ color: "var(--fg-secondary)" }}
          >
            Every component is purpose-built for high-throughput network analysis
            and real-time traffic classification.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
