import { Button } from "@/components/ui/button";
import { sendWhatsAppMessage } from "@/lib/sendWhatsAppMessage";

import backgroundImage from "@/assets/img/img_contact.jpg"

export function Contact() {
    const MESSAGE = "Olá, quero conhecer mais sobre os serviços da Sintonia Tech."

    return (
        <section id="contato" className="py-24 relative text-white">
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="absolute inset-0 bg-black/70"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Pronto para Transformar sua Ideia em Realidade?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Vamos trabalhar juntos para criar a solução digital perfeita para
                        o seu negócio.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            onClick={() => sendWhatsAppMessage(MESSAGE)}
                            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg !rounded-button whitespace-nowrap cursor-pointer">
                            Entre em Contato
                        </Button>

                    </div>
                </div>
            </div>
        </section>
    )
}