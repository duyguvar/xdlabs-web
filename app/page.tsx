export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">

      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-7 max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <img src="/xdlabs-logo.png" alt="XDLabs Future" style={{height: '56px', width: 'auto', mixBlendMode: 'screen'}} />
        </div>
        <a
          href="mailto:hello@itsjustxdlabs.com"
          className="text-sm text-[rgba(255,255,255,0.3)] hover:text-[rgba(255,255,255,0.7)] transition-colors"
        >
          hello@itsjustxdlabs.com
        </a>
      </nav>

      {/* Hero */}
      <section className="relative flex flex-col justify-center px-8 pt-24 pb-32 md:pt-36 md:pb-48 max-w-6xl mx-auto w-full overflow-hidden">
        {/* Subtle depth — radial glow top-left */}
        <div
          className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.025) 0%, transparent 70%)",
          }}
        />
        {/* Fine grain line — right side */}
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-px"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.06) 40%, transparent)" }}
        />

        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[rgba(255,255,255,0.25)] mb-12">
          Dubai · 2026
        </p>
        <h1 className="font-serif italic text-[clamp(52px,10vw,100px)] leading-[1.05] text-white tracking-tight mb-10 max-w-3xl">
          We challenge<br />ordinary.
        </h1>
        <p className="text-[clamp(15px,2vw,18px)] text-[rgba(255,255,255,0.35)] max-w-md leading-relaxed">
          XDLabs Future is a product studio from Dubai. We build software that reshapes how people live, connect, and create value.
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto w-full px-8">
        <div className="h-px bg-[rgba(255,255,255,0.08)]" />
      </div>

      {/* Products */}
      <section className="max-w-6xl mx-auto w-full px-8 py-24">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[rgba(255,255,255,0.2)] mb-12">
          Products
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.06)]">

          {/* Friendly */}
          <a
            href="https://itsjustafriendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#080808] p-10 hover:bg-[rgba(255,255,255,0.03)] transition-colors duration-200"
          >
            <div className="flex items-start justify-between mb-10">
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="13" cy="13" r="6" fill="#C1714A"/>
                  <circle cx="20" cy="20" r="6" fill="#C1714A" opacity="0.45"/>
                </svg>
                <span className="font-serif italic text-lg text-white">friendly</span>
              </div>
              <span className="text-[10px] font-semibold tracking-widest uppercase text-white border border-[rgba(255,255,255,0.2)] px-2.5 py-1">
                Live
              </span>
            </div>
            <p className="text-sm text-[rgba(255,255,255,0.4)] leading-relaxed mb-8">
              The autonomous counter-loneliness platform. Real-world experiences. No profiles, no messaging. Just show up.
            </p>
            <p className="text-xs text-[rgba(255,255,255,0.2)] group-hover:text-[rgba(255,255,255,0.5)] transition-colors">
              itsjustafriendly.com →
            </p>
          </a>

          {/* Coming soon 1 */}
          <div className="bg-[#080808] p-10">
            <div className="flex items-start justify-between mb-10">
              <div className="w-20 h-3 bg-[rgba(255,255,255,0.06)]" />
              <span className="text-[10px] font-semibold tracking-widest uppercase text-[rgba(255,255,255,0.15)] border border-[rgba(255,255,255,0.08)] px-2.5 py-1">
                Soon
              </span>
            </div>
            <div className="space-y-2.5 mb-8">
              <div className="w-full h-2.5 bg-[rgba(255,255,255,0.04)]" />
              <div className="w-5/6 h-2.5 bg-[rgba(255,255,255,0.04)]" />
              <div className="w-4/6 h-2.5 bg-[rgba(255,255,255,0.04)]" />
            </div>
            <p className="text-xs text-[rgba(255,255,255,0.1)]">In the pipeline</p>
          </div>

          {/* Coming soon 2 */}
          <div className="bg-[#080808] p-10">
            <div className="flex items-start justify-between mb-10">
              <div className="w-16 h-3 bg-[rgba(255,255,255,0.06)]" />
              <span className="text-[10px] font-semibold tracking-widest uppercase text-[rgba(255,255,255,0.15)] border border-[rgba(255,255,255,0.08)] px-2.5 py-1">
                Soon
              </span>
            </div>
            <div className="space-y-2.5 mb-8">
              <div className="w-full h-2.5 bg-[rgba(255,255,255,0.04)]" />
              <div className="w-4/5 h-2.5 bg-[rgba(255,255,255,0.04)]" />
              <div className="w-3/5 h-2.5 bg-[rgba(255,255,255,0.04)]" />
            </div>
            <p className="text-xs text-[rgba(255,255,255,0.1)]">In the pipeline</p>
          </div>

        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto w-full px-8">
        <div className="h-px bg-[rgba(255,255,255,0.08)]" />
      </div>

      {/* Values */}
      <section className="max-w-6xl mx-auto w-full px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[rgba(255,255,255,0.2)] mb-4">01</p>
            <p className="font-serif italic text-xl text-white mb-3">Real-world impact</p>
            <p className="text-sm text-[rgba(255,255,255,0.35)] leading-relaxed">
              Software that creates value in physical life, not just on screens.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[rgba(255,255,255,0.2)] mb-4">02</p>
            <p className="font-serif italic text-xl text-white mb-3">Economies, not features</p>
            <p className="text-sm text-[rgba(255,255,255,0.35)] leading-relaxed">
              Every product we build has a circular economy at its core.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[rgba(255,255,255,0.2)] mb-4">03</p>
            <p className="font-serif italic text-xl text-white mb-3">Built to last</p>
            <p className="text-sm text-[rgba(255,255,255,0.35)] leading-relaxed">
              We don&apos;t chase trends. We build habits.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="max-w-6xl mx-auto w-full px-8">
        <div className="h-px bg-[rgba(255,255,255,0.08)]" />
      </div>
      <footer className="max-w-6xl mx-auto w-full px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <img src="/xdlabs-logo.png" alt="XDLabs Future" style={{height: '24px', width: 'auto', mixBlendMode: 'screen', opacity: 0.5}} />
        <div className="flex items-center gap-8">
          <a href="mailto:hello@itsjustxdlabs.com" className="text-xs text-[rgba(255,255,255,0.2)] hover:text-[rgba(255,255,255,0.5)] transition-colors">
            hello@itsjustxdlabs.com
          </a>
          <span className="text-xs text-[rgba(255,255,255,0.15)]">© 2026 XDLabs Future FZCO · Dubai, UAE</span>
        </div>
      </footer>

    </main>
  );
}
