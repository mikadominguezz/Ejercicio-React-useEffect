import { useState, useEffect } from "react";

export default function Ejercicio1() {
  // Estado para el contador
  const [count, setCount] = useState(0);

  // useEffect para actualizar el título del documento
  useEffect(() => {
    document.title = `Contador: ${count}`;
  }, [count]); // Se ejecuta cada vez que cambia count

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Contador con título dinámico</h1>
      <p>Valor actual: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}
