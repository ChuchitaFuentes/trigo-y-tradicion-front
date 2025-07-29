import { useForm } from 'react-hook-form';
import client from '../api/client';


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
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register("nombre", { required: true })}
                placeholder="Nombre del producto"
            />
            <input
                {...register("descripcion", { required: true })}
                placeholder="Descripcion del producto"
            />
            <input
                {...register("precio", { required: true })}
                placeholder="Precio del producto"
            />
            <input
                {...register("categoria", { required: true })}
                placeholder="Categoria del producto"
            />
            <button type="submit">Guardar</button>
        </form>
    );

}