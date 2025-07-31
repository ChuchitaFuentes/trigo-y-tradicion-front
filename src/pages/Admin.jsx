import FormularioRegistro from "../components/FormularioRegistro"
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ListaProductos } from "../components/ListaProductos";


export const Admin = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); // o "/ingresar", según tu ruta de login
  };
  return (
    <div className="px-4 sm:px-20 pt-6 sm:flex flex-col gap-20">
      <div className="sm:flex justify-between">
        <h1 className="text-3xl font-bold">Bienvenido "{user.name}"</h1>
        <button onClick={handleLogout} className="btn btn-error">Cerrar sesión</button>
      </div>
      <ListaProductos />
      <FormularioRegistro />
    </div>
  )
}

