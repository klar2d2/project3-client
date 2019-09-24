//import { getThemeProps } from "@material-ui/styles";
import { mdiHeart, mdiHeartOutline } from "@mdi/js";
import { Favorite, FavoriteBorder } from "@material-ui/icons";
//import { appendFile } from "fs";
//import { userInfo } from "os";
import React from "react";
//import App from "../../App";

interface IPostProps {
  id: string;
  isFavorite: boolean;
  mediaType: string;
  mediaUrl: string;
  handlePostFavorite(e: any): void;
}

const Post = (props: IPostProps) => {
  let media;
  if (props.mediaType === "IMAGE") {
    media = <img src={props.mediaUrl} alt='' />;

  } else if (props.mediaType === "VIDEO") {
    media = <video>
              <source src={props.mediaUrl} />
            </video>;
  }
  let favoriteIcon;
  if (props.isFavorite) {
    favoriteIcon = <Favorite />;
  } else {
    favoriteIcon = <FavoriteBorder />;
  }

  return(
    <div id={props.id}>
      {media}
      <img src={favoriteIcon} onClick={props.handlePostFavorite} alt="favorite" />
    </div>
  );
};

export default Post;
