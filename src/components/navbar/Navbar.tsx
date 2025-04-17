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
            <li key="quemsomos">
              <a href="#quemsomos"
                      className="block px-4 py-2 text-sm font-medium rounded-lg hover:bg-neutral-700 dark:hover:bg-neutral-700">
                        Como te ajudamos
              </a>  
            </li>
            <li key="quemsomos">
              <a href="#quemsomos"
                      className="block px-4 py-2 text-sm font-medium rounded-lg hover:bg-neutral-700 dark:hover:bg-neutral-700">
                        Contato
              </a>  
            </li>
            <li key="quemsomos">
              <a href="#quemsomos"
                      className="block px-4 py-2 text-sm font-medium rounded-lg hover:bg-neutral-700 dark:hover:bg-neutral-700">
                        Treinamentos
              </a>  
            </li>

            

            <li className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                Mais
                <svg
                  className={`ml-1 transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414L10 13.414l-4.707-4.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {dropdownOpen && (
                <section
                  className="absolute right-0 mt-2 w-screen  max-w-sm bg-neutral-900 dark:bg-neutral-700 shadow-md rounded-lg z-50"
                  role="menu"
                >
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 tx-lime-400">
                    {[
                      {
                        title: "Artigos",
                        desc: "Dicas de programação",
                        iconPath:
                          "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
                      },
                      
                      {
                        title: "Analytics",
                        desc: "See your stats",
                        iconPath:
                          "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z",
                      },
                    ].map((item, index) => (
                      <li key={index}>
                        <a
                          href="https://www.linkedin.com/feed/update/urn:li:activity:7316101445710233600"
                          className="flex items-start p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          <div className="p-3 text-white bg-neutral-500 rounded-lg">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              viewBox="0 0 24 24"
                              className="w-4 h-4 md:w-6 md:h-6"
                            >
                              <path d={item.iconPath} />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="font-semibold">{item.title}</p>
                            <p className="text-sm">{item.desc}</p>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </li>
          </ul>
        </nav>    

      </div>
    </nav>
    </>
  )
}

export default Navbar
