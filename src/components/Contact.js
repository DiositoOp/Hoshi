// Contact.js
import React from 'react';
import MapComponent from './MapComponent'; // Asegúrate que la ruta es correcta
import '../styles/Contact.css'; // Importa los estilos

const Contact = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+527581040495'; // Reemplaza con el número de teléfono real
    const message = encodeURIComponent('¡Hola! Estoy interesado en saber más sobre Hoshi Sushi.');
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank'); // Abrir WhatsApp en una nueva pestaña
  };

  return (
    <section id="contact">
      <h2>Quieres Ordenarr</h2>

      <div className="contact-info">
        <div>
          <h3>Visitanos</h3>
          <p>C. 23 10, Colonia Petrolera, Minatitlan, Veracruz</p>
        </div>

        <div>
          <h3>Llamanos</h3>
          <p>📞 758 104 0495</p>
        </div>
      </div>

      {/* Botón de WhatsApp */}
      <button className="whatsapp-button" onClick={handleWhatsAppClick}>
       Ordenar Por whatsapp
      </button>

      {/* Contenedor del Mapa */}
      <div className="map-container">
        <MapComponent />
      </div>
    </section>
  );
};

export default Contact;
