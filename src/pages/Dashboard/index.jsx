import NavBar from '../../components/NavBar';


function Dashboard() {
    return(
        <>
            <div className="">
                <h1>Dashboard</h1>
                <div className="">
                    <div className="">
                        <span>Total de Alunos</span>
                        <p>150</p>
                    </div>
                </div>
                <div className="">
                    <span>Live da Semana</span>
                </div>
                <div className="">
                    <p>Algumas informações essenciais para o funcionamento da escola bíblica</p>
                </div>
            </div>
            <NavBar />
        </>
    )
}

export default Dashboard;