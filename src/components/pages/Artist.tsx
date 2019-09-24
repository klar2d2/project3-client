import axios, { AxiosResponse } from "axios";
import React, { Component } from "react";

import { GET_USER } from "../../const";
import { IUser, IVendor, IAddress } from "../../react-app-env";
import Contact from "../Interactive/Contact";
// import Map from "../Interactive/Map";
import Pinned from "../Interactive/Pinned";

export interface IArtistProps {
  id: string;
}

export interface IArtistState {
  artist: IUser;
  artistInfo: IVendor;
  artistAddress: IAddress;
}



class Artist extends Component<IArtistProps, IArtistState> {
  state = {
    artist: {
      email: "",
      firstname: "",
      id: "",
      lastname: "",
      password: "",
    },
    artistAddress: {
      city: "",
      country: "",
      state: "",
      street: "",
      streetNumber: "",
      streetSuffix: "",
      zipcode: "",
    },
    artistInfo: {
      businessName: "",
      instagramAccessToken: "",
      instagramIdPage: "",
      phoneNumber: "",
      pinned: [],
      website: "",
    },
  };

  makeArtistStateObject = (response: AxiosResponse) => {
    let artistResponse;
    let artistAddressResponse;
    let artistInfoResponse;
    if (response) {
      artistResponse = {
        email: response.data.user.email,
        firstname: response.data.user.firstname,
        id: response.data.user.id,
        isLoggedIn: true,
        isVendor: response.data.user.isVendor,
        lastname: response.data.userlastname,
        password: response.data.user.password,
      };
      if (response.data.user.isVendor) {
        artistAddressResponse = {
          city: response.data.vendor.city,
          country: response.data.vendor.country,
          state: response.data.vendor.state,
          street: response.data.vendor.street,
          streetNumber: response.data.vendor.streetNumber,
          streetSuffix: response.data.vendor.streetSuffix,
          zipcode: response.data.vendor.zipcode,
        };
        artistInfoResponse = {
          businessName: response.data.vendor.businessName,
          instagramAccessToken: response.data.vendor.instagramAccessToken,
          instagramIdPage: response.data.vendor.insta,
          phoneNumber: response.data.vendor.phoneNumber,
          pinned: response.data.vendor.pinned,
          website: response.data.vendor.website,
        };
      }
    }
    const state: IArtistState = {
      artist: artistResponse,
      artistAddress: artistAddressResponse,
      artistInfo: artistInfoResponse,
    };
    return state;
  }

  public componentDidMount() {
    axios.get(GET_USER(this.props.id))
    .then((response) => {
      this.setState(this.makeArtistStateObject(response));
    });
  }

  public render() {
    return(
      <div>
        <h4>{this.state.artistInfo.businessName || "Unavailable"}</h4>
        <Pinned pinned={this.state.artistInfo.pinned} artistId={this.state.artist.id}/>
        <Contact artist={this.state.artist}
                 artistAddress={this.state.artistAddress}
                 artistInfo={this.state.artistInfo}/>
      </div>
    );
  }
}

export default Artist;
