import Forms from "../Forms/Forms";

function Register() { 
    return (
        <section className="bg-white py-4 md:py-8">
            <div className="w-full max-w-5xl mx-auto px-4 md:px-6 flex flex-col gap-4">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                    Novo Filme
                </h2>    
                <div className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-100 shadow-sm">
                    <Forms />
                </div>
            </div>
        </section>
    )
}

export default Register;