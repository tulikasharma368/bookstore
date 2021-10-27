import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import "../../pages/loginsignup.scss";
import { Snackbar, IconButton } from "@mui/material";
import Userservices from "../../services/Userservice";
const obj = new Userservices();

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailerror: false,
      passerror: false,
      snackbaropen: false,
      snackbarmsg: "",
    };
  }

  snackbarClose = () => {
    this.setState({ snackbaropen: false });
  };

  isValidated = () => {
    let isError = true;
    let errors = this.state;

    errors.emailerror = this.state.email !== "" ? false : true;
    errors.passerror = this.state.password !== "" ? false : true;

    this.setState({
      ...errors,
    });

    return (isError = errors.emailerror || errors.passerror);
  };

  login = () => {
    var isValid = this.isValidated();
    if (!isValid) {
      console.log("Validation Sucessfull!");
      let signupdata = {
        email: this.state.email,
        password: this.state.password,
      };
      obj
        .Login(signupdata)
        .then((response) => {
          console.log(response);
          this.setState({
            snackbaropen: true,
            snackbarmsg: "Signin Successfull!",
          });
        })
        .catch((error) => {
          console.log(error);
          this.setState({
            snackbaropen: true,
            snackbarmsg: "Signin Failed!",
          });
        });
    }
  };

  change = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <div className="loginsepdiv">
          <p>Email id</p>
          <TextField
            name="email"
            className="textfield"
            id="outlined-basic"
            fullWidth
            variant="outlined"
            onChange={(e) => this.change(e)}
            helperText={this.state.emailerror ? "Enter email id" : ""}
          />
          <p>Password</p>
          <TextField
            name="password"
            className="textfield"
            id="outlined-basic"
            fullWidth
            variant="outlined"
            onChange={(e) => this.change(e)}
            helperText={this.state.passerror ? "Enter password" : ""}
          />
          <button className="loginbutton" onClick={this.login}>
            Login
          </button>
          <p style={{ textAlign: "center", margin: "15px 0" }}>
            ----------OR----------
          </p>
          <div className="ls">
            <button className="fbbut">Facebook</button>
            <button className="gbut">Google</button>
          </div>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={this.state.snackbaropen}
          autoHideDuration={3000}
          onClose={this.snackbarClose}
          message={<span id="message_id">{this.state.snackbarmsg}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.snackbarClose}
            >
              x
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

export default Login;
