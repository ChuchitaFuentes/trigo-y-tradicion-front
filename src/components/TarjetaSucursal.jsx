import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";


export const TarjetaSucursal = ({ lugar, direccion, linkDireccion, telefono, horarios}) => {
    return (
        <div className="w-25rem">
            <h3 className='text-3xl font-bold' >{lugar}</h3>
            <ul className="list-none">
                <li className="flex items-start gap-2">
                    <FaLocationDot />
                    <a href={linkDireccion}
                        target="_blank"> {direccion}</a>
                </li>
                <li className="flex items-start gap-2">
                    <FaRegClock />
                    {telefono}
                </li>
                <li className="flex items-start gap-2">
                    <FaPhoneAlt />
                    <ul>
                        {horarios.map((element, index) => (<li key={index}>{element}</li>))}
                    </ul>
                </li>
            </ul>
        </div>
    )
}

