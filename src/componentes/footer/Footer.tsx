
function Footer() {
  return (
    <>
      {/*<!--Footer-->*/}
    <footer className="bg-black">
      <div className="container mx-auto mt-0 px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1 mb-6">
            <a
              className="text-lime-300 no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
              
              TiJacque
            </a>
          </div>

          
          <div className="flex-1">
            <p className="uppercase font-extrabold text-neutral-300 md:mb-6">Social</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a tabIndex={0} 
                  href="#"
                  className="font-light no-underline hover:underline text-neutral-200 hover:text-lime-300"
                  >Facebook</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a tabIndex={0} 
                  href="#"
                  className="font-light no-underline hover:underline text-neutral-200 hover:text-lime-300"
                  >Linkedin</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a tabIndex={0} 
                  href="#"
                  className="font-light no-underline hover:underline text-neutral-200 hover:text-lime-300"
                  >Twitter</a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase font-extrabold text-neutral-300 md:mb-6">
              Company
            </p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a tabIndex={0}  title="Serviços"
                  href="#servicos"
                  className="font-light no-underline hover:underline text-neutral-200 hover:text-lime-300"
                  >Serviços</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a tabIndex={0}  title="sobre nos"
                  href="#quemsomos"
                  className="font-light no-underline hover:underline text-neutral-200 hover:text-lime-300"
                  >Sobre</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a tabIndex={0} title="Contato por whatsapp"
                  
                  className="font-light no-underline hover:underline text-neutral-200 hover:text-lime-300"
                  onClick={() => {
                    const phoneNumber = "11989809727";
                    const message = "Quero conhecer mais sobre seus trabalhos de site e sistemas";
                    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                    window.open(url, "_blank");        
                  }} 
                  >Contato</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
