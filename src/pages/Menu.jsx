import { useEffect, useState } from "react"
import { Encabezado } from "../components/Encabezado"
import client from '../api/client'

 export const Menu = () => {
  const [post, setPost] = useState([]);

  useEffect(()=>{
    client.get('/posts').then((res)=>setPost(res.data));
  },[])

  return (
    <main className="px-4 sm:px-20 pt-6">
        <Encabezado titulo="Menú" subtitulo="Conoce nuestros productos"/>
        <div>
          <ul>
            {post.map(post =>(
                <div>
                  <li key={post._id}>{post.nombre}</li>
                  <li key={post._id}>{post.descripcion}</li>
                </div>
            ))}
          </ul>
        </div>
    </main>
  )
}
