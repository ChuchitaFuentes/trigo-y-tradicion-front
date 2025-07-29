import { Navigate } from "react-router-dom";

export const RutaProtegida = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("_id");

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};