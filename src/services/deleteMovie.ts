import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from './axiosInstance';
import { AxiosError } from 'axios';

const deleteMovieRequest = async (id: number) => {
    const response = await api.delete(`/filmes/${id}`);
    return response.data;
}

export const useDeleteMovie = () => {
    const queryClient = useQueryClient();

    return useMutation<void, AxiosError, number>({
        mutationFn: deleteMovieRequest,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['movies'] });
        },
        onError: (error) => {
            console.error("Error ao deletar:", error.response?.data);
        }
    });
}