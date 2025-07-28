import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login =()=> {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
//   const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usuario === "admin" && password === "1234") {
    // navigate("/admin"); 

    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="px-4 sm:px-20 pt-6">
      <input
        type="text"
        placeholder="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Ingresar</button>
    </form>
  );
}
