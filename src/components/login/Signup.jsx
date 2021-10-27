import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import "../../pages/loginsignup.scss";
import { Snackbar, IconButton } from "@mui/material";
import Userservices from "../../services/Userservice";
const obj = new Userservices();

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      phone: "",
      nameerror: false,
      emailerror: false,
      passerror: false,
      phoneerror: false,
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

    errors.nameerror = this.state.name !== "" ? false : true;
    errors.emailerror = this.state.email !== "" ? false : true;
    errors.passerror = this.state.password !== "" ? false : true;
    errors.phoneerror = this.state.phone !== "" ? false : true;

    this.setState({
      ...errors,
    });

    return (isError =
      errors.nameerror ||
      errors.emailerror ||
      errors.passerror ||
      errors.phoneerror);
  };

  signup = () => {
    var isValid = this.isValidated();
    if (!isValid) {
      console.log("Validation Sucessfull!");
      let signupdata = {
        fullName: this.state.name,
        email: this.state.email,
        password: this.state.password,
        phone: this.state.phone,
        service: "advance",
      };
      obj
        .Signup(signupdata)
        .then((response) => {
          console.log(response);
          this.setState({
            snackbaropen: true,
            snackbarmsg: "Registration Successfull!",
          });
        })
        .catch((error) => {
          console.log(error);
          this.setState({
            snackbaropen: true,
            snackbarmsg: "Registration Failed!",
          });
          console.log(error);
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
      <div className="loginsepdiv">
        <p>Full Name</p>
        <TextField
          name="name"
          className="textfield"
          id="outlined-basic"
          fullWidth
          variant="outlined"
          onChange={(e) => this.change(e)}
          helperText={this.state.nameerror ? "Enter fullName" : ""}
        />
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
        <p>Phone Number</p>
        <TextField
          name="phone"
          className="textfield"
          id="outlined-basic"
          fullWidth
          variant="outlined"
          onChange={(e) => this.change(e)}
          helperText={this.state.phoneerror ? "Enter phone number" : ""}
        />
        <button className="loginbutton" onClick={this.signup}>
          Signup
        </button>
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

export default Signup;
