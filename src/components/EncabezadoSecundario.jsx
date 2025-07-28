import { Link } from "react-router-dom"
import { GoHome } from "react-icons/go";


export const EncabezadoSecundario = ({titulo}) => {
  return (
    <div >        
        <h2 className=" text-dark-black text-2xl  font-light tracking-[.625rem] uppercase text-center p-2">{titulo}</h2>
        <Link to="/" >
          <div className="flex justify-center">
          <GoHome className="text-xl"/> <p>Inicio</p>
        </div>
        </Link>
    </div>
  )
}

