import './detailsDelete.css';
import { useHistory, useParams } from 'react-router-dom';
import FecthData from '../../functions/fetch';
import { Link } from 'react-router-dom';
function Details() {
  const history = useHistory();
  const { id } = useParams();
  const [anotacoes, pendente, erro] = FecthData(
    'http://localhost:3002/todos/' + id,
  );
  const handleDelete = () => {
    fetch('http://localhost:3002/apagar/' + id, { method: 'DELETE' }).then(
      () => {
        console.log('item deletado');
        history.push('/');
      },
    );
  };

  return (
    <>
      <div className="personalizarDetalhes">
        {pendente && (
          <div>
            <h3>carregando...</h3>
          </div>
        )}
        {erro && (
          <div>
            <h3>{erro}</h3>
          </div>
        )}
        <h2>{anotacoes.title}</h2>
        <div id="personalizarParagrafo">
          <p>{anotacoes.text}</p>
          <div id="personalizarBotoes">
            {!erro && <button onClick={handleDelete}>Apagar</button>}
            <button>
              <Link to={`/edit/${anotacoes._id}`} id="personalizarLink">
                Editar
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
