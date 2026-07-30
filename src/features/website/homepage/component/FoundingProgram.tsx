"use client";

import Image from "next/image";
import { BookOpen, Headphones, Megaphone, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { HomeCta, HomeSection } from "./primitives";

export function FoundingProgram({ benefits }: { benefits: string[] }) {
  const icons = [BookOpen, Headphones, Sparkles, Megaphone];

  return (
    <HomeSection className="bg-[var(--home-surface)]">
      <div className="grid gap-10 lg:grid-cols-[816px_minmax(0,816px)] lg:items-center lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative min-h-[620px] overflow-hidden"
        >
          <Image
            src="/home/founding-author.png"
            alt="Luxury desk scene for founding author program"
            fill
            sizes="(max-width: 1024px) 100vw, 816px"
            className="object-cover transition-transform duration-700 hover:scale-[1.03]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <h2 className="text-[32px] font-bold text-[var(--home-green-deep)] sm:text-[40px]">
            Become A Founding Author
          </h2>
          <p className="text-[20px] text-[var(--home-muted)] sm:text-[20px]">
            Join the first 100 authors and help shape the future of The Wonder
            Emporium. Elevate your storytelling to a premium audience.
          </p>
          <ul className="space-y-6">
            {benefits.map((benefit, index) => {
              const Icon = icons[index];

              return (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="flex items-center gap-3"
                >
                  <span className="inline-flex size-12 items-center justify-center rounded-full bg-[var(--home-paper)] text-[var(--home-green-deep)] transition-colors duration-300 hover:bg-[var(--home-gold)] hover:text-white">
                    <Icon className="size-5" />
                  </span>
                  <span className="text-[24px] text-[var(--home-green-deep)] sm:text-[24px]">
                    {benefit}
                  </span>
                </motion.li>
              );
            })}
          </ul>
          <HomeCta
            href="/auth/register?role=author"
            invert
            className="w-full sm:w-[264px] hover:scale-[1.03] active:scale-[0.97] transition-transform duration-200"
          >
            Apply As An Author
          </HomeCta>
        </motion.div>
      </div>
    </HomeSection>
  );
}
