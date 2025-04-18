export default function Banner() {
    return (
        <section className="relative h-[450px] md:h-[350px]">
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center md:bg-fixed md:bg-contain"
                style={{ backgroundImage: "url('https://i.imgur.com/dPfG7i4.gif')" }}
            >
            </div>

            <div className="relative z-10 flex items-center justify-center h-full">
                <h1 id="#inicio" className="text-4xl text-lime-400 font-bold text-center md:text-6xl">
                    Sites e Sistemas Personalizados para Impulsionar Seu Negócio
                </h1>
            </div>
        </section>
    )
}
