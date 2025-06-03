import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Services() {
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
                            <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-full bg-purple-900/50 flex items-center justify-center mb-4">
                                        <i className="fas fa-laptop text-purple-400 text-xl"></i>
                                    </div>
                                    <CardTitle>Sites Institucionais</CardTitle>
                                    <CardDescription className="text-gray-400">
                                        Apresente sua empresa com elegância e profissionalismo
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-center">
                                            <i className="fas fa-check text-green-500 mr-2"></i>
                                            Design responsivo
                                        </li>
                                        <li className="flex items-center">
                                            <i className="fas fa-check text-green-500 mr-2"></i>
                                            Otimizado para SEO
                                        </li>
                                        <li className="flex items-center">
                                            <i className="fas fa-check text-green-500 mr-2"></i>
                                            Integração com redes sociais
                                        </li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 !rounded-button whitespace-nowrap cursor-pointer">
                                        Saiba Mais
                                    </Button>
                                </CardFooter>
                            </Card>

                            <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-full bg-purple-900/50 flex items-center justify-center mb-4">
                                        <i className="fas fa-shopping-cart text-purple-400 text-xl"></i>
                                    </div>
                                    <CardTitle>E-commerce</CardTitle>
                                    <CardDescription className="text-gray-400">
                                        Venda seus produtos online com facilidade
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-center">
                                            <i className="fas fa-check text-green-500 mr-2"></i>
                                            Catálogo de produtos
                                        </li>
                                        <li className="flex items-center">
                                            <i className="fas fa-check text-green-500 mr-2"></i>
                                            Integração com gateways de pagamento
                                        </li>
                                        <li className="flex items-center">
                                            <i className="fas fa-check text-green-500 mr-2"></i>
                                            Gestão de estoque
                                        </li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 !rounded-button whitespace-nowrap cursor-pointer">
                                        Saiba Mais
                                    </Button>
                                </CardFooter>
                            </Card>

                            <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-full bg-purple-900/50 flex items-center justify-center mb-4">
                                        <i className="fas fa-mobile-alt text-purple-400 text-xl"></i>
                                    </div>
                                    <CardTitle>Landing Pages</CardTitle>
                                    <CardDescription className="text-gray-400">
                                        Páginas otimizadas para conversão
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-center">
                                            <i className="fas fa-check text-green-500 mr-2"></i>
                                            Design focado em conversão
                                        </li>
                                        <li className="flex items-center">
                                            <i className="fas fa-check text-green-500 mr-2"></i>
                                            Formulários integrados
                                        </li>
                                        <li className="flex items-center">
                                            <i className="fas fa-check text-green-500 mr-2"></i>
                                            Análise de desempenho
                                        </li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 !rounded-button whitespace-nowrap cursor-pointer">
                                        Saiba Mais
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="sistemas" className="mt-0">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-full bg-purple-900/50 flex items-center justify-center mb-4">
                                        <i className="fas fa-chart-line text-purple-400 text-xl"></i>
                                    </div>
                                    <CardTitle>CRM</CardTitle>
                                    <CardDescription className="text-gray-400">
                                        Gerencie seus clientes e vendas
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-center">
                                            <i className="fas fa-check text-green-500 mr-2"></i>
                                            Gestão de leads
                                        </li>
                                        <li className="flex items-center">
                                            <i className="fas fa-check text-green-500 mr-2"></i>
                                            Pipeline de vendas
                                        </li>
                                        <li className="flex items-center">
                                            <i className="fas fa-check text-green-500 mr-2"></i>
                                            Relatórios personalizados
                                        </li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 !rounded-button whitespace-nowrap cursor-pointer">
                                        Saiba Mais
                                    </Button>
                                </CardFooter>
                            </Card>

                            <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-full bg-purple-900/50 flex items-center justify-center mb-4">
                                        <i className="fas fa-tasks text-purple-400 text-xl"></i>
                                    </div>
                                    <CardTitle>ERP</CardTitle>
                                    <CardDescription className="text-gray-400">
                                        Integre todos os processos da sua empresa
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-center">
                                            <i className="fas fa-check text-green-500 mr-2"></i>
                                            Controle financeiro
                                        </li>
                                        <li className="flex items-center">
                                            <i className="fas fa-check text-green-500 mr-2"></i>
                                            Gestão de estoque
                                        </li>
                                        <li className="flex items-center">
                                            <i className="fas fa-check text-green-500 mr-2"></i>
                                            Automação de processos
                                        </li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 !rounded-button whitespace-nowrap cursor-pointer">
                                        Saiba Mais
                                    </Button>
                                </CardFooter>
                            </Card>

                            <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-full bg-purple-900/50 flex items-center justify-center mb-4">
                                        <i className="fas fa-cogs text-purple-400 text-xl"></i>
                                    </div>
                                    <CardTitle>Sistemas Personalizados</CardTitle>
                                    <CardDescription className="text-gray-400">
                                        Soluções sob medida para seu negócio
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-center">
                                            <i className="fas fa-check text-green-500 mr-2"></i>
                                            Análise de requisitos
                                        </li>
                                        <li className="flex items-center">
                                            <i className="fas fa-check text-green-500 mr-2"></i>
                                            Desenvolvimento ágil
                                        </li>
                                        <li className="flex items-center">
                                            <i className="fas fa-check text-green-500 mr-2"></i>
                                            Suporte contínuo
                                        </li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 !rounded-button whitespace-nowrap cursor-pointer">
                                        Saiba Mais
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>

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
