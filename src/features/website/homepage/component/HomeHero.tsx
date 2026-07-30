"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { HomeCta } from "./primitives";

export function HomeHero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[var(--home-green)]"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <Image
          src="/home/hero-scene.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/38" />
      </div>
      <div className="relative mx-auto flex min-h-[889px] w-full items-center justify-center px-5 py-20 text-center sm:px-8 lg:px-[325px] lg:pt-[235px]">
        <div className="flex max-w-[1271px] flex-col items-center gap-10">
          <div className="flex max-w-[1271px] flex-col items-center gap-4">
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[1271px] text-balance text-[38px] font-extrabold leading-[1.2] text-white sm:text-[52px] lg:text-[72px]"
            >
              Discover Stories That Inspire, Teach & Transform
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.15,
              }}
              className="max-w-[795px] text-pretty text-[18px] leading-[1.2] text-[var(--home-surface)] sm:text-[20px] lg:text-[24px]"
            >
              Explore bestselling books, children&apos;s adventures, leadership
              insights, and timeless wisdom curated for readers of all ages.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <HomeCta
              href="/categories?view=shop"
              invert
              className="min-w-[235px] hover:scale-[1.03] active:scale-[0.97] transition-transform duration-200"
            >
              Shop Collection
            </HomeCta>
            <HomeCta
              href="/auth/register?role=author"
              className="min-w-[235px] text-white hover:scale-[1.03] active:scale-[0.97] transition-transform duration-200"
            >
              Become An Author
            </HomeCta>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
