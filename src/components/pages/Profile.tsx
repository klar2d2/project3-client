import { Grid, Paper } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React, { Component } from "react";
import { ContentInt } from "../../react-app-env";
import Favorites from "./Favorites";

interface IProfileProps {
  user: {
    email: string;
    firstname: string;
    isVendor: string;
    lastname: string;
    password: string;
    vendor: {
      address: {
        city: string;
        country: string;
        state: string;
        street: string;
        streetNumber: string;
        streetSuffix: string;
        zipcode: string;
      };
      businessName: string;
      instagramAccessToken: string;
      instagramIdPage: string;
      phoneNumber: string;
      pinned: [];
      website: string;
    };
  }
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
      let pinned;
      if (this.props.user.vendor.address) {
        address = (
          <div>
            <p>Address:</p>
            <p>{this.props.user.vendor.address.streetNumber} {this.props.user.vendor.address.street} {this.props.user.vendor.address.streetSuffix}<br />
            {this.props.user.vendor.address.state} {this.props.user.vendor.address.zipcode}, {this.props.user.vendor.address.country}</p>
            <p>{this.props.user.vendor.phoneNumber}</p>
            <p>{this.props.user.vendor.website}</p>
          </div>
        );
      }
      if (this.props.user.vendor.pinned.length > 0) {
       pinned = (this.props.user.vendor.pinned)
      } else{
        pinned = (<p>No Pinned works yet!</p>)
      }
      return (
        <div>
          <h2>Vendor Info</h2>
          {address}
          {pinned}
        </div>
      )
    }
  }

  render() {
    console.log("USER", this.props.user);
    return (
      <div className="profile-box">
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Paper>
              <h1>My Profile</h1>
              <br />
            </Paper>
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
