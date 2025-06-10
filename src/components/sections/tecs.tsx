import {
    Code2,
    Server,
    FileJson, Binary,
    Blocks, Workflow
} from 'lucide-react';

export function Tecs() {
    return (
        <section
            className="py-16 bg-gradient-to-b from-purple-950/80 to-black text-white"
            aria-label="Tecnologias Utilizadas"
            role="region"
            itemScope
            itemType="http://schema.org/ItemList"
        >
            <div className="container mx-auto px-4">
                <header className="text-center mb-12">
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        itemProp="name"
                    >
                        Tecnologias que Utilizamos
                    </h2>
                    <p
                        className="text-gray-400 max-w-2xl mx-auto"
                        itemProp="description"
                    >
                        Trabalhamos com as tecnologias mais modernas e eficientes do
                        mercado para entregar soluções de alta qualidade.
                    </p>
                </header>

                <div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
                    role="list"
                    aria-label="Lista de tecnologias"
                >
                    {[
                        { name: "React", Icon: Code2 },
                        { name: "Node.js", Icon: Server },
                        { name: "JavaScript", Icon: FileJson },
                        { name: "PHP", Icon: Binary },
                        { name: "WordPress", Icon: Blocks },
                        { name: "Laravel", Icon: Workflow },
                        // { name: "CSS3", Icon: Paintbrush },
                        // { name: "HTML5", Icon: FileCode },
                        // { name: "Python", Icon: Braces },
                        // { name: "AWS", Icon: Cloud },
                        // { name: "Docker", Icon: Container },
                        // { name: "Git", Icon: GitBranch },
                    ].map((tech, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center"
                            role="listitem"
                            itemScope
                            itemType="http://schema.org/Technology"
                            itemProp="itemListElement"
                        >
                            <div
                                className="w-16 h-16 rounded-full bg-gray-900/80 flex items-center justify-center mb-3"
                                aria-hidden="true"
                            >
                                <tech.Icon
                                    className="w-8 h-8 text-purple-400"
                                    aria-hidden="true"
                                />
                            </div>
                            <p
                                className="text-gray-300"
                                itemProp="name"
                            >
                                {tech.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}