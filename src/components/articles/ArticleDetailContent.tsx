import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Info, ArrowLeft, Tag, AlertTriangle } from "lucide-react";
import { Container } from "@/components/ui";
import type { ArticleItem } from "@/types";

interface ArticleDetailContentProps {
  article: ArticleItem;
  basePath?: string;
}

export const ArticleDetailContent: React.FC<ArticleDetailContentProps> = ({
  article,
  basePath = "/tips-article",
}) => {
  return (
    <article className="py-10 sm:py-14 md:py-16 bg-white" aria-labelledby="article-content-body">
      <Container size="standard">
        <div className="max-w-3xl mx-auto">
          {/* Featured Image */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md mb-8 sm:mb-10">
            <Image
              src={article.coverImage}
              alt={article.imageAlt || article.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover object-center"
            />
          </div>

          {/* Educational Disclaimer Banner */}
          <aside
            className="flex items-start gap-3.5 p-4 sm:p-5 rounded-xl bg-teal-50/80 border border-primary/30 text-secondary mb-8 sm:mb-10 text-xs sm:text-sm leading-relaxed"
            aria-label="Medical Disclaimer"
          >
            <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <strong className="font-semibold text-secondary block mb-1">
                Clinical Educational Notice
              </strong>
              <p className="text-slate-600 m-0">
                {article.educationalDisclaimer ||
                  "The information in this article is for general educational purposes only. It does not replace an individual medical assessment or professional advice. Treatment options and suitability vary between individuals."}
              </p>
            </div>
          </aside>

          {/* Lead Intro Paragraph */}
          {article.introParagraph && (
            <p className="text-base sm:text-lg md:text-xl font-medium text-slate-800 leading-relaxed font-sans mb-8 pb-6 border-b border-slate-100">
              {article.introParagraph}
            </p>
          )}

          {/* Main Article Sections */}
          <div className="space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base font-sans">
            {article.sections.map((section, idx) => (
              <section key={idx} className="space-y-4">
                {/* Section Heading */}
                {section.heading && section.level === "h2" && (
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-secondary mt-8 mb-4 pt-2">
                    {section.heading}
                  </h2>
                )}
                {section.heading && section.level === "h3" && (
                  <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-semibold text-secondary mt-6 mb-3">
                    {section.heading}
                  </h3>
                )}
                {section.heading && section.level === "h4" && (
                  <h4 className="text-base sm:text-lg font-serif font-semibold text-secondary mt-4 mb-2">
                    {section.heading}
                  </h4>
                )}

                {/* Section Paragraphs */}
                {section.paragraphs?.map((p, pIdx) => (
                  <p key={pIdx} className="text-slate-700 leading-relaxed">
                    {p}
                  </p>
                ))}

                {/* Section Bullet List */}
                {section.listItems && section.listItems.length > 0 && (
                  <ul className="space-y-2.5 my-4 pl-0 list-none">
                    {section.listItems.map((item, lIdx) => (
                      <li key={lIdx} className="flex items-start gap-2.5 text-slate-700">
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2"
                          aria-hidden="true"
                        />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Callout / Warning Notice */}
                {section.callout && (
                  <div
                    className={`p-4 sm:p-5 rounded-xl border text-xs sm:text-sm my-6 ${
                      section.callout.type === "warning"
                        ? "bg-amber-50/80 border-amber-300 text-amber-900"
                        : "bg-teal-50/80 border-teal-200 text-secondary"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {section.callout.type === "warning" ? (
                        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      ) : (
                        <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      )}
                      <div>
                        {section.callout.title && (
                          <strong className="block font-semibold mb-1">
                            {section.callout.title}
                          </strong>
                        )}
                        <p className="m-0 leading-relaxed">{section.callout.text}</p>
                      </div>
                    </div>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Tags & Navigation Footer */}
          <div className="mt-12 pt-8 border-t border-slate-200 space-y-6">
            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider mr-2">
                  <Tag className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                  <span>Tags:</span>
                </span>
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Back to Archive Button */}
            <div className="pt-4 flex justify-between items-center">
              <Link
                href={basePath}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 text-xs sm:text-sm font-semibold text-secondary hover:text-white hover:bg-primary hover:border-primary transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                <span>Back to Tips &amp; Article</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
};

