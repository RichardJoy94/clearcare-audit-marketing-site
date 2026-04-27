"use client";

import { FormEvent, useState } from "react";
import { siteContent } from "@/content/site-content";

export function ContactForm() {
  const { form } = siteContent.cta;
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const payload = {
      firstName: String(formData.get("firstName") ?? "").trim(),
      lastName: String(formData.get("lastName") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      organization: String(formData.get("organization") ?? "").trim(),
      role: String(formData.get("role") ?? "").trim(),
      reason: String(formData.get("reason") ?? "").trim()
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = (await response.json()) as { error?: string; ok?: boolean };

      if (!response.ok || !result.ok) {
        throw new Error(result.error ?? "Unable to submit your request right now.");
      }

      formElement.reset();
      setStatus("Request received. We'll follow up with your team shortly.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Unable to submit your request right now.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[3px] border border-white/10 bg-slate-2 p-7 lg:p-9">
      <span className="mb-6 block font-mono text-[0.57rem] uppercase tracking-[0.15em] text-[rgba(180,184,204,0.22)]">
        {form.title}
      </span>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="field">
          <label htmlFor="firstName">First name</label>
          <input id="firstName" name="firstName" type="text" placeholder="Sarah" autoComplete="given-name" required />
        </div>
        <div className="field">
          <label htmlFor="lastName">Last name</label>
          <input id="lastName" name="lastName" type="text" placeholder="Chen" autoComplete="family-name" required />
        </div>
      </div>

      <div className="field">
        <label htmlFor="email">Work email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="s.chen@riverside-medical.org"
          autoComplete="email"
          required
        />
      </div>

      <div className="field">
        <label htmlFor="organization">Organization</label>
        <input
          id="organization"
          name="organization"
          type="text"
          placeholder="Riverside Medical Center"
          autoComplete="organization"
          required
        />
      </div>

      <div className="field">
        <label htmlFor="role">Your role</label>
        <select id="role" name="role" defaultValue="" required>
          <option value="" disabled>
            Select role
          </option>
          {form.roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="reason">What brings you here?</label>
        <select id="reason" name="reason" defaultValue="" required>
          <option value="" disabled>
            Select reason
          </option>
          {form.reasons.map((reason) => (
            <option key={reason} value={reason}>
              {reason}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5 space-y-2.5">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-[2px] bg-amber px-4 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-slate transition hover:bg-amber-light"
        >
          {isSubmitting ? "Submitting..." : form.primaryAction}
        </button>
      </div>

      <p className="mt-3 text-center text-[0.64rem] leading-5 text-[rgba(180,184,204,0.16)]">{form.privacyNote}</p>
      {status ? (
        <p
          aria-live="polite"
          className="mt-4 rounded-[2px] border border-amber/20 bg-amber/5 px-3 py-2 text-[0.74rem] text-[#b8becf]"
        >
          {status}
        </p>
      ) : null}
    </form>
  );
}
