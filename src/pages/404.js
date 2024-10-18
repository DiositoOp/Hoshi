
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="sushi-container">
        <div className="sushi">
          <div className="sushi-body"></div>
          <div className="sushi-seaweed"></div>
        </div>
      </div>
      <h1 className="title-404">404 - Página no encontrada</h1>
      <p className="message">Lo sentimos, no pudimos encontrar la página que buscas. Pero no te preocupes, ¡la aventura culinaria continúa!</p>
      <Link to="/" className="home-button">Volver al Inicio</Link>
    </div>
  );
};

export default NotFound;
