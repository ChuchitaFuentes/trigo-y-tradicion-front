import { FaWhatsapp } from "react-icons/fa";

export const SeccionPedidos = () => {
  return (
    <section className='sm:flex mb-6' id='seccionPedidos'>
      <div className='flex-1 py-6'>
        <h2 className='text-4xl font-bold sm:text-6xl'>Haz tu pedido</h2>
      </div>
      <div className=' flex flex-col flex-1/3 gap-2 justify-between py-6' >
        <div className="flex flex-col items-center p-2 border-1 sm:m-6 bg-dark-gray hover:bg-dark-black text-light-white uppercase">
          <FaWhatsapp />
          <a href="https://api.whatsapp.com" >Mándanos un whatsApp</a>
        </div>
        <p className=' mb-10  text-center sm:py-6 text-dark-gray'>Los pedidos se entregan en el taller de producción o a domicilio. Recuerda hacer tu pedido con anticipación.</p>
      </div>

    </section>
  )
}

