import {EncabezadoTerciario} from "./EncabezadoTerciario"
import { useEffect, useState } from "react"
import client from '../api/client'

export const ListaProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(()=>{
    client.get('/posts').then((res)=>setProductos(res.data));
  },[])

  const handleDelete = async (id) =>{
    try {
      await client.delete(`/posts/${id}`)
      alert("Producto eliminado")
    } catch (err) {
      console.error('Error al eliminar producto:',err)
    }
  }
  return (
    <div>
        <EncabezadoTerciario titulo="Lista de productos" />
        <div className="overflow-x-auto">
            <table className="table table-xs">
                <thead>
                    <th>ID</th>
                    <th>Nombre del producto</th>
                    <th>Descripcion</th>
                    <th>Precio</th>
                    <th>Categoria</th>
                </thead>
                {productos.map(producto=>(
                    <thead>
                        <th>{producto._id}</th>
                        <th>{producto.nombre}</th>
                        <th>{producto.descripcion}</th>
                        <th>{producto.precio}</th>
                        <th>{producto.categoria}</th>
                        <th>
                          <button onClick={()=>handleDelete(producto._id)}>
                            ❌
                          </button>
                        </th>
                    </thead>
                ))}
            </table>
        </div>
        
    </div>
  )
}

