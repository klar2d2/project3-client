import axios from "axios";
import React, { Component } from "react";
import { LOGIN } from "../../const";
import Test from "./Test";
// import { AppProps } from '../../react-app-env'

interface ILoginProps {
  refreshUser();
}

export interface ILoginState {
  email: string;
  password: string;
}

class Login extends Component <ILoginProps, ILoginState> {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

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

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const state = this.state;
    state[e.currentTarget.name] = e.currentTarget.value;
    this.setState(state);
  }

  render() {
    return(
      <div>
        <Test handleChange={this.handleChange}
              submitLogin={this.submitLogin}
        />
      </div>
    );
  }
}

export default Login;
