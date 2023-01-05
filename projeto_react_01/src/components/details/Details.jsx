
import './detailsDelete.css'
import { useParams } from "react-router-dom"
import FecthData from "../../functions/fetch"

function Details (){

    const { id } = useParams()
    const [anotacoes, pendente, erro] = FecthData('http://localhost:3002/todos/' + id)

    return(
        <>
        <div className="personalizarDetalhes">
            {pendente && <div><h3>carregando...</h3></div>}
            {erro && <div><h3>{erro}</h3></div>}
                <h2>{anotacoes.title}</h2>
                <div id="personalizarParagrafo">
                <p>{anotacoes.text}</p>
                </div>
            </div>
        </>
    )
}

export default Details