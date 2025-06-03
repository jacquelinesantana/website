import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

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
                                "https://readdy.ai/api/search-image?query=modern%20fashion%20e-commerce%20website%20interface%20with%20purple%20and%20dark%20theme%2C%20showing%20clothing%20products%20grid%20layout%2C%20clean%20and%20professional%20design%20with%20shopping%20cart%20icon%2C%20high%20quality%20mockup%20on%20laptop%20screen&width=600&height=400&seq=port1&orientation=landscape",
                            description:
                                "Desenvolvimento completo de loja virtual com integração de pagamentos e gestão de estoque.",
                        },
                        {
                            id: 2,
                            title: "Dashboard Analítico",
                            category: "Sistema",
                            image:
                                "https://readdy.ai/api/search-image?query=data%20analytics%20dashboard%20with%20dark%20theme%2C%20purple%20and%20blue%20graphs%2C%20charts%20and%20statistics%20visualization%2C%20modern%20UI%20design%20with%20clean%20layout%2C%20business%20intelligence%20interface%20on%20computer%20screen&width=600&height=400&seq=port2&orientation=landscape",
                            description:
                                "Sistema de análise de dados com visualizações interativas e relatórios personalizados.",
                        },
                        {
                            id: 3,
                            title: "App de Delivery",
                            category: "Aplicativo",
                            image:
                                "https://readdy.ai/api/search-image?query=food%20delivery%20mobile%20app%20interface%20with%20dark%20theme%20and%20purple%20accents%2C%20showing%20restaurant%20listings%2C%20order%20tracking%20and%20payment%20options%2C%20modern%20UI%20design%20on%20smartphone%20screen&width=600&height=400&seq=port3&orientation=landscape",
                            description:
                                "Aplicativo mobile para pedidos online com rastreamento em tempo real.",
                        },
                        {
                            id: 4,
                            title: "Site Corporativo",
                            category: "Website",
                            image:
                                "https://readdy.ai/api/search-image?query=elegant%20corporate%20website%20with%20dark%20theme%20and%20purple%20gradient%20elements%2C%20professional%20business%20layout%20with%20services%20section%2C%20team%20profiles%20and%20contact%20form%2C%20modern%20web%20design%20on%20desktop%20screen&width=600&height=400&seq=port4&orientation=landscape",
                            description:
                                "Website institucional com design moderno e otimizado para conversão.",
                        },
                        {
                            id: 5,
                            title: "Sistema de Gestão",
                            category: "Sistema",
                            image:
                                "https://readdy.ai/api/search-image?query=business%20management%20system%20interface%20with%20dark%20theme%20and%20purple%20elements%2C%20showing%20project%20management%20dashboard%2C%20task%20tracking%20and%20resource%20allocation%2C%20professional%20UI%20design%20on%20laptop%20screen&width=600&height=400&seq=port5&orientation=landscape",
                            description:
                                "ERP personalizado para gestão completa de processos empresariais.",
                        },
                        {
                            id: 6,
                            title: "Landing Page",
                            category: "Website",
                            image:
                                "https://readdy.ai/api/search-image?query=conversion-focused%20landing%20page%20with%20dark%20theme%20and%20purple%20call-to-action%20buttons%2C%20product%20showcase%20with%20features%20list%2C%20testimonials%20section%2C%20clean%20and%20modern%20web%20design%20on%20desktop%20screen&width=600&height=400&seq=port6&orientation=landscape",
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
                                        {project.description} Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Nullam at justo vel nisi
                                        fermentum tincidunt. Mauris eget magna eget nunc varius
                                        ultrices.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
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
                                    </Button>
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button
                        variant="outline"
                        className="border-white/30 hover:bg-white/10 !rounded-button whitespace-nowrap cursor-pointer"
                    >
                        Ver Todos os Projetos
                    </Button>
                </div>
            </div>
        </section >
    )
}