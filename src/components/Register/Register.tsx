import Forms from "../Forms/Forms";

function Register() { 
    return (
        <section className="bg-white">
            <div className="w-full max-w-250 mx-auto px-5 flex flex-col">
                <h2 className="text-2xl font-bold py-4">Novo Filme</h2>
                <div>
                    <Forms />
                </div>
            </div>
        </section>
    )
}

export default Register;