import axios from "axios";
import React, { Component } from "react";
import { GET_ONE_ARTIST_POST } from "../../const";
import Pin from "../Interactive/Pin";

interface IPinDisplayProps {
  postId: string;
  artistId: string;
}

interface IPinDisplayState {
  id: string;
  mediaType: string;
  mediaUrl: string;
  timestamp: string;
}

class PinContainer extends Component<IPinDisplayProps, IPinDisplayState> {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      mediaType: "",
      mediaUrl: "",
      timestamp: "",
    };
  }

  public componentDidMount() {
    axios.get(GET_ONE_ARTIST_POST(this.props.artistId, this.props.postId))
    .then((response) => {
      const data = response.data.message;
      this.setState({
        id: data.id,
        mediaType: data.media_type,
        mediaUrl: data.media_url,
        timestamp: data.timestamp,
      });
    });
  }

  public render() {
    return(
      <Pin id={this.state.id}
           mediaType={this.state.mediaType}
           mediaUrl={this.state.mediaUrl}
           timestamp={this.state.timestamp}
      />
    );
  }
}

export default PinContainer;
