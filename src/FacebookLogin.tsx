import React from "react";
import { Button } from "@material-ui/core";

interface IFacebookLoginProps {
  isAuthenticated: boolean;
  checkFacebookLogin();
}

class FacebookLogin extends React.Component<IFacebookLoginProps, {}> {

  handleClick = (e) => {
    e.preventDefault();
    this.props.checkFacebookLogin();

  }

  componentDidUpdate(prevProps){
    console.log(prevProps.isAuthenticated)
    console.log(this.props.isAuthenticated)
  }

  render() {
    let button;
    console.log(this.props.isAuthenticated)
    if (this.props.isAuthenticated){
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
