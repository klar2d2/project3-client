import React from "react";
import Button from "@material-ui/core/Button";

interface IFacebookLoginProps {
  checkFacebookLogin();
}

class FacebookLogin extends React.Component<IFacebookLoginProps, {}> {

  handleClick = (e) => {
    e.preventDefault();
    this.props.checkFacebookLogin();

  }

  render() {
    return(
        <Button onClick={this.handleClick} variant="contained" color="primary" >Link Instagram</Button>
    );
  }
}

export default FacebookLogin;
