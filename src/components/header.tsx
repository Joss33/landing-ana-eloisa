import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export const Header = () => {

  return (
    <>
      <nav className="w-full bg-pigment-indigo-900 py-5">
        <div className="flex items-center mx-auto max-w-[122rem] px-3 gap-x-4">
          {/* <a href="#">
            <FontAwesomeIcon icon={['fab', 'instagram']} className="w-10 h-10 md:w-5 md:h-5 text-white" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={['fab', 'facebook']} className="w-10 h-10 md:w-5 md:h-5 text-white" />
          </a> */}
          <a href="https://www.linkedin.com/in/anaeloisazunigabonfante?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
            <FontAwesomeIcon icon={['fab', 'linkedin']} className="w-10 h-10 md:w-5 md:h-5 text-white" />
          </a>
         {/*  <a href="#">
            <FontAwesomeIcon icon={['fab', 'tiktok']} className="w-10 h-10 md:w-5 md:h-5 text-white" />
          </a> */}
        </div>
      </nav>
      <header>
        <nav className="bg-white p-5 w-full">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-[122rem]">
            <Link to="/" className="flex items-center">
              <img src="logos/logo@2x.png" className="w-auto h-20" alt="Ana loaisa Logo" />
            </Link>
            
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a href="/#ana-eloisa" className="block text-20 px-6 py-1 text-pigment-indigo-900 hover:bg-pigment-indigo-100 rounded-20 lg:px-6">Ana Eloisa</a>
                </li>
                <li>
                    <a href="/#que-es-pennials" className="block text-20 px-6 py-1 text-pigment-indigo-900 hover:bg-pigment-indigo-100 rounded-20 lg:px-6">¿Que es Perennials?</a>
                </li>
                <li>
                    <a href="/#mis-libros" className="block text-20 px-6 py-1 text-pigment-indigo-900 hover:bg-pigment-indigo-100 rounded-20 lg:px-6">Mis libros</a>
                </li>
                <li>
                    <a href="/#contactame" className="block text-20 px-6 py-1 text-pigment-indigo-900 hover:bg-pigment-indigo-100 rounded-20 lg:px-6">Contáctame</a>
                </li>
                {/* <li>
                    <a href="/movimiento-perennial" className="block text-20 px-6 py-1 text-pigment-indigo-900 hover:bg-pigment-indigo-100 rounded-20 lg:px-6">Movimiento Perennial</a>
                </li> */}
              </ul>
            </div>

          </div>
        </nav>
      </header>
    </>
  )
}
