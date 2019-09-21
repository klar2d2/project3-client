import axios from "axios";
import React, { Component } from "react";
import { LOGIN } from "../../const";
import Test from "./Test";
// import { AppProps } from '../../react-app-env'

export interface ILoginInt {
  user?: ({} | null);
  email?: string;
  password?: string;
  refreshUser();
}

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export interface IFormState {
  user?: (string | null);
  email: string;
  password: string;
  firstname?: string;
  lastname?: string;
}

class Login extends Component <ILoginInt, {}> {

  state: IFormState = {
    email: "",
    password: "",
    user: null,
  };

  submitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post(LOGIN, this.state)
    .then((response) => {
      localStorage.setItem("mernToken", response.data.token);
      this.props.refreshUser();
      return(response);
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.dir(err);
    });
  }

  handleChange = (e: ChangeEvent) => {
    this.setState({ [e.target.name]: e.target.value});
  }

  render() {
    return(
      <div>
        <Test refreshUser={this.props.refreshUser}
              user={this.props.user}
              handleChange={this.handleChange}
              submitLogin={this.submitLogin}
        />
      </div>
    );
  }
}

export default Login;
