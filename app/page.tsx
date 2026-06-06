export default function Home() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden">

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 max-w-5xl mx-auto w-full">
        <span className="font-serif italic text-2xl text-[#FAF8F5] tracking-tight">
          XD Labs
        </span>
        <a
          href="mailto:hello@itsjustxdlabs.com"
          className="text-sm text-[rgba(250,248,245,0.5)] hover:text-[rgba(250,248,245,0.85)] transition-colors"
        >
          hello@itsjustxdlabs.com
        </a>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-20 pb-28 md:pt-32 md:pb-40">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(193,113,74,0.08) 0%, transparent 70%)",
          }}
        />

        <p className="text-[#C1714A] text-xs font-semibold tracking-[0.2em] uppercase mb-8">
          Abu Dhabi · 2026
        </p>

        <h1 className="font-serif italic text-[clamp(60px,14vw,120px)] leading-none text-[#FAF8F5] tracking-tight mb-10">
          XD Labs
        </h1>

        <p className="text-[clamp(16px,2.5vw,20px)] text-[rgba(250,248,245,0.45)] max-w-md leading-relaxed mb-3">
          We don&apos;t build apps.
        </p>
        <p className="text-[clamp(16px,2.5vw,20px)] text-[rgba(250,248,245,0.75)] max-w-md leading-relaxed">
          We build habits, connections, and economies.
        </p>
      </section>

      {/* Products */}
      <section className="relative z-10 max-w-5xl mx-auto w-full px-6 pb-32">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[rgba(250,248,245,0.3)] mb-10 text-center">
          Our Products
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Friendly */}
          <a
            href="https://itsjustafriendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl border border-[rgba(193,113,74,0.3)] bg-[rgba(193,113,74,0.05)] p-8 hover:border-[rgba(193,113,74,0.6)] hover:bg-[rgba(193,113,74,0.08)] transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="13" cy="13" r="6" fill="#C1714A"/>
                  <circle cx="20" cy="20" r="6" fill="#C1714A" opacity="0.45"/>
                </svg>
                <span className="font-serif italic text-xl text-[#FAF8F5]">friendly</span>
              </div>
              <span className="text-xs font-semibold tracking-wider uppercase text-[#C1714A] bg-[rgba(193,113,74,0.12)] px-3 py-1 rounded-full">
                Live
              </span>
            </div>
            <p className="text-sm text-[rgba(250,248,245,0.5)] leading-relaxed mb-6">
              The autonomous counter-loneliness platform. Real-world experiences, no profiles, no messaging. Just show up.
            </p>
            <p className="text-xs text-[rgba(250,248,245,0.25)] group-hover:text-[rgba(250,248,245,0.5)] transition-colors">
              itsjustafriendly.com →
            </p>
          </a>

          {/* Coming soon 1 */}
          <div className="relative rounded-2xl border border-[rgba(250,248,245,0.06)] bg-[rgba(250,248,245,0.02)] p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="w-24 h-4 rounded-full bg-[rgba(250,248,245,0.06)]" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[rgba(250,248,245,0.2)] bg-[rgba(250,248,245,0.05)] px-3 py-1 rounded-full">
                Soon
              </span>
            </div>
            <div className="space-y-2 mb-6">
              <div className="w-full h-3 rounded-full bg-[rgba(250,248,245,0.05)]" />
              <div className="w-4/5 h-3 rounded-full bg-[rgba(250,248,245,0.05)]" />
              <div className="w-3/5 h-3 rounded-full bg-[rgba(250,248,245,0.05)]" />
            </div>
            <p className="text-xs text-[rgba(250,248,245,0.15)]">In the pipeline</p>
          </div>

          {/* Coming soon 2 */}
          <div className="relative rounded-2xl border border-[rgba(250,248,245,0.06)] bg-[rgba(250,248,245,0.02)] p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="w-20 h-4 rounded-full bg-[rgba(250,248,245,0.06)]" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[rgba(250,248,245,0.2)] bg-[rgba(250,248,245,0.05)] px-3 py-1 rounded-full">
                Soon
              </span>
            </div>
            <div className="space-y-2 mb-6">
              <div className="w-full h-3 rounded-full bg-[rgba(250,248,245,0.05)]" />
              <div className="w-3/4 h-3 rounded-full bg-[rgba(250,248,245,0.05)]" />
              <div className="w-2/3 h-3 rounded-full bg-[rgba(250,248,245,0.05)]" />
            </div>
            <p className="text-xs text-[rgba(250,248,245,0.15)]">In the pipeline</p>
          </div>

        </div>
      </section>

      {/* Manifesto */}
      <section className="relative z-10 border-t border-[rgba(250,248,245,0.06)] py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-serif italic text-[clamp(22px,3.5vw,32px)] text-[rgba(250,248,245,0.85)] leading-relaxed mb-8">
            &ldquo;The best technology disappears into life.<br />It doesn&apos;t replace it.&rdquo;
          </p>
          <p className="text-sm text-[rgba(250,248,245,0.3)] leading-relaxed max-w-lg mx-auto">
            XD Labs is a product studio based in Abu Dhabi, UAE. We build software that creates real-world value — apps that bring people together, economies that reward participation, and tools that respect your time.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[rgba(250,248,245,0.06)] py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-serif italic text-lg text-[rgba(250,248,245,0.4)]">XD Labs</span>
          <div className="flex items-center gap-6">
            <a href="mailto:hello@itsjustxdlabs.com" className="text-xs text-[rgba(250,248,245,0.3)] hover:text-[rgba(250,248,245,0.6)] transition-colors">
              hello@itsjustxdlabs.com
            </a>
            <span className="text-xs text-[rgba(250,248,245,0.2)]">Abu Dhabi, UAE</span>
            <span className="text-xs text-[rgba(250,248,245,0.2)]">© 2026</span>
          </div>
        </div>
      </footer>

    </main>
  );
}
