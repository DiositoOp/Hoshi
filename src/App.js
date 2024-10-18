// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuPage from "./pages/MenuPage";  // Nueva página de Menú
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Menu2 from './components/Menu2';
import Quienes from "./pages/Quienes-Somos.js"; 
import NotFound from "./pages/404.js";
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Menu2 /> {/* Menú pequeño solo en la página principal */}
              <Contact />
            </>
          }
        />
        <Route path="/Menu" element={<MenuPage />} /> {/* Página de menú completo */}
        <Route path="/Quienes-Somos" element={<Quienes />} /> {/* Página de contacto */}
        
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
