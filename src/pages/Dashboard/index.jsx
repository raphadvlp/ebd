import NavBar from '../../components/NavBar';
import styles from './style.module.css';

function Dashboard() {
    return(
        <>
            <div className={styles.container}>
                <h1>Dashboard</h1>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <span>Total de Alunos</span>
                        <p>150</p>
                    </div>
                    <div className={styles.card}>
                        <span>Presentes</span>
                        <p>120</p>
                    </div>
                    <div className={styles.card}>
                        <span>Faltantes</span>
                        <p>30</p>
                    </div>
                    <div className={styles.card}>
                        <span>Professores</span>
                        <p>10</p>
                    </div>
                </div>
                <div className={styles.avisos}>
                    <span>Live da Semana</span>
                </div>
                <div className={styles.cardInfo}>
                    <p>Algumas informações essenciais para o funcionamento da escola bíblica</p>
                </div>
            </div>
            <NavBar />
        </>
    )
}

export default Dashboard;