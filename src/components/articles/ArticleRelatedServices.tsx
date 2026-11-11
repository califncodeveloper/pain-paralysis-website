import React from "react";
import Link from "next/link";
import { ArrowRight, Stethoscope } from "lucide-react";
import { Container } from "@/components/ui";
import type { ArticleRelatedService } from "@/types";

interface ArticleRelatedServicesProps {
  services: ArticleRelatedService[];
}

export const ArticleRelatedServices: React.FC<ArticleRelatedServicesProps> = ({
  services,
}) => {
  if (!services || services.length === 0) return null;

  return (
    <section className="py-12 sm:py-16 bg-[#F8FBFB] border-t border-slate-200" aria-label="Related Clinical Services">
      <Container size="standard">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <Stethoscope className="w-4 h-4 text-primary" aria-hidden="true" />
            <span className="section-badge text-xs font-semibold uppercase tracking-wider text-primary">
              Clinical Care Integration
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-secondary mb-3">
            Related Specialized Treatments
          </h2>
          <p className="text-sm text-slate-600 mb-8 font-sans">
            Interested in the clinical treatments mentioned in this article? Learn more about our outpatient physical rehabilitation modalities.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {services.map((serv) => (
              <div
                key={serv.href}
                className="group flex flex-col justify-between p-5 rounded-2xl bg-white border border-slate-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-semibold text-secondary group-hover:text-primary transition-colors mb-2">
                    {serv.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans mb-4">
                    {serv.description}
                  </p>
                </div>
                <Link
                  href={serv.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-secondary transition-colors mt-auto"
                >
                  <span>Explore Treatment</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

