import { useState ,useEffect} from "react"
import "../assets/css/componentes/card.css"
import { useParams,useNavigate } from "react-router-dom"
import { buscar } from "../api/api.js"

const Post = ({url}) => {

    const [post,setPost] =useState({})

    const { id }=useParams()

    const navigate =useNavigate(); //nos permite navegar a una ruta en especifico 
    
    //La funcion useEffect se dispara cuando cambia el id por eso el ",[id]"
    useEffect(()=>{
        buscar(`/posts/${id}`,setPost).catch(()=>{
            navigate("/not-found"); //llama a la ruta en app que tiene un "*" ya que no se encuentra esa ruta
        })
    },[id])


 return(
   <main className = "container flex flex--center">
     <article className = "card post">
       <h2 className = "post-card__title">{post.title}</h2>
       <p className = "text__card">{post.body}</p>
     </article>
   </main>
 )
}

export default Post