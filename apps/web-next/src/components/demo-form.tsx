"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d][\d\s\-().]{6,20}$/;

type Status = "idle" | "invalid" | "submitting" | "success" | "error";

export function DemoForm() {
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
    const business = String(data.get("business") ?? "").trim();
    const website = String(data.get("website") ?? "").trim();
    const preferredTime = String(data.get("preferredTime") ?? "").trim();
    const honeypot = String(data.get("website_confirm") ?? "");

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
    if (!PHONE_RE.test(phone)) {
      setErrorMsg("Please enter a valid phone number.");
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
          website_confirm: honeypot,
          source: "demo-booking",
          tags: ["demo-request", `preferred-time:${preferredTime || "any"}`],
          notes: [
            business ? `Business: ${business}` : undefined,
            preferredTime ? `Preferred time: ${preferredTime}` : undefined,
          ]
            .filter(Boolean)
            .join(" · "),
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
        <h3 className="font-display text-[20px] font-bold text-[#0F172A]">
          Got it — calendar link on the way.
        </h3>
        <p className="mt-2 text-[14px] leading-relaxed text-[#475569]">
          Check your inbox in the next 10 minutes (Mon-Fri, 8a-6p MST). We'll
          send times that fit your week. If you need to move faster, just call{" "}
          <a href="tel:6232191237" className="font-semibold text-accent hover:underline">
            623-219-1237
          </a>
          .
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-lg border border-[#0F172A]/15 bg-white px-3.5 py-2.5 text-[15px] text-[#0F172A] placeholder:text-[#0F172A]/40 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 transition-all";

  return (
    <form onSubmit={handleSubmit} className="px-6 pb-6 pt-4 space-y-3" noValidate>
      {/* Honeypot — hidden from real users, caught by bots */}
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

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label
            htmlFor="firstName"
            className="mb-1 block text-[11px] font-bold uppercase tracking-[0.22em] text-[#0F172A]/70"
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
            className={inputCls}
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="mb-1 block text-[11px] font-bold uppercase tracking-[0.22em] text-[#0F172A]/70"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            maxLength={60}
            autoComplete="family-name"
            className={inputCls}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1 block text-[11px] font-bold uppercase tracking-[0.22em] text-[#0F172A]/70"
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
          className="mb-1 block text-[11px] font-bold uppercase tracking-[0.22em] text-[#0F172A]/70"
        >
          Mobile Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          maxLength={32}
          autoComplete="tel"
          placeholder="623-219-1237"
          className={inputCls}
        />
      </div>

      <div>
        <label
          htmlFor="business"
          className="mb-1 block text-[11px] font-bold uppercase tracking-[0.22em] text-[#0F172A]/70"
        >
          Business Name <span className="font-normal normal-case tracking-normal text-[#0F172A]/50">(optional)</span>
        </label>
        <input
          type="text"
          id="business"
          name="business"
          maxLength={120}
          autoComplete="organization"
          className={inputCls}
        />
      </div>

      <div>
        <label
          htmlFor="website"
          className="mb-1 block text-[11px] font-bold uppercase tracking-[0.22em] text-[#0F172A]/70"
        >
          Website <span className="font-normal normal-case tracking-normal text-[#0F172A]/50">(optional)</span>
        </label>
        <input
          type="text"
          id="website"
          name="website"
          maxLength={200}
          autoComplete="url"
          placeholder="yourbusiness.com"
          className={inputCls}
        />
      </div>

      <div>
        <label
          htmlFor="preferredTime"
          className="mb-1 block text-[11px] font-bold uppercase tracking-[0.22em] text-[#0F172A]/70"
        >
          Preferred Time
        </label>
        <select
          id="preferredTime"
          name="preferredTime"
          defaultValue=""
          className={inputCls}
        >
          <option value="" disabled>
            Pick a window…
          </option>
          <option value="weekday-morning">Weekday morning (8a–12p MST)</option>
          <option value="weekday-afternoon">Weekday afternoon (12p–4p MST)</option>
          <option value="weekday-evening">Weekday evening (4p–6p MST)</option>
          <option value="saturday">Saturday (by appointment)</option>
          <option value="any">Whenever works — send all options</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-sm border-2 border-[#2563EB] bg-[#2563EB] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.22em] text-white shadow-[0_8px_24px_rgba(37,99,235,0.35)] transition-all hover:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending your request…" : "Book My Demo"}
        {status !== "submitting" && <ArrowRight className="h-4 w-4" />}
      </button>

      {(status === "invalid" || status === "error") && errorMsg && (
        <p
          role="alert"
          className="rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-[13px] text-red-700"
        >
          {errorMsg}
        </p>
      )}

      <p className="text-center text-[11px] text-[#0F172A]/50">
        No credit card. No contract. Cancel your demo any time.
      </p>
    </form>
  );
}
