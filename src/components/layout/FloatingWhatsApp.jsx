import { WhatsAppIcon } from "../icons/AppIcons";

export default function FloatingWhatsApp({ whatsappLink }) {
  return (
            <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-4 right-4 z-[999] flex items-center gap-2 rounded-full bg-green-500 px-3.5 py-2.5 text-white shadow-2xl transition hover:scale-105 hover:bg-green-600 sm:bottom-5 sm:right-5 sm:px-4 sm:py-3"
      >
        <WhatsAppIcon className="h-5 w-5 text-white" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
  );
}
