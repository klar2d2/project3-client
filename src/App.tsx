import axios from "axios";
import React, { Component } from "react";
import {BrowserRouter as Router} from "react-router-dom";
import "./App.css";

// import Header from './navigation/Header'
import { GET_FRONTPAGE_POSTS, CURRENT_USER, GET_ONE_ARTIST_POST} from "./const";
import Content from "./Content";
import Footer from "./navigation/Footer";
import Nav from "./navigation/Nav";

import { AppProps } from "./react-app-env";

interface IAppState {
  user: any;
  artworks: any[];
  current: {};
}

class App extends Component<AppProps, IAppState> {

  state = {
    user: null,
    artworks: [],
    current: {}
  }

  componentDidMount() {
    this.getUser();
    this.getArtworks();
  }

  logoutUser = (e: any) => {
    e.preventDefault();
    localStorage.removeItem("mernToken");
  }

  getUser = () => {
    // see if theres a token
    const token = localStorage.getItem("mernToken");
    // If theres a token, try to use it ot get the user info
    if (token) {
      console.log(token)
      axios.post(CURRENT_USER, {
        headers: {Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log("app resp ", response)
        this.setState({ user: response.data.user });
        this.setState({ current: response.data.user });
      })
      .catch( (err) => {
        console.log("Error with token", err);
      });
    } else {
      this.setState({ user: null });
    }
  }

  getArtworks = () => {
    axios.get(GET_FRONTPAGE_POSTS)
    .then(artworks => {
      console.log(artworks)
      this.setState({ artworks: artworks.data.message })
    })
    .catch(err => {
      console.log('Err while grabbing artworks', err)
    })
    .catch( (err) => {
      console.log("Err while grabbing artworks", err);
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
            <main>
              <Nav user={this.state.user} handleLogout={this.logoutUser}/>
              <Content
              user={this.state.user}
              refreshArtworks={this.getArtworks}
              refreshUser={this.getUser}
              artworks={this.state.artworks}
              current={this.state.current}
              />
            </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
