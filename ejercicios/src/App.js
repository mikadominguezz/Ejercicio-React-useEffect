import './App.css';
import Ejercicio1 from "./Ejercicio1";
import Ejercicio2 from "./Ejercicio2";
import Ejercicio3 from "./Ejercicio3";
import Ejercicio4 from "./Ejercicio4";
import Ejercicio5 from "./Ejercicio5";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h1>Ejercicios con React</h1>

        {/* Barra de navegación */}
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ margin: "0 10px" }}>🏠 Home</Link>
          <Link to="/counter" style={{ margin: "0 10px" }}>ejercicio1</Link>
          <Link to="/input" style={{ margin: "0 10px" }}>Input LocalStorage</Link>
          <Link to="/api" style={{ margin: "0 10px" }}>API Select</Link>
          <Link to="/clock" style={{ margin: "0 10px" }}>Reloj</Link>
          <Link to="/resize" style={{ margin: "0 10px" }}>Resize</Link>
        </nav>

        {/* Definición de rutas */}
        <Routes>
          <Route path="/" element={<h2>Bienvenido! 👋 Elegí un ejercicio</h2>} />
          <Route path="/counter" element={<Ejercicio1 />} />
          <Route path="/input" element={<Ejercicio2 />} />
          <Route path="/api" element={<Ejercicio3 />} />
          <Route path="/clock" element={<Ejercicio4 />} />
          <Route path="/resize" element={<Ejercicio5 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
