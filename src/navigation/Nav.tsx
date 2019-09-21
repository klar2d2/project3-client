import React from "react";
import { Link } from "react-router-dom";

const logoutUser = (e) => {
  console.log("Token removed");
  localStorage.removeItem("mernToken");
};

const Nav = (props) => {
  let links;

  if (props.user) {
    links = (
      <span>
        <Link to="/profile">Profile</Link>
        <a href="/" onClick={logoutUser}>Logout</a>
      </span>
    );
  } else {
   links = (
     <Link to="/signup">Sign Up  |  Login</Link>
   );
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
