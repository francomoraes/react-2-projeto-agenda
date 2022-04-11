import { useCallback, useState } from "react"
import {useStorage} from './useStorage'

const useFetch = () => {
    const urlBase = "http://localhost:5000/v1/"
    const [loading, setLoading] = useState(null)
    const [token, setToken] = useStorage("token", "")
     
    const request = useCallback(async (rota, options = {}) => {

        const headers = new Headers()
        headers.append("Content-type", "application/json")
        headers.append("Authorization", `Bearer ${token}`)
        options.headers = headers

        let response
        let json

        try {
            setLoading(true)
            response = await fetch(urlBase + rota, options)
            json = await response.json();

            if(rota === "auth" && options?.method === "POST") {
                setToken(json.data.token)
            }
        }
        catch(err){
            json = null
            console.log("Deu ruim!", err)
        }
        finally {
            setLoading(false)
            return { response, json }
        }
    }, [])

    return { loading, request }
}

export default useFetch