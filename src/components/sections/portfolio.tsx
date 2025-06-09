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
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Nosso Portfólio
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Conheça alguns dos nossos projetos mais recentes e descubra como
                        podemos transformar suas ideias em realidade.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            id: 1,
                            title: "E-commerce de Moda",
                            category: "E-commerce",
                            image:
                                imgEcommerce,
                            description:
                                "Desenvolvimento completo de loja virtual com integração de pagamentos e gestão de estoque.",
                        },
                        {
                            id: 2,
                            title: "Dashboard Analítico",
                            category: "Sistema",
                            image:
                                imgDash,
                            description:
                                "Sistema de análise de dados com visualizações interativas e relatórios personalizados.",
                        },
                        {
                            id: 3,
                            title: "App de Delivery",
                            category: "Aplicativo",
                            image:
                                imgDelivery,
                            description:
                                "Aplicativo mobile para pedidos online com rastreamento em tempo real.",
                        },
                        {
                            id: 4,
                            title: "Site Corporativo",
                            category: "Website",
                            image:
                                imgScorporativo,
                            description:
                                "Website institucional com design moderno e otimizado para conversão.",
                        },
                        {
                            id: 5,
                            title: "Sistema de Gestão",
                            category: "Sistema",
                            image:
                                imgSgestao,
                            description:
                                "ERP personalizado para gestão completa de processos empresariais.",
                        },
                        {
                            id: 6,
                            title: "Landing Page",
                            category: "Website",
                            image:
                                imgLanding,
                            description:
                                "Página de conversão para produto digital com alta taxa de conversão.",
                        },
                    ].map((project) => (
                        <Dialog key={project.id}>
                            <DialogTrigger asChild>
                                <div className="group relative overflow-hidden rounded-lg cursor-pointer">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <p className="text-purple-400 text-sm mb-2">
                                            {project.category}
                                        </p>
                                        <h3 className="text-xl font-bold mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            Clique para ver detalhes
                                        </p>
                                    </div>
                                </div>
                            </DialogTrigger>
                            <DialogContent className="bg-gray-900 border-gray-800 text-white">
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
                                        alt={project.title}
                                        className="w-full h-auto rounded-lg mb-4"
                                    />
                                    <h4 className="text-lg font-medium mb-2">
                                        Sobre o Projeto
                                    </h4>
                                    <p className="text-gray-300 mb-4">
                                        {project.description}
                                    </p>
                                    {/* <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-3 py-1 bg-purple-900/50 rounded-full text-sm">
                                            React
                                        </span>
                                        <span className="px-3 py-1 bg-purple-900/50 rounded-full text-sm">
                                            Node.js
                                        </span>
                                        <span className="px-3 py-1 bg-purple-900/50 rounded-full text-sm">
                                            MongoDB
                                        </span>
                                        <span className="px-3 py-1 bg-purple-900/50 rounded-full text-sm">
                                            Tailwind CSS
                                        </span>
                                    </div>
                                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 !rounded-button whitespace-nowrap cursor-pointer">
                                        Ver Projeto Completo
                                    </Button> */}
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>

                {/* <div className="text-center mt-12">
                    <Button
                        variant="outline"
                        className="border-white/30 hover:bg-white/10 !rounded-button whitespace-nowrap cursor-pointer"
                    >
                        Ver Todos os Projetos
                    </Button>
                </div> */}
            </div>
        </section >
    )
}