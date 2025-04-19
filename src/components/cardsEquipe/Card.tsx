import { Car } from "lucide-react"
import Cards from "../ui/Cards"

function Card() {
  return (
    <>
        <section className="border-b py-8 bg-gray-300 ">
            <div className="container max-w-5xl mx-auto m-8">
                <h3 tabIndex={0} id="equipe"
                className="w-full my-2 text-5xl font-black leading-tight text-center text-gray-800">
                Nossa equipe
                </h3>
                <div className="flex flex-wrap ">
                    <Cards foto="https://i.imgur.com/5oriiK9.png" nome="Jacqueline Hernandes" texto="Desenvolvedora Back-end e Analista de Sistemas, mais de 10 anos de experiência em desenvolvimento web. Minha formação e experiência me permitem avaliar o que é necessário para desenvolver seu site de forma profissional e eficiente, atingindo então as expectativas e objetivos." />
                    <Cards foto="https://i.imgur.com/5oriiK9.png" nome="Yuri Oliveira" texto="Sou Desenvolvedor Front End com formação em Análise e Desenvolvimento de Sistemas e mais de 4 anos de experiência no desenvolvimento e ensino na área de tecnologia. Ser altamente detalhista e organizado são meus diferenciais para entregas de alta qualidade e valor." />
                </div>
            </div>
       </section>
    </>
  )
}

export default Card
