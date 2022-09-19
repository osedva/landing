import React, { useState } from 'react';
import  logo  from '../assets/logo.png'
import { Link } from 'react-scroll';




export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-blue-100 mb-3 fixed w-full">
      <CotenidoNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen &&
        <MobileMenu>
          {navLinks}
        </MobileMenu>}
    </div>
  );
};

const pages = ['Inicio', 'Perfil', 'Estudios', 'Experiencia', 'Portafolio', 'Contacto'];
const navLinks = pages.map(page => <Link className="text-blue-800 text-xl font-semibold hover:text-blue-600 cursor-pointer " onBlurCapture={() => setMenuOpen(menuOpen)} key={page} smooth spy to={`${page}`}>{page}</Link>);



const CotenidoNavbar = ({ menuOpen, setMenuOpen }) => (
   <div className="flex flex-wrap items-center justify-between px-2 py-3 bg-blue-50 ">
    <div className="flex items-center">
    <a href="/">
    <img className='h-6' src={logo}  />
    </a>
    </div>
    <nav className="hidden md:block space-x-8">
      {navLinks}
    </nav>
    <button type="button" aria-label="Toggle mobile menu" onClick={() => setMenuOpen(!menuOpen)} className="rounded md:hidden focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50"><MenuAlt4Svg menuOpen={menuOpen} /></button>
  </div>
);

const MobileMenu = ({ children }) => (
  <nav className="p-4 flex flex-col space-y-3 md:hidden text-center">
    {children}
  </nav>
);

const MenuAlt4Svg = ({ menuOpen }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`transition duration-100 ease h-8 w-8 ${menuOpen ? 'transform rotate-90' : ''}`} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
  </svg>
);


