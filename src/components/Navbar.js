import React from 'react';
import { Link } from 'react-router-dom'; // Usamos Link para navegación interna
import '../styles/Navbar.css'; // Asegúrate de tener el CSS bien vinculado
import logo from '../assets/logo.png'; // Ajusta la ruta de tu logo

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
            <Link to="/" className="nav-link">
        <img src={logo} alt="Logo" className="logo" /></Link>
        
        <Link to="/" className="nav-link">
        <h1 className="title">Hoshi Sushi</h1></Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Inicio</Link></li>
        <li><Link to="/Menu" className="nav-link">Menú</Link></li>
        <li><Link to="/Quienes-Somos" className="nav-link">Quienes Somos</Link></li>
      </ul>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
