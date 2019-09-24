import axios from "axios";
import React, { Component } from "react";
import { GET_ONE_ARTIST_POST, SERVER, ADD_USER_FAVORITE_WORKS } from "../../const";
import { IUser } from "../../react-app-env";
import Post from "../Interactive/Post";
import PostInfo from "../Interactive/PostInfo";

interface IPostContainerProps {
  postId: string;
  user: IUser;
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
    favoriteWorks.forEach((work) => {
      if (work.postId === postId) {
        return true;
      }
    });
    return false;
  }

  handlePostFavorite = (e) => {
    let artistId: string;
    let postId: string;
    [artistId, postId] = e.currentTarget.id.split("-");
    axios.post(ADD_USER_FAVORITE_WORKS(this.props.user.id), { artistId, postId })
    .then()
    .catch();
  }

  render() {
    return(
      <div>
        <Post id={this.state.id}
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
