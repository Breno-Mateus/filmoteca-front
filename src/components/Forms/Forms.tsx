import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { movieSchema, type MovieFormData } from "../../schemas/MovieSchema";
import useCreateMovie from "../../hooks/useCreateMovie";

function Forms() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<MovieFormData>({
        resolver: zodResolver(movieSchema)
    });

    const { handleMovieCreation, isPending } = useCreateMovie();

    const onSubmit = (data: MovieFormData) => {
        handleMovieCreation(data, {
            onSuccess: () => {
                reset();
            }
        });
    }

    return (
    <form
        className="flex flex-col gap-6 pb-6"
        onSubmit={handleSubmit(onSubmit)}
    >
        <div className="flex gap-4 justify-between">

            <div className="flex flex-col w-full">
                <label htmlFor="title">Título</label>
                <input 
                    type="text" 
                    id="title"
                    placeholder="Ex.: Matrix" 
                    {...register("titulo")}
                    className="border border-smooth rounded-sm p-2.5" 
                />
                {errors.titulo && <span className="text-xs text-red-500">{errors.titulo.message}</span>}
            </div>

            <div className="flex flex-col w-full">
                <label htmlFor="director">Diretor</label>
                <input 
                    id="director"
                    placeholder="Ex.: Wachowski" 
                    {...register("diretor")}
                    className="border border-smooth rounded-sm p-2.5"  
                />
                {errors.diretor && <span className="text-xs text-red-500">{errors.diretor.message}</span>}
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
                    {...register("nota", { valueAsNumber: true })}
                    className="border border-smooth rounded-sm p-2.5" 
                />
                {errors.nota && <span className="text-xs text-red-500">{errors.nota.message}</span>}
            </div>

        </div>
        
        <button 
            type="submit"
            disabled={isPending}
            className="bg-green-600 p-2 rounded-sm text-white hover:opacity-95 transition-opacity hover:cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
            {isPending ? "Salvando..." : "Salvar"}
        </button>
    </form>
  )
}

export default Forms;