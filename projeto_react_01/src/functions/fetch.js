import { useEffect, useState } from 'react';

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

export default FecthData;
