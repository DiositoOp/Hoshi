// src/pages/QuienesSomos.js
import React from "react";
import "../styles/Quienes.css";
import chefImage from "../assets/chef.jpg"; // Asegúrate de tener la imagen en esta ruta

const Quienes = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        {/* Imagen del chef */}
        <div className="chef-image-container">
          <img src={chefImage} alt="Chef" className="chef-image" />
          <p className="inspirational-quote">"La pasión por la cocina no tiene límites."</p>
        </div>

        {/* Texto dentro del marco blanco */}
        <div className="text-content">
          <h2 className="about-title">Sobre Nosotros</h2>
          <div className="divider"></div>
          <p>
            En Hoshi Sushi, buscamos brindar la mejor experiencia gastronómica, 
            fusionando la tradición japonesa con toques creativos que sorprendan. 
            Nuestro chef, con años de experiencia y pasión por la cocina, ha transformado 
            este restaurante en un hogar para los amantes del sushi y la buena comida.
          </p>
          <p>
            Cada plato cuenta una historia, y nuestro objetivo es que cada cliente se 
            lleve no solo una experiencia culinaria sino también un recuerdo especial. 
            A lo largo del tiempo, hemos evolucionado, pero siempre manteniendo la esencia: 
            ingredientes frescos, dedicación, y una presentación impecable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quienes;
