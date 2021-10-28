import './App.css';
import {BrowserRouter as Router,Switch,Route,Link
} from "react-router-dom";
import Loginsignup from './pages/loginsignup/Loginsignup';
import Home from './pages/home/Home'

function App() {
  return (
    <div >
      {/* <Home/> */}
     <Router>
      <Switch>
        <Route exact path="/" component={Loginsignup} />
        <Route exact path="/home" component={Home} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
