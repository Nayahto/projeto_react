// importes necessarios para o funcionamento do componente//
import { useEffect, useState } from 'react';

/* funcao responsavel por todas as requisicoes
e uma funcao que vai funcionar como uma funcao core para todas as requisicoes,
com suas particularidades dependendo de onde ele seja instanciada
*/
const FecthData = (url) => {
  const [anotacoes, setAnotacoes] = useState([]);
  const [pendente, setPendente] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error('nao foi possivel localizar os dados');
        }
        setPendente(false);
        return res.json();
      })
      .then((data) => {
        setPendente(false);
        setErro(null);
        setAnotacoes(data);
      })
      .catch((err) => {
        setPendente(false);
        setErro(err.message);
      });
  }, []);

  return [anotacoes, pendente, erro];
};
// exportacao da funcao para que ela possa ser usada em outras partes do projeto//
export default FecthData;
