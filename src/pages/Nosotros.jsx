import {EncabezadoSecundario} from "../components/EncabezadoSecundario"
import { TarjetaNosotros } from "../components/TarjetaNosotros"

export const Nosotros = () => {
  return (
    <main className="px-4 sm:px-20 pt-6">
      <EncabezadoSecundario titulo="Acerca de nosotros" />
      <p className="text-justify">En Panadería Artesanal “Trigo y Tradición” nos apasiona el arte de hacer pan, un arte que requiere tiempo, paciencia y dedicación. Somos una panadería familiar fundada con el deseo de traer a nuestra comunidad el sabor auténtico del pan hecho a mano, con recetas tradicionales que pasan de generación en generación. Desde nuestros inicios, nos hemos comprometido a ofrecer productos de alta calidad, elaborados con ingredientes naturales y siguiendo métodos tradicionales que respetan los tiempos de fermentación y horneado.</p>
      <div className="flex gap-4 p-2 flex-wrap sm:flex-nowrap">
        <TarjetaNosotros subtitulo="Nuestro proceso" contenido="Cada día comenzamos de madrugada para asegurarnos de que el pan esté recién hecho y listo para nuestros clientes. Utilizamos solo ingredientes naturales, sin conservantes ni aditivos, y trabajamos con masa madre y harinas de origen local, garantizando frescura y un sabor único en cada pieza. Nuestros panaderos cuidan cada detalle, desde el amasado a mano hasta el horneado en horno de piedra, lo que aporta una textura y sabor inigualables a nuestros productos."/>
        <TarjetaNosotros subtitulo="Nuestra Filosofía" contenido="Creemos que el pan es mucho más que un alimento; es un símbolo de hogar y comunidad. En “Trigo y Tradición”,cada baguette, cada bollo y cada croissant representan nuestro compromiso de brindar productos honestos, elaborados con cariño y dedicación. Nos enorgullece ser una panadería que combina lo mejor de las técnicas artesanales con ingredientes frescos y locales. Compromiso con la Comunidad. Además de crear panes deliciosos, apoyamos a nuestra comunidad al colaborar con agricultores locales y reducir el uso de plásticos en nuestros empaques. Nuestra panadería también es un espacio donde los clientes pueden aprender sobre el proceso de panificación a través de talleres y eventos especiales que realizamos periódicamente."/>
        <TarjetaNosotros subtitulo="Te Esperamos" contenido="Queremos que cada visita a “Trigo y Tradición” sea una experiencia memorable, que te transportes a una época en la que el pan se hacía con paciencia y dedicación. Ven y descubre por qué el pan artesanal tiene un sabordiferente, un sabor que te hace sentir en casa. ¡Te esperamos para compartir contigo el verdadero sabor del pan hecho con amor!"/>
      </div>
    </main>
  )
}

