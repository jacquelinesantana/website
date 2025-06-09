import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LaptopIcon, ShoppingCartIcon, SmartphoneIcon, ChartLineIcon, TagsIcon, CogIcon } from "lucide-react";
import { handleSendMessageWhatsApp } from "@/lib/handleSendMessageWhatsApp";

export function Services() {
    const [activeTab, setActiveTab] = useState<string>("sites");
    return (
        <section id="servicos" className="py-24 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Nossos Serviços
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Oferecemos soluções completas para sua presença digital, desde
                        websites responsivos até sistemas complexos.
                    </p>
                </div>

                <Tabs
                    defaultValue="sites"
                    className="w-full"
                    onValueChange={setActiveTab}
                >
                    <div className="flex justify-center mb-8">
                        <TabsList className="bg-gray-900/50 p-1">
                            <TabsTrigger
                                value="sites"
                                className={`px-6 py-3 !rounded-button whitespace-nowrap cursor-pointer ${activeTab === "sites" ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" : "text-gray-400"}`}
                            >
                                Websites
                            </TabsTrigger>
                            <TabsTrigger
                                value="sistemas"
                                className={`px-6 py-3 !rounded-button whitespace-nowrap cursor-pointer ${activeTab === "sistemas" ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" : "text-gray-400"}`}
                            >
                                Sistemas
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="sites" className="mt-0">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {
                                [
                                    {
                                        id: 1,
                                        title: "Sites Institucionais",
                                        description: "Apresente sua empresa com elegância e profissionalismo",
                                        icon: <LaptopIcon className="text-purple-400 text-xl" />,
                                        features: [
                                            {
                                                id: 1,
                                                description: "Design responsivo",
                                            },
                                            {
                                                id: 2,
                                                description: "Otimizado para SEO",
                                            },
                                            {
                                                id: 3,
                                                description: "Integração com redes sociais",
                                            },
                                        ],
                                        message: "Olá, quero conhecer mais sobre os serviços de desenvolvimento de sites institucionais."
                                    },
                                    {
                                        id: 2,
                                        title: "E-commerce",
                                        description: "Venda seus produtos online com facilidade",
                                        icon: <ShoppingCartIcon className="text-purple-400 text-xl" />,
                                        features: [
                                            {
                                                id: 1,
                                                description: "Catálogo de produtos",
                                            },
                                            {
                                                id: 2,
                                                description: "Integração com gateways de pagamento",
                                            },
                                            {
                                                id: 3,
                                                description: "Gestão de estoque",
                                            },
                                        ],
                                        message: "Olá, quero conhecer mais sobre os serviços de desenvolvimento de e-commerce."
                                    },
                                    {
                                        id: 3,
                                        title: "Landing Pages",
                                        description: "Páginas otimizadas para conversão",
                                        icon: <SmartphoneIcon className="text-purple-400 text-xl" />,
                                        features: [
                                            {
                                                id: 1,
                                                description: "Design focado em conversão",
                                            },
                                            {
                                                id: 2,
                                                description: "Formulários integrados",
                                            },
                                            {
                                                id: 3,
                                                description: "Análise de desempenho",
                                            },
                                        ],
                                        message: "Olá, quero conhecer mais sobre os serviços de desenvolvimento de landing pages."
                                    }
                                ].map((service) => (
                                    <Card key={service.id} className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                                        <CardHeader>
                                            <div className="w-12 h-12 rounded-full bg-purple-900/50 flex items-center justify-center mb-4">
                                                {service.icon}
                                            </div>
                                            <CardTitle className="text-2xl font-bold text-white">{service.title}</CardTitle>
                                            <CardDescription className="text-gray-400">{service.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-2 text-gray-300">
                                                {service.features.map((feature) => (
                                                    <li key={feature.id} className="flex items-center">
                                                        <i className="fas fa-check text-green-500 mr-2"></i>
                                                        {feature.description}
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                        <CardFooter>
                                            <Button
                                                onClick={() => handleSendMessageWhatsApp(service.message)}
                                                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 !rounded-button whitespace-nowrap cursor-pointer">
                                                Saiba Mais
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="sistemas" className="mt-0">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {
                                [
                                    {
                                        id: 1,
                                        title: "CRM",
                                        description: "Gerencie seus clientes e vendas",
                                        icon: <ChartLineIcon className="text-purple-400 text-xl" />,
                                        features: [
                                            {
                                                id: 1,
                                                description: "Gestão de leads",
                                            },
                                            {
                                                id: 2,
                                                description: "Pipeline de vendas",
                                            },
                                            {
                                                id: 3,
                                                description: "Relatórios personalizados",
                                            },
                                        ],
                                        message: "Olá, quero conhecer mais sobre os serviços de desenvolvimento de CRM."
                                    },
                                    {
                                        id: 2,
                                        title: "ERP",
                                        description: "Integre todos os processos da sua empresa",
                                        icon: <TagsIcon className="text-purple-400 text-xl" />,
                                        features: [
                                            {
                                                id: 1,
                                                description: "Controle financeiro",
                                            },
                                            {
                                                id: 2,
                                                description: "Gestão de estoque",
                                            },
                                            {
                                                id: 3,
                                                description: "Automação de processos",
                                            },
                                        ],
                                        message: "Olá, quero conhecer mais sobre os serviços de desenvolvimento de ERP."
                                    },
                                    {
                                        id: 3,
                                        title: "Sistemas Personalizados",
                                        description: "Soluções sob medida para seu negócio",
                                        icon: <CogIcon className="text-purple-400 text-xl" />,
                                        features: [
                                            {
                                                id: 1,
                                                description: "Análise de requisitos",
                                            },
                                            {
                                                id: 2,
                                                description: "Desenvolvimento ágil",
                                            },
                                            {
                                                id: 3,
                                                description: "Suporte contínuo",
                                            },
                                        ],
                                        message: "Olá, quero conhecer mais sobre os serviços de desenvolvimento de sistemas personalizados."
                                    }
                                ].map((service) => (
                                    <Card key={service.id} className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                                        <CardHeader>
                                            <div className="w-12 h-12 rounded-full bg-purple-900/50 flex items-center justify-center mb-4">
                                                {service.icon}
                                            </div>
                                            <CardTitle className="text-2xl font-bold text-white">{service.title}</CardTitle>
                                            <CardDescription className="text-gray-400">{service.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-2 text-gray-300">
                                                {service.features.map((feature) => (
                                                    <li key={feature.id} className="flex items-center">
                                                        <i className="fas fa-check text-green-500 mr-2"></i>
                                                        {feature.description}
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                        <CardFooter>
                                            <Button
                                                onClick={() => handleSendMessageWhatsApp(service.message)}
                                                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 !rounded-button whitespace-nowrap cursor-pointer">
                                                Saiba Mais
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section >

        // <div className="bg-gray-100">
        //     <div className="container max-w-5xl mx-auto pt-8">

        //         <h2 id="about" tabIndex={0}
        //             className="w-full p-0.5 my-2 text-4xl font-black leading-tight text-center text-gray-800">
        //             Como podemos te ajudar?
        //         </h2>

        //         <div className="flex flex-wrap">
        //             <div className="w-full lg:w-1/2 p-6">

        //                 <div className="text-gray-600">
        //                     <h3 tabIndex={0} className="text-3xl text-gray-800 font-bold leading-none mb-3">
        //                         Web Site
        //                     </h3>

        //                     <p className="mb-8 text-justify">
        //                         Conecte-se com seu público de forma rápida e eficiente com um website moderno, bonito e totalmente alinhado com a identidade do seu negócio. Desenvolvemos layouts que traduzem a qualidade do seu atendimento, produto ou serviço — tudo pensado para encantar e converter.
        //                     </p>
        //                 </div>

        //                 <div className="text-gray-600">
        //                     <h3 tabIndex={0} className="text-3xl text-gray-800 font-bold leading-none mb-3">
        //                         Planilhas e Gráficos
        //                     </h3>

        //                     <p className="mb-8 text-justify">
        //                         Também criamos dashboards inteligentes, com gráficos interativos alimentados diretamente pelos dados da sua empresa, oferecendo uma visão clara e estratégica para a sua tomada de decisões.
        //                     </p>
        //                 </div>

        //                 <div className="text-gray-600">
        //                     <h3 tabIndex={0} className="text-3xl text-gray-800 font-bold leading-none mb-3">
        //                         Cadastros e Inscrições
        //                     </h3>

        //                     <p className="mb-8 text-justify">
        //                         Conte com funcionalidades como inscrições online, controle de pagamentos, cadastro de clientes e fornecedores. Toda a informação que você precisa, a um clique de distância
        //                     </p>
        //                 </div>
        //             </div>

        //             {/* <div className="w-full sm:w-1/2 p-6"> */}
        //             <div className="hidden lg:inline-flex lg:w-1/2 p-6">
        //                 <img className="object-contain" src="https://i.imgur.com/PP7SfGW.png" alt="" />
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}
