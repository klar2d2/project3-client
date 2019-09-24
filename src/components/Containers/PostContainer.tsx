import axios from "axios";
import React, { Component } from "react";
import { GET_ALL_ARTIST_POSTS, GET_ONE_ARTIST_POST, GET_USER_FAVORITE_WORKS } from "../../const";
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

class PostContainer extends Component<IPostContainerProps, IPostContainerState> {
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

  public componentDidMount() {
    axios.get(GET_ALL_ARTIST_POSTS(this.props.userId))
    .then((user) => {
      const isFavorite: boolean = false;
      if (user.data.favoriteWorks.indexOf(this.props.postId) >= 0) {
        this.setState({ isFavorite: true } );
      } else {
        this.setState({ isFavorite: false } );
      }
      axios.get(GET_ONE_ARTIST_POST(this.props.userId, this.props.postId))
      .then((response) => {
      return response.data.message;
      })
      .catch((err) => {
      console.log(err, "Error getting Post");
      });
    });
  }

  handlePostFavorite(e): void {
    axios.get(GET_USER_FAVORITE_WORKS(this.props.userId))
    .then((response) => {
      if (this.state.isFavorite) {
        response.data.favoriteWorks.push(e.target.id);
      } else {
        response.data.favoriteWorks.splice(response.data.favoriteWorks.indexOf(e.target.id), 1);
      }
      axios.put(GET_USER_FAVORITE_WORKS(this.props.userId), {
        favoriteWorks: response.data.favoriteWorks,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log("ERROR updating favorites", err);
      });
    });
  }

  public render() {
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

export default PostContainer;
