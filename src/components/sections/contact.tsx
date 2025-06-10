import { Button } from "@/components/ui/button";
import { sendWhatsAppMessage } from "@/lib/sendWhatsAppMessage";

import backgroundImage from "@/assets/img/img_contact.jpg"

export function Contact() {
    const MESSAGE = "Olá, quero conhecer mais sobre os serviços da Sintonia Tech."

    return (
        <section
            id="contato"
            className="py-24 relative text-white"
            aria-label="Seção de Contato"
            role="region"
        >
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
                role="img"
                aria-label="Imagem de fundo da seção de contato"
            >
                <div className="absolute inset-0 bg-black/70" aria-hidden="true"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h2
                        className="text-3xl md:text-5xl font-bold mb-6"
                        itemProp="name"
                    >
                        Pronto para Transformar sua Ideia em Realidade?
                    </h2>
                    <p
                        className="text-xl text-gray-300 mb-8"
                        itemProp="description"
                    >
                        Vamos trabalhar juntos para criar a solução digital perfeita para
                        o seu negócio.
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        role="group"
                        aria-label="Opções de contato"
                    >
                        <Button
                            onClick={() => sendWhatsAppMessage(MESSAGE)}
                            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg !rounded-button whitespace-nowrap cursor-pointer"
                            aria-label="Enviar mensagem no WhatsApp"
                        >
                            Entre em Contato
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}