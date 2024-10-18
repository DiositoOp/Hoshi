import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link para navegación interna
import '../styles/Menu.css';

// Importar las imágenes
import roll1 from '../assets/comida1.jpg';
import roll2 from '../assets/comida2.jpg';
import roll3 from '../assets/comida3.jpg';
import roll4 from '../assets/comida4.jpg';
import roll5 from '../assets/comida5.jpg';
import roll6 from '../assets/comida6.jpg';

// Datos del menú
const menuItems = [
  { name: 'Tempura Lover', description: 'Rollo empanizado con camarón...', price: '$13.99', image: roll1 },
  { name: 'California Dream', description: 'Aguacate, pepino...', price: '$9.99', image: roll2 },
  { name: 'Samurai Roll', description: 'Camarón tempura con...', price: '$14.99', image: roll3 },
  { name: 'Volcán Roll', description: 'Rollo caliente relleno...', price: '$15.99', image: roll4 },
  { name: 'Crunchy Delight', description: 'Rollo frito con pollo...', price: '$12.99', image: roll5 },
  { name: 'Ebi Fantasy', description: 'Camarón y aguacate...', price: '$11.99', image: roll6 },
];

const Menu = () => (
  <section className="menu-section" id="menu">
    <h2 className="menu-title">Nuestros Platillos Recomendados</h2>
    <div className="menu-container">
      {menuItems.map((item, index) => (
        <div className="menu-item" key={index}>
          <img src={item.image} alt={item.name} className="menu-image" />
          <h3 className="menu-item-name">{item.name}</h3>
          <p className="menu-item-description">{item.description}</p>
          <p className="menu-item-price">{item.price}</p>
        </div>
      ))}
    </div>
    <Link to="/menu" className="view-full-menu-button">
      Ver Menú Completo
    </Link>
  </section>
);

export default Menu;
