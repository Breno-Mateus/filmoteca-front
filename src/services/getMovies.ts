import { useQuery } from "@tanstack/react-query";
import { api } from "./axiosInstance";
import type { FilmeType } from "../types/filmeType";
import type { AxiosError } from "axios";

const getMovies = async () => {
    const response = await api.get("/filmes");
    return response.data;
}

export const useGetMovies = () => {
    return useQuery<FilmeType[], AxiosError>({
        queryKey: ['movies'],
        queryFn: getMovies,
    })
}
