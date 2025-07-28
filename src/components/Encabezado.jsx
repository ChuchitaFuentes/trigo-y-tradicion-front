
export const Encabezado = ({titulo, subtitulo}) => {
  return (
    <div>
        <h1 className="text-3xl  font-bold text-center p-4">{titulo}</h1>
        <h2 className="bg-dark-black text-light-white text-xl  font-light tracking-widest uppercase text-center p-2">{subtitulo}</h2>
    </div>
  )
}

