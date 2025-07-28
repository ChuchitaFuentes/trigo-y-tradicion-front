
export const TarjetaNosotros = ({subtitulo, contenido}) => {
  return (
    <div className="flex flex-col p-3 my-3 border-1 border-dark-gray ">
        <h3 className="text-xl font-bold text-center">{subtitulo}</h3>
        <p className="text-justify">{contenido}</p>
    </div>
  )
}
