import axios, { AxiosResponse } from "axios";
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

// import Header from './navigation/Header'
import { CURRENT_USER } from "./const";
import Content from "./Content";
import Footer from "./navigation/Footer";
import Nav from "./navigation/Nav";

import { IAddress, IUser, IVendor } from "./react-app-env";

interface IAppState {
  user: IUser;
  userAddress?: IAddress;
  vendorInfo?: IVendor;
}

class App extends Component<{}, IAppState> {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        firstname: "",
        id: "",
        isLoggedIn: false,
        isVendor: false,
        lastname: "",
        password: "",
      },
      userAddress: {
        city: "",
        country: "",
        state: "",
        street: "",
        streetNumber: "",
        streetSuffix: "",
        zipcode: "",
      },
      vendorInfo: {
        businessName: "",
        instagramAccessToken: "",
        instagramIdPage: "",
        phoneNumber: "",
        pinned: [],
        website: "",
      },
    };
  }

  componentDidMount() {
    this.getUser();
  }

  logoutUser = (e) => {
    e.preventDefault();
    localStorage.removeItem("mernToken");
    this.getUser();
  }

  makeUserStateObject = (response: AxiosResponse | undefined) => {
    if (response) {
      const state: IAppState = {
        user: {
          email: response.data.user.email,
          firstname: response.data.user.firstname,
          id: response.data.user.id,
          isLoggedIn: true,
          isVendor: response.data.user.isVendor,
          lastname: response.data.userlastname,
          password: response.data.user.password,
        },
      };
      if (response.data.user.isVendor) {
        state.userAddress = {
          city: response.data.vendor.city,
          country: response.data.vendor.country,
          state: response.data.vendor.state,
          street: response.data.vendor.street,
          streetNumber: response.data.vendor.streetNumber,
          streetSuffix: response.data.vendor.streetSuffix,
          zipcode: response.data.vendor.zipcode,
        };
        state.vendorInfo = {
          businessName: response.data.vendor.businessName,
          instagramAccessToken: response.data.vendor.instagramAccessToken,
          instagramIdPage: response.data.vendor.insta,
          phoneNumber: response.data.vendor.phoneNumber,
          pinned: response.data.vendor.pinned,
          website: response.data.vendor.website,
        };
      }
      return state;
    } else {
      const state: IAppState = {
        user: {
          email: "",
          firstname: "",
          id: "",
          isLoggedIn: false,
          isVendor: false,
          lastname: "",
          password: "",
        },
      };
      return state;
    }
  }

  getUser = () => {
    // see if theres a token
    const token = localStorage.getItem("mernToken");
    // If theres a token, try to use it ot get the user info
    if (token) {
      axios.get(CURRENT_USER, {
        headers: { "Authorization": `Bearer ${token}` },
      })
        .then((response) => {
          this.setState(this.makeUserStateObject(response));
        })
        .catch((err) => {
          console.log("Error with token", err);
        });
    } else {
      this.setState(this.makeUserStateObject(undefined));
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav user={this.state.user} logoutUser={this.logoutUser} />
          <Content user={this.state.user} refreshUser={this.getUser} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
