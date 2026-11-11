import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, ShieldCheck, PhoneCall } from "lucide-react";
import type { ArticleItem } from "@/types";

interface ArticleSidebarProps {
  recentArticles: ArticleItem[];
  categories: string[];
  activeCategory: string;
  onSelectCategory?: (category: string) => void;
  basePath?: string;
}

/**
 * ArticleSidebar Component
 * Reconstructs the archive sidebar.
 *
 * Content Integrity Finding & Safeguard:
 * Live WordPress reference had spam posts (Roulette, Vbet, spec dobavki) injected
 * into its Newest Post widget. This component strictly limits recent posts to
 * content-audited educational articles adapted from reference material.
 */
export const ArticleSidebar: React.FC<ArticleSidebarProps> = ({
  recentArticles,
  categories,
  activeCategory,
  onSelectCategory,
  basePath = "/tips-article",
}) => {
  return (
    <aside className="w-full space-y-8" aria-label="Blog Sidebar">
      {/* 1. Newest Post Widget */}
      <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
          <h3 className="font-serif text-xl font-bold text-secondary tracking-wide">
            Newest Posts
          </h3>
          <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
        </div>

        <div className="space-y-5">
          {recentArticles.slice(0, 3).map((article) => (
            <article key={article.id} className="group flex gap-3.5 items-start">
              <Link
                href={`${basePath}/${article.slug}`}
                className="relative flex-shrink-0 w-20 h-16 sm:w-22 sm:h-18 rounded-lg overflow-hidden bg-slate-100 block"
                tabIndex={-1}
                aria-hidden="true"
              >
                <Image
                  src={article.coverImage}
                  alt=""
                  fill
                  sizes="88px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                  <Calendar className="w-3 h-3 text-primary" aria-hidden="true" />
                  <time dateTime={article.publishedAt}>{article.publishedDate}</time>
                </div>
                <h4 className="text-sm font-semibold text-secondary group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                  <Link
                    href={`${basePath}/${article.slug}`}
                    className="focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
                  >
                    {article.title}
                  </Link>
                </h4>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* 2. Care Categories Widget */}
      <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
          <h3 className="font-serif text-xl font-bold text-secondary tracking-wide">
            Categories
          </h3>
          <span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
        </div>

        <div className="flex flex-col gap-2">
          {categories.map((cat) => {
            const isSelected = activeCategory.toLowerCase() === cat.toLowerCase();
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onSelectCategory?.(cat)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all text-left ${
                  isSelected
                    ? "bg-primary text-white shadow-sm font-semibold"
                    : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {cat === "All" ? recentArticles.length : recentArticles.filter((a) => a.category === cat).length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Clinical Transparency & Educational Disclaimer */}
      <div className="bg-[#F8FBFB] rounded-2xl p-6 border border-primary/20">
        <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-2">
          <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
          <span>Clinical Information Scope</span>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed font-sans">
          All articles are curated for patient education regarding non-surgical spine care and physical rehabilitation. Treatment suitability requires direct clinical evaluation.
        </p>
      </div>

      {/* 4. Consultation Inquiry Card */}
      <div className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary to-[#0c3c40] text-white rounded-2xl p-6 sm:p-7 border border-white/10 shadow-lg">
        <div className="relative z-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-2 block">
            Personalized Care
          </span>
          <h3 className="font-serif text-xl font-bold text-white mb-2 leading-snug">
            Need Individual Spinal Guidance?
          </h3>
          <p className="text-xs text-slate-200 mb-5 leading-relaxed font-light">
            Schedule a diagnostic evaluation with Dr. Dinesh Anandhan and our clinical team in Chennai.
          </p>
          <Link
            href="/contact-us"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-primary hover:bg-accent text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <PhoneCall className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Consult Now</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </aside>
  );
};

