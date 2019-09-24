import Button from "@material-ui/core/Button";
import React from "react";

interface IFacebookLoginProps {
  isAuthenticated: boolean;
  checkFacebookLogin();
}

class FacebookLogin extends React.Component<IFacebookLoginProps, {}> {

  handleClick = (e) => {
    e.preventDefault();
    this.props.checkFacebookLogin();

  }

  render() {
    let button;
    if (this.props.isAuthenticated) {
      button = (
        <Button variant="contained"
                color="secondary"
                disabled >
                Thank you!
        </Button>
      );
    } else {
      button = (
        <Button variant="contained"
                color="primary"
                onClick={this.handleClick}>
                Facebook
        </Button>
      );
    }
    return(button);
  }
}

export default FacebookLogin;
