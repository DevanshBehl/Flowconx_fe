"use client";

import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 animate-fade-in"
      style={{
        background: "var(--bg-primary)",
        borderBottom: "1px solid var(--border)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        backgroundColor: "color-mix(in srgb, var(--bg-primary) 85%, transparent)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div
            className="w-2 h-2 rounded-full animate-pulse-subtle"
            style={{ background: "var(--accent)" }}
          />
          <span
            className="text-sm font-semibold tracking-wide"
            style={{ color: "var(--fg-primary)", fontFamily: "var(--font-geist-mono)" }}
          >
            FlowConX
          </span>
          <span
            className="text-xs px-2 py-0.5 rounded-full"
            style={{
              color: "var(--fg-tertiary)",
              border: "1px solid var(--border)",
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            v0.1.0
          </span>
        </div>

        {/* Right: Nav + Toggle */}
        <div className="flex items-center gap-6">
          <nav className="hidden sm:flex items-center gap-6">
            {["About", "Architecture", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm transition-colors duration-200"
                style={{ color: "var(--fg-tertiary)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--fg-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--fg-tertiary)";
                }}
              >
                {item}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
