export default function Services() {
    return (
        <div className="bg-gray-100">
            <div className="container max-w-5xl mx-auto pt-8">

                <h2 id="about" tabIndex={0}
                    className="w-full p-0.5 my-2 text-4xl font-black leading-tight text-center text-gray-800">
                    Como podemos te ajudar?
                </h2>

                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 p-6">

                        <div className="text-gray-600">
                            <h3 tabIndex={0} className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                Web Site
                            </h3>

                            <p className="mb-8 text-justify">
                                Conecte-se com seu público de forma rápida e eficiente com um website moderno, bonito e totalmente alinhado com a identidade do seu negócio. Desenvolvemos layouts que traduzem a qualidade do seu atendimento, produto ou serviço — tudo pensado para encantar e converter.
                            </p>
                        </div>

                        <div className="text-gray-600">
                            <h3 tabIndex={0} className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                Planilhas e Gráficos
                            </h3>

                            <p className="mb-8 text-justify">
                                Também criamos dashboards inteligentes, com gráficos interativos alimentados diretamente pelos dados da sua empresa, oferecendo uma visão clara e estratégica para a sua tomada de decisões.
                            </p>
                        </div>

                        <div className="text-gray-600">
                            <h3 tabIndex={0} className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                Cadastros e Inscrições
                            </h3>

                            <p className="mb-8 text-justify">
                                Conte com funcionalidades como inscrições online, controle de pagamentos, cadastro de clientes e fornecedores. Toda a informação que você precisa, a um clique de distância
                            </p>
                        </div>
                    </div>

                    {/* <div className="w-full sm:w-1/2 p-6"> */}
                    <div className="hidden lg:inline-flex lg:w-1/2 p-6">
                        <img className="object-contain" src="https://i.imgur.com/PP7SfGW.png" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}
