"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

interface FormValues {
  fullName: string;
  companyName: string;
  businessEmail: string;
  phone: string;
  website: string;
  industry: string;
  size: string;
  challenge: string;
  crm: string;
  volume: string;
  message: string;
  consent: boolean;
  // honeypot — real users never fill this in
  companyWebsiteUrl: string;
}

const initialValues: FormValues = {
  fullName: "",
  companyName: "",
  businessEmail: "",
  phone: "",
  website: "",
  industry: "",
  size: "",
  challenge: "",
  crm: "",
  volume: "",
  message: "",
  consent: false,
  companyWebsiteUrl: "",
};

const industries = [
  "Car Wash Memberships",
  "Residential Cleaning & Housekeeping",
  "Pest Control",
  "Pool Cleaning",
  "Lawn Care",
  "HVAC Maintenance Plans",
  "Mobile Detailing",
  "Fitness Memberships",
  "Other Recurring-Service Business",
];

const primaryChallenges = [
  "Unconverted / unfollowed leads",
  "Customer cancellations",
  "Failed payments",
  "Inactive / former customers",
  "General customer experience",
  "Other",
];

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>(
    {}
  );
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormValues, string>> = {};
    if (!values.fullName.trim()) next.fullName = "Full name is required.";
    if (!values.companyName.trim())
      next.companyName = "Company name is required.";
    if (!values.businessEmail.trim()) {
      next.businessEmail = "Business email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.businessEmail)) {
      next.businessEmail = "Enter a valid email address.";
    }
    if (!values.industry) next.industry = "Please select your industry.";
    if (!values.challenge)
      next.challenge = "Please select your primary challenge.";
    if (!values.message.trim())
      next.message = "Please tell us a bit about your situation.";
    if (!values.consent)
      next.consent = "Please confirm you agree to be contacted.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Honeypot check — if filled, silently treat as success without submitting.
    if (values.companyWebsiteUrl) {
      setState("success");
      return;
    }

    if (!validate()) return;

    setState("submitting");
    setErrorMessage(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setErrorMessage(
          result?.error ||
            "Something went wrong sending your message. Please try again."
        );
        setState("error");
        return;
      }

      setState("success");
      setValues(initialValues);
    } catch {
      setErrorMessage(
        "Something went wrong sending your message. Please check your connection and try again."
      );
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="card-surface flex flex-col items-center gap-3 p-10 text-center">
        <CheckCircle2 size={40} className="text-aqua" strokeWidth={1.5} />
        <h3 className="text-xl font-semibold text-navy-800">
          Thank you — your enquiry has been received.
        </h3>
        <p className="max-w-sm text-sm text-navy-600">
          A member of the Qlentra team will follow up shortly. If your
          request is time-sensitive, you can also book a discovery call
          directly.
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="mt-2 text-sm font-semibold text-violet hover:underline"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card-surface p-6 sm:p-8">
      {/* Honeypot field — hidden from real users, catches bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="companyWebsiteUrl">Leave this field empty</label>
        <input
          id="companyWebsiteUrl"
          name="companyWebsiteUrl"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.companyWebsiteUrl}
          onChange={(e) => update("companyWebsiteUrl", e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          label="Full Name"
          required
          error={errors.fullName}
          htmlFor="fullName"
        >
          <input
            id="fullName"
            type="text"
            value={values.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            className={inputClass(!!errors.fullName)}
            autoComplete="name"
          />
        </Field>

        <Field
          label="Company Name"
          required
          error={errors.companyName}
          htmlFor="companyName"
        >
          <input
            id="companyName"
            type="text"
            value={values.companyName}
            onChange={(e) => update("companyName", e.target.value)}
            className={inputClass(!!errors.companyName)}
            autoComplete="organization"
          />
        </Field>

        <Field
          label="Business Email"
          required
          error={errors.businessEmail}
          htmlFor="businessEmail"
        >
          <input
            id="businessEmail"
            type="email"
            value={values.businessEmail}
            onChange={(e) => update("businessEmail", e.target.value)}
            className={inputClass(!!errors.businessEmail)}
            autoComplete="email"
          />
        </Field>

        <Field label="Phone Number" htmlFor="phone">
          <input
            id="phone"
            type="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClass(false)}
            autoComplete="tel"
          />
        </Field>

        <Field label="Website" htmlFor="website">
          <input
            id="website"
            type="text"
            placeholder="yourcompany.com"
            value={values.website}
            onChange={(e) => update("website", e.target.value)}
            className={inputClass(false)}
            autoComplete="url"
          />
        </Field>

        <Field
          label="Industry"
          required
          error={errors.industry}
          htmlFor="industry"
        >
          <select
            id="industry"
            value={values.industry}
            onChange={(e) => update("industry", e.target.value)}
            className={inputClass(!!errors.industry)}
          >
            <option value="">Select industry</option>
            {industries.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Number of Locations / Employees" htmlFor="size">
          <input
            id="size"
            type="text"
            placeholder="e.g. 3 locations / 25 employees"
            value={values.size}
            onChange={(e) => update("size", e.target.value)}
            className={inputClass(false)}
          />
        </Field>

        <Field
          label="Primary Challenge"
          required
          error={errors.challenge}
          htmlFor="challenge"
        >
          <select
            id="challenge"
            value={values.challenge}
            onChange={(e) => update("challenge", e.target.value)}
            className={inputClass(!!errors.challenge)}
          >
            <option value="">Select primary challenge</option>
            {primaryChallenges.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Current CRM / Booking Software" htmlFor="crm">
          <input
            id="crm"
            type="text"
            placeholder="e.g. HubSpot, Housecall Pro, none"
            value={values.crm}
            onChange={(e) => update("crm", e.target.value)}
            className={inputClass(false)}
          />
        </Field>

        <Field
          label="Estimated Monthly Lead or Customer Volume"
          htmlFor="volume"
        >
          <input
            id="volume"
            type="text"
            placeholder="e.g. 150 leads / month"
            value={values.volume}
            onChange={(e) => update("volume", e.target.value)}
            className={inputClass(false)}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field
          label="Message"
          required
          error={errors.message}
          htmlFor="message"
        >
          <textarea
            id="message"
            rows={4}
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            className={inputClass(!!errors.message)}
            placeholder="Tell us about your sales, retention, or revenue-recovery challenge."
          />
        </Field>
      </div>

      <div className="mt-6">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={values.consent}
            onChange={(e) => update("consent", e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-navy-800/30 text-violet focus:ring-violet"
          />
          <span className="text-sm text-navy-600">
            I agree that Qlentra may contact me regarding my enquiry.
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
            <AlertCircle size={13} /> {errors.consent}
          </p>
        )}
      </div>

      {state === "error" && (
        <div className="mt-5 flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle size={16} className="shrink-0" />
          {errorMessage ||
            "Something went wrong sending your message. Please try again or email us directly."}
        </div>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="btn-primary mt-7 w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {state === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          "Send Enquiry"
        )}
      </button>
    </form>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-lg border bg-white px-4 py-3 text-sm text-navy-800 placeholder:text-navy-400 transition-colors focus:outline-none focus:ring-2 focus:ring-violet/40 ${
    hasError ? "border-red-400" : "border-navy-800/15 focus:border-violet"
  }`;
}

function Field({
  label,
  required,
  error,
  htmlFor,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium text-navy-700"
      >
        {label} {required && <span className="text-violet">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
          <AlertCircle size={13} /> {error}
        </p>
      )}
    </div>
  );
}
