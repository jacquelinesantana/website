import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

export function About() {
    return (
        <section id="sobre" className="py-24 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Conheça Nossa Equipe
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Uma equipe de desenvolvedores apaixonados por tecnologia e
                        inovação, prontos para transformar suas ideias em realidade.
                    </p>
                </div>

                <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                    className="dev-swiper"
                >
                    <SwiperSlide>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25"></div>
                                <div className="relative bg-gray-900 rounded-lg overflow-hidden">
                                    <img
                                        src="https://readdy.ai/api/search-image?query=professional%20male%20developer%20working%20on%20computer%20with%20multiple%20screens%2C%20dark%20office%20environment%20with%20purple%20and%20blue%20ambient%20lighting%2C%20focused%20on%20coding%2C%20abstract%20code%20visible%20on%20screens%2C%20high%20quality%20professional%20photo&width=600&height=600&seq=dev1&orientation=squarish"
                                        alt="Desenvolvedor"
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold">Lucas Silva</h3>
                                <p className="text-purple-400">Full-Stack Developer</p>
                                <p className="text-gray-300">
                                    Especialista em desenvolvimento web com mais de 5 anos de
                                    experiência criando soluções robustas e escaláveis.
                                    Apaixonado por código limpo e arquiteturas eficientes.
                                </p>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">Front-end</p>
                                        <div className="w-full bg-gray-800 rounded-full h-2">
                                            <div
                                                className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full"
                                                style={{ width: "95%" }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">Back-end</p>
                                        <div className="w-full bg-gray-800 rounded-full h-2">
                                            <div
                                                className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full"
                                                style={{ width: "90%" }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">UI/UX Design</p>
                                        <div className="w-full bg-gray-800 rounded-full h-2">
                                            <div
                                                className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full"
                                                style={{ width: "85%" }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex space-x-4">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        <i className="fab fa-github text-xl"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        <i className="fab fa-linkedin text-xl"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        <i className="fab fa-twitter text-xl"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25"></div>
                                <div className="relative bg-gray-900 rounded-lg overflow-hidden">
                                    <img
                                        src="https://readdy.ai/api/search-image?query=professional%20female%20developer%20working%20with%20code%2C%20dark%20modern%20office%20with%20purple%20and%20blue%20ambient%20lighting%2C%20focused%20on%20programming%2C%20multiple%20screens%20with%20code%20visible%2C%20high%20quality%20professional%20photo&width=600&height=600&seq=dev2&orientation=squarish"
                                        alt="Desenvolvedora"
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold">Mariana Costa</h3>
                                <p className="text-purple-400">
                                    Back-end & DevOps Specialist
                                </p>
                                <p className="text-gray-300">
                                    Especialista em arquitetura de sistemas e infraestrutura com
                                    foco em performance e segurança. Apaixonada por automação e
                                    soluções escaláveis em nuvem.
                                </p>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">Back-end</p>
                                        <div className="w-full bg-gray-800 rounded-full h-2">
                                            <div
                                                className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full"
                                                style={{ width: "98%" }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">DevOps</p>
                                        <div className="w-full bg-gray-800 rounded-full h-2">
                                            <div
                                                className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full"
                                                style={{ width: "95%" }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">Database</p>
                                        <div className="w-full bg-gray-800 rounded-full h-2">
                                            <div
                                                className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full"
                                                style={{ width: "90%" }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex space-x-4">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        <i className="fab fa-github text-xl"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        <i className="fab fa-linkedin text-xl"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        <i className="fab fa-twitter text-xl"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section >
        // <section className="bg-neutral-900 py-8">
        //     <div className="container max-w-5xl mx-auto m-8">
        //         <h2 id="about" tabIndex={0} className="w-full my-2 text-5xl font-black leading-tight text-center text-neutral-200">
        //             Quem Somos
        //         </h2>

        //         <div className="flex flex-col m-4">
        //             <p className="mt-4 text-xl text-neutral-300 font-bold opacity-75 text-center">
        //                 Transforme sua paixão em resultados online com a TiJacque!
        //             </p>

        //             <p className="mt-4 text-xl text-neutral-300 font-bold opacity-75 text-center">
        //                 Desde 2017, nossa missão tem sido impulsionar negócios como o seu no universo digital. Sabemos o quanto você se dedica à sua empresa — e é exatamente essa paixão que queremos levar para o seu site.
        //             </p>

        //             <p className="mt-4 text-xl text-neutral-300 font-bold opacity-75 text-center">
        //                 Criamos sites e sistemas sob medida, que contam a história do seu negócio de forma autêntica, envolvente e estratégica. Mais do que presença digital, entregamos resultados: sua marca ganhando visibilidade, conectando com pessoas e gerando lucro.
        //             </p>
        //         </div>
        //     </div>
        // </section>
    )
}
