import Details from './components/details/Details';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/nav/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from './components/Form/Form';

function App() {
  return (
<>
<Router>
<div className="App">
    <Navbar/>
  <div className="content">
    <Switch>
      <Route exact path={'/'}>
         <Home/>
      </Route>
      <Route path={'/create'}>
        <Form/>
      </Route>
      <Route path={'/details/:id'}>
        <Details/>
      </Route>
    </Switch>
  </div>
</div>
</Router>
</>
  );
}

export default App;
