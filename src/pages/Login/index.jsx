// import styles from './style.module.css';

// function Login() {
//     return (
//             <div className="w-screen h-screen p-5 bg-gray-900 text-white overflow-hidden">
//                 <div>
//                     <header className="flex flex-col justify-center items-center">
//                         <div>
//                             <img src="logo.png" alt="Logo Igreja" />
//                         </div>
//                         <div>
//                             <h1 className="text-3xl font-bold py-6 text-center">Escola Bíblica Dominical</h1>
//                         </div>
//                     </header>
//                 </div>
//                 <div>
//                     <form className="flex flex-col flex-grow justify-center" action="">
//                         <div className="flex flex-col">
//                             <label htmlFor="usuarioField">Usuário</label>
//                             <input className="bg-gray-700 h-12 rounded-md mb-5 p-3 outline-yellow-500 w-full text-lg" type="text" id="usuarioField" placeholder='Insira seu usuário'/>
//                         </div>
                        
//                         <div className="flex flex-col">
//                             <label htmlFor="senhaField">Senha</label>
//                             <input className="bg-gray-700 h-12 rounded-md p-3 outline-yellow-500 w-full text-lg" type="password" id="senhaField" placeholder='Insira sua senha'/>
//                         </div>

//                         <div className="mt-6">
//                             <button className="w-full p-2 rounded-md text-lg font-bold bg-amber-600" type="submit">Entrar</button>
//                         </div>
//                     </form>
//                 </div>
//                 <div className="w-full text-center mt-4">
//                     <span>Assembléia de Deus São João de Meriti</span>
//                 </div>
//             </div>
//     )
// }

function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
            <div className="w-full max-w-sm">
                <header className="flex flex-col items-center mb-8">
                    <img src="logo.png" alt="Logo Igreja" className="w-24 h-24 object-contain mb-4" />
                    <h1 className="text-2xl sm:text-3xl font-bold text-center">Escola Bíblica Dominical</h1>
                </header>

                <form className="flex flex-col gap-5">
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
        </div>
    );
}

export default Login;