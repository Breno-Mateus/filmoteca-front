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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="flex flex-col w-full">
                <label htmlFor="title" className="text-sm font-medium text-gray-700 mb-1">
                    Título
                </label>
                <input 
                    type="text" 
                    id="title"
                    placeholder="Ex.: Matrix" 
                    {...register("titulo")}
                    className="border border-smooth rounded-sm p-2.5 focus:outline-none focus:ring-2 focus:ring-green-500" 
                />
                {errors.titulo && <span className="text-xs text-red-500 mt-1">{errors.titulo.message}</span>}
            </div>

            <div className="flex flex-col w-full">
                <label htmlFor="director" className="text-sm font-medium text-gray-700 mb-1">
                    Diretor
                </label>
                <input 
                    id="director"
                    placeholder="Ex.: Wachowski" 
                    {...register("diretor")}
                    className="border border-smooth rounded-sm p-2.5 focus:outline-none focus:ring-2 focus:ring-green-500"  
                />
                {errors.diretor && <span className="text-xs text-red-500 mt-1">{errors.diretor.message}</span>}
            </div>

            <div className="flex flex-col w-full">
                <label htmlFor="nota" className="text-sm font-medium text-gray-700 mb-1">
                    Nota (0-10)
                </label>
                <input 
                    type="number" 
                    placeholder="0-10"
                    step="1"
                    min="0"
                    max="10" 
                    id="nota" 
                    {...register("nota", { valueAsNumber: true })}
                    className="border border-smooth rounded-sm p-2.5 focus:outline-none focus:ring-2 focus:ring-green-500" 
                />
                {errors.nota && <span className="text-xs text-red-500 mt-1">{errors.nota.message}</span>}
            </div>

        </div>
        
        <button 
            type="submit"
            disabled={isPending}
            className="bg-green-600 p-3 rounded-sm text-white font-semibold hover:opacity-95 transition-all hover:cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed shadow-sm active:scale-95"
        >
            {isPending ? "Salvando..." : "Salvar Filme"}
        </button>
    </form>
  )
}

export default Forms;