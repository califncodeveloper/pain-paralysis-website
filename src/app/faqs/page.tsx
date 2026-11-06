import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions regarding treatments, admissions, appointments, and recovery expectations.",
};

export default function FaqsPage() {
  return (
    <div className="container-standard section-spacing">
      <span className="section-badge">Patient Help</span>
      <h1 className="text-h1 mt-2">Frequently Asked Questions</h1>
      <p className="text-body mt-4 max-w-2xl">
        Common questions and detailed answers regarding our treatments and clinic procedures.
      </p>
    </div>
  );
}
