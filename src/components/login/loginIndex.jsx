import { useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { useStorage } from '../../hooks/useStorage'
import styles from './style.module.css'

export default function Login() {

    const navigate = useNavigate()
    const goToLoggedArea = () => navigate('/loggeduser')
    const [token, setToken] = useStorage("token", "")

    
    const { request } = useFetch()
    
    const handleClickLogin = async () => {
        let inputEmail = document.querySelector('#email')?.value
        let inputSenha = document.querySelector('#password')?.value
        
        const options = {
            method: "POST",
            body: JSON.stringify({ email: inputEmail, senha: inputSenha })
        }
        const resp = await request("auth", options)

        if(!resp.json){
            window.alert("Dados incorretos!")
        } else if(resp.json.status != 200){ 
            window.alert("Dados incorretos!")
        } else {
            localStorage.setItem("token", resp.json.data.token)
            goToLoggedArea() 
        }
    }

    return (
        <div className={styles.divWrapper}>
            <h2>Login</h2>
            <label className={styles.label} htmlFor="email">Email: </label>
            <input name="email" id="email" type='email' ></input>
            <label className={styles.label} htmlFor="password" >Senha: </label>
            <input name="password" id="password" type='password' ></input>

            <button className={styles.button} onClick={handleClickLogin}>Login</button>
        </div>
    )
}