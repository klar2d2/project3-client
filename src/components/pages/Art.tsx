import axios from "axios";
import React, { Component } from "react";
<<<<<<< HEAD
import { SERVER, GET_ONE_ARTIST_POST } from "../../const";
=======
import { GET_ONE_ARTIST_POST, SERVER } from "../../const";
>>>>>>> 67faf0f1b5644447c2c541861d80550ee15e4596
import Post from "../Interactive/Post";
import PostInfo from "../Interactive/PostInfo";

interface IPostContainerProps {
  postId: string;
  userId: string;
}

interface IPostContainerState {
  artistInstagram: string;
  artistName: string;
  caption: string;
  id: string;
  isFavorite: boolean;
  mediaType: string;
  mediaUrl: string;
  timestamp: string;
}

class Art extends Component<IPostContainerProps, IPostContainerState> {
  constructor(props) {
    super(props);
    this.state = {
      artistInstagram: "",
      artistName: "",
      caption: "",
      id: "",
      isFavorite: false,
      mediaType: "",
      mediaUrl: "",
      timestamp: "",
    };
  }

  componentDidMount() {
    console.log(this.props.userId);
    axios.get(this.props.userId)
    .then((user) => {
      let isFavorite: boolean;
      if (user.data.favoriteWorks.indexOf(this.props.postId) >= 0) {
        isFavorite = true;
      } else {
        isFavorite = false;
      }
      axios.get(GET_ONE_ARTIST_POST(this.props.userId, this.props.postId))
      .then((response) => {
        this.setState({
          artistInstagram: "",
          artistName: "",
          caption: "",
          id: response.data.id,
          isFavorite,
          mediaType: response.data.media_type,
          mediaUrl: response.data.media_url,
          timestamp: response.data.timestamp,
        });
      })
      .catch((err) => {
      console.log(err, "Error getting Post");
      });
    });
  }

  handlePostFavorite(e): void {
    axios.get(SERVER + "/v1/users/" + this.props.userId)
    .then((response) => {
      if (this.state.isFavorite) {
        response.data.favoriteWorks.push(e.target.id);
      } else {
        response.data.favoriteWorks.splice(response.data.favoriteWorks.indexOf(e.target.id), 1);
      }
      axios.put(SERVER + "/v1/users/" + this.props.userId, {
        favoriteWorks: response.data.favoriteWorks,
      })
      .then((result) => {
      })
      .catch((err) => {
        console.log("ERROR updating favorites", err);
      });
    });
  }

  render() {
    return(
      <div>
        <Post id={this.state.id}
              handlePostFavorite={this.handlePostFavorite}
              isFavorite={this.state.isFavorite}
              mediaType={this.state.mediaType}
              mediaUrl={this.state.mediaUrl}
        />
        <PostInfo artistInstagram={this.state.artistInstagram}
                  artistName={this.state.artistName}
                  caption={this.state.caption}
                  timestamp={this.state.timestamp}
        />
      </div>
    );
  }
}

export default Art;
