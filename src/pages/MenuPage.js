// src/pages/MenuPage.js
import React, { useEffect, useState } from "react";
import "../styles/MenuPage.css";
import roll1 from "../assets/comida1.jpg";
import roll2 from "../assets/comida2.jpg";
import roll3 from "../assets/comida3.jpg";
import roll4 from "../assets/comida4.jpg";
import roll5 from "../assets/comida5.jpg";
import roll6 from "../assets/comida6.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const menuData = {
  kushiagues: [
    { name: "Camarón Queso", description: "Brocheta empanizada con panko, de camarón con queso philadelphia", price: "$125", image: roll1 },
    { name: "Plátano con Queso", description: "Brocheta empanizada con panko, de plátano macho con queso philadelphia", price: "$110", image: roll2 },
    { name: "Queso Manchego", description: "Brocheta de queso manchego empanizada con panko", price: "$95", image: roll3 },
    { name: "Surtidas", description: "Brochetas surtidas de camarón, plátano y queso manchego", price: "$115", image: roll4 },
  ],
  platosCalientes: [
    { name: "Yakimeshi Mixto", description: "Arroz frito con verduras, bañado en salsa de soya, con pollo, res y camarón", price: "$190", image: roll5 },
    { name: "Gyozas", description: "5 dumplings rellenos de carne de cerdo y verduras, servidos con salsa de soya", price: "$130", image: roll6 },
  ],
rollosMakis: [
  { name: "California Roll", description: "Surimi, aguacate, pepino, con ajonjolí tostado", price: "$129", image: roll1 },
  { name: "Phila Roll", description: "Camarón tempura, pepino, aguacate con queso philadelphia y ajonjolí tostado", price: "$140", image: roll2 },
  { name: "Banana Roll", description: "Camarón tempura, aguacate, queso philadelphia, plátano macho frito y salsa dulce", price: "$149", image: roll3 },
  { name: "Dragon Roll", description: "Camarón tempura, aguacate, philadelphia, empanizado y coronado con pasta tampico", price: "$155", image: roll4 },
  { name: "Niku Maki", description: "Carne asada, tocino, aguacate y queso philadelphia, empanizado y salseado", price: "$160", image: roll5 },
  { name: "Hoshi Maki", description: "Camarón empanizado, philadelphia, aguacate, con salmón sopleteado", price: "$170", image: roll6 },
],
postres: [
  { name: "Helado Tempura", description: "Bollo relleno de helado napolitano frito en tempura", price: "$85", image: roll6 },
  { name: "Kamehelado", description: "Gelatina de café con salsa cremosa de licor de café", price: "$95", image: roll1 },
],
bebidas: [
  { name: "Calpis Sui", description: "Bebida japonesa a base de yogurt", price: "$45", image: roll2 },
],
extras: [
  { name: "Salsa Dulce", price: "$20", image: roll3 },
  { name: "Soya Ponzu", price: "$20", image: roll4 },
  { name: "Aderezo Chipotle", price: "$20", image: roll5 },
  { name: "Pasta Tampico", price: "$25", image: roll6 },
],
};

const MenuPage = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section className="menu2-section">
      <h2 className="menu2-title">Menú Completo de Hoshi Sushi</h2>
      {Object.entries(menuData).map(([category, items]) => (
        <div key={category} className="menu-category">
          <h2 className="category-title">{category.replace(/([A-Z])/g, " $1")}</h2>
          <div className="menu2-container">
            {items.map((item, index) => (
              <div className="menu2-item" key={index}>
                <div className="menu2-image-container">
                  <img src={item.image} alt={item.name} className="menu2-image" />
                </div>
                <div className="menu2-content">
                  <h3 className="menu2-item-name">{item.name}</h3>
                  <p className="menu2-item-description">{item.description}</p>
                  <p className="menu2-item-price">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {showScroll && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </section>
  );
};

export default MenuPage;
