import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "./axiosInstance";
import type { MovieFormData } from "../schemas/MovieSchema";
import type { FilmeType } from "../types/filmeType";

const createFilme = async (data: MovieFormData): Promise<FilmeType> => {
    const response = await api.post("/filmes", data);
    return response.data;
}

export const useCreateFilme = () => {
    const queryClient = useQueryClient();

    return useMutation<FilmeType, AxiosError, MovieFormData>({
        mutationFn: createFilme,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['filmes'] });
        }
    });
}