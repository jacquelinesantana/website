import { CodeIcon, PhoneIcon, MailIcon, ClockIcon } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

export function Footer() {
    return (
        <footer className="bg-gray-950 py-16 text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <div className="flex items-center mb-4">
                            <CodeIcon className="text-2xl text-purple-500 mr-2" />
                            <span className="text-xl font-bold">SintoniaTech</span>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Transformando ideias em código desde 2018. Soluções digitais
                            personalizadas para impulsionar seu negócio.
                        </p>
                        {/* <div className="flex space-x-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-colors cursor-pointer"
                            >
                                <FacebookIcon className="text-gray-400" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-colors cursor-pointer"
                            >
                                <InstagramIcon className="text-gray-400" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-colors cursor-pointer"
                            >
                                <LinkedinIcon className="text-gray-400" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-colors cursor-pointer"
                            >
                                <GithubIcon className="text-gray-400" />
                            </a>
                        </div> */}
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Serviços</h3>
                        <ul className="space-y-3">
                            <li>
                                <a className="text-gray-400 hover:text-purple-400 transition-colors">
                                    Websites
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-purple-400 transition-colors">
                                    E-commerce
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-purple-400 transition-colors">
                                    Sistemas
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-purple-400 transition-colors">
                                    Aplicativos
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-purple-400 transition-colors" target="_blank" href="https://github.com/jacquelinesantana/website/blob/main/src/assets/Politica_de_privacidade-SintoniaTech.md">
                                    Politica de Privacidade
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Links Úteis</h3>
                        <ul className="space-y-3">
                            <li>
                                <ScrollLink to="servicos"
                                    className="cursor-pointer text-gray-400 hover:text-purple-400 transition-colors" smooth={true}
                                    duration={500}>Serviços</ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="portfolio"
                                    className="cursor-pointer text-gray-400 hover:text-purple-400 transition-colors" smooth={true}
                                    duration={500}>Portfólio</ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="contato"
                                    className="cursor-pointer text-gray-400 hover:text-purple-400 transition-colors" smooth={true}
                                    duration={500}>Contato</ScrollLink>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Contato</h3>
                        <ul className="space-y-3">
                            {/* <li className="flex items-start">
                                <MapPinIcon className="text-purple-500 mt-1 mr-3" />
                                <span className="text-gray-400">
                                    Av. Paulista, 1000, São Paulo - SP
                                </span>
                            </li> */}
                            <li className="flex items-center">
                                <PhoneIcon className="text-purple-500 mr-3" />
                                <span className="text-gray-400">(11) 98980-9727</span>
                            </li>
                            <li className="flex items-center">
                                <MailIcon className="text-purple-500 mr-3" />
                                <span className="text-gray-400">admin@sintoniatech.online</span>
                            </li>
                            <li className="flex items-center">
                                <ClockIcon className="text-purple-500 mr-3" />
                                <span className="text-gray-400">Seg-Sex: 9h às 18h</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        © 2025 SintoniaTech. Todos os direitos reservados.
                        {/* Desenvolvido por <a href="https://github.com/Yuri-stack" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-500 transition-colors">Yuri</a> e <a href="https://github.com/jacquelinesantana" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-500 transition-colors">Jacque</a>. */}
                    </p>
                    {/* <div className="flex space-x-4">
                        <a
                            href="#"
                            className="text-gray-500 text-sm hover:text-purple-400 transition-colors"
                        >
                            Termos de Uso
                        </a>
                        <a
                            href="#"
                            className="text-gray-500 text-sm hover:text-purple-400 transition-colors"
                        >
                            Política de Privacidade
                        </a>
                        <a
                            href="#"
                            className="text-gray-500 text-sm hover:text-purple-400 transition-colors"
                        >
                            Cookies
                        </a>
                    </div> */}
                </div>
            </div>
        </footer>
    )
}
