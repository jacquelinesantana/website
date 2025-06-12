import { sendWhatsAppMessage } from "@/lib/sendWhatsAppMessage";

import logo from '@/assets/img/icon_whats.svg';

export function WhatsAppButton() {
    const MESSAGE = "Olá, quero conhecer mais sobre os serviços da Sintonia Tech."

    return (
        <div className="fixed bottom-4 right-4 z-50 flex items-center group">

            <span
                role="tooltip"
                id="whatsapp-tooltip"
                className="mr-2 opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300 bg-green-500 text-white px-3 py-1 rounded-md text-sm whitespace-nowrap"
            >
                Fale conosco
            </span>

            <button
                aria-label="Falar no WhatsApp"
                aria-describedby="whatsapp-tooltip"
                onClick={() => sendWhatsAppMessage(MESSAGE)}
                className="flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-colors duration-300"
            >
                <img
                    className="w-10 h-10"
                    alt="Logo do WhatsApp"
                    src={logo} />
            </button>
        </div>
    )
}