import FormularioRegistro from "../components/FormularioRegistro"
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Admin = () => {
   const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); // o "/ingresar", según tu ruta de login
  };
  return (
    <div>
      <button onClick={handleLogout} className="btn btn-danger">
        Cerrar sesión
      </button>
        <FormularioRegistro />
    </div>
  )
}

