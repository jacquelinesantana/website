export function handleSendMessageWhatsApp(message: string): void {
    const PHONE_NUMBER = "5511989809727"

    const URL = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(URL, "_blank");
}