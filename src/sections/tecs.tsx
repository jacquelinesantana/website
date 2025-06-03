export function Tecs() {
    return (
        <section className="py-16 bg-gradient-to-b from-purple-950/80 to-black text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Tecnologias que Utilizamos
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Trabalhamos com as tecnologias mais modernas e eficientes do
                        mercado para entregar soluções de alta qualidade.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {[
                        { name: "React", icon: "fab fa-react" },
                        { name: "Node.js", icon: "fab fa-node-js" },
                        { name: "JavaScript", icon: "fab fa-js" },
                        { name: "HTML5", icon: "fab fa-html5" },
                        { name: "CSS3", icon: "fab fa-css3-alt" },
                        { name: "PHP", icon: "fab fa-php" },
                        { name: "WordPress", icon: "fab fa-wordpress" },
                        { name: "Python", icon: "fab fa-python" },
                        { name: "AWS", icon: "fab fa-aws" },
                        { name: "Docker", icon: "fab fa-docker" },
                        { name: "Git", icon: "fab fa-git-alt" },
                        { name: "Laravel", icon: "fab fa-laravel" },
                    ].map((tech, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-gray-900/80 flex items-center justify-center mb-3">
                                <i className={`${tech.icon} text-3xl text-purple-400`}></i>
                            </div>
                            <p className="text-gray-300">{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}