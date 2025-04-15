
function Comoajudar() {
  return (
    <>
      <section className="bg-gray-100 border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h2
          className="w-full my-2 text-5xl font-black leading-tight text-center text-gray-800"
        >
          Como podemos te ajudar?
        </h2>
        <div className="w-full mb-4">
          <div
            className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
          ></div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Web Site
            </h3>
            <p className="text-gray-600 mb-8">
            Conecte-se com seu público de forma rápida e eficiente com um website moderno, bonito e totalmente alinhado com a identidade do seu negócio. Desenvolvemos layouts que traduzem a qualidade do seu atendimento, produto ou serviço — tudo pensado para encantar e converter.
              <br />
              Mas não paramos por aí<br />
              Também criamos dashboards inteligentes, com gráficos interativos alimentados diretamente pelos dados da sua empresa, oferecendo uma visão clara e estratégica para a sua tomada de decisões.
              <br />
              Precisa de mais praticidade?<br />
              Conte com funcionalidades como inscrições online, controle de pagamentos, cadastro de clientes e fornecedores. Toda a informação que você precisa, a um clique de distância
              <br />
              {/*Consulte também nossos sistemas de inscrição para eventos e sistemas de emissão de certificados.<br />
                */}<br />
              Faça um orçamento sem compromisso:  
              <a className="text-orange-500 underline" href="https://undraw.co/"
                > WhatsApp </a>
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <img src="https://i.imgur.com/PP7SfGW.png" alt="" />
          </div>
        </div>
    
        
      </div>
    </section>
    </>
  )
}

export default Comoajudar
