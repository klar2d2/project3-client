import axios from "axios";
import React, { Component } from "react";
import { Route } from "react-router-dom";

import AuthBox from "./components/auth/AuthBox";
import Login from "./components/auth/Login";
// import Signup from "./components/auth/Signup";
import Art from "./components/pages/Art";
import Artist from "./components/pages/Artist";
import Browse from "./components/pages/Browse";
import CallToAction from "./components/pages/CallToAction";
// import Logout from "./components/auth/Logout"
// import FacebookLogin from "./FacebookLogin"
import Profile from "./components/pages/Profile";

import { GET_FRONTPAGE_POSTS } from "./const";
import { IPost, IUser } from "./react-app-env";

interface IContentProps {
  user?: IUser;
  refreshUser();
}

interface IContentState {
  artworks: IPost[];
  refreshArtworks();
  refreshUser();
}

class Content extends Component<IContentProps, IContentState> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getArtworks();
  }

  getArtworks = () => {
    axios.get(GET_FRONTPAGE_POSTS)
      .then((artworks) => {
        this.setState({ artworks: artworks.data.message });
      })
      .catch(err => {
        console.log('Err while grabbing artworks', err);
      })
      .catch((err) => {
        console.log("Err while grabbing artworks", err);
      });
  }

  render() {
    let user;
    if (this.props.user) {
       user = this.props.user;
    }
    return (
      <div>
        <Route exact path="/" render={() =>
          <CallToAction />
        } />
        <Route path="/signup" render={() =>
          <AuthBox user={user}
                   refreshUser={this.props.refreshUser} />
        } />
        <Route path="/profile" render={() =>
          <Profile user={user}
                   refreshUser={this.props.refreshUser} />
        } />
        <Route path="/browse" render={() =>
          <Browse />
        } />
        <Route exact path="/art/:artistId/:postId" render={(path) =>
          <Art userId={path.match.params.artistId}
               user={user}
               refreshUser={this.props.refreshUser}
               postId={path.match.params.postId} />
        } />
        <Route path="/artist/:artistId" render={(path) =>
          <Artist id={path.match.params.artistId} />
        } />
        <Route path="/login" render={() =>
          <Login refreshUser={this.props.refreshUser} />
        } />
      </div>
    );
  }
}

export default Content;
