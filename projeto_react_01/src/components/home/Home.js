/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
//importes necessarios para o funcionamento do componente//
import './Home.css';
import AnnotationList from '../AnnotationList/AnnotationList';
//componente para a exibicao dos itens//
function Home() {
  return (
    <>
      <h2 id="personalizarH2">pagina inicial</h2>
      <div className="home">
        <AnnotationList />
      </div>
    </>
  );
}

//exportacao da funcao para que ela possa ser usada em outras partes do projeto//
export default Home;

/* #OBSERVACAO: ainda nessa pasta porem outro arquivo é possivel notar um arquivo css que e responsavel
 pela estilizacao apenas das classes e identificadores desse arquivo*/
