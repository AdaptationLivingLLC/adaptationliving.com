"use client";

import { useState } from "react";
import { CheckCircle2, Globe } from "lucide-react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URL_RE = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(\/.*)?$/i;

type Status = "idle" | "invalid" | "submitting" | "success" | "error";

export function SeoGraderForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const firstName = String(data.get("firstName") ?? "").trim();
    const lastName = String(data.get("lastName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const website = String(data.get("website") ?? "").trim();
    const website_confirm = String(data.get("website_confirm") ?? "");

    if (!firstName) {
      setErrorMsg("Please enter your first name.");
      setStatus("invalid");
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setErrorMsg("Please enter a valid email.");
      setStatus("invalid");
      return;
    }
    if (!URL_RE.test(website)) {
      setErrorMsg("Please enter a valid website URL (e.g., yourbusiness.com).");
      setStatus("invalid");
      return;
    }

    setStatus("submitting");
    setErrorMsg(null);

    try {
      const res = await fetch("/api/ghl/prospect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          website,
          website_confirm,
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const payload = await res.json().catch(() => null);
        setErrorMsg(payload?.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="px-6 py-10 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
          <CheckCircle2 className="h-7 w-7 text-emerald-600" />
        </div>
        <h3 className="font-display text-xl font-bold text-[#0F172A]">
          Report on the way.
        </h3>
        <p className="mt-2 text-sm text-[#475569]">
          We're running your audit now. Your full SEO &amp; marketing report
          will hit your inbox within a few minutes. Check spam just in case.
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-lg border border-[#0F172A]/15 bg-white px-3.5 py-2.5 text-sm text-[#0F172A] placeholder:text-[#0F172A]/40 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 transition-all";

  return (
    <form onSubmit={handleSubmit} className="px-6 pb-6 pt-4 space-y-3" noValidate>
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", top: "-9999px" }}
      >
        <label htmlFor="website_confirm">Do not fill</label>
        <input
          type="text"
          id="website_confirm"
          name="website_confirm"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label
          htmlFor="website"
          className="mb-1 block text-[10px] font-bold uppercase tracking-[0.22em] text-[#0F172A]/70"
        >
          Your Website URL
        </label>
        <div className="relative">
          <Globe className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0F172A]/40" />
          <input
            type="text"
            id="website"
            name="website"
            required
            maxLength={200}
            autoComplete="url"
            placeholder="yourbusiness.com"
            className={`${inputCls} pl-9`}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label
            htmlFor="firstName"
            className="mb-1 block text-[10px] font-bold uppercase tracking-[0.22em] text-[#0F172A]/70"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            maxLength={60}
            autoComplete="given-name"
            placeholder="First name"
            className={inputCls}
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="mb-1 block text-[10px] font-bold uppercase tracking-[0.22em] text-[#0F172A]/70"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            maxLength={60}
            autoComplete="family-name"
            placeholder="Last name"
            className={inputCls}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1 block text-[10px] font-bold uppercase tracking-[0.22em] text-[#0F172A]/70"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          maxLength={254}
          autoComplete="email"
          placeholder="you@yourbusiness.com"
          className={inputCls}
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="mb-1 block text-[10px] font-bold uppercase tracking-[0.22em] text-[#0F172A]/70"
        >
          Phone <span className="font-normal normal-case tracking-normal text-[#0F172A]/50">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          maxLength={32}
          autoComplete="tel"
          placeholder="(555) 123-4567"
          className={inputCls}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-[10px] border-2 border-[#2563EB] bg-[#2563EB] px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.22em] text-white shadow-[0_8px_24px_rgba(37,99,235,0.45)] transition-all hover:bg-[#1D4ED8] hover:border-[#1D4ED8] hover:shadow-[0_10px_28px_rgba(37,99,235,0.55)] hover:-translate-y-px disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Running audit..." : "Run My Free SEO Audit →"}
      </button>

      {(status === "invalid" || status === "error") && errorMsg && (
        <p
          role="alert"
          className="rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-xs text-red-700"
        >
          {errorMsg}
        </p>
      )}

      <p className="text-center text-[10px] text-[#0F172A]/50">
        We never share your info. Unsubscribe anytime.
      </p>
    </form>
  );
}
