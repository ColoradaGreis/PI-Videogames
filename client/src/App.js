import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import LandingPage from './components/LandingPage.jsx'
import VideogameCreate from './components/VideogameCreate.jsx'
import Detail from './components/Detail';
import Error404 from './components/Error404';
//Acá se supone que haga el Ruteo... por eso me traje el Route y el Switch
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path={'/'} component={LandingPage}/>
        <Route exact path={'/home'} component={Home}/>
        <Route exact path={'/create'} component={VideogameCreate}/>
        <Route exact path={'/detail/:id'} component={Detail} />
        <Route path={'*'} component={Error404} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
