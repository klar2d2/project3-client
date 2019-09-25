import { Grid, Paper } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React, { Component } from "react";
import { ContentInt, IAddress, IUser, IVendor } from "../../react-app-env";
import Favorites from "./Favorites";

interface IProfileProps {
  user: IUser;
  vendorInfo?: IVendor;
  vendorAddress?: IAddress;
  refreshUser();
}

class Profile extends Component<IProfileProps, {}> {
  constructor(props) {
    super(props);
  }

  useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        padding: theme.spacing(3, 2),
      },
    }),
  );

  // renderFavorites(): JSX.Element {
  //   console.log("FAVE:", this.state.current.favorites);
  //   if (this.state.current.favorites) {
  //       return (
  //         <div>
  //           <p>Favorites</p>
  //           {this.state.current.favorites.map((favorite: string, i: number) => {
  //             return <img key={i} src={favorite} alt='' />;
  //             })
  //           }
  //         </div>
  //       );
  //     } else {
  //       return <div><p>No Favorites!</p></div>;
  //     }
  // }

  renderVendor() {
    if (this.props.user.isVendor) {
      let address;
      let contact;
      let pinned;
      if (this.props.vendorAddress) {
        address = (
          <div>
            <p>Address:</p>
            <p>
              {this.props.vendorAddress.streetNumber}
              {this.props.vendorAddress.street}
              {this.props.vendorAddress.streetSuffix}
              <br />
              {this.props.vendorAddress.state}
              {this.props.vendorAddress.zipcode},
                {this.props.vendorAddress.country}
            </p>
          </div>
        );
      }
      if (this.props.vendorInfo) {
        contact = (
          <div>
            <p>{this.props.vendorInfo.phoneNumber}</p>
            <p>{this.props.vendorInfo.website}</p>
          </div>
        );
        if (this.props.vendorInfo.pinned.length > 0) {
          pinned = (this.props.vendorInfo.pinned);
        } else {
          pinned = (<p>No Pinned works yet!</p>);
        }
      }
      return (
        <div>
          <h2>Vendor Info</h2>
          {address}
          {contact}
          {pinned}
        </div>
      );
    }
  }

  render() {
    let profile;
    if (this.props.user.isLoggedIn) {
      profile =
        <Paper>
          <h1>My Profile</h1>
          <br />
        </Paper>;
    } else {
      profile =
        <Paper>
          <h1>Log in to see your Profile</h1>
          <br />
        </Paper>;
    }
    return (
      <div className="profile-box">
        <Grid container spacing={3}>
          <Grid item xs={3}>
            {profile}
          </Grid>
          <Grid item xs={9}>
            <div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Profile;
