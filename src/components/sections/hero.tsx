import { useEffect, useState } from "react";
import backgroundImage from "@/assets/img/img_hero.jpg"

export function Hero() {
    const [currentText, setCurrentText] = useState<string>('');
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [charIndex, setCharIndex] = useState<number>(0);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);

    const TEXTS = [
        "Transformando ideias em código",
        "Criando soluções digitais inovadoras",
        "Desenvolvendo o futuro da web",
        "Construindo experiências únicas",
        "Programando sonhos em realidade"
    ];

    useEffect(() => {
        const timeout = setTimeout(() => {
            const current = TEXTS[currentIndex];

            if (isDeleting) {
                setCurrentText(current.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);

                if (charIndex === 0) {
                    setIsDeleting(false);
                    setCurrentIndex((currentIndex + 1) % TEXTS.length);
                }
            } else {
                setCurrentText(current.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);

                if (charIndex === current.length) {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, currentIndex, TEXTS]);


    return (
        <>
            <section
                id="inicio"
                className="relative min-h-screen flex items-center overflow-hidden text-white"
                aria-label="Seção Principal"
                role="banner"
                itemScope
                itemType="http://schema.org/WebPageElement"
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
                    aria-label="Imagem de fundo da seção principal"
                >
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"
                        aria-hidden="true"
                    ></div>
                </div>

                <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
                    <div className="grid grid-cols-1 gap-8 items-center text-center">
                        <div className="space-y-6 mx-auto max-w-3xl">
                            <h1
                                className="text-4xl md:text-6xl font-bold leading-tight"
                                itemProp="headline"
                                aria-live="polite"
                            >
                                {currentText}
                            </h1>
                            <p
                                className="text-lg text-gray-300 mx-auto"
                                itemProp="description"
                            >
                                Devs apaixonados por criar soluções digitais que impulsionam o seu negócio.
                                Sites, sistemas e aplicações com design moderno e código limpo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 py-16 bg-black"
                aria-label="Métricas e Conquistas"
                role="complementary"
                itemScope
                itemType="http://schema.org/ItemList"
            >
                <div className="container mx-auto px-4">
                    <div
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                        role="list"
                    >
                        <div
                            className="space-y-2"
                            role="listitem"
                            itemScope
                            itemType="http://schema.org/Statistic"
                        >
                            <p
                                className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
                                itemProp="value"
                                aria-label="Mais de 50 projetos concluídos"
                            >
                                50+
                            </p>
                            <p
                                className="text-gray-300"
                                itemProp="name"
                            >
                                Projetos Concluídos
                            </p>
                        </div>
                        <div
                            className="space-y-2"
                            role="listitem"
                            itemScope
                            itemType="http://schema.org/Statistic"
                        >
                            <p
                                className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
                                itemProp="value"
                                aria-label="98 porcento de clientes satisfeitos"
                            >
                                98%
                            </p>
                            <p
                                className="text-gray-300"
                                itemProp="name"
                            >
                                Clientes Satisfeitos
                            </p>
                        </div>
                        <div
                            className="space-y-2"
                            role="listitem"
                            itemScope
                            itemType="http://schema.org/Statistic"
                        >
                            <p
                                className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
                                itemProp="value"
                                aria-label="Mais de 5 anos de experiência"
                            >
                                5+
                            </p>
                            <p
                                className="text-gray-300"
                                itemProp="name"
                            >
                                Anos de Experiência
                            </p>
                        </div>
                        <div
                            className="space-y-2"
                            role="listitem"
                            itemScope
                            itemType="http://schema.org/Statistic"
                        >
                            <p
                                className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
                                itemProp="value"
                                aria-label="Suporte técnico 8 por 5"
                            >
                                8/5
                            </p>
                            <p
                                className="text-gray-300"
                                itemProp="name"
                            >
                                Suporte Técnico
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}