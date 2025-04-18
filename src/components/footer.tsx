export default function Footer() {
    return (
        <footer className="mt-5">
            <div className="container mx-auto mt-0 px-8">
                <div className="w-full flex flex-col md:flex-row py-6">
                    <div className="flex-1 mb-6">
                        <a className="text-lime-300 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                            TiJacque
                        </a>
                    </div>

                    <div className="flex-1">
                        <p className="uppercase font-extrabold text-neutral-800 md:mb-6">Social</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="font-light no-underline hover:underline text-neutral-700 hover:text-lime-300">Facebook</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="font-light no-underline hover:underline text-neutral-700 hover:text-lime-300">Linkedin</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="font-light no-underline hover:underline text-neutral-700 hover:text-lime-300">Twitter</a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex-1">
                        <p className="uppercase font-extrabold text-neutral-800 md:mb-6">Company</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="font-light no-underline hover:underline text-neutral-700 hover:text-lime-300">Artigos</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="font-light no-underline hover:underline text-neutral-700 hover:text-lime-300">Sobre</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="font-light no-underline hover:underline text-neutral-700 hover:text-lime-300">Contato</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer >
    )
}
