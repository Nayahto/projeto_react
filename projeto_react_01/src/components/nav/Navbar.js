//importes necessarios para o funcionamento do componente//
import { Link } from 'react-router-dom';
import './Navbar.css';

//componente pelos links de navegacao na parte superior do app//
function Navbar() {
  return (
    //construcao do componente React//
    <>
      <nav className="navBar">
        <h1>bloco de notas</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create">novo bloco</Link>
        </div>
      </nav>
    </>
  );
}

//exportacao da funcao para que ela possa ser usada em outras partes do projeto//
export default Navbar;

/* #OBSERVACAO: ainda nessa pasta porem outro arquivo é possivel notar um arquivo css que e responsavel
 pela estilizacao apenas das classes e identificadores desse arquivo*/
