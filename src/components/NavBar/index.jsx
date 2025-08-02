import { Link } from 'react-router-dom';

function NavBar() {
    return(
        <>
            <nav className="">
                <Link to="/" className="">
                    <img src="dashboard.svg" alt="" />
                    <span>Dashboard</span>
                </Link>
                <Link to="/turmas">
                    <img src="turmas.svg" alt="" />
                    <span>Turmas</span>
                </Link>
                <Link to="/">
                    <img src="licoes.svg" alt="" />
                    <span>Lições</span>
                </Link>
                <Link to="/">
                    <img src="sair.svg" alt="" />
                    <span>Sair</span>
                </Link>
            </nav>
        </>
    )
}

export default NavBar;