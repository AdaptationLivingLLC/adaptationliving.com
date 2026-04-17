"use client";

import { useEffect, useRef } from "react";

// Mounts the GHL prospecting widget inside our own container so it lives
// within our layout instead of being positioned by a global script.
//
// Data contract:
//   - GHL ships widget-embed.js which looks for <script data-widget-id="..."></script>
//     and injects the widget next to / inside that script element.
//   - React strips raw <script> tags from JSX, so we create the script in
//     useEffect and append it to our ref'd container. The widget then renders
//     inside this container on every client navigation.
//
// Re-mount safety:
//   - We check for an existing script to avoid double-mount on fast refresh,
//     strict-mode double invoke, or locale switches.

export function GhlProspectingWidget({
  widgetId,
  minHeight = 500,
}: {
  widgetId: string;
  minHeight?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = containerRef.current;
    if (!host) return;
    if (host.querySelector(`script[data-widget-id="${widgetId}"]`)) return;

    const script = document.createElement("script");
    script.src =
      "https://services.leadconnectorhq.com/prospecting/client/widget-embed.js";
    script.setAttribute("data-widget-id", widgetId);
    script.async = true;
    host.appendChild(script);
  }, [widgetId]);

  return (
    <div
      ref={containerRef}
      className="w-full"
      style={{ minHeight }}
      aria-label="Free SEO and marketing grader"
    />
  );
}
