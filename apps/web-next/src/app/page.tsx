export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center navbar-offset">
      <section className="flex flex-col items-center gap-6 text-center px-6">
        <p className="font-display text-xs tracking-[0.3em] text-gold uppercase">
          Adaptation Living LLC
        </p>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-primary sm:text-6xl">
          ADAPT TO THE NEW ERA
        </h1>
        <p className="max-w-xl text-lg text-muted leading-relaxed">
          The veteran-owned AI integration studio. We build production-ready
          systems, automate real workflows, and stand beside you from first call
          to final deployment.
        </p>
        <div className="flex gap-4 mt-4">
          <a
            href="/intake"
            className="glass px-6 py-3 font-semibold text-sm tracking-wide uppercase text-accent border border-accent hover:glow-accent transition-all"
          >
            Start a Project
          </a>
          <a
            href="/arsenal"
            className="glass px-6 py-3 font-semibold text-sm tracking-wide uppercase text-muted hover:text-primary transition-all"
          >
            View Arsenal
          </a>
        </div>
      </section>
    </main>
  );
}
