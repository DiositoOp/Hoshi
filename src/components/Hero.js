import React from "react";
import heroImage from '../assets/foto.jpg'; // Asegúrate de usar la ruta correcta de la imagen

const Hero = () => {
  return (
    <section style={{ ...styles.hero, backgroundImage: `url(${heroImage})` }}>
      <div style={styles.overlay}>
        <h2 style={styles.title}>Bienvenidos a Hoshi Sushi</h2>
        <p style={styles.subtitle}>Disfruta de los mejores platillos de comida Japo-Mex.</p>
      </div>
      <div> 
        
      </div>
    </section>
  );
};

const styles = {
  hero: {
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  overlay: {
    position: "absolute", // Para posicionar el texto sobre la imagen
    top: "10%", // Ajusta este valor según la distancia al navbar
    left: "50%",
    transform: "translateX(-50%)", // Centra horizontalmente el texto
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo semi-transparente
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#fff",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Sombras para mayor legibilidad
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.5rem",
    color: "#ddd",
  },
};

export default Hero;
