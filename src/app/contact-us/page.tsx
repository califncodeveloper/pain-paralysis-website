import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Pain & Paralysis Clinic in Chennai. Book an appointment or consult with our pain management and rehabilitation specialists.",
};

export default function ContactUsPage() {
  return (
    <div className="container-standard section-spacing">
      <div className="max-w-3xl">
        <span className="section-badge">Get in Touch</span>
        <h1 className="text-h1 mt-2">Contact Us</h1>
        <p className="text-body mt-4">
          Reach out to Pain &amp; Paralysis Clinic for consultations, treatment inquiries, and appointment bookings.
        </p>
      </div>
    </div>
  );
}

