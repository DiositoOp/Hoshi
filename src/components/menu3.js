// src/components/Menu2.js
import React from "react";
import "../styles/Menu2.css";
import roll1 from "../assets/comida1.jpg";
import roll2 from "../assets/comida2.jpg";
import roll3 from "../assets/comida3.jpg";
import roll4 from "../assets/comida4.jpg";
import roll5 from "../assets/comida5.jpg";
import roll6 from "../assets/comida6.jpg";

const menuItems = [
  { name: "Tempura Lover", description: "Camarón, queso crema y topping de anguila.", price: "$13.99", image: roll1 },
  { name: "California Dream", description: "Surimi, pepino y aguacate.", price: "$9.99", image: roll2 },
  { name: "Samurai Roll", description: "Camarón tempura con topping de salmón.", price: "$14.99", image: roll3 },
  { name: "Volcán Roll", description: "Rollo caliente con salsa chipotle.", price: "$15.99", image: roll4 },
  { name: "Crunchy Delight", description: "Pollo teriyaki en rollo frito.", price: "$12.99", image: roll5 },
  { name: "Ebi Fantasy", description: "Camarón y aguacate cubiertos con sésamo.", price: "$11.99", image: roll6 },
];

const Menu2 = () => (
  <section className="menu2-section">
    <h2 className="menu2-title">Nuestros Platillos Recomendados</h2>
    <div className="menu2-container">
      {menuItems.map((item, index) => (
        <div className="menu2-item" key={index}>
          <div className="menu2-image-container">
            <img src={item.image} alt={item.name} className="menu2-image" />
          </div>
          <div className="menu2-content">
            <h3 className="menu2-item-name">{item.name}</h3>
            <p className="menu2-item-description">{item.description}</p>
            <p className="menu2-item-price">{item.price}</p>
            <button className="order-now-button">Ordenar ahora</button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Menu2;
