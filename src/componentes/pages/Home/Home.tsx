import Banner from '../../banner/Banner'
import Quemsomos from '../../quemsomos/Quemsomos'
import Comoajudar from '../../comoajudar/Comoajudar'

function Home() {
  return (
    <>
      
    <Banner />
    <Quemsomos />
    <Comoajudar />

    



    

   

    <section className="gradient w-full mx-auto text-center pt-6 pb-12 bg-neutral-900 ">
      
      

      <h3 className="my-4 text-3xl font-extrabold text-lime-500">
        Chama no WhatsApp!
      </h3>

      <button
        className="mx-auto lg:mx-0 hover:underline bg-neutral-300 text-green-900 font-bold rounded my-6 py-4 px-8 shadow-lg"
        onClick={() => {
          const phoneNumber = "11989809727";
          const message = "Quero conhecer mais sobre seus trabalhos de site e sistemas";
          const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
          window.open(url, "_blank");        
        }}  
      >
        Chamar!
      </button>
    </section>
    </>
  )
}

export default Home
