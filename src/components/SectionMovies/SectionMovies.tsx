import CardMovies from "../CardMovies/CardMovies";

function SectionMovies() {
    return (
        <section className="">
            <div className="w-full max-w-250 mx-auto px-5 flex flex-col">
                <h2 className="text-2xl font-bold py-4">Meus filmes</h2>
                <div className="grid grid-cols-2 gap-4 pb-10">
                    <CardMovies />
                    <CardMovies />
                    <CardMovies />
                    <CardMovies />
                </div>
            </div>
        </section>
    )
}

export default SectionMovies;