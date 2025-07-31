import { useForm } from 'react-hook-form';
import client from '../api/client';
import { EncabezadoTerciario } from './EncabezadoTerciario';


export default function FormularioRegistro() {
    const { register, handleSubmit} = useForm();

    const onSubmit = async (data) => {
        try {
            await client.post('/posts', data);
            alert('Producto agregado');
        } catch (err) {
            alert('Error al agregar producto');
        }
    };

    return (
        <div className='m-auto'>
        <EncabezadoTerciario titulo="Agregar producto" className="pb-6"/>
        <form onSubmit={handleSubmit(onSubmit)} className="fieldset bg-base-200 border-base-300 w-xs border p-4 ">
            <input
                {...register("nombre", { required: true })}
                placeholder="Nombre del producto"
                className='input'
            />
            <input
                {...register("descripcion", { required: true })}
                placeholder="Descripcion del producto"
                className='input'
            />
            <input
                {...register("precio", { required: true })}
                placeholder="Precio del producto"
                className='input'
            />
            <input
                {...register("categoria", { required: true })}
                placeholder="Categoria del producto"
                className='input'
            />
            
            <button type="submit" className="btn btn-neutral mt-4">Guardar</button>
        </form>
        </div>
    );

}