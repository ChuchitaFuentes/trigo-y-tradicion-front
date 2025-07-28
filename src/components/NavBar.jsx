import {Link } from "react-router-dom";
import menuButton from '../assets/images/menu-button.svg'

export const NavBar = () => {
    return (
        <>
        <ul className="hidden sm:flex text-[1.125rem] sm:w-[27.4rem] sm:place-content-around sm:text-[16px] sm:items-center">
            <Link to="/" state={{ scrollTo: "seccionProductos" }} >Productos</Link>
            <Link to="/" state={{ scrollTo: "seccionSucursales" }} >Sucursales</Link>
            <Link to="/" state={{ scrollTo: "seccionPedidos" }} >Haz tu pedido</Link>
        </ul>
        <img src={menuButton} alt="Botón despliege de menú" className='h-5 w-16 cursor-pointer sm:hidden'/>
        </>
    )
}

