// importes necessarios para o funcionamento do componente//
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Form.css';

// componente para a criacao do item//
function Form() {
  /* O useState é um Hook de controle de estado para componentes React
  fonte: https://dev.to/ */
  const [pendente, setPendente] = useState(false);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  /* O useHistory é a um componente que é usado dentro de uma página para levar o usuário para outra rota do site.
 Para usa-la, deve-se primeiro instancia-la em uma variável,
  depois usar a função push e colocar a rota que você quer.
  fonte: https://lucassr.medium.com */
  const history = useHistory();

  // funcao responsavel pela requisicao da rota de cricao//
  const handleSubmit = (e) => {
    e.preventDefault();
    const postBody = { title, text };
    setPendente(true);

    fetch('http://localhost:3002/criar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postBody),
    }).then(() => {
      console.log('anotado');
      setPendente(false);
    });
    history.push('/');
  };
  return (
    // construcao do componente React//
    <>
      <div id="personalizarFormContainer">
        <h2>Anotação</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Titulo</label>
          <input
            type="text"
            placeholder="Insira o titulo"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label htmlFor="text">texto</label>
          <input
            type="text"
            placeholder="Insira o Texto!"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />

          {!pendente && <button type="submit">Anotar</button>}
          {pendente && (
            <button disabled type="submit">
              Anotando...
            </button>
          )}
        </form>
      </div>
    </>
  );
}

// exportacao da funcao para que ela possa ser usada em outras partes do projeto//
export default Form;

/* #OBSERVACAO: ainda nessa pasta porem outro arquivo é possivel notar um arquivo css que e responsavel
 pela estilizacao apenas das classes e identificadores desse arquivo*/
