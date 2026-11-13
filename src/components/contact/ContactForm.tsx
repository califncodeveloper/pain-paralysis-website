"use client";

import React, { useState, useRef, useId } from "react";
import {
  Send,
  Loader2,
  AlertCircle,
  Info,
  Phone,
} from "lucide-react";
import { contactServiceOptions } from "@/data/contact";
import { clinicContactInfo } from "@/data/navigation";
import type {
  ContactFormData,
  ContactFormErrors,
  SubmissionStatus,
} from "@/types";

const INITIAL_FORM_DATA: ContactFormData = {
  fullName: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

/**
 * Validates Indian phone numbers:
 * Supports formats like:
 * - 9876543210
 * - +91 98765 43210
 * - +919876543210
 * - 09876543210
 * - 80155 59609
 */
export function validateIndianPhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-\(\)]/g, "");
  // If starts with +91, remove it
  let digits = cleaned;
  if (digits.startsWith("+91")) {
    digits = digits.slice(3);
  } else if (digits.startsWith("0")) {
    digits = digits.slice(1);
  }
  // Check 10 digits starting with 6, 7, 8, or 9
  return /^[6-9]\d{9}$/.test(digits);
}

/**
 * Validates standard email address format
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
}

/**
 * ContactForm Component
 *
 * Implements Phase 25 reference form:
 * - Full Name (required)
 * - Email Address (required)
 * - Phone Number (required, Indian format)
 * - Service Required (required, verified clinic services)
 * - Message (required, min 10 chars)
 * - Send Message button
 *
 * Strict Compliance & Submission Safeguards:
 * - Real client-side validation for all fields.
 * - Loading state during submission transition.
 * - Duplicate submission prevention.
 * - Transparent disclosure that online submission service is pending clinic backend integration.
 * - ZERO false success simulations.
 * - Preserves all user input on submission attempt.
 */
