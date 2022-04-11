import { useRef } from 'react';
import useFetch from '../../../hooks/useFetch';
import styles from './style.module.css'

export default function NewContact() {
    
    const formRef = useRef(null)
    const {request} = useFetch()

    function handleSubmit(event) {
        event.preventDefault();

        const arr = Array.from(formRef.current.childNodes).filter((node) => {
            return node.name;
        })

        const dados = arr.reduce((prev, curr) => Object.assign(prev, {
            [curr.name]: curr.value
        }), {})

        handleClickCriarContato(dados)

        limparFormulario()

        window.alert(`Usuário ${dados.nome} foi cadastrado.`)
    }

    const limparFormulario = () => {
        const campos = document.querySelectorAll('input')
        campos.forEach((element) => {
            element.value = ''
        })
    }

    const handleClickCriarContato = async (dados) => {

        const contato = {
            nome: dados.nome? dados.nome : '',
            apelido: dados.apelido? dados.apelido : '',
            email: dados.email? dados.email : '',
            notas: dados.notas? dados.notas : '',
            telefones: [
                {
                  tipo: "casa",
                  numero: dados.casa? dados.casa : ''
                },
                {
                  tipo: "trabalho",
                  numero: dados.trabalho? dados.trabalho : ''
                },
                {
                  tipo: "celular",
                  numero: dados.celular? dados.celular : ''
                }
            ],
            endereco: {
                logradouro: dados.logradouro? dados.logradouro : '',
                cidade: dados.cidade? dados.cidade : '',
                estado: dados.estado? dados.estado : '',
                cep: dados.cep? dados.cep : '',
                pais: dados.pais? dados.pais : ''
            }
        }

        const options = {
            method: "POST",
            body: JSON.stringify(contato)
        }
        await request("contact", options)
    }

    return (
        <div>
            <h1 className={styles.h1}>Novo contato</h1>
            <div className={styles.divWrapper}>
                <form className={styles.divWrapper} onSubmit={handleSubmit} ref={formRef}>
                    <label className={styles.label} htmlFor='nome'>Nome: </label>
                    <input name="nome" id="nome" type="text" required></input>
                    

                    <label className={styles.label} htmlFor="email">Email: </label>
                    <input name="email" id="email" type="text"></input>
                   
                    <label className={styles.label} htmlFor="apelido">Apelido: </label>
                    <input name="apelido" id="apelido" type="text"></input>

                    <div className={styles.labelSubtitulo} >Telefones: <br/></div>

                    <label className={styles.label} htmlFor="casa">Casa <br/></label>
                    <input name="casa" id="casa" type="text"></input>

                    <label className={styles.label} htmlFor="trabalho">Trabalho <br/></label>
                    <input name="trabalho" id="trabalho" type="text"></input>

                    <label className={styles.label} htmlFor="celular">Celular <br/></label>
                    <input name="celular" id="celular" type="text"></input>

                    <div className={styles.labelSubtitulo}>Endereco: <br/> </div>
                    <label className={styles.label} htmlFor="logradouro">Logradouro: </label>
                    <input name="logradouro" id="logradouro" type="text"></input><br/>

                    <label className={styles.label} htmlFor="cidade">Cidade: <br/></label>
                    <input name="cidade" id="cidade" type="text"></input>

                    <label className={styles.label} htmlFor="estado">Estado: <br/></label>
                    <input name="estado" id="estado" type="text"></input>

                    <label className={styles.label} htmlFor="nome">Cep: <br/></label>
                    <input name="cep" id="nome" type="text"></input>

                    <label className={styles.label} htmlFor="pais">País: <br/></label>
                    <input name="pais" id="pais" type="text"></input>
                    
                    <label className={styles.label} htmlFor="notas">Notas: <br/></label>
                    <input name="notas" id="notas" type="text"></input>

                    <label className={styles.label} htmlFor="imagem">Foto: </label>
                    <input name="imagem" id="imagem" type="file"></input>

                    <button >Cadastrar Contato</button>
                </form>
            </div>
        </div>
    )
}