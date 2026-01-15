import { useGetMovies } from "../services/getMovies";

export const useMovieList = () => {
    const { data, isLoading, isError, error, refetch, isFetching } = useGetMovies();

    return {
        movies: data || [], 
        isLoading,
        isError,
        error,
        refetch,
        isFetching, 
        isEmpty: data?.length === 0 
    };
}