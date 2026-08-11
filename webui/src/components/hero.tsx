"use client";

export function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--fg-primary) 1px, transparent 1px), linear-gradient(90deg, var(--fg-primary) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Status badge */}
        <div className="animate-fade-in-up delay-100">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-widest mb-10"
            style={{
              border: "1px solid var(--border)",
              color: "var(--fg-tertiary)",
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse-subtle"
              style={{ background: "#48c7a2" }}
            />
            COMING SOON
          </div>
        </div>

        {/* Brand name */}
        <h1
          className="animate-fade-in-up delay-200"
          style={{
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1,
            color: "var(--fg-primary)",
            marginBottom: "1.5rem",
          }}
        >
          FlowConX
        </h1>

        {/* Descriptor */}
        <p
          className="animate-fade-in-up delay-300"
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "var(--fg-tertiary)",
            fontFamily: "var(--font-geist-mono)",
            marginBottom: "2.5rem",
          }}
        >
          Network Intelligence Platform
        </p>

        {/* Thin rule */}
        <div className="animate-fade-in-up delay-400 flex justify-center mb-10">
          <div
            style={{
              width: "80px",
              height: "1px",
              background: "var(--border-hover)",
            }}
          />
        </div>

        {/* Tagline */}
        <p
          className="animate-fade-in-up delay-500"
          style={{
            fontSize: "1.125rem",
            lineHeight: 1.7,
            color: "var(--fg-secondary)",
            maxWidth: "480px",
            margin: "0 auto 3rem",
          }}
        >
          Real-time network flow intelligence, classification &amp; observability
          — powered by ML-driven traffic analysis.
        </p>

        {/* CTA buttons */}
        <div className="animate-fade-in-up delay-600 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#architecture"
            className="group px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
            style={{
              background: "var(--accent)",
              color: "#ffffff",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(99, 140, 255, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            View Architecture →
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
            style={{
              background: "transparent",
              color: "var(--fg-secondary)",
              border: "1px solid var(--border)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--border-hover)";
              e.currentTarget.style.color = "var(--fg-primary)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--fg-secondary)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Get Notified
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-800"
      >
        <div
          className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
          style={{ border: "1px solid var(--border-hover)" }}
        >
          <div
            className="w-1 h-1.5 rounded-full"
            style={{
              background: "var(--fg-tertiary)",
              animation: "fadeInUp 1.5s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}
