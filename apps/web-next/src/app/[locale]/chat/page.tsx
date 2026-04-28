import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Chat with Adaptation Living",
  description:
    "Start a live chat with the Adaptation Living LLC team. Veteran-owned AI automation studio in Phoenix, AZ. Reply STOP to opt out of SMS at any time.",
  robots: { index: true, follow: true },
};

export default function ChatPage() {
  return (
    <main id="main-content" className="min-h-[calc(100vh-200px)]">
      <section className="section-cream">
        <div className="mx-auto max-w-[760px] px-6 sm:px-8 py-16 lg:py-24">
          <div className="text-center">
            <span className="inline-block text-[10px] font-bold tracking-[0.32em] uppercase text-[#2563EB] bg-[#2563EB]/10 border border-[#2563EB]/30 rounded-full px-4 py-1.5 mb-6">
              Live Chat
            </span>
            <h1 className="font-display text-[clamp(28px,4vw,44px)] font-extrabold text-[#0B1D3A] leading-[1.1] tracking-[-0.02em]">
              Chat with the Adaptation Living team
            </h1>
            <p className="mt-5 text-[15px] lg:text-base text-[#4A5568] leading-relaxed max-w-[560px] mx-auto">
              Use the chat window in the bottom corner to send us a message.
              We typically respond in minutes during business hours and within
              one business day after hours.
            </p>
          </div>

          <div className="mt-12 rounded-[20px] border border-[#0F172A]/10 bg-white shadow-lift p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-[#0B1D3A]">
              How this works
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-[#4A5568] leading-relaxed">
              <li>
                <span className="font-semibold text-[#0B1D3A]">1.</span> Open
                the chat window in the bottom-right corner of this page.
              </li>
              <li>
                <span className="font-semibold text-[#0B1D3A]">2.</span> Tell
                us what you&apos;re working on. The more detail you give, the
                faster we can route you to the right answer.
              </li>
              <li>
                <span className="font-semibold text-[#0B1D3A]">3.</span> If
                you share your phone number in the chat, we may send you SMS
                updates about your inquiry.
              </li>
            </ul>
          </div>

          <div className="mt-8 rounded-[20px] border border-[#2563EB]/20 bg-[#F8FAFC] p-6 sm:p-8">
            <h2 className="font-display text-lg font-bold text-[#0B1D3A]">
              SMS messaging consent
            </h2>
            <p className="mt-3 text-[13px] text-[#4A5568] leading-relaxed">
              By providing your phone number through the chat window on this
              page, you agree to receive SMS messages from Adaptation Living
              LLC related to your inquiry, appointment confirmations, and
              service updates. Message frequency varies. Message and data
              rates may apply. Reply <strong>STOP</strong> to unsubscribe at
              any time. Reply <strong>HELP</strong> for help. Consent to
              receive SMS messages is not a condition of any purchase. View
              our{" "}
              <a
                href="/legal"
                className="text-[#2563EB] underline hover:text-[#1D4ED8]"
              >
                Privacy Policy and Terms of Service
              </a>{" "}
              for more information about how we handle your data.
            </p>
          </div>

          <div className="mt-8 text-center text-[12px] text-[#64748B]">
            <p>
              Prefer email? Reach us at{" "}
              <a
                href="mailto:info@adaptationliving.com"
                className="text-[#2563EB] hover:text-[#1D4ED8]"
              >
                info@adaptationliving.com
              </a>
            </p>
            <p className="mt-1">
              Prefer phone? Call us at{" "}
              <a
                href="tel:6232191237"
                className="text-[#2563EB] hover:text-[#1D4ED8]"
              >
                623-219-1237
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* GHL Chat Widget — A2P-compliant widget, loads only on this page */}
      <Script
        id="ghl-chat-widget"
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="69f0893abaf63e9c89e2d5ca"
        data-source="WEB_USER"
        strategy="lazyOnload"
      />
    </main>
  );
}
