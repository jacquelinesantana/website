
function Navbar() {
  return (
    <>
    
    <nav id="header" className="w-full z-30 top-0 bg-black text-white py-1 lg:py-6">
      <div
        className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6"
      >
        <div className="pl-4 flex items-center">
          <a
            className="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="#"
          >
            <img src="https://i.imgur.com/5pqbLjH.png" className="w-46 inline-block fill-current" alt="" />
            
          </a>
        </div>

        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            className="flex text-white items-center px-3 py-2 border rounded text-gray-200 border-gray-600 hover:text-gray-800 hover:border-green-200 appearance-none focus:outline-none"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a
                className="inline-block py-2 px-4 text-gray-200 hover:text-green-200 font-bold no-underline"
                href="#"
                >Sobre</a
              >
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-gray-200 no-underline hover:text-green-200 hover:text-underline py-2 px-4"
                href="#"
                >Quem Somos</a
              >
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-gray-200 no-underline hover:text-green-200 hover:text-underline py-2 px-4"
                href="#"
                >Contato</a
              >
            </li>
          </ul>
          <button
            id="navAction"
            className="mx-auto lg:mx-0 hover:underline text-green-300 font-extrabold hover:text-lime-200 rounded mt-4 lg:mt-0 py-4 px-8 shadow opacity-75"
            onClick={() => {
              window.open("https://wa.me/111989809727?text=Quero%20conhecer%20mais%20sobre%20seus%20trabalhos%20de%20site%20e%20sistemas", '_blank')
            }}
          >
            WhatsApp
          </button>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
