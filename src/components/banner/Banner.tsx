import "./Banner.css";

function Banner() {
  
 
  return (
    <>
      <section className="relative h-[350px] overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center md:bg-fixed md:bg-contain "
        style={{
          backgroundImage: "url('https://i.imgur.com/dPfG7i4.gif')",
          backgroundAttachment: "fixed ", // o segredo do efeito parallax aqui
        }}
      />
      <div className="relative z-10 flex items-center justify-center h-full ">
        <h1 className="text-4xl md:text-6xl text-lime-400 font-bold text-center">
        Sites e Sistemas Personalizados para Impulsionar Seu Negócio
        </h1>
      </div>
    </section>
    </>
  )
}

export default Banner
