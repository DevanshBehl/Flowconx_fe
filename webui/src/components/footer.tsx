"use client";

import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer
      id="early-access"
      style={{ background: "var(--bg-subtle)", borderTop: "1px solid var(--border)" }}
    >
      {/* CTA Section */}
      <div className="py-28 sm:py-36 px-6">
        <div className="max-w-[480px] mx-auto text-center">
          <p
            className="text-[11px] tracking-[0.12em] uppercase mb-3"
            style={{
              color: "var(--accent-secondary)",
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            Early Access
          </p>
          <h2
            className="text-[clamp(1.5rem,3.5vw,2rem)] font-semibold mb-4"
            style={{
              color: "var(--fg)",
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
            }}
          >
            Be the first to deploy FlowConX.
          </h2>
          <p
            className="text-[14px] leading-[1.65] mb-8"
            style={{ color: "var(--fg-muted)" }}
          >
            We&apos;re onboarding design partners for private beta.
            No spam — only meaningful updates.
          </p>

          {submitted ? (
            <div
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-[13px]"
              style={{
                border: "1px solid var(--border)",
                color: "var(--fg-muted)",
                fontFamily: "var(--font-geist-mono)",
              }}
            >
              <span style={{ color: "#22c55e" }}>✓</span>
              You&apos;re on the list.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-stretch gap-2.5 max-w-[380px] mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
                className="flex-1 px-3.5 py-2.5 rounded-lg text-[13px] outline-none transition-all duration-200"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  color: "var(--fg)",
                  fontFamily: "var(--font-geist-mono)",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-secondary)";
                  e.currentTarget.style.boxShadow = "0 0 0 3px var(--glow)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap"
                style={{
                  background: "var(--accent)",
                  color: "var(--accent-fg)",
                  border: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.85";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
              >
                Request Access
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="px-6 py-5"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-[1080px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span
            className="text-[12px] font-medium"
            style={{ color: "var(--fg-subtle)", fontFamily: "var(--font-geist-mono)" }}
          >
            FlowConX
          </span>
          <span className="text-[12px]" style={{ color: "var(--fg-ghost)" }}>
            © {new Date().getFullYear()} FlowConX. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
