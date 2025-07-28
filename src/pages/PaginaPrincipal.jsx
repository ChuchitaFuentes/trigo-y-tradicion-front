
import { ComponenteInicio } from '../components/ComponenteInicio.jsx'
import { SeccionProductos } from "../components/SeccionProductos.jsx"
import { SeccionSucursales } from "../components/SeccionSucursales.jsx"
import { SeccionPedidos } from "../components/SeccionPedidos.jsx"

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const PaginaPrincipal = () => {
    const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <main className="px-4 sm:px-20 pt-6">
      
      <ComponenteInicio />
      <SeccionProductos />
      <SeccionSucursales />
      <SeccionPedidos />
      
    </main>
  )
}

