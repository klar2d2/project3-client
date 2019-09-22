import React, { Component } from "react";
import { Route } from "react-router-dom";

import AuthBox from "./components/auth/AuthBox";
import Login from "./components/auth/Login";
//import Signup from "./components/auth/Signup";
import Art from "./components/pages/Art";
import Artist from "./components/pages/Artist";
import Browse from "./components/pages/Browse";
import CallToAction from "./components/pages/CallToAction";
// import Logout from "./components/auth/Logout"
// import FacebookLogin from "./FacebookLogin"
import Profile from "./components/pages/Profile";

import { ContentInt } from "./react-app-env";

class Content extends Component<ContentInt> {
  render() {
    return (
      <div>
        <Route exact path="/" render={ () =>
          <CallToAction />
        } />
        <Route path="/signup" render={ () =>
          <AuthBox user={this.props.user} 
                   refreshUser={this.props.refreshUser} />
        } />
        <Route path="/profile" render={() =>
          <Profile current={this.props.current}
                   refreshUser={this.props.refreshUser}
                   refreshArtworks={this.props.refreshArtworks}  />
        } />
        <Route path="/browse" render={ () =>
           <Browse refreshArtworks={this.props.refreshArtworks}
                   artworks={this.props.artworks || []} />
          } />
        <Route exact path="/browse/:artistId/:postId" render={ (path) =>
          <Art userId={path.match.params.artistId}
               postId={path.match.params.postId} />
        } />
        <Route path="/artist/:artistId" render={ (path) =>
          <Artist id={path.match.params.artistId} 
                  user={this.props.user} 
                  refreshUser={this.props.refreshUser}/>
        } />
        <Route path="/login" render={ () =>
          <Login refreshUser={this.props.refreshUser} 
                 user={this.props.user} />
        } />
      </div>
    );
  }
}

export default Content;
