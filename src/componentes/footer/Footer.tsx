import React from 'react'

function Footer() {
  return (
    <>
      {/*<!--Footer-->*/}
    <footer className="bg-white ">
      <div className="container mx-auto mt-8 px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1 mb-6">
            <a
              className="text-orange-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="#"
            >
              <svg
                className="h-6 w-6 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z" />
              </svg>
              TiJacque
            </a>
          </div>

          
          <div className="flex-1">
            <p className="uppercase font-extrabold text-gray-500 md:mb-6">Social</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >Facebook</a
                >
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >Linkedin</a
                >
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >Twitter</a
                >
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase font-extrabold text-gray-500 md:mb-6">
              Company
            </p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >Artigos</a
                >
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >Sobre</a
                >
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >Contato</a
                >
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
