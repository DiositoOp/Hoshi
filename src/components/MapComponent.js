import React, { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.png'; // Asegúrate de que la ruta sea correcta

function MapComponent() {
  const mapRef = useRef(null); // Crear referencia para el mapa
  const [isLoaded, setIsLoaded] = useState(false); // Controlar si Google Maps cargó

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.google && window.google.maps) {
        setIsLoaded(true); // Confirmamos que Google Maps cargó
        clearInterval(interval); // Detenemos el intervalo
      }
    }, 100); // Revisamos cada 100ms
  }, []);

  useEffect(() => {
    if (isLoaded) {
      // Inicializar el mapa con las nuevas coordenadas
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 18.0049748, lng: -94.5453951 }, // Nuevas coordenadas
        zoom: 15,
      });

      // Crear un ícono personalizado usando el logo
      const customIcon = {
        url: logo, // Usar la importación del logo como URL
        scaledSize: new window.google.maps.Size(50, 50), // Ajusta el tamaño
      };

      // Crear el marcador
      new window.google.maps.Marker({
        position: { lat: 18.0049748, lng: -94.5453951 }, // Coordenadas del marcador
        map,
        icon: customIcon, // Icono personalizado
        title: 'Hoshi Sushi', // Tooltip del marcador
      });
    }
  }, [isLoaded]); // Ejecutar cuando Google Maps esté cargado

  return (
    <div
      ref={mapRef}
      style={{ width: '100%', height: '400px' }} // Ajuste del tamaño del mapa
    ></div>
  );
}

export default MapComponent;
