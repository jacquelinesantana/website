import Card from "../components/card"

export default function Equip() {

    const devJacque = {
        nome: "Jacqueline Hernandes",
        foto: "https://i.imgur.com/5oriiK9.png",
        texto: "Desenvolvedora Back-end e Analista de Sistemas, mais de 10 anos de experiência em desenvolvimento web. Minha formação e experiência me permitem avaliar o que é necessário para desenvolver seu site de forma profissional e eficiente, atingindo então as expectativas e objetivos."
    }

    const devYuri = {
        nome: "Yuri Oliveira",
        foto: "https://i.imgur.com/5oriiK9.png",
        texto: "Sou Desenvolvedor Front End com formação em Análise e Desenvolvimento de Sistemas e mais de 4 anos de experiência no desenvolvimento e ensino na área de tecnologia. Ser altamente detalhista e organizado são meus diferenciais para entregas de alta qualidade e valor."
    }


    return (
        <section className="border-b py-8 bg-gray-300 ">
            <div className="container max-w-5xl mx-auto m-8">
                <h3 tabIndex={0} id="equipe"
                    className="w-full my-2 text-5xl font-black leading-tight text-center text-gray-800">
                    Nossa equipe
                </h3>

                <div className="flex flex-wrap">
                    <Card nome={devJacque.nome} foto={devJacque.foto} texto={devJacque.texto} />
                    <Card nome={devYuri.nome} foto={devYuri.foto} texto={devYuri.texto} />
                </div>

            </div>
        </section>
    )
}


