import { Link } from "react-router-dom"

export const SeccionProductos = () => {
  return (
    <section className='sm:flex mb-6' id='seccionProductos'>
        <div className='flex-1 py-6'>
          <h2 className='text-4xl font-bold sm:text-6xl'>Nuestros productos</h2>
        </div>
        <div className='flex-1/3 pt-4'>
          <p className=' mb-10 sm:text-base leading-loose ' >Cada producto es una obra maestra hecha con cariño y dedicación. Nuestros panes son elaborados siguiendo las técnicas tradicionales de la panadería artesanal, utilizando solo los mejores ingredientes naturales. Aquí, la frescura y el sabor se combinan para brindarte una experiencia única que no solo satisface, sino que enamora.</p>
          <Link to="/menu"><button className='bg-dark-gray uppercase text-light-white hover:bg-dark-black h-10 w-30'>Menú</button></Link>
        </div>
      </section>
  )
}

