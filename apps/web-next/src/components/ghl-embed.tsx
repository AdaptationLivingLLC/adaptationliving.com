"use client";

import { useState } from "react";

interface GhlEmbedProps {
  formId?: string;
  calendarId?: string;
  className?: string;
  height?: string;
  allowMedia?: boolean;
}

export function GhlEmbed({
  formId,
  calendarId,
  className = "",
  height = "600px",
  allowMedia = false,
}: GhlEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const src = formId
    ? `https://api.leadconnectorhq.com/widget/form/${formId}`
    : calendarId
      ? `https://api.leadconnectorhq.com/widget/booking/${calendarId}`
      : null;

  if (!src) return null;

  return (
    <div className={`relative w-full ${className}`} style={{ minHeight: height }}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center text-text-muted">
          Loading...
        </div>
      )}
      <iframe
        src={src}
        style={{ width: "100%", height, border: "none" }}
        onLoad={() => setLoaded(true)}
        title={formId ? "Contact Form" : "Book a Call"}
        sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        {...(allowMedia ? { allow: "camera; microphone" } : {})}
      />
    </div>
  );
}
