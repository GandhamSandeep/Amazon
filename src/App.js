import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Sandeep1 from './sandeep';
import Signin1 from './signin';
import Create from './create';


function App() {
  return (
    <Router>
    <div>
        <Switch>
          <Route exact path='/' component={Sandeep1}></Route>
          <Route path='/sandy' component={Signin1}></Route>
          <Route path='/sandp' component={Create}></Route>
          
        </Switch>
    </div>
    </Router>
  );
}

export default App;
