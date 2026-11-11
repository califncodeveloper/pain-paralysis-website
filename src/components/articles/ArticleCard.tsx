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
    <article className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300">
      {/* Featured Image Container */}
      <Link
        href={articleHref}
        className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100 block"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={article.coverImage}
          alt={article.imageAlt || article.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge overlay */}
        <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary text-white shadow-md">
          {article.category || "Research"}
        </span>
      </Link>

      {/* Card Body */}
      <div className="flex flex-col flex-grow p-6 sm:p-7">
        {/* Meta Bar */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mb-3">
          <span className="inline-flex items-center gap-1.5 font-medium">
            <Calendar className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
            <time dateTime={article.publishedAt}>{article.publishedDate}</time>
          </span>
          <span className="inline-flex items-center gap-1.5 font-medium">
            <Clock className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
            <span>{article.readTime}</span>
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-serif font-semibold text-secondary group-hover:text-primary transition-colors duration-200 line-clamp-2 mb-3 leading-snug">
          <Link
            href={articleHref}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          >
            {article.title}
          </Link>
        </h2>

        {/* Excerpt */}
        <p className="text-sm sm:text-base text-slate-600 line-clamp-3 mb-6 flex-grow leading-relaxed font-sans">
          {article.excerpt}
        </p>

        {/* Card Footer / CTA */}
        <div className="pt-4 border-t border-slate-100 mt-auto">
          <Link
            href={articleHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary group/btn transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            aria-label={`Read article: ${article.title}`}
          >
            <span>Read Full Article</span>
            <ArrowRight
              className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform duration-200"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  );
};

