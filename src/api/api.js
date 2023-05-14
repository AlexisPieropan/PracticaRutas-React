import axios from "axios"  //se pueden hacer peticiones http 


//Todas las peticiones van a ir al url indicado
export const api = axios.create({
    baseURL: "http://localhost:5000"
})


export const buscar = async (url,setData)=>{
    const respuesta = await api.get(url)
    setData(respuesta.data);//axios mete los datos en la llave "data"
}