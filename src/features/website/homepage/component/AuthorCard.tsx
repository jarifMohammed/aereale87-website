import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

import { cn } from "@/lib/utils";
import type { AuthorItem } from "../types/homepage.types";

export function AuthorCard({ author }: { author: AuthorItem }) {
  const badgeMuted = author.badge === "Rising Author";
  const content = (
    <>
      <div className="flex flex-col items-center">
        <div className="relative mb-4">
          {author.avatar && author.avatar !== "/placeholder-author.png" ? (
            <Image
              src={author.avatar}
              alt={`${author.name} portrait`}
              width={80}
              height={80}
              className="size-20 rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="size-20 rounded-full bg-gradient-to-br from-[var(--home-green)] to-[var(--home-green-deep)] border-2 border-[var(--home-gold)] flex items-center justify-center text-white transition-transform duration-500 group-hover:scale-105 shadow-[inset_0_2px_6px_rgba(0,0,0,0.3)]">
              <span className="text-[28px] font-bold tracking-wider [font-family:var(--font-display)] text-[var(--home-gold)] select-none">
                {author.name ? author.name.charAt(0).toUpperCase() : "A"}
              </span>
            </div>
          )}
          <span className="absolute -bottom-1 -right-1 inline-flex size-5 items-center justify-center rounded-full bg-[var(--home-gold)] text-[var(--home-ink)] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
            <Star className="size-3 fill-current stroke-[var(--home-ink)]" />
          </span>
        </div>
        <h3 className="text-center text-[24px] font-bold leading-[1.2] text-[#121a10] transition-colors duration-300 group-hover:text-[var(--home-green)]">
          {author.name}
        </h3>
        <span
          className={cn(
            "mt-2 inline-flex items-center gap-1 px-2 py-1 text-[12px] leading-none transition-colors duration-300",
            badgeMuted
              ? "bg-[#e3e5e0] text-[#47534b]"
              : "bg-[rgba(207,175,69,0.16)] text-[#a27415] group-hover:bg-[var(--home-gold)] group-hover:text-white",
          )}
        >
          <Star className="size-3 stroke-current" />
          {author.badge}
        </span>
      </div>
      <dl className="mt-6 grid grid-cols-3 text-center border-t border-[rgba(232,224,204,0.4)] pt-4">
        <div>
          <dd className="mb-1 text-[20px] font-bold leading-5 text-[#121a10]">
            {author.books}
          </dd>
          <dt className="text-[16px] leading-[1.2] text-[#6f756d]">Books</dt>
        </div>
        <div className="border-x border-[rgba(232,224,204,0.9)]">
          <dd className="mb-1 text-[20px] font-bold leading-5 text-[#121a10]">
            {author.rating}
          </dd>
          <dt className="text-[16px] leading-[1.2] text-[#6f756d]">Rating</dt>
        </div>
        <div>
          <dd className="mb-1 text-[20px] font-bold leading-5 text-[#121a10]">
            {author.readers}
          </dd>
          <dt className="text-[16px] leading-[1.2] text-[#6f756d]">Readers</dt>
        </div>
      </dl>
    </>
  );

  if (author.href) {
    return (
      <Link
        href={author.href}
        className="block border border-[var(--home-border)] bg-white px-6 py-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_36px_rgba(27,46,36,0.08)] sm:px-8 group"
      >
        {content}
      </Link>
    );
  }

  return (
    <article className="block border border-[var(--home-border)] bg-white px-6 py-6 sm:px-8 group">
      {content}
    </article>
  );
}
