import { Link, Outlet } from "react-router-dom";
import styles from './style.module.css'


export default function LoggedUser() {

    return (
        <div className={styles.divWrapper}>
            <Link to="/">Pagina Inicial</Link>
            <h2 className={styles.title}>Usuário Logado</h2>
            <div className={styles.subtitle}><Link to='contacts'>Contatos</Link></div>
            <div className={styles.subtitle}><Link to='newcontact'>Novo Contato</Link></div>
            <Outlet/>
        </div>
    )
}