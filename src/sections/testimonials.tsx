import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

export function Testimonials() {
    return (
        <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        O que Nossos Clientes Dizem
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A satisfação dos nossos clientes é a nossa maior recompensa.
                        Confira o que eles têm a dizer sobre nossos serviços.
                    </p>
                </div>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    className="testimonial-swiper"
                >
                    {[
                        {
                            name: "Carlos Mendes",
                            role: "CEO, TechSolutions",
                            quote:
                                "A equipe da DevDuo superou todas as nossas expectativas. Entregaram nosso projeto antes do prazo e com qualidade excepcional.",
                            avatar:
                                "https://readdy.ai/api/search-image?query=professional%20business%20man%20portrait%20with%20neutral%20background%2C%20corporate%20headshot%2C%20high%20quality%20professional%20photo&width=100&height=100&seq=test1&orientation=squarish",
                        },
                        {
                            name: "Ana Ferreira",
                            role: "Marketing Director, FashionStore",
                            quote:
                                "Nosso e-commerce nunca funcionou tão bem. As vendas aumentaram 40% após a implementação das melhorias sugeridas pela equipe.",
                            avatar:
                                "https://readdy.ai/api/search-image?query=professional%20business%20woman%20portrait%20with%20neutral%20background%2C%20corporate%20headshot%2C%20high%20quality%20professional%20photo&width=100&height=100&seq=test2&orientation=squarish",
                        },
                        {
                            name: "Ricardo Alves",
                            role: "Founder, StartupX",
                            quote:
                                "O sistema desenvolvido revolucionou nossos processos internos. A automação nos economiza horas de trabalho todos os dias.",
                            avatar:
                                "https://readdy.ai/api/search-image?query=young%20professional%20man%20portrait%20with%20neutral%20background%2C%20startup%20founder%20headshot%2C%20high%20quality%20professional%20photo&width=100&height=100&seq=test3&orientation=squarish",
                        },
                        {
                            name: "Juliana Costa",
                            role: "COO, HealthTech",
                            quote:
                                "Profissionais extremamente dedicados e competentes. Resolveram problemas complexos com soluções elegantes e eficientes.",
                            avatar:
                                "https://readdy.ai/api/search-image?query=professional%20business%20woman%20portrait%20with%20neutral%20background%2C%20corporate%20headshot%2C%20high%20quality%20professional%20photo&width=100&height=100&seq=test4&orientation=squarish",
                        },
                    ].map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 h-full flex flex-col">
                                <div className="flex-grow">
                                    <div className="flex mb-4">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <i
                                                key={star}
                                                className="fas fa-star text-yellow-500 mr-1"
                                            ></i>
                                        ))}
                                    </div>
                                    <p className="text-gray-300 italic mb-6">
                                        "{testimonial.quote}"
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full mr-4 object-cover"
                                    />
                                    <div>
                                        <p className="font-medium">{testimonial.name}</p>
                                        <p className="text-sm text-gray-400">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section >

    )
}
