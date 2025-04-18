
function Comoajudar() {
  return (
    <>
      <section className="bg-gray-100 border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h2 tabIndex={0} id="servicos"
          className="w-full my-2 text-5xl font-black leading-tight text-center text-gray-800">
          Como podemos te ajudar?
        </h2>
        

        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 tabIndex={0} className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Web Site
            </h3>
            <p className="text-gray-600 mb-8">
            Conecte-se com seu público de forma rápida e eficiente com um website moderno, bonito e totalmente alinhado com a identidade do seu negócio. Desenvolvemos layouts que traduzem a qualidade do seu atendimento, produto ou serviço — tudo pensado para encantar e converter.
              <br />
              
              <h3 tabIndex={0}  className="text-3xl text-gray-800 mt-6 font-bold leading-none mb-3">
              Planilhas e Gráficos
              </h3>
              Também criamos dashboards inteligentes, com gráficos interativos alimentados diretamente pelos dados da sua empresa, oferecendo uma visão clara e estratégica para a sua tomada de decisões.
              <br />
              <h3 tabIndex={0}  className="text-3xl text-gray-800 mt-6 font-bold leading-none mb-3">
              Cadastros e Inscrições
              </h3>
              Conte com funcionalidades como inscrições online, controle de pagamentos, cadastro de clientes e fornecedores. Toda a informação que você precisa, a um clique de distância
              <br />
              {/*Consulte também nossos sistemas de inscrição para eventos e sistemas de emissão de certificados.<br />
                */}<br />
              Faça um orçamento sem compromisso:  
              <a tabIndex={0} className="text-lime-900 underline" href="https://wa.me/11989809727?text=Quero%20conhecer%20mais%20sobre%20seus%20trabalhos%20de%20site%20e%20sistemas"
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
