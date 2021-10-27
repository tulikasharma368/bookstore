import './App.css';

// import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Loginsignup from './pages/Loginsignup';

function App() {
  return (
    <div >
     <Router>
      <Switch>
        <Route path="/" component={Loginsignup} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
