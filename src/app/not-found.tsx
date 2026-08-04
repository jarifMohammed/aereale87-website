"use client";

import Link from "next/link";
import { Compass, Home, LibraryBig, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--home-surface)] text-[var(--home-green-deep)]">
      <div className="relative mx-auto flex min-h-screen max-w-[1440px] items-center px-5 py-12 sm:px-8 lg:px-[88px]">
        <div className="absolute left-[-120px] top-16 h-72 w-72 rounded-full bg-[var(--home-gold)]/12 blur-3xl" />
        <div className="absolute bottom-10 right-[-80px] h-80 w-80 rounded-full bg-[var(--home-green)]/10 blur-3xl" />

        <div className="relative grid w-full gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <section className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--home-border)] bg-white/80 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.24em] text-[var(--home-muted)]">
              <Compass className="size-4 text-[var(--home-gold)]" />
              Lost In The Stacks
            </div>

            <div className="space-y-4">
              <p className="font-[var(--font-display)] text-[92px] leading-none text-[var(--home-gold)] sm:text-[128px]">
                404
              </p>
              <h1 className="max-w-[12ch] text-[34px] font-bold leading-[1.02] sm:text-[54px]">
                This chapter doesn&apos;t exist.
              </h1>
              <p className="max-w-[56ch] text-[16px] leading-7 text-[var(--home-muted)] sm:text-[18px]">
                The page you tried to open has either moved, vanished, or was
                never published. Let&apos;s get you back to the good part.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--home-green-deep)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--home-green)]"
              >
                <Home className="size-4" />
                Back To Homepage
              </Link>
              <Link
                href="/categories"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--home-border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--home-green-deep)] transition hover:border-[var(--home-gold)] hover:text-[var(--home-gold)]"
              >
                <Search className="size-4" />
                Browse Categories
              </Link>
            </div>
          </section>

          <section className="relative">
            <div className="rounded-[32px] border border-[var(--home-border)] bg-white/90 p-6 shadow-[0_30px_80px_rgba(27,46,36,0.08)] backdrop-blur">
              <div className="rounded-[28px] bg-[linear-gradient(160deg,#f7f1e2_0%,#ffffff_45%,#eef4ef_100%)] p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--home-muted)]">
                      Quick Return
                    </p>
                    <p className="mt-2 text-2xl font-bold">Popular Paths</p>
                  </div>
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-[var(--home-green-deep)] text-white">
                    <LibraryBig className="size-5" />
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      href: "/authors",
                      label: "Meet the authors",
                      meta: "Explore writer profiles",
                    },
                    {
                      href: "/cart",
                      label: "Return to cart",
                      meta: "Pick up where you left off",
                    },
                    {
                      href: "/contact",
                      label: "Contact support",
                      meta: "Need help finding something?",
                    },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center justify-between rounded-2xl border border-white/70 bg-white/80 px-4 py-4 transition hover:border-[var(--home-gold)]/40 hover:bg-white"
                    >
                      <div>
                        <p className="text-sm font-semibold text-[var(--home-green-deep)]">
                          {item.label}
                        </p>
                        <p className="mt-1 text-xs text-[var(--home-muted)]">
                          {item.meta}
                        </p>
                      </div>
                      <span className="text-lg text-[var(--home-gold)]">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
