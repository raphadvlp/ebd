
function Login() {
    return (
        <div className="h-dvh flex items-center justify-center flex-col bg-gray-900 text-white px-4">
                <header className="flex flex-col items-center mb-8">
                    <img src="logo.png" alt="Logo Igreja" className=" object-contain mb-8 w-50 h-50" />
                    <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4">Escola Bíblica Dominical</h1>
                </header>

                <form className="flex flex-col gap-5 w-full">
                    <div className="flex flex-col">
                        <label htmlFor="usuarioField">Usuário</label>
                        <input
                            className="bg-gray-700 h-12 rounded-md p-3 outline-yellow-500 w-full text-lg"
                            type="text"
                            id="usuarioField"
                            placeholder="Insira seu usuário"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="senhaField">Senha</label>
                        <input
                            className="bg-gray-700 h-12 rounded-md p-3 outline-yellow-500 w-full text-lg"
                            type="password"
                            id="senhaField"
                            placeholder="Insira sua senha"
                        />
                    </div>

                    <button
                        className="w-full py-3 rounded-md text-lg font-bold bg-amber-600 hover:bg-amber-700 transition-colors"
                        type="submit"
                    >
                        Entrar
                    </button>
                </form>

                <div className="w-full text-center mt-8 text-sm text-gray-300">
                    Assembléia de Deus São João de Meriti
                </div>
            </div>
    );
}

export default Login;
