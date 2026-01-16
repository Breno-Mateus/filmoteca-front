import CardMovies from "../CardMovies/CardMovies";
import { useMovieList } from "../../hooks/useMovieList";

function SectionMovies() {
    const { movies, isLoading, isError, isEmpty } = useMovieList();

    return (
        <section className="mt-8">
            <div className="w-full max-w-5xl mx-auto px-5 flex flex-col">
                <h2 className="text-2xl font-bold py-4 text-gray-800">Meus filmes</h2>
                
                {isLoading && (
                    <div className="text-center py-10 text-gray-500 animate-pulse">
                        Carregando filmes...
                    </div>
                )}

                {isError && (
                    <div className="text-center py-10 text-red-500 bg-red-50 rounded-lg">
                        Erro ao carregar lista. Verifique sua conexão.
                    </div>
                )}

                {!isLoading && !isError && isEmpty && (
                    <div className="text-center py-10 text-gray-400 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                        Nenhum filme cadastrado. Adicione o primeiro!
                    </div>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-10">
                    {movies.map((filme) => (
                        <CardMovies 
                            key={filme.id}
                            filme={filme}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SectionMovies;