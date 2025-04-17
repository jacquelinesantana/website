import { useState } from "react";

function Navbar() {

    
    const [open, setOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
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

        
        <button
            className="md:hidden focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              {open ? (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 5h14a1 1 0 100-2H3a1 1 0 000 2zm0 6h14a1 1 0 100-2H3a1 1 0 000 2zm0 6h14a1 1 0 100-2H3a1 1 0 000 2z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
          <nav
          className={`${
            open ? "block" : "hidden"
          } md:flex md:items-center md:justify-between pb-4 md:pb-0`}
          role="navigation"
        >
          <ul className="flex flex-col md:flex-row md:space-x-4">
            <li key="quemsomos">
              <a href="#quemsomos"
                      className="block px-4 py-2 text-sm font-medium rounded-lg hover:bg-neutral-700 dark:hover:bg-neutral-700">
                        Quem somos
              </a>  
            </li>
            <li key="servicos">
              <a href="#servicos"
                      className="block px-4 py-2 text-sm font-medium rounded-lg hover:bg-neutral-700 dark:hover:bg-neutral-700">
                        Serviços
              </a>  
            </li>
            <li key="contato">
              <a href="#whatsapp"
                      className="block px-4 py-2 text-sm font-medium rounded-lg hover:bg-neutral-700 dark:hover:bg-neutral-700">
                        Contato
              </a>  
            </li>
            {/* <li key="">
              <a href=""
                      className="block px-4 py-2 text-sm font-medium rounded-lg hover:bg-neutral-700 dark:hover:bg-neutral-700">
                        Treinamentos
              </a>  
            </li> */}

            

            
          </ul>
        </nav>    

      </div>
    </nav>
    </>
  )
}

export default Navbar
