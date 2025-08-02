import NavBar from './../../components/NavBar/index';
import styles from './style.module.css';

// Os cards tem que se tornar links

function Turmas() {
    return (
        <>
            <div className={styles.container}>
                <h1>Turmas</h1>
                <div className={styles.cards}>

                    <div className={styles.card}>
                        <div className={styles.info}>
                            <span>Adolescentes</span>
                            <p>09:00h - 10:30h</p>
                        </div>
                        <div className={styles.actions}>
                            <div className={styles.edit}>
                                <img src="edit.svg" alt="" />
                            </div>
                            <div className={styles.edit}>
                                <img src="delete.svg" alt="" />
                            </div>
                        </div>
                    </div>
                                        
                    <div className={styles.card}>
                        <div className={styles.info}>
                            <span>Adolescentes</span>
                            <p>09:00h - 10:30h</p>
                        </div>
                        <div className={styles.actions}>
                            <div className={styles.edit}>
                                <img src="edit.svg" alt="" />
                            </div>
                            <div className={styles.edit}>
                                <img src="delete.svg" alt="" />
                            </div>
                        </div>
                    </div>
                                        
                    <div className={styles.card}>
                        <div className={styles.info}>
                            <span>Adolescentes</span>
                            <p>09:00h - 10:30h</p>
                        </div>
                        <div className={styles.actions}>
                            <div className={styles.edit}>
                                <img src="edit.svg" alt="" />
                            </div>
                            <div className={styles.edit}>
                                <img src="delete.svg" alt="" />
                            </div>
                        </div>
                    </div>
                                        
                    <div className={styles.card}>
                        <div className={styles.info}>
                            <span>Adolescentes</span>
                            <p>09:00h - 10:30h</p>
                        </div>
                        <div className={styles.actions}>
                            <div className={styles.edit}>
                                <img src="edit.svg" alt="" />
                            </div>
                            <div className={styles.edit}>
                                <img src="delete.svg" alt="" />
                            </div>
                        </div>
                    </div>
                                        
                    <div className={styles.card}>
                        <div className={styles.info}>
                            <span>Adolescentes</span>
                            <p>09:00h - 10:30h</p>
                        </div>
                        <div className={styles.actions}>
                            <div className={styles.edit}>
                                <img src="edit.svg" alt="" />
                            </div>
                            <div className={styles.edit}>
                                <img src="delete.svg" alt="" />
                            </div>
                        </div>
                    </div>
                                        
                    <div className={styles.card}>
                        <div className={styles.info}>
                            <span>Adolescentes</span>
                            <p>09:00h - 10:30h</p>
                        </div>
                        <div className={styles.actions}>
                            <div className={styles.edit}>
                                <img src="edit.svg" alt="" />
                            </div>
                            <div className={styles.edit}>
                                <img src="delete.svg" alt="" />
                            </div>
                        </div>
                    </div>
                                        
                    <div className={styles.card}>
                        <div className={styles.info}>
                            <span>Adolescentes</span>
                            <p>09:00h - 10:30h</p>
                        </div>
                        <div className={styles.actions}>
                            <div className={styles.edit}>
                                <img src="edit.svg" alt="" />
                            </div>
                            <div className={styles.edit}>
                                <img src="delete.svg" alt="" />
                            </div>
                        </div>
                    </div>
                                        
                    <div className={styles.card}>
                        <div className={styles.info}>
                            <span>Adolescentes</span>
                            <p>09:00h - 10:30h</p>
                        </div>
                        <div className={styles.actions}>
                            <div className={styles.edit}>
                                <img src="edit.svg" alt="" />
                            </div>
                            <div className={styles.edit}>
                                <img src="delete.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    
                </div>
                <button type="submit">Cadastrar</button>
            </div>
            <NavBar />
        </>
    )
}

export default Turmas;