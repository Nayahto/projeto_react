// importes necessarios para o funcionamento da funcao incluindo hooks e funcoes externas//
import './detailsDelete.css';
import { useHistory, useParams } from 'react-router-dom';
import FecthData from '../../functions/fetch';
import { Link } from 'react-router-dom';

// funcao necessaria para encontrar o item pelo seu identificador (getById)//
function Details() {
  /* O useHistory é a um componente que é usado dentro de uma página para levar o usuário para outra rota do site.
 Para usa-la, deve-se primeiro instancia-la em uma variável,
  depois usar a função push e colocar a rota que você quer.
  fonte: https://lucassr.medium.com */
  const history = useHistory();

  /* useParams é um React Router Hook que permite acessar parâmetros dinâmicos na URL.
 fonte: https://medium.com/ */
  const { id } = useParams();

  // funcao externa responsavel por todas as requisicoes//
  const [anotacoes, pendente, erro] = FecthData(
    'http://localhost:3002/todos/' + id,
  );

  // funcao que lidara com a requisicao de delecao do item selecionado pelo seu identificador//
  const handleDelete = () => {
    fetch('http://localhost:3002/apagar/' + id, { method: 'DELETE' }).then(
      () => {
        console.log('item deletado');
        history.push('/');
      },
    );
  };

  return (
    // construcao do componente React//
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
// exportacao da funcao para que ela possa ser usada em outras partes do projeto//
export default Details;

/* #OBSERVACAO: ainda nessa pasta porem outro arquivo é possivel notar um arquivo css que e responsavel
 pela estilizacao apenas das classes e identificadores desse arquivo*/
