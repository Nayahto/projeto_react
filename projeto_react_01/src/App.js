// importes necessarios para o funcionamento do componente//
import Edit from './components/Form/Edit';
import Details from './components/details/Details';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/nav/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './components/Form/Form';

// componente responsavel por agrupar todos os componentes em um lugar só//
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path={'/'}>
                <Home />
              </Route>
              <Route path={'/create'}>
                <Form />
              </Route>
              <Route path={'/details/:id'}>
                <Details />
              </Route>

              <Route path={'/edit/:id'}>
                <Edit />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}
// exportacao da funcao para que ela possa ser usada em outras partes do projeto//
export default App;

/* #OBSERVACAO: e possivel encontrar um aruivo css ded mesmo nome reponsavel pela estilizacao geral do projeto*/
