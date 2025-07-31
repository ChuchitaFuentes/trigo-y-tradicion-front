import { useEffect, useState } from "react"
import { Encabezado } from "../components/Encabezado"
import client from '../api/client'

export const Menu = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    client.get('/posts').then((res) => setProductos(res.data));
  }, [])

  return (
    <main className="px-4 sm:px-20 pt-6">
      <Encabezado titulo="Menú" subtitulo="Conoce nuestros productos" />
      <div className="flex gap-4 flex-wrap py-8">
        {productos.map(producto => (
          <div className="card-body bg-base-100 w-96 shadow-sm">
            <h2 className="card-title">{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{producto.categoria}</div>
              <div className="badge badge-outline">${producto.precio}</div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
