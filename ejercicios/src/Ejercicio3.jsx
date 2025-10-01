import { useState, useEffect } from "react";

export default function Ejercicio3() {
  const [category, setCategory] = useState("users"); // categoría inicial
  const [data, setData] = useState([]);

  // Cada vez que cambia category, hacemos la llamada a la API
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${category}`)
      .then((res) => res.json())
      .then((json) => setData(json.slice(0, 5))) // solo los primeros 5 resultados
      .catch((err) => console.error("Error al traer datos:", err));
  }, [category]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Fetch dependiente de estado</h1>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ padding: "8px", fontSize: "16px", marginBottom: "20px" }}
      >
        <option value="users">Users</option>
        <option value="posts">Posts</option>
        <option value="comments">Comments</option>
        <option value="todos">Todos</option>
      </select>

      <ul style={{ textAlign: "left", display: "inline-block", marginTop: "20px" }}>
        {data.map((item) => (
          <li key={item.id}>
            {category === "users"
              ? item.name
              : category === "posts"
              ? item.title
              : category === "comments"
              ? item.body
              : item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
