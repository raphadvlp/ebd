import { Link } from "react-router-dom";
import Dashboard from './../Dashboard/index';

function NotFound() {
    return(
        <div className="w-dvw h-dvh flex flex-col justify-center items-center">
            <h1 className="text-3xl mb-3">Página não encontrada!</h1>
            <span className="text-3xl mb-3">ERRO 404</span>
            <Link to="/" className="underline">
                Página Dashboard
            </Link>
        </div>
    )
}

export default NotFound;