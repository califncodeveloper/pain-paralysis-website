import React from "react";
import { Info } from "lucide-react";
import { termsNoticeData } from "@/data/terms-and-conditions";

/**
 * TermsContent Component
 *
 * Renders the transparent visitor-facing notice for the Terms & Conditions route.
 * Replaces provisional unsupported terms sections with an honest, minimal notice
 * acknowledging that terms are awaiting clinic confirmation and review.
 */
export const TermsContent: React.FC = () => {
  return (
    <div className="w-full">
      <div
        className="rounded-xl bg-[#F8FBFB] border border-slate-200 p-6 sm:p-8 md:p-10 shadow-sm"
        role="region"
        aria-label="Terms & Conditions Notice"
      >
        <div className="flex items-start gap-4 sm:gap-5">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-1 text-primary">
            <Info className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl text-secondary font-normal tracking-wide m-0">
              {termsNoticeData.title}
            </h2>

            {termsNoticeData.paragraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-sm sm:text-base md:text-[17px] text-slate-700 leading-relaxed font-sans m-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

