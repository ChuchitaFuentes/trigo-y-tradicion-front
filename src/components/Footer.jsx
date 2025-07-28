import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { Link } from "react-router-dom";
import wheat from "../assets/images/wheat-lines.png"

export const Footer = () => {
    return (
        <footer className="flex flex-col px-4 sm:px-20 pt-6">
            <div className="sm:flex">
                <div className="sm:basis-1/3">
                    <img src={wheat} alt="Logo de la empresa" className="w-60 h-40" />
                    <p className="text-xl italic py-4">"Donde el trigo se encuentra con la tradición..."</p>
                </div>

                <ul className="sm:basis-1/3">
                    
                    <li><Link to="/nosotros" className="text-dark-gray italic hover:text-dark-black">Nosotros</Link></li>
                    <li><Link to="/login" className="text-dark-gray italic hover:text-dark-black">Ingresar</Link></li>
                </ul>

                <div className="sm:basis-1/3">
                    <h2 className="text-xl pb-4 text-right">Síguenos</h2>
                    <div className="flex gap-6 justify-end">
                        <button className="w-10 h-10 grid place-content-center border-1 hover:text-dark-black text-dark-gray border-dark-gray"><a href="https://facebook.com" target="_blank" ><FaFacebookF /></a></button>
                        <button className="w-10 h-10 grid place-content-center border-1 hover:text-dark-black text-dark-gray border-dark-gray"><a href="https://twitter.com" target="_blank"><FaXTwitter /></a></button>
                        <button className="w-10 h-10 grid place-content-center border-1 hover:text-dark-black text-dark-gray border-dark-gray"><a href="https://instagram.com" target="_blank"><FaInstagram /></a></button>
                    </div> 
                </div>
            </div>

            <div>
                <p className="text-center text-dark-gray">&copy; 2025 María Fuentes. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

