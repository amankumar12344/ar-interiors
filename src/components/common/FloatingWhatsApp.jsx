import React, { useState } from "react";
import { X } from "lucide-react";
import { CONTACT_INFO } from "../../data/contactInfo";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsappUrl = CONTACT_INFO.getWhatsappUrl();

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex flex-col items-end gap-2.5 font-sans select-none">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="relative max-w-xs bg-[#1A1815] text-[#F5F2EB] border border-[#BF9C60]/40 rounded-xl shadow-2xl p-3.5 pr-8 text-xs backdrop-blur-md animate-fadeIn">
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Close tooltip"
            className="absolute top-2.5 right-2.5 text-[#C7BFB3] hover:text-[#DFBA73] transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-serif text-[#DFBA73] font-medium tracking-wide text-sm">
              AR Interiors Studio
            </span>
          </div>
          <p className="text-[#C7BFB3] leading-relaxed">
            Planning a new space? Chat directly with our principal architect on WhatsApp.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#DFBA73] hover:text-[#F4E3BA] tracking-wider uppercase underline underline-offset-4"
          >
            Start Conversation &rarr;
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping -z-10 group-hover:opacity-100"></span>
        <svg
          className="w-7 h-7 fill-current drop-shadow-sm group-hover:rotate-6 transition-transform"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.586 1.772.84 2.791.84 3.185 0 5.768-2.587 5.768-5.766.001-3.18-2.582-5.766-5.768-5.766zm9.969 5.766c0 5.519-4.481 10-10 10-1.748 0-3.385-.45-4.819-1.242l-5.181 1.355 1.378-5.034c-.879-1.488-1.378-3.224-1.378-5.079 0-5.519 4.481-10 10-10s10 4.481 10 10zm-5.467 2.593c-.092-.153-.339-.244-.707-.428-.368-.184-2.179-1.076-2.517-1.199-.338-.123-.584-.184-.83.184-.246.368-.953 1.199-1.168 1.445-.215.246-.43.277-.798.093-.368-.184-1.555-.573-2.962-1.828-1.096-.977-1.836-2.184-2.051-2.553-.215-.368-.023-.567.161-.75.166-.165.368-.43.552-.645.184-.215.246-.368.369-.614.123-.246.061-.46-.031-.645-.092-.184-.83-2.001-1.137-2.742-.299-.721-.603-.623-.83-.635l-.707-.012c-.246 0-.645.092-.983.46-.338.368-1.29 1.26-1.29 3.073 0 1.813 1.321 3.565 1.505 3.811.184.246 2.599 3.968 6.297 5.566.88.381 1.567.608 2.102.778.884.281 1.689.241 2.324.146.709-.106 2.179-.89 2.486-1.749.307-.86.307-1.597.215-.75-.092-.153-.338-.244-.706-.428z" />
        </svg>
        <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
        </span>
      </a>
    </div>
  );
}