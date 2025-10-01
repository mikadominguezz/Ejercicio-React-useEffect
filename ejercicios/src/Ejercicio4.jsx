import { useState, useEffect } from "react";

export default function Ejercicio4() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Creamos el intervalo que actualiza la hora cada segundo
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup: se ejecuta cuando el componente se desmonta
    return () => {
      clearInterval(intervalId);
      console.log("⏹️ Intervalo limpiado");
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Temporizador con Cleanup</h1>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
}
