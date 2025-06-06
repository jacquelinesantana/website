import { Button } from "@/components/ui/button";
import backgroundImage from "@/assets/img/img_contact.jpg"

export function Contact() {

    // function handleWhatsApp(): void {
    //     const PHONE_NUMBER = "11989809727"
    //     const MESSAGE = "Quero conhecer mais sobre seus trabalhos de site e sistemas";
    //     const URL = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;
    //     window.open(URL, "_blank");
    // }

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
                        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg !rounded-button whitespace-nowrap cursor-pointer">
                            Chama no WhatsApp!
                        </Button>

                    </div>
                </div>
            </div>
        </section>
        // <section className="flex flex-col place-items-center py-8 bg-neutral-900">
        //     <h3 tabIndex={0} id='contact' className="my-4 text-3xl font-extrabold text-lime-500">
        //         Chama no WhatsApp!
        //     </h3>

        //     <button tabIndex={0} id='contact'
        //         className="bg-neutral-300 text-green-900 font-bold rounded my-6 py-4 px-8 cursor-pointer"
        //         onClick={handleWhatsApp}>
        //         Comece agora!
        //     </button>
        // </section>
    )
}
