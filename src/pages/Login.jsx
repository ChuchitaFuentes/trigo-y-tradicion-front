import { useState } from "react";
import client from "../api/client";
import { useNavigate } from "react-router-dom";

export const Login =()=> {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate();

//Se conecta a nuestra API
const onSubmit = async(e)=>{
  e.preventDefault();
  try {
     const res = await client.post("user/login", {
        name,
        password,
      });
      localStorage.setItem("_id", res.data._id);
      alert("Ingreso exitoso");
      // Redireccionamos a una ruta protegida o página de admin, por ejemplo
      navigate("/admin");
  } catch (err) {
    alert ('Error al ingresar: Verifica tu usuario o contraseña')
  }
}

  return (
    <form onSubmit={onSubmit} className="px-4 sm:px-20 pt-6">
      <input
        type="text"
        placeholder="Usuario"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Ingresar</button>
    </form>
  );
}
