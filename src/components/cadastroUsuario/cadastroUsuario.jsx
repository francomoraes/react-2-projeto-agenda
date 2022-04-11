import useFetch from '../../hooks/useFetch'
import styles from './style.module.css'

export default function CadastroUsuario() {

    const { loading, request } = useFetch()

    const handleClickCadastro = async () => {
        let inputEmail = document.querySelector('#email')?.value
        let inputSenha = document.querySelector('#senha')?.value
        let inputNome = document.querySelector('#nome')?.value
        // let inputFoto = document.querySelector('#foto').input

        const options = {
            method: "POST",
            body: JSON.stringify({ 
                email: inputEmail, 
                senha: inputSenha,
                nome: inputNome 
            })
        }

        const resp = await request("user", options)
        if(resp.json.status === 200){ 
            document.querySelector('#email').value = ''
            document.querySelector('#senha').value = ''
            document.querySelector('#nome').value = ''
            window.alert("Usuario cadastrado com sucesso")
        } else if(resp.json.status === 409) {
            window.alert("Email já cadastrado.")
        } else {
            window.alert("Erro inesperado. Tente novamente")
        }
    }

    return (
        <div className={styles.divWrapper}>
            <h2 className={styles.titulo}>Cadastro de Usuario</h2>

            <label htmlFor="email" className={styles.label}>Email: </label>
            <input name="email" id="email" type='email' required></input>

            <label htmlFor='senha' className={styles.label}>Senha: </label>
            <input name='senha' id='senha' type='password' required></input>

            <label htmlFor='nome' className={styles.label}>Nome: </label>
            <input name='nome' id='nome' type='text' required></input>

            <label htmlFor='foto' className={styles.labelFoto}>Selecionar Foto </label>
            <input className={styles.inputFoto} name='foto' id='foto' type='file'></input>

            <button className={styles.button} onClick={handleClickCadastro}>Cadastrar</button>
        </div>
    )
}