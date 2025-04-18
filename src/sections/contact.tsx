export default function Contact() {

    function handleWhatsApp(): void {
        const PHONE_NUMBER = "11989809727"
        const MESSAGE = "Quero conhecer mais sobre seus trabalhos de site e sistemas";
        const URL = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;
        window.open(URL, "_blank");
    }

    return (
        <section className="flex flex-col place-items-center py-8 bg-neutral-900">
            <h3 tabIndex={0} id='contact' className="my-4 text-3xl font-extrabold text-lime-500">
                Chama no WhatsApp!
            </h3>

            <button tabIndex={0} id='contact'
                className="bg-neutral-300 text-green-900 font-bold rounded my-6 py-4 px-8 cursor-pointer"
                onClick={handleWhatsApp}>
                Comece agora!
            </button>
        </section>
    )
}
