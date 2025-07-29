import {  Routes, Route } from "react-router-dom";
import  { PaginaPrincipal} from "./pages/PaginaPrincipal.jsx";
import { Menu } from "./pages/Menu.jsx";
import { Nosotros } from "./pages/Nosotros.jsx";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Login } from "./pages/Login.jsx";
import { RutaProtegida } from "./components/RutaProtegida.jsx";
import { Admin } from "./pages/Admin.jsx";

function App() {
  
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<PaginaPrincipal />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/login" element={<Login />} />
      <Route
          path="/admin"
          element={
            <RutaProtegida>
              <Admin />
            </RutaProtegida>
          }
        />
    </Routes>
    <Footer />
    </>
  )
}

export default App
