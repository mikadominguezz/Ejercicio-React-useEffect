import { useState, useEffect } from "react";

export default function Ejercicio2() {
  // Al cargar el componente, inicializamos desde localStorage
  const [text, setText] = useState(() => {
    return localStorage.getItem("inputValue") || "";
  });

  // Cada vez que cambia el valor, lo guardamos en localStorage
  useEffect(() => {
    localStorage.setItem("inputValue", text);
  }, [text]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Input con localStorage</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe algo..."
        style={{ padding: "8px", fontSize: "16px", width: "250px" }}
      />
      <p>Valor guardado: {text}</p>
    </div>
  );
}
