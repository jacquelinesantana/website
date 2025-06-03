export function Footer() {
    return (
        <footer className="bg-gray-950 py-16 text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <div className="flex items-center mb-4">
                            <i className="fas fa-code text-2xl text-purple-500 mr-2"></i>
                            <span className="text-xl font-bold">DevDuo</span>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Transformando ideias em código desde 2020. Soluções digitais
                            personalizadas para impulsionar seu negócio.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-colors cursor-pointer"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-colors cursor-pointer"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-colors cursor-pointer"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-colors cursor-pointer"
                            >
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Serviços</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-purple-400 transition-colors"
                                >
                                    Websites
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-purple-400 transition-colors"
                                >
                                    E-commerce
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-purple-400 transition-colors"
                                >
                                    Sistemas
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-purple-400 transition-colors"
                                >
                                    Aplicativos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-purple-400 transition-colors"
                                >
                                    Consultoria
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Links Úteis</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-purple-400 transition-colors"
                                >
                                    Sobre Nós
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-purple-400 transition-colors"
                                >
                                    Portfólio
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-purple-400 transition-colors"
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-purple-400 transition-colors"
                                >
                                    Carreiras
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-purple-400 transition-colors"
                                >
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Contato</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <i className="fas fa-map-marker-alt text-purple-500 mt-1 mr-3"></i>
                                <span className="text-gray-400">
                                    Av. Paulista, 1000, São Paulo - SP
                                </span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-phone-alt text-purple-500 mr-3"></i>
                                <span className="text-gray-400">(11) 99999-9999</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-envelope text-purple-500 mr-3"></i>
                                <span className="text-gray-400">contato@devduo.com.br</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-clock text-purple-500 mr-3"></i>
                                <span className="text-gray-400">Seg-Sex: 9h às 18h</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        © 2025 DevDuo. Todos os direitos reservados.
                    </p>
                    <div className="flex space-x-4">
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
                    </div>
                </div>
            </div>
        </footer>

        // <footer className="mt-5">
        //     <div className="container mx-auto mt-0 px-8">
        //         <div className="w-full flex flex-col md:flex-row py-6">
        //             <div className="flex-1 mb-6">
        //                 <a className="text-lime-300 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
        //                     TiJacque
        //                 </a>
        //             </div>

        //             <div className="flex-1">
        //                 <p className="uppercase font-extrabold text-neutral-800 md:mb-6">Social</p>
        //                 <ul className="list-reset mb-6">
        //                     <li className="mt-2 inline-block mr-2 md:block md:mr-0">
        //                         <a href="#" className="font-light no-underline hover:underline text-neutral-700 hover:text-lime-300">Facebook</a>
        //                     </li>
        //                     <li className="mt-2 inline-block mr-2 md:block md:mr-0">
        //                         <a href="#" className="font-light no-underline hover:underline text-neutral-700 hover:text-lime-300">Linkedin</a>
        //                     </li>
        //                     <li className="mt-2 inline-block mr-2 md:block md:mr-0">
        //                         <a href="#" className="font-light no-underline hover:underline text-neutral-700 hover:text-lime-300">Twitter</a>
        //                     </li>
        //                 </ul>
        //             </div>

        //             <div className="flex-1">
        //                 <p className="uppercase font-extrabold text-neutral-800 md:mb-6">Company</p>
        //                 <ul className="list-reset mb-6">
        //                     <li className="mt-2 inline-block mr-2 md:block md:mr-0">
        //                         <a href="#" className="font-light no-underline hover:underline text-neutral-700 hover:text-lime-300">Artigos</a>
        //                     </li>
        //                     <li className="mt-2 inline-block mr-2 md:block md:mr-0">
        //                         <a href="#" className="font-light no-underline hover:underline text-neutral-700 hover:text-lime-300">Sobre</a>
        //                     </li>
        //                     <li className="mt-2 inline-block mr-2 md:block md:mr-0">
        //                         <a href="#" className="font-light no-underline hover:underline text-neutral-700 hover:text-lime-300">Contato</a>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </footer >
    )
}
