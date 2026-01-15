import type { FilmeType } from "../../types/filmeType";

interface CardMoviesProps {
    filme: FilmeType;
}

function CardMovies({ filme }: CardMoviesProps) {
    return (
        <div className="bg-white rounded-lg shadow-md flex flex-col justify-between gap-2 h-full">
            <header className="bg-secondary rounded-lg m-3 p-4 text-white font-bold text-lg truncate">
                {filme.titulo}
            </header>
            
            <div className="flex flex-col gap-2 m-4 text-gray-700">
                <p>
                    <span className="font-semibold">Diretor:</span> {filme.diretor}
                </p>
                <p>
                    <span className="font-semibold">Nota:</span> &#x2B50; {filme.nota}
                </p>
            </div>

            <footer className="bg-gray-100 p-4 border-t border-gray-200 rounded-b-lg mt-auto">
                <button 
                    className="bg-red-500 p-2 w-full rounded-lg text-white cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                    onClick={() => console.log(`Deletar filme ID: ${filme.id}`)}
                > 
                    &#128465; Excluir
                </button>
            </footer>
        </div>
    )
}

export default CardMovies;