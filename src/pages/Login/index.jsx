import styles from './style.module.css';

function Login() {
    return (
        <>
            <div className={styles.container}>
                <header>
                    <img src="logo.png" alt="Logo Igreja" />
                    <span>Escola Bíblica Dominical</span>
                </header>
                <form action="">
                    <input type="text" name="" id="" placeholder='Usuário'/>
                    <input type="password" name="" id="" placeholder='Senha'/>

                    <button type="submit">Entrar</button>
                </form>
                <div className={styles.subtitle}>
                    <span>Assembléia de Deus São João de Meriti</span>
                </div>
            </div>
            <footer>
                <span>DreamVia - Desenvolvido por Raphael Rodrigues</span>
            </footer>
        </>
    )
}

export default Login;