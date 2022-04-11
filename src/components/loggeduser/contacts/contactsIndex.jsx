import styles from './style.module.css';
import React, { useState } from "react";
import useFetch from "../../../hooks/useFetch";

export default function Contacts() {

    const [contatos, setContatos] = useState([])
    const { request } = useFetch()

    const handleClickBuscarContatos = async () => {
        
        const resp = await request("contact")
        setContatos(resp.json.data || [])
        console.log("resp", resp)
    }

    const alterarContato = async () => {
    }
    const removerContato = async () => {
    }
    const maisInformacoes = () => {
    }

    return (
        <div className={styles.wrapperContacts}>
            <h3 className={styles.h3}>Contatos do Usuario Logado</h3>
            <div className={styles.contactsList}>
                <label htmlFor="busca" >Buscar Contatos</label>
                <input className={styles.input} name="busca" id="busca"></input>
                <button className={styles.button} onClick={handleClickBuscarContatos}>Buscar</button>
                <ul className={styles.ul}>
                  {
                    contatos.map((contato) => {
                      return(
                        <div className={styles.itemWrapper} key={contato.id}>
                          <li className={styles.listItem}> Nome: {contato.nome} </li>
                          <li className={styles.listItem}> <img className={styles.imagemDeContato} src={`data:image/jpeg;base64,${contato.foto}`} alt={contato.nome}/> </li>
                          <li className={styles.listItem}> 
                            <button onClick={alterarContato}>Alterar</button> 
                            <button onClick={removerContato}>Remover</button> 
                            <button idcontato={contato.id} onClick={maisInformacoes}>Mais Informações</button> 
                          </li>
                        </div>
                      )
                    })
                  }
                </ul>
            </div>
        </div>
    )
}