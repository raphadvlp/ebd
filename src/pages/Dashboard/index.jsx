// import NavBar from '../../components/NavBar';


// function Dashboard() {
//     return(
//         <>
//             <div className="container w-full mx-auto flex flex-col items-center p-5">
//                 <div className='text-3xl font-bold mb-15'>
//                     <h1>Dashboard</h1>
//                 </div>
//                 <div className="grid grid-cols-2 gap-5 mb-8 w-full">

//                     <div className="text-lg w-full h-30 bg-white text-black shadow-md shadow-gray-400 rounded-md flex justify-center items-center flex-col">
//                         <span>Total de Alunos</span>
//                         <p className='font-bold text-3xl'>150</p>
//                     </div>
                                        
//                     <div className="text-lg w-full h-30 bg-white text-black shadow-md shadow-gray-400 rounded-md flex justify-center items-center flex-col">
//                         <span>Presentes</span>
//                         <p className='font-bold text-3xl'>120</p>
//                     </div>
                                        
//                     <div className="text-lg w-full h-30 bg-white text-black shadow-md shadow-gray-400 rounded-md flex justify-center items-center flex-col">
//                         <span>Faltantes</span>
//                         <p className='font-bold text-3xl'>30</p>
//                     </div>
                                        
//                     <div className="text-lg w-full h-30 bg-white text-black shadow-md shadow-gray-400 rounded-md flex justify-center items-center flex-col">
//                         <span>Professores</span>
//                         <p className='font-bold text-3xl'>20</p>
//                     </div>
                    
//                 </div>
//                 <div className="bg-yellow-300 w-full h-8 rounded-sm flex justify-center items-center mb-8">
//                     <span className='text-black font-bold'>Live da Semana</span>
//                 </div>
//                 <div className="w-full bg-white flex justify-center items-center h-30 p-5 rounded-sm">
//                     <p className='text-black text-center'>Algumas informações essenciais para o funcionamento da escola bíblica</p>
//                 </div>
//             </div>
//             <NavBar className="fixed bottom-0 w-full"/>
//         </>
//     )
// }

// export default Dashboard;

import { useEffect, useRef, useState } from 'react';
import NavBar from '../../components/NavBar';

function Dashboard() {
    const [showNav, setShowNav] = useState(true);
    const lastScrollY = useRef(0); // ← Correto!

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                // Rolando para baixo -> esconder NavBar
                setShowNav(false);
            } else {
                // Rolando para cima -> mostrar NavBar
                setShowNav(true);
            }
            lastScrollY.current = currentScrollY; // Atualizando o valor persistente
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="min-h-screen flex flex-col pb-24"> {/* Espaço para NavBar não sobrepor conteúdo */}
                <div className="container w-full mx-auto flex flex-col items-center p-5 flex-grow">
                    <div className='text-3xl font-bold mb-15'>
                        <h1>Dashboard</h1>
                    </div>
                    <div className="grid grid-cols-2 gap-5 mb-8 w-full">
                        {/* Cards */}
                        <div className="text-lg w-full h-30 bg-white text-black shadow-md shadow-gray-400 rounded-md flex justify-center items-center flex-col">
                            <span>Total de Alunos</span>
                            <p className='font-bold text-3xl'>150</p>
                        </div>
                        <div className="text-lg w-full h-30 bg-white text-black shadow-md shadow-gray-400 rounded-md flex justify-center items-center flex-col">
                            <span>Presentes</span>
                            <p className='font-bold text-3xl'>120</p>
                        </div>
                        <div className="text-lg w-full h-30 bg-white text-black shadow-md shadow-gray-400 rounded-md flex justify-center items-center flex-col">
                            <span>Faltantes</span>
                            <p className='font-bold text-3xl'>30</p>
                        </div>
                        <div className="text-lg w-full h-30 bg-white text-black shadow-md shadow-gray-400 rounded-md flex justify-center items-center flex-col">
                            <span>Professores</span>
                            <p className='font-bold text-3xl'>20</p>
                        </div>
                        <div className="text-lg w-full h-30 bg-white text-black shadow-md shadow-gray-400 rounded-md flex justify-center items-center flex-col">
                            <span>Professores</span>
                            <p className='font-bold text-3xl'>20</p>
                        </div>
                        <div className="text-lg w-full h-30 bg-white text-black shadow-md shadow-gray-400 rounded-md flex justify-center items-center flex-col">
                            <span>Professores</span>
                            <p className='font-bold text-3xl'>20</p>
                        </div>
                        <div className="text-lg w-full h-30 bg-white text-black shadow-md shadow-gray-400 rounded-md flex justify-center items-center flex-col">
                            <span>Professores</span>
                            <p className='font-bold text-3xl'>20</p>
                        </div>
                        <div className="text-lg w-full h-30 bg-white text-black shadow-md shadow-gray-400 rounded-md flex justify-center items-center flex-col">
                            <span>Professores</span>
                            <p className='font-bold text-3xl'>20</p>
                        </div>
                        <div className="text-lg w-full h-30 bg-white text-black shadow-md shadow-gray-400 rounded-md flex justify-center items-center flex-col">
                            <span>Professores</span>
                            <p className='font-bold text-3xl'>20</p>
                        </div>
                        <div className="text-lg w-full h-30 bg-white text-black shadow-md shadow-gray-400 rounded-md flex justify-center items-center flex-col">
                            <span>Professores</span>
                            <p className='font-bold text-3xl'>20</p>
                        </div>
                        <div className="text-lg w-full h-30 bg-white text-black shadow-md shadow-gray-400 rounded-md flex justify-center items-center flex-col">
                            <span>Professores</span>
                            <p className='font-bold text-3xl'>20</p>
                        </div>
                        <div className="text-lg w-full h-30 bg-white text-black shadow-md shadow-gray-400 rounded-md flex justify-center items-center flex-col">
                            <span>Professores</span>
                            <p className='font-bold text-3xl'>20</p>
                        </div>
                    </div>
                    <div className="bg-yellow-300 w-full h-8 rounded-sm flex justify-center items-center mb-8">
                        <span className='text-black font-bold'>Live da Semana</span>
                    </div>
                    <div className="w-full bg-white flex justify-center items-center h-30 p-5 rounded-sm">
                        <p className='text-black text-center'>Algumas informações essenciais para o funcionamento da escola bíblica</p>
                    </div>
                </div>
            </div>

            {/* NavBar Floating Up with Blur Effect */}
            <div className={`fixed bottom-0 left-0 w-full backdrop-blur-md bg-white/80 shadow-md transition-all duration-500 ease-in-out ${showNav ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}>
                <NavBar />
            </div>
        </>
    )
}

export default Dashboard;
