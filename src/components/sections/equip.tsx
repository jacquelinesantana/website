import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";

import imgYuri from "@/assets/img/dev_yuri.png";
import imgJacque from "@/assets/img/dev_jacque.jpeg";

const devYuri = {
    nome: "Yuri Oliveira",
    url: imgYuri,
    texto: "Sou Desenvolvedor Front End com formação em Análise e Desenvolvimento de Sistemas e mais de 4 anos de experiência no desenvolvimento e ensino na área de tecnologia. Ser altamente detalhista e organizado são meus diferenciais para entregas de alta qualidade e valor."
};

const devJacque = {
    nome: "Jacqueline Hernandes",
    url: imgJacque,
    texto: "Desenvolvedora Back-end e Analista de Sistemas, mais de 10 anos de experiência em desenvolvimento web. Minha formação e experiência me permitem avaliar o que é necessário para desenvolver seu site de forma profissional e eficiente, atingindo então as expectativas e objetivos."
};

export function Equip() {
    return (
        <section
            id="equipe"
            className="py-24 bg-black text-white"
            aria-label="Seção da Equipe"
            role="region"
            itemScope
            itemType="http://schema.org/Organization"
        >
            <div className="container mx-auto px-4">
                <header className="text-center mb-16">
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        itemProp="name"
                    >
                        Conheça Nossa Equipe
                    </h2>
                    <p
                        className="text-gray-400 max-w-2xl mx-auto"
                        itemProp="description"
                    >
                        Devs apaixonados por tecnologia e
                        inovação, prontos para transformar suas ideias em realidade.
                    </p>
                </header>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    // autoplay={{
                    //     delay: 5000,
                    //     disableOnInteraction: false,
                    // }}
                    className="dev-swiper"
                    aria-label="Carrossel de membros da equipe"
                >
                    <SwiperSlide>
                        <article
                            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                            itemScope
                            itemType="http://schema.org/Person"
                            itemProp="equip"
                        >
                            <div className="relative">
                                <div className="relative bg-gray-900 rounded-lg overflow-hidden w-[300px] h-[300px] mx-auto">
                                    <img
                                        src={devYuri.url}
                                        alt={`Desenvolvedor ${devYuri.nome}`}
                                        className="w-full h-full object-cover"
                                        itemProp="image"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <div className="space-y-6 mr-10">
                                <h3
                                    className="text-2xl font-bold"
                                    itemProp="name"
                                >
                                    {devYuri.nome}
                                </h3>
                                <p
                                    className="text-purple-400"
                                    itemProp="jobTitle"
                                >
                                    Desenvolvedor Front-End
                                </p>
                                <p
                                    className="text-gray-300"
                                    itemProp="description"
                                >
                                    {devYuri.texto}
                                </p>
                            </div>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article
                            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                            itemScope
                            itemType="http://schema.org/Person"
                            itemProp="equip"
                        >
                            <div className="relative">
                                <div className="relative bg-gray-900 rounded-lg overflow-hidden w-[300px] h-[300px] mx-auto">
                                    <img
                                        src={devJacque.url}
                                        alt={`Desenvolvedora ${devJacque.nome}`}
                                        className="w-full h-full object-cover"
                                        itemProp="image"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <div className="space-y-6 mr-10">
                                <h3
                                    className="text-2xl font-bold"
                                    itemProp="name"
                                >
                                    {devJacque.nome}
                                </h3>
                                <p
                                    className="text-purple-400"
                                    itemProp="jobTitle"
                                >
                                    Desenvolvedora Back-End
                                </p>
                                <p
                                    className="text-gray-300"
                                    itemProp="description"
                                >
                                    {devJacque.texto}
                                </p>
                            </div>
                        </article>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}