export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>("idle");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // References for accessible focus management
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const serviceSelectRef = useRef<HTMLSelectElement>(null);
  const messageTextareaRef = useRef<HTMLTextAreaElement>(null);
  const statusBannerRef = useRef<HTMLDivElement>(null);

  // Unique IDs for accessibility
  const baseId = useId();
  const nameId = `${baseId}-name`;
  const emailId = `${baseId}-email`;
  const phoneId = `${baseId}-phone`;
  const serviceId = `${baseId}-service`;
  const messageId = `${baseId}-message`;

  // Validate a single field
  const validateField = (name: keyof ContactFormData, value: string): string | undefined => {
    switch (name) {
      case "fullName": {
        const trimmed = value.trim();
        if (!trimmed) return "Full Name is required.";
        if (trimmed.length < 2) return "Name must be at least 2 characters.";
        if (!/^[a-zA-Z\s.'-]+$/.test(trimmed)) {
          return "Please enter a valid name using letters and spaces.";
        }
        return undefined;
      }
      case "email": {
        const trimmed = value.trim();
        if (!trimmed) return "Email Address is required.";
        if (!validateEmail(trimmed)) {
          return "Please enter a valid email address (e.g. name@example.com).";
        }
        return undefined;
      }
      case "phone": {
        const trimmed = value.trim();
        if (!trimmed) return "Phone Number is required.";
        if (!validateIndianPhone(trimmed)) {
          return "Please enter a valid 10-digit Indian phone number (e.g. 9876543210 or +91 98765 43210).";
        }
        return undefined;
      }
      case "service": {
        if (!value || value === "") {
          return "Please select the service required.";
        }
        return undefined;
      }
      case "message": {
        const trimmed = value.trim();
        if (!trimmed) return "Message is required.";
        if (trimmed.length < 10) {
          return "Please provide at least 10 characters describing your inquiry or symptoms.";
        }
        return undefined;
      }
      default:
        return undefined;
    }
  };

  // Handle field change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Reset submission notification when user edits
    if (submissionStatus !== "idle") {
      setSubmissionStatus("idle");
    }

    // Live validation if already touched
    if (touched[name]) {
      const errorMsg = validateField(name as keyof ContactFormData, value);
      setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    }
  };

  // Handle field blur
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errorMsg = validateField(name as keyof ContactFormData, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  // Validate entire form
  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {
      fullName: validateField("fullName", formData.fullName),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
      service: validateField("service", formData.service),
      message: validateField("message", formData.message),
    };

    setErrors(newErrors);
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      service: true,
      message: true,
    });

    // Check if any error exists
    const hasError = Object.values(newErrors).some((err) => !!err);

    if (hasError) {
      // Focus first erroneous field
      if (newErrors.fullName) nameInputRef.current?.focus();
      else if (newErrors.email) emailInputRef.current?.focus();
      else if (newErrors.phone) phoneInputRef.current?.focus();
      else if (newErrors.service) serviceSelectRef.current?.focus();
      else if (newErrors.message) messageTextareaRef.current?.focus();
      return false;
    }

    return true;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    const isValid = validateForm();
    if (!isValid) return;

    setIsSubmitting(true);

    // Short processing delay to show interaction state
    await new Promise((resolve) => setTimeout(resolve, 500));

    /**
     * Submission Safeguard Notice (Phase 25):
     * There is NO working backend email API, database or SMTP gateway connected in this project.
     * We MUST NOT simulate success or pretend an email was dispatched.
     * We preserve all user input and display an honest status notice.
     */
    setIsSubmitting(false);
    setSubmissionStatus("pending_integration");

    // Scroll status banner into view
    setTimeout(() => {
      statusBannerRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 100);
  };

  return (
    <div className="rounded-2xl bg-white border border-secondary/15 p-6 sm:p-8 lg:p-10 shadow-sm">
      {/* Form Header */}
      <div className="border-b border-secondary/10 pb-5 mb-6">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary mb-2">
          <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
          Appointment &amp; Inquiry Form
        </div>
        <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-secondary">
          Send Us a Message
        </h2>
        <p className="text-sm text-charcoal/80 font-sans mt-2 leading-relaxed">
          Fill out the details below to inquire about clinical consultations, rehabilitation schedules, or treatment suitability.
        </p>
      </div>

      {/* Integration Status Notice Box */}
      <div
        className="mb-6 p-4 rounded-xl bg-slate-50 border border-secondary/15 text-xs text-charcoal/80 flex items-start gap-3"
        role="region"
        aria-label="Online Consultation Form Notice"
      >
        <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
        <div className="space-y-1">
          <p className="font-medium text-secondary">
            Online Consultation Form Status
          </p>
          <p className="leading-relaxed">
            Direct web form transmission is currently in staging and awaiting primary clinic backend integration. The clinic&apos;s published telephone line ({clinicContactInfo.phoneDisplay}) is sourced from reference listings and remains awaiting primary clinic confirmation. Please refer to our published facility address and Google Maps directions below for location details.
          </p>
        </div>
      </div>

      {/* Submission Feedback Banner */}
      {submissionStatus === "pending_integration" && (
        <div
          ref={statusBannerRef}
          role="alert"
          aria-live="polite"
          className="mb-6 p-5 rounded-xl bg-amber-50/90 border border-amber-300 text-amber-900 flex items-start gap-3 shadow-xs animate-in fade-in duration-300"
        >
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
          <div className="space-y-2 text-xs sm:text-sm leading-relaxed">
            <h3 className="font-semibold text-amber-950 font-heading text-base">
              Online Submission Gateway Pending Integration
            </h3>
            <p>
              Thank you for preparing your consultation inquiry. Direct online form transmission is currently awaiting primary clinic backend and email service integration.
            </p>
            <p className="font-medium text-amber-950">
              Your entered details have been preserved above and will not be lost.
            </p>
            <p className="text-xs text-amber-900/90 leading-relaxed">
              Please note that the clinic&apos;s published telephone line ({clinicContactInfo.phoneDisplay}) is sourced from reference listings and remains awaiting primary clinic confirmation before active telephone scheduling can be guaranteed. You can review our confirmed facility location and Google Maps navigation details below.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${clinicContactInfo.phone}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-secondary text-white font-medium text-xs hover:bg-primary transition-colors shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Published Line: {clinicContactInfo.phoneDisplay}</span>
              </a>
              <span className="text-[11px] font-medium text-amber-900 bg-amber-100/80 px-2 py-0.5 rounded border border-amber-300/80">
                Awaiting primary clinic confirmation
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Main Form */}
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Row 1: Full Name & Email Address */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Field 1: Full Name */}
          <div>
            <label
              htmlFor={nameId}
              className="block text-xs font-semibold uppercase tracking-wider text-secondary mb-2"
            >
              Full Name <span className="text-rose-600" aria-hidden="true">*</span>
            </label>
            <div className="relative">
              <input
                ref={nameInputRef}
                id={nameId}
                name="fullName"
                type="text"
                autoComplete="name"
                required
                aria-required="true"
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? `${nameId}-error` : undefined}
                value={formData.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. Rajesh Kumar"
                className={`w-full rounded-lg border bg-surface-soft px-4 py-3 text-base sm:text-sm text-secondary transition-all duration-200 placeholder:text-charcoal/40 focus:bg-white focus:outline-none focus:ring-2 ${
                  errors.fullName
                    ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200"
                    : "border-secondary/20 focus:border-primary focus:ring-primary/20"
                }`}
              />
            </div>
            {errors.fullName && (
              <p
                id={`${nameId}-error`}
                className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-600 font-medium"
                role="alert"
              >
                <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          {/* Field 2: Email Address */}
          <div>
            <label
              htmlFor={emailId}
              className="block text-xs font-semibold uppercase tracking-wider text-secondary mb-2"
            >
              Email Address <span className="text-rose-600" aria-hidden="true">*</span>
            </label>
            <div className="relative">
              <input
                ref={emailInputRef}
                id={emailId}
                name="email"
                type="email"
                autoComplete="email"
                required
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? `${emailId}-error` : undefined}
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. rajesh@example.com"
                className={`w-full rounded-lg border bg-surface-soft px-4 py-3 text-base sm:text-sm text-secondary transition-all duration-200 placeholder:text-charcoal/40 focus:bg-white focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200"
                    : "border-secondary/20 focus:border-primary focus:ring-primary/20"
                }`}
              />
            </div>
            {errors.email && (
              <p
                id={`${emailId}-error`}
                className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-600 font-medium"
                role="alert"
              >
                <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>
        </div>

        {/* Row 2: Phone Number & Service Required */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Field 3: Phone Number */}
          <div>
            <label
              htmlFor={phoneId}
              className="block text-xs font-semibold uppercase tracking-wider text-secondary mb-2"
            >
              Phone Number <span className="text-rose-600" aria-hidden="true">*</span>
            </label>
            <div className="relative">
              <input
                ref={phoneInputRef}
                id={phoneId}
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                aria-required="true"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? `${phoneId}-error` : undefined}
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. 9876543210 or +91 98765 43210"
                className={`w-full rounded-lg border bg-surface-soft px-4 py-3 text-base sm:text-sm text-secondary transition-all duration-200 placeholder:text-charcoal/40 focus:bg-white focus:outline-none focus:ring-2 ${
                  errors.phone
                    ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200"
                    : "border-secondary/20 focus:border-primary focus:ring-primary/20"
                }`}
              />
            </div>
            {errors.phone ? (
              <p
                id={`${phoneId}-error`}
                className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-600 font-medium"
                role="alert"
              >
                <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>{errors.phone}</span>
              </p>
            ) : (
              <p className="mt-1 text-[11px] text-charcoal/60">
                10-digit Indian mobile or landline number
              </p>
            )}
          </div>

          {/* Field 4: Service Required */}
          <div>
            <label
              htmlFor={serviceId}
              className="block text-xs font-semibold uppercase tracking-wider text-secondary mb-2"
            >
              Service Required <span className="text-rose-600" aria-hidden="true">*</span>
            </label>
            <div className="relative">
              <select
                ref={serviceSelectRef}
                id={serviceId}
                name="service"
                required
                aria-required="true"
                aria-invalid={!!errors.service}
                aria-describedby={errors.service ? `${serviceId}-error` : undefined}
                value={formData.service}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full rounded-lg border bg-surface-soft px-4 py-3 text-base sm:text-sm text-secondary transition-all duration-200 focus:bg-white focus:outline-none focus:ring-2 appearance-none cursor-pointer ${
                  errors.service
                    ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200"
                    : "border-secondary/20 focus:border-primary focus:ring-primary/20"
                } ${!formData.service ? "text-charcoal/50" : "text-secondary"}`}
              >
                <option value="" disabled>
                  Select a clinical service...
                </option>
                {contactServiceOptions.map((opt) => (
                  <option key={opt.id} value={opt.label} className="text-secondary">
                    {opt.label}
                  </option>
                ))}
              </select>
              {/* Select Chevron indicator */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-secondary/60">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
            {errors.service && (
              <p
                id={`${serviceId}-error`}
                className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-600 font-medium"
                role="alert"
              >
                <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>{errors.service}</span>
              </p>
            )}
          </div>
        </div>

        {/* Field 5: Message */}
        <div>
          <label
            htmlFor={messageId}
            className="block text-xs font-semibold uppercase tracking-wider text-secondary mb-2"
          >
            Message &amp; Symptoms <span className="text-rose-600" aria-hidden="true">*</span>
          </label>
          <div className="relative">
            <textarea
              ref={messageTextareaRef}
              id={messageId}
              name="message"
              rows={4}
              required
              aria-required="true"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? `${messageId}-error` : undefined}
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Please describe your symptoms, duration of discomfort, previous treatments, or questions..."
              className={`w-full rounded-lg border bg-surface-soft px-4 py-3 text-base sm:text-sm text-secondary transition-all duration-200 placeholder:text-charcoal/40 focus:bg-white focus:outline-none focus:ring-2 resize-y min-h-[110px] ${
                errors.message
                  ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200"
                    : "border-secondary/20 focus:border-primary focus:ring-primary/20"
              }`}
            />
          </div>
          {errors.message ? (
            <p
              id={`${messageId}-error`}
              className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-600 font-medium"
              role="alert"
            >
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.message}</span>
            </p>
          ) : (
            <div className="mt-1 flex items-center justify-between text-[11px] text-charcoal/60">
              <span>Minimum 10 characters</span>
              <span>{formData.message.length} characters</span>
            </div>
          )}
        </div>

        {/* Action Button & Disclaimer */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[4px] bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary hover:shadow transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none active:scale-[0.98] cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                <span>Processing Inquiry...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="w-4 h-4" aria-hidden="true" />
              </>
            )}
          </button>

          <p className="text-[11px] text-charcoal/70 text-center sm:text-right font-sans leading-tight">
            Consultations are subject to clinical scheduling and in-person evaluation.
          </p>
        </div>
      </form>
    </div>
  );
};
