import { useForm } from "react-hook-form";

export const FormularioRegistro = () => {
    const {register, handleSubmit, formState:{errors}} = useForm();

    const onSubmit = data =>{
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Nombre de usuario" {...register("nombre", {required:true})}/>
            {errors.nombre?.type === 'required' && <p>El nombre es requerido</p>} 
            <input type="password" placeholder="Contraseña" {...register("contrasena", {required:true})}/>
            {errors.contrasena?.type === 'required' && <p>La contraseña es requerida</p>} 
            <button type="submit">Ingresar</button>
        </form>
  )
}
// Revisar y ajustar