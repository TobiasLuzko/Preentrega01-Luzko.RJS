import React from 'react';
import CartWidget from '../CartWidget/CartWidget'; 
import './Navbar.css'; 

function Navbar() {
  const handleNavLinkClick = (event) => {
    event.preventDefault();
    const target = event.target.getAttribute('href');
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Apple</div>
        <ul className="nav-links">
          <li>
            <a href="#inicio" onClick={handleNavLinkClick}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#acerca-de" onClick={handleNavLinkClick}>
              Acerca de
            </a>
          </li>
          <li>
            <a href="#servicios" onClick={handleNavLinkClick}>
              Servicios
            </a>
          </li>
          <li>
            <a href="#contacto" onClick={handleNavLinkClick}>
              Contacto
            </a>
          </li>
        </ul>
        <CartWidget /> {/* Agrega el componente CartWidget aquí */}
          
      </nav>
    </div>
    
  );
}

export default Navbar;