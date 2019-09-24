import React from "react";
import { Link } from "react-router-dom";
import { IUser } from "../react-app-env";

interface INavProps {
  user: IUser;
  logoutUser(e);
}

const Nav = (props: INavProps) => {
  let links;
  if (props.user) {
    if (props.user.isLoggedIn) {
      links = (
        <span>
          <Link to="/profile">Profile</Link>
          <a href="/" onClick={props.logoutUser}>Logout</a>
        </span>
      );
    } else {
    links = (
      <Link to="/signup">Sign Up  |  Login</Link>
    );
    }
  }

  return (
    <div className="navBar">
        <div className="homeNav">
          <Link to="/">Inkline</Link>
        </div>
        <div className="otherNav">
          <Link to="/browse">Artworks</Link>
          {links}
        </div>
    </div>
  );
};

export default Nav;
