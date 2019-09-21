import axios from "axios";
import React, { Component } from "react";

import Contact from "../Interactive/Contact";
// import Map from "../Interactive/Map";
import Pinned from "../Interactive/Pinned";

<<<<<<< HEAD
import {SERVER} from "../../const";
=======
import { SERVER } from "../../const";
>>>>>>> 11f0b3dcc68ad24fbeb835be8a73470664eb737b
import { IArtistProps, IArtistState} from "../../react-app-env";

class Artist extends Component<IArtistProps, IArtistState> {
  constructor(props) {
    super(props);
    this.state = {
      address: {},
      businessName: "",
      contactInfo: {
        email: "",
        instagramIdPage: "",
        name: "",
        phoneNumber: "",
        website: "",
      },
      id: "5d8154419d1b4a5f2c3b4564",
      pinned: [],
    };
  }

  public componentDidMount() {
    axios.get(SERVER + "/v1/users/" + this.props.id)
    .then((response) => {
      const data = response.data;
      this.setState({
        address: data.vendor.address,
        businessName: data.vendor.businessName,
        contactInfo: {
          email: data.email,
          instagramIdPage: data.vendor.instagramIdPage,
          name: data.firstname + " " + data.lastname,
          phoneNumber: data.vendor.phoneNumber,
          website: data.vendor.website,
        },
        id: data.id,
        pinned: data.vendor.pinned,
      });
    });
  }

  public render() {
    return(
      <div>
        <h4>{this.state.businessName || "Unavailable"}</h4>
        <Pinned pinned={this.state.pinned} userId={this.state.id}/>
        <Contact contactInfo={this.state.contactInfo}/>
      </div>
    );
  }
}

export default Artist;
