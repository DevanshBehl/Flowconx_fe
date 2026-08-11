"use client";

export function Hero() {
  return (
    <section 
      className="relative flex flex-col items-center justify-start px-6 pt-36 sm:pt-48 pb-20 text-center overflow-hidden" 
      style={{ background: "var(--bg)", minHeight: "100vh" }}
    >
      {/* Background glow for elegance */}
      <div 
        className="absolute top-0 inset-x-0 h-[600px] pointer-events-none"
        style={{ 
          background: "radial-gradient(ellipse at 50% 0%, var(--glow) 0%, transparent 70%)",
          opacity: 0.8 
        }} 
      />

      <div className="relative max-w-[860px] mx-auto z-10 flex flex-col items-center">
        
        {/* Sleek Announcement Badge */}
        <a href="#features" className="anim-fade d-1 inline-flex items-center gap-2.5 px-1 py-1 pr-3 rounded-full mb-8 transition-transform duration-300 hover:scale-[1.02] cursor-pointer no-underline"
           style={{ background: "var(--bg-subtle)", border: "1px solid var(--border)" }}>
           <span className="text-[10px] font-semibold tracking-widest uppercase px-2 py-1 rounded-full" style={{ background: "var(--fg)", color: "var(--bg)" }}>
             New
           </span>
           <span className="text-[12.5px] font-medium" style={{ color: "var(--fg-muted)" }}>
             Introducing FlowConX Core 1.0
           </span>
           <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--fg-muted)" }}><path d="M6 12l4-4-4-4"/></svg>
        </a>

        {/* Elegant Typography */}
        <h1 className="anim-enter d-2"
            style={{
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              fontWeight: 500,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              color: "var(--fg)",
              marginBottom: "1.5rem"
            }}>
          Network intelligence, <br className="hidden sm:block" />
          <span style={{ color: "var(--fg-subtle)" }}>without compromise.</span>
        </h1>

        <p className="anim-enter d-3"
           style={{
             fontSize: "clamp(1rem, 2vw, 1.25rem)",
             lineHeight: 1.6,
             color: "var(--fg-muted)",
             maxWidth: "580px",
             marginBottom: "3rem"
           }}>
          Unprecedented visibility into your network traffic. Real-time machine learning classification built for modern satellite and terrestrial infrastructure.
        </p>

        {/* Premium CTAs */}
        <div className="anim-enter d-4 flex flex-col sm:flex-row items-center gap-4">
          <a href="#early-access" className="px-7 py-3.5 rounded-full text-[14px] font-medium transition-all duration-200 cursor-pointer no-underline"
                  style={{ background: "var(--fg)", color: "var(--bg)", boxShadow: "0 4px 14px var(--glow)" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-1px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
            Start building
          </a>
          <a href="#architecture" className="px-7 py-3.5 rounded-full text-[14px] font-medium transition-colors duration-200 cursor-pointer flex items-center gap-2 no-underline"
                  style={{ background: "transparent", color: "var(--fg)", border: "1px solid var(--border)" }}
                  onMouseEnter={e => e.currentTarget.style.background = "var(--bg-muted)"}
                  onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
            View on GitHub
          </a>
        </div>
      </div>
      
      {/* 3D Dashboard Preview Abstraction */}
      <div 
        className="relative w-full max-w-[1000px] mx-auto mt-24 anim-enter d-6 z-0"
        style={{ perspective: "1000px" }}
      >
        <div 
          className="relative w-full aspect-[2/1] rounded-t-2xl overflow-hidden border-t border-l border-r"
          style={{ 
            borderColor: "var(--border)",
            background: "var(--bg-elevated)",
            boxShadow: "0 -20px 40px -20px var(--glow)",
            transform: "rotateX(8deg) scale(0.95)",
            transformOrigin: "bottom center"
          }}
        >
             {/* Abstract Dashboard Header */}
             <div className="h-12 border-b flex items-center px-5 gap-5" style={{ borderColor: "var(--border)" }}>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ background: "var(--border-strong)" }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: "var(--border-strong)" }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: "var(--border-strong)" }} />
                </div>
                <div className="h-5 w-64 rounded-md" style={{ background: "var(--bg-muted)" }} />
             </div>
             
             {/* Abstract Dashboard Content */}
             <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 h-full">
                <div className="col-span-2 flex flex-col gap-6">
                  <div className="h-32 rounded-xl border flex items-end p-4" style={{ borderColor: "var(--border)", background: "var(--bg-muted)" }}>
                     <div className="flex gap-2 h-1/2 w-full items-end">
                       {[40, 70, 30, 80, 50, 90, 60, 100].map((h, i) => (
                         <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: "var(--fg-subtle)", opacity: 0.2 }} />
                       ))}
                     </div>
                  </div>
                  <div className="flex-1 rounded-xl border flex flex-col gap-3 p-4" style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}>
                    {[1, 2, 3].map(i => (
                       <div key={i} className="w-full h-8 rounded-md" style={{ background: "var(--bg-muted)" }} />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-6 hidden sm:flex">
                  <div className="h-24 rounded-xl border" style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }} />
                  <div className="h-24 rounded-xl border" style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }} />
                  <div className="flex-1 rounded-xl border" style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }} />
                </div>
             </div>
             
             {/* Bottom Fade Mask */}
             <div 
               className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
               style={{ background: "linear-gradient(to bottom, transparent, var(--bg) 90%)" }} 
             />
        </div>
      </div>
    </section>
  );
}
