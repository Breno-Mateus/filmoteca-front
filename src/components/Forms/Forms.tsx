import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { movieSchema, type MovieFormData } from "../../schemas/MovieSchema";

function Forms() {
    const { register, handleSubmit, formState: { errors } } = useForm<MovieFormData>({
        resolver: zodResolver(movieSchema)
    });
  
    const handleSave = (data: any) => console.log(data);

    return (
    <form
        className="flex flex-col gap-6 pb-6"
        onSubmit={handleSubmit(handleSave)}
    >
        <div className="flex gap-4 justify-between">

            <div className="flex flex-col w-full">
                <label htmlFor="title">Título</label>
                <input 
                    type="text" 
                    id="title"
                    placeholder="Ex.: Matrix" 
                    {...register("title", { required: true })}
                    className="border border-smooth rounded-sm p-2.5" 
                />
                {errors.title && <span>Este campo é obrigatório</span>}
            </div>

            <div className="flex flex-col w-full">
                <label htmlFor="director">Diretor</label>
                <input 
                    id="director"
                    placeholder="Ex.: Wachowski" 
                    {...register("director", { required: true })}
                    className="border border-smooth rounded-sm p-2.5"  
                />
                {errors.director && <span>Este campo é obrigatório</span>}
            </div>

            <div className="flex flex-col w-full">
                <label htmlFor="nota">Nota (0-10)</label>
                <input 
                    type="number" 
                    placeholder="0-10"
                    step="1"
                    min="0"
                    max="10" 
                    id="nota" 
                    {...register("nota", { required: true, valueAsNumber: true })}
                    className="border border-smooth rounded-sm p-2.5" 
                />
                {errors.nota && <span>Este campo é obrigatório</span>}
            </div>

        </div>
        
        <button 
            type="submit"
            className="bg-green-600 p-2 rounded-sm text-white hover:opacity-95 transition-opacity hover:cursor-pointer"
        >
            Salvar
        </button>
    </form>
  )
}

export default Forms;