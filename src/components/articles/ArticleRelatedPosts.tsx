import React from "react";
import { Container } from "@/components/ui";
import { ArticleCard } from "./ArticleCard";
import type { ArticleItem } from "@/types";

interface ArticleRelatedPostsProps {
  articles: ArticleItem[];
  basePath?: string;
}

export const ArticleRelatedPosts: React.FC<ArticleRelatedPostsProps> = ({
  articles,
  basePath = "/tips-article",
}) => {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white border-t border-slate-200" aria-label="Related Health Articles">
      <Container size="wide">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-badge text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">
              Continue Reading
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-secondary">
              Related Health &amp; Rehabilitation Articles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {articles.map((art) => (
              <ArticleCard key={art.id} article={art} basePath={basePath} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

