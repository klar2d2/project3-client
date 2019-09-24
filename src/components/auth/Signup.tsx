import Button from "@material-ui/core/Button";
import React from "react";
import { Redirect } from "react-router-dom";
// import Axios from 'axios';
// import { IUserModel } from '../../../../interfaces/modelInterfaces';
import FacebookLogin from "../../FacebookLogin";
import UserForm from "./UserForm";
import { SERVER, SIGNUP } from "../../const";
import { Checkbox } from "@material-ui/core";
import Vendors from "./Vendors";
import { IUser } from "../../react-app-env";

interface ISignupProps {
  user: IUser;
  refreshUser();
}

interface ISignupState {
  businessName?: string;
  city?: string;
  country?: string;
  email: string;
  firstname: string;
  instagramAccessToken?: string;
  instagramIdPage?: string;
  isVendor: boolean;
  isAuthenticated: boolean;
  lastname: string;
  password: string;
  passwordVerify: string;
  phoneNumber?: string;
  state?: string;
  street?: string;
  streetNumber?: string;
  streetSuffix?: string;
  website?: string;
  zipcode?: string;
}

class Signup extends React.Component<ISignupProps, ISignupState> {
  constructor(props) {
    super(props);

    this.state = {
      businessName: "",
      city: "",
      country: "",
      email: "",
      firstname: "",
      instagramAccessToken: "",
      instagramIdPage: "",
      isAuthenticated: false,
      isVendor: false,
      lastname: "",
      password: "",
      passwordVerify: "",
      phoneNumber: "",
      state: "",
      street: "",
      streetNumber: "",
      streetSuffix: "",
      website: "",
      zipcode: "",
    };
  }

  checkFacebookLogin = () => {
    window.FB.getLoginStatus( (response) => {
      if (response.status === "connected") {
        if (response.authResponse.accessToken) {
          const stateCopy = JSON.parse(JSON.stringify(this.state));
          stateCopy.instagramAccessToken = response.authResponse.accessToken;
          stateCopy.isAuthenticated = true;
          this.setState(stateCopy);
        }
      } else {
        window.FB.login( (loginResponse) => {
          if (loginResponse.authResponse.accessToken) {
            const stateCopy = JSON.parse(JSON.stringify(this.state));
            stateCopy.instagramAccessToken = loginResponse.authResponse.accessToken;
            stateCopy.isAuthenticated = true;
            this.setState(stateCopy);
          }
        });
      }
    });
  }

  handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(SIGNUP, {
      body: JSON.stringify(this.state),
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

  storeInput = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({...this.state, [e.currentTarget.name]: e.currentTarget.checked});
  }

  // storeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   const key = e.currentTarget.name;
  //   const value = e.currentTarget.value;
  //   console.log(e.currentTarget.name, e.currentTarget.value, e.currentTarget.checked);
  //   if (e.currentTarget.name === "isVendor") {
  //     this.setState({ isVendor: !this.state.isVendor });
  //   } else {
  //     if (Object.keys(this.state).includes(key)) {
  //       const stateCopy = JSON.parse(JSON.stringify(this.state));
  //       stateCopy[key] = value;
  //       this.setState(stateCopy);
  //     }
  //   }
  // }

  render() {
    let vendorFields;
    let button;
    if (this.props.user.isLoggedIn) {
      return (<Redirect to="/browse" />);
    }
    if (this.state.isVendor) {
      if (!this.state.instagramAccessToken) {
        vendorFields = (
          <div>
            <Vendors handleChange={this.handleChange}/>
            <div className="fb-login">
              <FacebookLogin checkFacebookLogin={this.checkFacebookLogin} isAuthenticated={this.state.isAuthenticated}/>
            </div>
          </div>
        );
        button = (
          <Button variant="contained" color="secondary" disabled type="submit">Please Sign in to Facebook</Button>
        );
      } else {
        vendorFields = (
          <div>
            <Vendors handleChange={this.handleChange}/>
            <div className="fb-login">
              <FacebookLogin checkFacebookLogin={this.checkFacebookLogin} isAuthenticated={this.state.isAuthenticated}/>
            </div>
          </div>
        );
        button = (
          <Button variant="contained" color="secondary"type="submit">Submit</Button>
        );
      }
    } else {
      vendorFields = (<div></div>);
      button = (
        <Button variant="contained" color="secondary" type="submit">Submit</Button>
      );
    }

    return (
      <form onSubmit={this.handleSignup}>
        <h1>Sign Up</h1>
        <UserForm recordUser={this.storeInput} newUser={this.state}/>
        <br />
        <div className="isVendor">
          <h1 className="Artist" >Are you an artist?
            <Checkbox checked={this.state.isVendor}
                      onChange={this.handleChange}
                      name="isVendor"
                      value="checkedB"
                      color="primary"
                      inputProps={{"aria-label": "secondary checkbox"}}
            />
          </h1>
          <br />
          {vendorFields}
        </div>
        <br />
        {button}
      </form>
    );
  }
}

export default Signup;
