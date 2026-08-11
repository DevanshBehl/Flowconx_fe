"use client";

export function Footer() {
  return (
    <footer
      id="contact"
      className="py-16 px-6"
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* CTA */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-widest mb-4"
            style={{
              color: "var(--accent)",
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            STAY UPDATED
          </p>
          <h2
            className="text-2xl sm:text-3xl font-bold mb-4"
            style={{ color: "var(--fg-primary)", letterSpacing: "-0.02em" }}
          >
            Get Early Access
          </h2>
          <p
            className="text-sm max-w-sm mx-auto mb-8"
            style={{ color: "var(--fg-secondary)" }}
          >
            Be the first to know when FlowConX launches. No spam, only
            significant updates.
          </p>

          {/* Email input */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full sm:flex-1 px-4 py-2.5 rounded-lg text-sm outline-none transition-all duration-200"
              style={{
                background: "var(--bg-primary)",
                border: "1px solid var(--border)",
                color: "var(--fg-primary)",
                fontFamily: "var(--font-geist-mono)",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.boxShadow =
                  "0 0 0 3px var(--accent-ghost)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
            <button
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer"
              style={{
                background: "var(--accent)",
                color: "#ffffff",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(99, 140, 255, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Notify Me
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--accent)" }}
            />
            <span
              className="text-xs"
              style={{
                color: "var(--fg-tertiary)",
                fontFamily: "var(--font-geist-mono)",
              }}
            >
              FlowConX
            </span>
          </div>
          <p
            className="text-xs"
            style={{ color: "var(--fg-ghost)" }}
          >
            © {new Date().getFullYear()} FlowConX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
