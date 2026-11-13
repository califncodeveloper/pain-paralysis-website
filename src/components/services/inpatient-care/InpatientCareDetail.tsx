import React from "react";
import { InpatientCareHero } from "./InpatientCareHero";
import { InpatientCareIntroduction } from "./InpatientCareIntroduction";
import { InpatientCareFeatures } from "./InpatientCareFeatures";
import { InpatientCareRehab } from "./InpatientCareRehab";
import { InpatientCareProcess } from "./InpatientCareProcess";
import { InpatientCareSuitability } from "./InpatientCareSuitability";
import { InpatientCareFAQ } from "./InpatientCareFAQ";
import { InpatientCareRelated } from "./InpatientCareRelated";
import { ServicesCTA } from "@/components/services/ServicesCTA";

/**
 * InpatientCareDetail Component
 * Full bespoke page implementation for Inpatient Rehabilitation & Hospital Care.
 * Represents Pain & Paralysis Hospital as a 25-bedded, 24-hour hospital in Virugambakkam, Chennai.
 */
export const InpatientCareDetail: React.FC = () => {
  return (
    <article className="w-full">
      {/* 1. Hero with Breadcrumbs & Dual CTAs */}
      <InpatientCareHero />

      {/* 2. Service Profile & Introduction */}
      <InpatientCareIntroduction />

      {/* 3. Inpatient Capabilities & 25-Bed Hospital Features */}
      <InpatientCareFeatures />

      {/* 4. Rehabilitation During Hospital Stay */}
      <InpatientCareRehab />

      {/* 5. 5-Step Inpatient Care Pathway */}
      <InpatientCareProcess />

      {/* 6. Patient Suitability & Clinical Precautions */}
      <InpatientCareSuitability />

      {/* 7. Frequently Asked Questions */}
      <InpatientCareFAQ />

      {/* 8. Related Specialized Hospital Programs */}
      <InpatientCareRelated />

      {/* 9. Inpatient Inquiries & Consultation CTA */}
      <ServicesCTA
        heading="Discuss Inpatient Hospital Admission in Virugambakkam"
        description="Our clinical team in Virugambakkam, Chennai conducts comprehensive assessments to evaluate inpatient rehabilitation candidacy, bed availability, and customized recovery plans. Contact our admissions desk today."
        buttonText="Contact Hospital Admissions"
      />
    </article>
  );
};

