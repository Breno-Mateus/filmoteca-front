import { AxiosError } from "axios";
import type { MovieFormData } from "../schemas/MovieSchema";
import { useCreateFilme } from "../services/createFilme";

interface MutationCallbacks {
    onSuccess?: () => void;
    onError?: (error: AxiosError) => void;
}

const useCreateMovie = () => {
    const { mutate, isError, isSuccess, isPending } = useCreateFilme();

    const handleMovieCreation = (data: MovieFormData, callbacks?: MutationCallbacks) => {
        mutate(data, {
            onSuccess: () => {
                alert("Filme cadastrado com sucesso! 🎬");
                
                if (callbacks?.onSuccess) {
                    callbacks.onSuccess();
                }
            },
            onError: (error) => {
                const mensagem = error.response?.status === 400 
                    ? "Dados inválidos." 
                    : "Erro no servidor.";

                alert(mensagem);
                console.error(error);

                if (callbacks?.onError) {
                    callbacks.onError(error); 
                }
            }
        });
    }

    return { handleMovieCreation, isError, isSuccess, isPending };
}

export default useCreateMovie;