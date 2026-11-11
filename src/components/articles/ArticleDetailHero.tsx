import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, ChevronRight, Calendar, Clock, User, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui";
import type { ArticleItem } from "@/types";

interface ArticleDetailHeroProps {
  article: ArticleItem;
  basePath?: string;
}

/**
 * ArticleDetailHero Component
 * Reconstructs the hero header for individual article detail pages.
 * Displays category badge, H1 title, verified metadata (publication date, read time, author),
 * and semantic breadcrumbs.
 */
export const ArticleDetailHero: React.FC<ArticleDetailHeroProps> = ({
  article,
  basePath = "/tips-article",
}) => {
  return (
    <section
      className="relative w-full overflow-hidden bg-secondary pt-28 pb-14 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 text-white border-b border-white/10"
      aria-label="Article Header Banner"
    >
      {/* Background Clinical Texture & Subtle Gradient Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src={article.coverImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-15 mix-blend-overlay"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#1C1C1C]/90 via-secondary/95 to-secondary"
          aria-hidden="true"
        />
      </div>

      <Container size="wide" className="relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-slate-300 mb-6"
          >
            <ol className="flex items-center gap-1.5 sm:gap-2 list-none p-0 m-0 flex-wrap">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <Home className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                  <span>Home</span>
                </Link>
              </li>
              <li className="inline-flex items-center text-slate-400" aria-hidden="true">
                <ChevronRight className="w-3 h-3" />
              </li>
              <li className="inline-flex items-center">
                <Link
                  href={basePath}
                  className="hover:text-white transition-colors"
                >
                  Tips &amp; Article
                </Link>
              </li>
              <li className="inline-flex items-center text-slate-400" aria-hidden="true">
                <ChevronRight className="w-3 h-3" />
              </li>
              <li className="inline-flex items-center font-medium text-white line-clamp-1 max-w-[200px] sm:max-w-xs" aria-current="page">
                <span>{article.title}</span>
              </li>
            </ol>
          </nav>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="section-badge inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/20 text-accent border border-primary/30">
              <ShieldCheck className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
              {article.category}
            </span>
          </div>

          {/* Primary H1 Article Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white tracking-wide leading-tight sm:leading-snug mb-6">
            {article.title}
          </h1>

          {/* Author and Metadata Row */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300 pt-4 border-t border-white/15">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-accent">
                <User className="w-4 h-4" aria-hidden="true" />
              </div>
              <span className="font-medium text-white">{article.author.name}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-primary" aria-hidden="true" />
              <time dateTime={article.publishedAt}>{article.publishedDate}</time>
            </div>

            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-accent" aria-hidden="true" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

