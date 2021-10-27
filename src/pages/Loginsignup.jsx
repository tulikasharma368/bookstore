import * as React from "react";
import "./loginsignup.scss";
import loginsignupimg from "../assets/loginsignup/loginsignupimg.png";
import Login from "../components/login/Login";
import Signup from "../components/login/Signup";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

const Loginsignup = () => {
  return (
    <div className="mainls">
      <div className="innerdivls">
        <div className="imglsdiv">
          <img className="loginsignupimg" src={loginsignupimg} alt="" />
          <h3>Online book shopping</h3>
        </div>
        <div className="div2ls">
          <div className="ls">
            <NavLink to="/" activeClassName="selected">
              Login
            </NavLink>
            <NavLink to="/signup" activeClassName="selected">
              Signup
            </NavLink>

            {/* <p>Login</p>
            <p>Signup</p> */}
          </div>
          {/* <Signup /> */}
          {/* <Login /> */}

          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/signup" component={Signup} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default Loginsignup;
