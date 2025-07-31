import { useState, useEffect} from "react";
import client from "../api/client";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


export const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate("/admin"); // si ya está logueado
    }
  }, [user, navigate]);

  
  //Se conecta a nuestra API
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await client.post("user/login", {
        name,
        password,
      });
      login(res.data);
      alert("Ingreso exitoso");
      navigate("/admin");
    } catch (err) {
      alert('Error al ingresar: Verifica tu usuario o contraseña')
    }
  }

  return (
    <form onSubmit={onSubmit} className="card px-4 sm:px-20 pt-6">

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
      <button type="submit" className="btn btn-md btn-ghost">Ingresar</button>
    </form>
  );
}
