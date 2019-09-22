import Button from "@material-ui/core/Button";
import React from "react";
import { Redirect } from "react-router-dom";
// import Axios from 'axios';
// import { IUserModel } from '../../../../interfaces/modelInterfaces';
import FacebookLogin from "../../FacebookLogin";
import UserForm from "./UserForm";
import { SIGNUP } from "../../const";
import { Checkbox } from "@material-ui/core";
import Vendors from "./Vendors";

interface IUserCheck {
  user: (string | null | undefined);
  refreshUser();
}

interface IState {
  businessName: string,
  city: string;
  country: string;
  firstname: string;
  email: string;
  instagramAccessToken?: string;
  instagramIdPage?: string;
  isVendor: boolean;
  isAuthenticated: boolean;
  lastname: string;
  password: string;
  passwordVerify: string;
  phoneNumber?: string;
  state: string;
  street: string;
  streetNumber: string;
  streetSuffix: string;
  zipcode: string;
  website?: string;
}

class Signup extends React.Component<IUserCheck, IState> {
  constructor(props) {
    super(props);

    this.state = {
      businessName: "",
      city: "",
      country: "",
      firstname: "",
      email: "",
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
      zipcode: "",
      website: ""
    };
  }

  checkFacebookLogin = () => {
    window.FB.getLoginStatus( (response) => {
      if (response.status === "connected") {
        if(response.authResponse.accessToken){
          console.log(response)
          console.log(response.authResponse.accessToken)
          const stateCopy = JSON.parse(JSON.stringify(this.state));
          stateCopy.instagramAccessToken = response.authResponse.accessToken;
          stateCopy.isAuthenticated = true;
          this.setState(stateCopy);
        }
      } else {
        window.FB.login( (loginResponse) => {
          if (loginResponse.authResponse.accessToken) { 
            console.log(loginResponse)
            console.log(loginResponse.authResponse.accessToken)
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

  handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({...this.state, [name]: event.target.checked})
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
    console.log(this.state);
    let vendorFields;
    let button;
    if (this.props.user) {
      return (<Redirect to="/browse" />);
    }
    if (this.state.isVendor) {
      if (!this.state.instagramAccessToken) {
        vendorFields = (
          <div>
            <Vendors handleChange={this.handleChange}/>
            <FacebookLogin checkFacebookLogin={this.checkFacebookLogin} isAuthenticated={this.state.isAuthenticated}/>
          </div>
        );
        button = (
          <Button variant="contained" color="secondary" disabled type="submit">Please Sign in to Facebook</Button>
        );
      } else {
        vendorFields = (
          <div> 
            <Vendors handleChange={this.handleChange}/>
            <FacebookLogin checkFacebookLogin={this.checkFacebookLogin} isAuthenticated={this.state.isAuthenticated}/>
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
                      onChange={this.handleChange("isVendor")}
                      value="checkedB"
                      color="primary"
                      inputProps={{'aria-label': 'secondary checkbox',}}
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
