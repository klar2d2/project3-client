import axios from "axios";
import React, { Component } from "react";
import { GET_ONE_ARTIST_POST, SERVER, ADD_USER_FAVORITE_WORKS, DELETE_USER_FAVORITE_WORKS } from "../../const";
import { IUser } from "../../react-app-env";
import Post from "../Interactive/Post";
import PostInfo from "../Interactive/PostInfo";

interface IPostContainerProps {
  postId: string;
  user: IUser;
  userId: string;
  refreshUser();
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
    axios.get(GET_ONE_ARTIST_POST(this.props.userId, this.props.postId))
    .then((response) => {
      this.setState({
        id: response.data.id,
        mediaType: response.data.media_type,
        mediaUrl: response.data.media_url,
        timestamp: response.data.timestamp,
      });
    })
    .catch((err) => {
    console.log(err, "Error getting Post");
    });
  }

  isFavoriteWork(favoriteWorks, postId) {
    if (favoriteWorks) {
      for (let i = 0; i < favoriteWorks.length; i++) {
        if (favoriteWorks[i].postId === postId) {
          return true;
        }
      }
    }
    return false;
  }

  handlePostFavorite = (e) => {
    const ids = e.currentTarget.id.split("-");
    if (ids[2] === "true") {
      axios.delete(DELETE_USER_FAVORITE_WORKS(this.props.user.id), {
        data: {
          artistId: ids[0],
          postId: ids[1],
        },
      })
      .then(() => {
        console.log("DELETE successful")
        this.props.refreshUser();
      })
      .catch();
    } else if (ids[2] === "false") {
      axios.post(ADD_USER_FAVORITE_WORKS(this.props.user.id), {
        artistId: ids[0],
        postId: ids[1],
      })
      .then(() => {
        console.log("ADD successful")
        this.props.refreshUser();
      })
      .catch();
    }
    this.forceUpdate();
  }

  render() {
    return(
      <div>
        <Post artistId={this.props.userId}
              id={this.state.id}
              handlePostFavorite={this.handlePostFavorite}
              isFavorite={this.isFavoriteWork(this.props.user.favoriteWorks, this.state.id)}
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
