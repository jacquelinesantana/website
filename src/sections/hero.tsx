import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <>
            <section
                id="inicio"
                className="relative min-h-screen flex items-center overflow-hidden text-white"
            >
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url('https://readdy.ai/api/search-image?query=futuristic%20digital%20landscape%20with%20code%20elements%2C%20purple%20and%20blue%20neon%20lights%2C%20abstract%20technology%20concept%20with%20floating%20data%20streams%20and%20circuit%20patterns%2C%20dark%20background%20with%20vibrant%20tech%20elements%2C%20high%20resolution%20digital%20art&width=1440&height=800&seq=hero1&orientation=landscape')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
                </div>

                <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <div className="inline-block px-4 py-2 bg-purple-900/50 backdrop-blur-sm rounded-full text-sm">
                                Transformando ideias em código
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                                Desenvolvimento{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                                    Descomplicado
                                </span>
                            </h1>
                            <p className="text-lg text-gray-300 max-w-xl">
                                Uma dupla de desenvolvedores apaixonados por criar soluções
                                digitais que impulsionam o seu negócio. Sites, sistemas e
                                aplicações com design moderno e código limpo.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg !rounded-button whitespace-nowrap cursor-pointer">
                                    Iniciar Projeto
                                </Button>
                                <Button
                                    variant="outline"
                                    className="border-white/30 hover:bg-white/10 text-white px-8 py-6 text-lg !rounded-button whitespace-nowrap cursor-pointer"
                                >
                                    Ver Portfólio
                                </Button>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <img
                                src="https://readdy.ai/api/search-image?query=astronaut%20in%20space%20suit%20floating%20with%20laptop%20and%20holographic%20screens%20displaying%20code%2C%20digital%20art%20with%20vibrant%20purple%20and%20blue%20lighting%2C%20space%20background%20with%20earth%20visible%2C%20futuristic%20technology%20concept&width=600&height=600&seq=hero2&orientation=squarish"
                                alt="Desenvolvedor espacial"
                                className="w-full h-auto rounded-lg shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 py-16 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="space-y-2">
                            <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                                50+
                            </p>
                            <p className="text-gray-300">Projetos Entregues</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                                98%
                            </p>
                            <p className="text-gray-300">Clientes Satisfeitos</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                                5+
                            </p>
                            <p className="text-gray-300">Anos de Experiência</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                                24/7
                            </p>
                            <p className="text-gray-300">Suporte Técnico</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
