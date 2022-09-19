import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/Home';
import LandingPage from './components/LandingPage.jsx'
//Acá se supone que haga el Ruteo... por eso me traje el Route y el Switch
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Route exact path={'/'} component={LandingPage}/>
      <Route exact path={'/home'} component={Home}/>

    </div>
    </BrowserRouter>
  );
}

export default App;
