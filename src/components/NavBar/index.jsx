import { Link } from 'react-router-dom';

function NavBar() {
    return(
        <>
            <nav className="w-full flex bg-white text-black justify-between p-2 gap-3">

                <div className='flex-1/2 bg-amber-600 flex flex-col justify-center items-center w-20 h-20 rounded-md'>
                    <Link to="/" className="flex flex-col justify-center items-center">
                        <img className='w-15 h-15' src="dashboard.svg" alt="" />
                        <span>Dashboard</span>
                    </Link>
                </div>

                <div className='flex-1/2 flex flex-col justify-center items-center w-20 h-20 rounded-md'>
                    <Link to="/turmas" className="flex flex-col justify-center items-center">
                        <img className='w-15 h-15' src="turmas.svg" alt="" />
                        <span>Turmas</span>
                    </Link>
                </div>

                <div className='flex-1/2 flex flex-col justify-center items-center w-20 h-20 rounded-md'>
                    <Link to="/" className="flex flex-col justify-center items-center">
                        <img className='w-15 h-15' src="licoes.svg" alt="" />
                        <span>Lições</span>
                    </Link>
                </div>

                <div className='flex-1/2 flex flex-col justify-center items-center w-20 h-20 rounded-md'>
                    <Link to="/login" className="flex flex-col justify-center items-center">
                        <img className='w-15 h-15' src="sair.svg" alt="" />
                        <span>Sair</span>
                    </Link>
                </div>
                
            </nav>
        </>
    )
}

export default NavBar;