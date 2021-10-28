import * as React from "react";
import "./loginsignup.scss";
import loginsignupimg from "../../assets/loginsignup/loginsignupimg.png";
import Login from "../login/Login";
import Signup from "../login/Signup";
import { Switch, Route, NavLink, Link } from "react-router-dom";

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
            <NavLink to="/" activeClassName="selected" className="login">
              Login
            </NavLink>
            <NavLink to="/signup" activeClassName="selected" className="signup">
              Signup
            </NavLink>
          </div>

          {/* <Router> */}
          <Switch>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/" component={Login} />
          </Switch>
          {/* </Router> */}
        </div>
      </div>
    </div>
  );
};

export default Loginsignup;
