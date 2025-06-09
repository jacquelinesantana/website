import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import imgEcommerce from '@/assets/img/img_ecommerce.jpg'
import imgDash from '@/assets/img/img_dash.jpg'
import imgDelivery from '@/assets/img/img_delivery.jpg'
import imgScorporativo from '@/assets/img/img_scorporativo.jpg'
import imgSgestao from '@/assets/img/img_sgestao.jpg'
import imgLanding from '@/assets/img/img_landing.jpg'

export function Portfolio() {
    return (
        <section
            id="portfolio"
            className="py-24 bg-gradient-to-b from-black to-purple-950/80 text-white"
            aria-label="Portfólio de Projetos"
            role="region"
            itemScope
            itemType="http://schema.org/CollectionPage"
        >
            <div className="container mx-auto px-4">
                <header className="text-center mb-16">
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        itemProp="name"
                    >
                        Nosso Portfólio
                    </h2>
                    <p
                        className="text-gray-400 max-w-2xl mx-auto"
                        itemProp="description"
                    >
                        Conheça alguns dos nossos projetos mais recentes e descubra como
                        podemos transformar suas ideias em realidade.
                    </p>
                </header>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    role="list"
                    aria-label="Lista de projetos"
                >
                    {[
                        {
                            id: 1,
                            title: "E-commerce de Moda",
                            category: "E-commerce",
                            image: imgEcommerce,
                            description: "Desenvolvimento completo de loja virtual com integração de pagamentos e gestão de estoque.",
                        },
                        {
                            id: 2,
                            title: "Dashboard Analítico",
                            category: "Sistema",
                            image: imgDash,
                            description: "Sistema de análise de dados com visualizações interativas e relatórios personalizados.",
                        },
                        {
                            id: 3,
                            title: "App de Delivery",
                            category: "Aplicativo",
                            image: imgDelivery,
                            description: "Aplicativo mobile para pedidos online com rastreamento em tempo real.",
                        },
                        {
                            id: 4,
                            title: "Site Corporativo",
                            category: "Website",
                            image: imgScorporativo,
                            description: "Website institucional com design moderno e otimizado para conversão.",
                        },
                        {
                            id: 5,
                            title: "Sistema de Gestão",
                            category: "Sistema",
                            image: imgSgestao,
                            description: "ERP personalizado para gestão completa de processos empresariais.",
                        },
                        {
                            id: 6,
                            title: "Landing Page",
                            category: "Website",
                            image: imgLanding,
                            description: "Página de conversão para produto digital com alta taxa de conversão.",
                        },
                    ].map((project) => (
                        <Dialog key={project.id}>
                            <DialogTrigger asChild>
                                <article
                                    className="group relative overflow-hidden rounded-lg cursor-pointer"
                                    role="listitem"
                                    itemScope
                                    itemType="http://schema.org/CreativeWork"
                                    aria-label={`Projeto: ${project.title}`}
                                >
                                    <img
                                        src={project.image}
                                        alt={`Imagem do projeto ${project.title}`}
                                        className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                        itemProp="image"
                                        loading="lazy"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"
                                        aria-hidden="true"
                                    ></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <p
                                            className="text-purple-400 text-sm mb-2"
                                            itemProp="genre"
                                        >
                                            {project.category}
                                        </p>
                                        <h3
                                            className="text-xl font-bold mb-2"
                                            itemProp="name"
                                        >
                                            {project.title}
                                        </h3>
                                        <p
                                            className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            aria-hidden="true"
                                        >
                                            Clique para ver detalhes
                                        </p>
                                    </div>
                                </article>
                            </DialogTrigger>
                            <DialogContent
                                className="bg-gray-900 border-gray-800 text-white"
                                role="dialog"
                                aria-modal="true"
                            >
                                <DialogHeader>
                                    <DialogTitle className="text-2xl">
                                        {project.title}
                                    </DialogTitle>
                                    <DialogDescription className="text-gray-400">
                                        {project.category}
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="mt-4">
                                    <img
                                        src={project.image}
                                        alt={`Visualização detalhada do projeto ${project.title}`}
                                        className="w-full h-auto rounded-lg mb-4"
                                        loading="lazy"
                                    />
                                    <h4
                                        className="text-lg font-medium mb-2"
                                        itemProp="headline"
                                    >
                                        Sobre o Projeto
                                    </h4>
                                    <p
                                        className="text-gray-300 mb-4"
                                        itemProp="description"
                                    >
                                        {project.description}
                                    </p>
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </div>
        </section>
    )
}