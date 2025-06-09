import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";

const devYuri = {
    nome: "Yuri Oliveira",
    url: "https://github.com/Yuri-stack.png",
    texto: "Sou Desenvolvedor Front End com formação em Análise e Desenvolvimento de Sistemas e mais de 4 anos de experiência no desenvolvimento e ensino na área de tecnologia. Ser altamente detalhista e organizado são meus diferenciais para entregas de alta qualidade e valor."
};

const devJacque = {
    nome: "Jacqueline Hernandes",
    url: "https://github.com/jacquelinesantana.png",
    texto: "Desenvolvedora Back-end e Analista de Sistemas, mais de 10 anos de experiência em desenvolvimento web. Minha formação e experiência me permitem avaliar o que é necessário para desenvolver seu site de forma profissional e eficiente, atingindo então as expectativas e objetivos."
};

export function Equip() {
    return (
        <section id="equipe" className="py-24 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Conheça Nossa Equipe
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Devs apaixonados por tecnologia e
                        inovação, prontos para transformar suas ideias em realidade.
                    </p>
                </div>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    className="dev-swiper"
                >
                    <SwiperSlide>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="relative">
                                <div className="relative bg-gray-900 rounded-lg overflow-hidden w-[300px] h-[300px] mx-auto">
                                    <img
                                        src={devYuri.url}
                                        alt={`Desenvolvedor ${devYuri.nome}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold">{devYuri.nome}</h3>
                                <p className="text-purple-400">Desenvolvedor Front-End</p>
                                <p className="text-gray-300">
                                    {devYuri.texto}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="relative">
                                <div className="relative bg-gray-900 rounded-lg overflow-hidden w-[300px] h-[300px] mx-auto">
                                    <img
                                        src={devJacque.url}
                                        alt={`Desenvolvedora ${devJacque.nome}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold">{devJacque.nome}</h3>
                                <p className="text-purple-400">Desenvolvedora Back-End</p>
                                <p className="text-gray-300">{devJacque.texto}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section >
    )
}