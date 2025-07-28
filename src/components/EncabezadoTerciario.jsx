
import { IoBookOutline } from "react-icons/io5";


export const EncabezadoTerciario = ({titulo}) => {
  return (
    <div >        
        <div className="flex justify-center">
          <IoBookOutline className="text-5xl"/> <h2 className=" text-dark-black text-3xl  font-bold  text-center p-2">{titulo}</h2>
        </div>
        
    </div>
  )
}

