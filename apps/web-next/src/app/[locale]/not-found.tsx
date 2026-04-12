import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main id="main-content" className="navbar-offset">
      <section className="max-w-[800px] mx-auto px-8 pt-24 pb-32 text-center">
        <h1 className="font-display text-6xl sm:text-8xl font-bold mb-4 text-accent">
          404
        </h1>
        <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6">
          Page Not Found
        </h2>
        <p className="text-text-muted text-lg mb-10 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/"
            className="px-8 py-4 text-sm uppercase tracking-widest font-semibold border-2 border-accent bg-accent text-white hover:bg-transparent hover:text-accent transition-all"
          >
            Go Home
          </a>
          <a
            href="/services"
            className="px-8 py-4 text-sm uppercase tracking-widest font-semibold border-2 border-white text-white hover:bg-white hover:text-bg-dark transition-all"
          >
            View Services
          </a>
          <a
            href="/contact"
            className="px-8 py-4 text-sm uppercase tracking-widest font-semibold border-2 border-white text-white hover:bg-white hover:text-bg-dark transition-all"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
