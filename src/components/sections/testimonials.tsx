import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Testimonials() {
    return (
        <section
            className="py-24 bg-black text-white"
            aria-label="Depoimentos de Clientes"
            role="region"
            itemScope
            itemType="http://schema.org/Review"
        >
            <div className="container mx-auto px-4">
                <header className="text-center mb-16">
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        itemProp="name"
                    >
                        O que Nossos Clientes Dizem
                    </h2>
                    <p
                        className="text-gray-400 max-w-2xl mx-auto"
                        itemProp="description"
                    >
                        A satisfação dos nossos clientes é a nossa maior recompensa.
                        Confira o que eles têm a dizer sobre nossos serviços.
                    </p>
                </header>

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
                    role="region"
                    aria-label="Carrossel de depoimentos"
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
                        <SwiperSlide
                            key={index}
                            role="group"
                            aria-label={`Depoimento de ${testimonial.name}`}
                        >
                            <article
                                className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 h-full flex flex-col"
                                itemScope
                                itemType="http://schema.org/Review"
                            >
                                <div className="flex-grow">
                                    <div
                                        className="flex mb-4"
                                        itemProp="reviewRating"
                                        itemScope
                                        itemType="http://schema.org/Rating"
                                    >
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <i
                                                key={star}
                                                className="fas fa-star text-yellow-500 mr-1"
                                                aria-hidden="true"
                                            ></i>
                                        ))}
                                        <meta itemProp="ratingValue" content="5" />
                                        <meta itemProp="bestRating" content="5" />
                                    </div>
                                    <p
                                        className="text-gray-300 italic mb-6"
                                        itemProp="reviewBody"
                                    >
                                        "{testimonial.quote}"
                                    </p>
                                </div>
                                <footer
                                    className="flex items-center"
                                    itemProp="author"
                                    itemScope
                                    itemType="http://schema.org/Person"
                                >
                                    <img
                                        src={testimonial.avatar}
                                        alt={`Foto de ${testimonial.name}`}
                                        className="w-12 h-12 rounded-full mr-4 object-cover"
                                        itemProp="image"
                                        loading="lazy"
                                    />
                                    <div>
                                        <p
                                            className="font-medium"
                                            itemProp="name"
                                        >
                                            {testimonial.name}
                                        </p>
                                        <p
                                            className="text-sm text-gray-400"
                                            itemProp="jobTitle"
                                        >
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </footer>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
