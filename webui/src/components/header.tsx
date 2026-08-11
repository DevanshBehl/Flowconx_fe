"use client";

import { useTheme } from "./theme-provider";

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* Frosted glass */}
      <div
        className="absolute inset-0"
        style={{
          background: "var(--bg)",
          opacity: 0.8,
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
        {/* Left: Logo */}
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <span
            className="text-[13px] font-semibold tracking-[-0.01em]"
            style={{ color: "var(--fg)" }}
          >
            FlowConX
          </span>
        </a>

        {/* Center: Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Features", "Architecture", "Early Access"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-[13px] no-underline transition-colors duration-200"
              style={{ color: "var(--fg-muted)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--fg)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--fg-muted)")
              }
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right: Theme toggle */}
        <button
          onClick={toggleTheme}
          className="relative w-8 h-8 flex items-center justify-center rounded-md transition-colors duration-200 cursor-pointer"
          style={{
            color: "var(--fg-muted)",
            background: "transparent",
            border: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--bg-muted)";
            e.currentTarget.style.color = "var(--fg)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "var(--fg-muted)";
          }}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="8" cy="8" r="3" />
              <path d="M8 1.5v1M8 13.5v1M13.5 8h1M1.5 8h1M11.6 4.4l.7-.7M3.7 12.3l.7-.7M11.6 11.6l.7.7M3.7 3.7l.7.7" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 9.3A6 6 0 116.7 2a4.7 4.7 0 007.3 7.3z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
