import { MessageCircle } from "lucide-react";

interface FloatingChatButtonProps {
  locale: string;
}

export function FloatingChatButton({ locale }: FloatingChatButtonProps) {
  const href = locale === "es" ? "/es/chat" : "/chat";
  const label = locale === "es" ? "Chatear ahora" : "Chat Now";
  const aria =
    locale === "es"
      ? "Abrir la pagina de chat con Adaptation Living"
      : "Open the Adaptation Living chat page";

  return (
    <a
      href={href}
      aria-label={aria}
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-5 py-3 text-white shadow-[0_10px_30px_rgba(37,99,235,0.45)] hover:bg-[#1D4ED8] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1D3A] transition-all duration-200"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="text-[12px] font-bold uppercase tracking-[0.14em]">
        {label}
      </span>
    </a>
  );
}
