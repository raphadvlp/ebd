import { Link } from 'react-router-dom';
import NavBar from './../../components/NavBar/index';



// Os cards tem que se tornar links

function Turmas() {
    return (
        <>
            <div className="flex flex-col p-5">
                <div className="w-full flex justify-center items-center text-3xl font-bold mb-15">
                    <h1>Turmas</h1>
                    
                </div>
                <div className="h-96 overflow-y-auto flex flex-col gap-1 pr-3">
                        <div className="flex justify-between items-center">
                            <Link className="bg-white w-3/4 rounded-md text-black p-2">
                                    <span>Adolescentes</span>
                                    <p>09:00h - 10:30h</p>
                            </Link>
                            <div className=" flex gap-5">
                                <div className="">
                                    <Link to="">
                                        <img className='w-9' src="edit.svg" alt="" />
                                    </Link>
                                </div>
                                <div className="">
                                    <Link to="">
                                        <img className='w-9' src="delete.svg" alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                    

                    
                </div>
                <Link to="/cadastro/turmas" className='bg-amber-600 mt-5 h-10 rounded-md flex justify-center items-center'>
                    <span>Cadastrar</span>
                </Link>
            </div>
            <div className="fixed bottom-0 left-0 w-full">
                <NavBar />
            </div>
        </>
    )
}

export default Turmas;