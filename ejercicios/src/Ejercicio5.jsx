import { useState, useEffect } from "react";

export default function Ejercicio5() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Función que actualiza el ancho
    const handleResize = () => setWidth(window.innerWidth);

    // Agregamos el listener
    window.addEventListener("resize", handleResize);

    // Cleanup: quitamos el listener al desmontar
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("📏 Listener de resize eliminado");
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Ancho de la ventana</h1>
      <h2>{width}px</h2>
    </div>
  );
}
