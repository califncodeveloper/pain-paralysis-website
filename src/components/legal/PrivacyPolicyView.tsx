import React from "react";
import { Container } from "@/components/ui";
import { PrivacyPolicyContent } from "./PrivacyPolicyContent";

/**
 * PrivacyPolicyView Component
 *
 * Coordinates the reading view for the Privacy Policy page:
 * - Constrains content reading width with Container (narrow: max-w-[860px])
 * - Ensures optimal typographic line-lengths and responsive padding
 * - Renders the transparent visitor-facing notice
 */
export const PrivacyPolicyView: React.FC = () => {
  return (
    <article className="w-full bg-white py-12 sm:py-16 md:py-20">
      <Container size="narrow">
        <PrivacyPolicyContent />
      </Container>
    </article>
  );
};
