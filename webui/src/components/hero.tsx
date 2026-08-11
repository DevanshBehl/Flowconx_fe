"use client";

export function Hero() {
  return (
    <section
      className="relative flex items-center justify-center px-6 overflow-hidden"
      style={{
        background: "var(--bg)",
        minHeight: "100vh",
      }}
    >
      {/* Gradient glow orb */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "800px",
          height: "600px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(ellipse at center, var(--glow) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative max-w-[680px] mx-auto text-center">
        {/* Status pill */}
        <div className="anim-enter d-1 mb-8">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] tracking-[0.08em] uppercase"
            style={{
              border: "1px solid var(--border)",
              color: "var(--fg-subtle)",
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            <span
              className="w-[5px] h-[5px] rounded-full"
              style={{
                background: "#22c55e",
                animation: "pulse-dot 2.5s ease-in-out infinite",
              }}
            />
            In Development
          </div>
        </div>

        {/* Main heading */}
        <h1
          className="anim-enter d-2"
          style={{
            fontSize: "clamp(2.75rem, 7vw, 4.75rem)",
            fontWeight: 600,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            color: "var(--fg)",
            marginBottom: "1.25rem",
          }}
        >
          Network intelligence,
          <br />
          <span style={{ color: "var(--fg-muted)" }}>redefined.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="anim-enter d-3"
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.65,
            color: "var(--fg-muted)",
            maxWidth: "440px",
            margin: "0 auto",
            marginBottom: "2.5rem",
          }}
        >
          FlowConX classifies network traffic in real-time using
          transformer-powered ML — purpose-built for satellite
          and terrestrial infrastructure.
        </p>

        {/* CTAs */}
        <div className="anim-enter d-4 flex items-center justify-center gap-3">
          <a
            href="#early-access"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-medium no-underline transition-all duration-200"
            style={{
              background: "var(--accent)",
              color: "var(--accent-fg)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.85";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Request Early Access
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
          <a
            href="#features"
            className="inline-flex items-center px-5 py-2.5 rounded-lg text-[13px] font-medium no-underline transition-all duration-200"
            style={{
              color: "var(--fg-muted)",
              border: "1px solid var(--border)",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--border-strong)";
              e.currentTarget.style.color = "var(--fg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--fg-muted)";
            }}
          >
            Learn More
          </a>
        </div>

        {/* Terminal preview */}
        <div className="anim-enter d-6 mt-16">
          <div
            className="rounded-xl overflow-hidden text-left"
            style={{
              border: "1px solid var(--border)",
              background: "var(--bg-elevated)",
            }}
          >
            {/* Title bar */}
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ef4444", opacity: 0.7 }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#eab308", opacity: 0.7 }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#22c55e", opacity: 0.7 }} />
              </div>
              <span
                className="text-[11px] ml-2"
                style={{ color: "var(--fg-subtle)", fontFamily: "var(--font-geist-mono)" }}
              >
                flowconx — terminal
              </span>
            </div>

            {/* Terminal body */}
            <div
              className="px-5 py-5"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "12.5px",
                lineHeight: 1.8,
              }}
            >
              <div style={{ color: "var(--fg-subtle)" }}>
                <span style={{ color: "var(--fg-muted)" }}>$</span> flowconx start
              </div>
              <div className="mt-1" style={{ color: "var(--fg-subtle)" }}>
                <span style={{ color: "#22c55e" }}>✓</span> Core initialized
              </div>
              <div style={{ color: "var(--fg-subtle)" }}>
                <span style={{ color: "#22c55e" }}>✓</span> Classification engine loaded
              </div>
              <div style={{ color: "var(--fg-subtle)" }}>
                <span style={{ color: "#22c55e" }}>✓</span> Transformer models ready
              </div>
              <div style={{ color: "var(--fg-subtle)" }}>
                <span style={{ color: "#22c55e" }}>✓</span> Telemetry pipeline active
              </div>
              <div className="mt-2" style={{ color: "var(--fg-muted)" }}>
                FlowConX v0.1.0 — listening on :8080
              </div>
              <div className="flex items-center mt-1">
                <span style={{ color: "var(--accent-secondary)" }}>❯</span>
                <span
                  className="ml-1.5 w-[7px] h-[14px] inline-block"
                  style={{
                    background: "var(--fg-muted)",
                    animation: "cursor-blink 1.2s step-end infinite",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
