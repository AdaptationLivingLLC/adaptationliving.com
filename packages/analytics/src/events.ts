// Analytics event helpers — push to GTM dataLayer

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || !window.dataLayer) return;
  window.dataLayer.push({ event: name, ...params });
}

export function trackConversion(
  conversionId: string,
  params?: Record<string, unknown>,
) {
  if (typeof window === "undefined" || !window.dataLayer) return;
  window.dataLayer.push({
    event: "conversion",
    send_to: conversionId,
    ...params,
  });
}
