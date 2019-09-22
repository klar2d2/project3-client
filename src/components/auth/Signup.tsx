import Button from "@material-ui/core/Button";
import React from "react";
import { Redirect } from "react-router-dom";
// import Axios from 'axios';
// import { IUserModel } from '../../../../interfaces/modelInterfaces';
import FacebookLogin from "../../FacebookLogin";
import UserForm from "./UserForm";
import {SERVER, SIGNUP } from "../../const";


interface IUserCheck {
  user: (string | null | undefined);
  refreshUser();
}

interface IState {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  passwordVerify: string;
  isVendor: boolean;
  instagramAccessToken?: string;
  instagramIdPage?: string;
  phoneNumber?: string;
  website?: string;
}

class Signup extends React.Component<IUserCheck, IState> {
  constructor(props) {
    super(props);

    this.state = {
      email: props.email || "",
      firstname: props.firstname || "",
      isVendor: props.isVendor || false,
      lastname: props.lastname || "",
      password: props.password || "",
      passwordVerify: props.passwordVerify || "",
      instagramAccessToken: props.instagramAccessToken || "",
      instagramIdPage: props.instagramIdPage || "",
      phoneNumber: props.phoneNumber || "",
      website: props.website || "",
    };
  }

  checkFacebookLogin = () => {
    window.FB.getLoginStatus( (response) => {
      if (response.status === "connected") {
        const stateCopy = JSON.parse(JSON.stringify(this.state));
        console.log(response)
        stateCopy.instagramAccessToken = response.authResponse.accessToken;
        this.setState(stateCopy);
      } else {
        window.FB.login( (loginResponse) => {
          const stateCopy = JSON.parse(JSON.stringify(this.state));
          console.log(response)
          stateCopy.instagramAccessToken = response.authResponse.accessToken;
          this.setState(stateCopy);
        });
      }
    });
  }

  handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser: {} = this.state;
    fetch(SIGNUP, {
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then( (response) => response.json())
      .then( (response) => {
        localStorage.setItem("mernToken", response.token);
        this.props.refreshUser();
        this.render();
      })
      .catch( (err) => {
        console.log(err);
        console.log("ERROR");
      });
  }

  storeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;
    console.log(e.currentTarget.name, e.currentTarget.value, e.currentTarget.checked);
    if (e.currentTarget.name === "isVendor") {
      this.setState({ isVendor: !this.state.isVendor });
    } else {
      if (Object.keys(this.state).includes(key)) {
        const stateCopy = JSON.parse(JSON.stringify(this.state));
        stateCopy[key] = value;
        this.setState(stateCopy);
      }
    }
  }

  render() {
    let vendorFields;
    if (this.props.user) {
      return (<Redirect to="/browse" />);
    }
    if (this.state.isVendor) {
      vendorFields = (
        <div className="fb-login">
          <FacebookLogin checkFacebookLogin={this.checkFacebookLogin}/>
        </div>
      );
    } else {
      vendorFields = (<div></div>);
    }

    return (
      <form onSubmit={this.handleSignup}>
        <h1>Sign Up</h1>
        <UserForm recordUser={this.storeInput} newUser={this.state}/>
        <br />
        <div className="isVendor">
          <h1 className="Artist" >Are you an artist? <input className="ArtistCheck"
                                                            name="isVendor"
                                                            type="checkbox"
                                                            onChange={this.storeInput}
                                                            checked={this.state.isVendor} />
          </h1>
          <br />
        </div>
        {vendorFields}
        <Button variant="contained" color="secondary" type="submit">
          Submit
        </Button>
      </form>
    );
  }
}

export default Signup;
