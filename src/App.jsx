import React from 'react';
import Navbar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import '../src/App.css'; //css

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />


      <main>
        <section id="acerca-de">
          <h2>Acerca de Nosotros</h2>
          <p>Somos una empresa dedicada a...</p>
        </section>

        <section id="servicios">
          <h2>Nuestros Servicios</h2>
          <ul>
            <li>Servicio 1</li>
            <li>Servicio 2</li>
            <li>Servicio 3</li>
          </ul>
        </section>

        <section id="contacto">
          <h2>Contacto</h2>
          <p>Puedes contactarnos en:</p>
          <address>
            <p>Email: ejemplo@email.com</p>
            <p>Teléfono: (123) 456-7890</p>
          </address>
        </section>
      </main>

      <footer>
        <p>Derechos de autor © 2023 Mi Aplicación</p>
      </footer>
      
    </div>
    
  );
}

export default App;
