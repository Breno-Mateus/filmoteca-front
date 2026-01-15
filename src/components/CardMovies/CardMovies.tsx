function CardMovies() {
    return (
        <div className="bg-white rounded-lg shadow-md flex flex-col justify-between gap-2">
            <header className="bg-secondary rounded-lg m-3 p-4 text-white font-bold text-lg">
                Matrix
            </header>
            <div className="flex flex-col gap-2 m-4">
                <p>Diretor: Matrix</p>
                <p>Nota: &#x2B50; 8</p>
            </div>
            <footer className="bg-smooth p-4 border-y border-gray-300 rounded-b-lg">
                <button className="bg-red-500 p-2 rounded-lg text-white cursor-pointer hover:opacity-90 transition-opacity"> &#128465; Excluir</button>
            </footer>
        </div>
    )
}

export default CardMovies;