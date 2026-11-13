import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { ArticleItem } from "@/types";

interface ArticleCardProps {
  article: ArticleItem;
  basePath?: string;
}

/**
 * ArticleCard Component
 * Renders an educational article card in the archive listing.
 * Follows the design tokens: white card, soft teal hover, clear typography.
 */
export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  basePath = "/tips-article",
}) => {
  const articleHref = `${basePath}/${article.slug}`;

  return (
    <article className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-[#105156]/12 shadow-[0_4px_20px_rgba(16,81,86,0.06)] hover:shadow-[0_20px_45px_rgba(28,170,182,0.22)] hover:border-primary/50 transition-all duration-400 hover:-translate-y-1.5">
      {/* Featured Image Container */}
      <Link
        href={articleHref}
        className="relative w-full aspect-[16/10] overflow-hidden bg-surface block"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={article.coverImage}
          alt={article.imageAlt || article.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
          className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#105156]/70 via-transparent to-transparent opacity-30 group-hover:opacity-75 transition-opacity duration-300" />
        
        {/* Category Badge overlay */}
        <span className="absolute top-4 left-4 inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/95 backdrop-blur-md text-secondary shadow-md border border-white/60">
          {article.category || "Clinical Guide"}
        </span>
      </Link>

      {/* Card Body */}
      <div className="flex flex-col flex-grow p-6 sm:p-7">
        {/* Meta Bar */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-[#354547]/70 mb-3">
          <span className="inline-flex items-center gap-1.5 font-medium">
            <Calendar className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
            <time dateTime={article.publishedAt}>{article.publishedDate}</time>
          </span>
          <span className="inline-flex items-center gap-1.5 font-medium">
            <Clock className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
            <span>{article.readTime}</span>
          </span>
        </div>

        {/* Article Title */}
        <h3 className="font-heading text-xl sm:text-2xl font-semibold text-secondary leading-snug mb-3 group-hover:text-primary transition-colors">
          <Link href={articleHref}>{article.title}</Link>
        </h3>

        {/* Article Excerpt */}
        <p className="font-sans text-xs sm:text-sm text-[#354547]/80 leading-relaxed mb-6 flex-grow line-clamp-3">
          {article.excerpt}
        </p>

        {/* Read Article Link */}
        <div className="pt-4 border-t border-black/5 flex items-center justify-between text-xs font-semibold text-primary">
          <span className="group-hover:text-secondary transition-colors">Read Clinical Article</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </article>
  );
};
