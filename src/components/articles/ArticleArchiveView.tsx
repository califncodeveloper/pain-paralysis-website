"use client";

import React, { useState, useMemo } from "react";
import { Search, RotateCcw, ChevronLeft, ChevronRight, AlertCircle } from "lucide-react";
import { Container } from "@/components/ui";
import { ArticleCard } from "./ArticleCard";
import { ArticleSidebar } from "./ArticleSidebar";
import type { ArticleItem } from "@/types";

interface ArticleArchiveViewProps {
  initialArticles: ArticleItem[];
  categories: string[];
  basePath?: string;
}

const PAGE_SIZE = 6; // Displays all published articles on Page 1; pagination activates automatically when article volume exceeds page capacity

export const ArticleArchiveView: React.FC<ArticleArchiveViewProps> = ({
  initialArticles,
  categories,
  basePath = "/tips-article",
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter articles based on category and search query
  const filteredArticles = useMemo(() => {
    return initialArticles.filter((article) => {
      // Category filter
      const matchesCategory =
        selectedCategory === "All" ||
        article.category.toLowerCase() === selectedCategory.toLowerCase();

      // Search filter
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [initialArticles, selectedCategory, searchQuery]);

  // Pagination calculation
  const totalItems = filteredArticles.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / PAGE_SIZE));

  // Current page items
  const paginatedArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    return filteredArticles.slice(startIndex, startIndex + PAGE_SIZE);
  }, [filteredArticles, currentPage]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll smoothly to top of grid
      const el = document.getElementById("articles-archive-grid");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-slate-50" id="articles-archive-grid">
      <Container size="wide">
        {/* Controls Bar: Search & Category Pills */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-sm mb-10 sm:mb-12">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 sm:gap-6">
            {/* Search Input */}
            <div className="relative flex-1 max-w-lg">
              <Search
                className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search health articles, topics, or conditions..."
                className="w-full pl-11 pr-4 py-2.5 sm:py-3 rounded-full border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                aria-label="Search articles"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setCurrentPage(1);
                  }}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 px-1 py-0.5 rounded"
                  aria-label="Clear search"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div
              className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none"
              role="tablist"
              aria-label="Article Categories"
            >
              {categories.map((cat) => {
                const isActive = selectedCategory.toLowerCase() === cat.toLowerCase();
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => handleCategoryChange(cat)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      isActive
                        ? "bg-primary text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-secondary"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Filter Summary when filtered */}
          {(searchQuery || selectedCategory !== "All") && (
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-600">
              <span>
                Showing <strong>{totalItems}</strong> {totalItems === 1 ? "article" : "articles"}
                {selectedCategory !== "All" && ` in ${selectedCategory}`}
                {searchQuery && ` matching "${searchQuery}"`}
              </span>
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1.5 text-primary hover:text-secondary font-semibold"
              >
                <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Reset Filters</span>
              </button>
            </div>
          )}
        </div>

        {/* Layout: Main Articles Grid (8 cols) + Sidebar (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Main Article Content */}
          <div className="lg:col-span-8">
            {paginatedArticles.length > 0 ? (
              <div className="space-y-8">
                {/* Responsive Article Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {paginatedArticles.map((article) => (
                    <ArticleCard
                      key={article.id}
                      article={article}
                      basePath={basePath}
                    />
                  ))}
                </div>

                {/* Accessible Pagination Navigation */}
                {totalPages > 1 && (
                  <nav
                    className="flex items-center justify-center gap-2 pt-8 sm:pt-10 border-t border-slate-200"
                    aria-label="Article archive pagination"
                  >
                    {/* Previous Button */}
                    <button
                      type="button"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`inline-flex items-center gap-1 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                        currentPage === 1
                          ? "opacity-40 cursor-not-allowed text-slate-400 bg-slate-100"
                          : "text-secondary hover:text-white hover:bg-primary bg-white border border-slate-200 shadow-sm"
                      }`}
                      aria-label="Previous page"
                    >
                      <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                      <span>Previous</span>
                    </button>

                    {/* Page Numbers */}
                    <div className="flex items-center gap-1.5">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                        const isCurrent = pageNum === currentPage;
                        return (
                          <button
                            key={pageNum}
                            type="button"
                            onClick={() => handlePageChange(pageNum)}
                            aria-current={isCurrent ? "page" : undefined}
                            aria-label={`Page ${pageNum}`}
                            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full text-xs sm:text-sm font-semibold flex items-center justify-center transition-all ${
                              isCurrent
                                ? "bg-primary text-white shadow-md font-bold"
                                : "bg-white text-secondary hover:bg-slate-100 border border-slate-200"
                            }`}
                          >
                            {pageNum}
                          </button>
                        );
                      })}
                    </div>

                    {/* Next Button */}
                    <button
                      type="button"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`inline-flex items-center gap-1 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                        currentPage === totalPages
                          ? "opacity-40 cursor-not-allowed text-slate-400 bg-slate-100"
                          : "text-secondary hover:text-white hover:bg-primary bg-white border border-slate-200 shadow-sm"
                      }`}
                      aria-label="Next page"
                    >
                      <span>Next</span>
                      <ChevronRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </nav>
                )}
              </div>
            ) : (
              /* Useful Empty State */
              <div className="bg-white rounded-2xl p-10 sm:p-14 text-center border border-slate-200 shadow-sm">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center">
                  <AlertCircle className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-secondary mb-2">
                  No Articles Found
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mb-6 font-sans">
                  We couldn&apos;t find any articles matching your search criteria. Try modifying your keywords or explore all available articles.
                </p>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary hover:bg-secondary text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>View All Articles</span>
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <ArticleSidebar
              recentArticles={initialArticles}
              categories={categories}
              activeCategory={selectedCategory}
              onSelectCategory={handleCategoryChange}
              basePath={basePath}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

