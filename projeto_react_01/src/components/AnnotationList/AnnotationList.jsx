import { Link } from "react-router-dom";
import FecthData from "../../functions/fetch"


const AnnotationList = () => {

    const [anotacoes,pendente, erro] = FecthData('http://localhost:3002/todos')


    return (     
    <> 
    {pendente && <div><h3>carregando...</h3></div>}
    {erro && <div><h3>{erro}</h3></div>}
    <div className="anotacoes">
    { anotacoes.map((anotacao) => {
        return <div className="personalizarAnotacoes" key={anotacao._id}>
            <h2>{anotacao.title}</h2>
            <Link to={`/details/${anotacao._id}`}>more...</Link>
        </div>;
        
    })}
    </div> 
    </>
);
}
 
export default AnnotationList;