import { TarjetaSucursal } from "./TarjetaSucursal"

export const SeccionSucursales = () => {
  return (
    <section className="sm:flex flex-row-reverse gap-3" id="seccionSucursales">
      <div>
      <h2 className='text-4xl font-bold sm:text-6xl py-6'>Nuestras sucursales</h2>
      </div>
      <div className="sm:flex justify-around">
      <TarjetaSucursal 
          lugar="Acatlán"
          direccion="Calle Libertad de cultos 23, Col. Benito Juárez, Acatlán, Hgo."
          linkDireccion="https://www.google.com/maps/place/20%C2%B007'08.0%22N+98%C2%B024'14.0%22W/@20.1188851,-98.4064639,17z/data=!3m1!4b1!4m4!3m3!8m2!3d20.1188851!4d-98.403889?hl=en&entry=ttu&g_ep=EgoyMDI0MTExMS4wIKXMDSoASAFQAw%3D%3D"
          telefono="775 111 1111"
          horarios={["Lunes a Sábado 10:00-19:00", "Domingo 10:00-18:00"]}
          />
        <TarjetaSucursal 
          lugar="Tulancingo"
          direccion="Calle Carreta 103, Rincónes de la Hacienda 1ra.sección, Tulancingo,
                                Hgo."
          linkDireccion="https://www.google.com/maps/place/20%C2%B007'08.0%22N+98%C2%B024'14.0%22W/@20.1188851,-98.4064639,17z/data=!3m1!4b1!4m4!3m3!8m2!3d20.1188851!4d-98.403889?hl=en&entry=ttu&g_ep=EgoyMDI0MTExMS4wIKXMDSoASAFQAw%3D%3D"
          telefono="775 111 1111"
          horarios={["Lunes a Sábado 10:00-19:00", "Domingo 10:00-18:00"]}
          />
        </div>
       
    </section>
  )
}

