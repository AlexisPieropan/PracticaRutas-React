import { useParams } from "react-router";
import ListPosts from "../components/ListPosts.jsx";

const SubCategoria = ()=>{
    const {subcategoria} =useParams()
    return(
        <ListPosts url={`/posts?subcategoria=${subcategoria}`} />
    )
}

export default SubCategoria