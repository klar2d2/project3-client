import React from "react";
import moment from 'moment'

interface IPostInfoProps {
  artistInstagram: string;
  artistName: string;
  caption: string;
  timestamp: string;
}

const PostInfo = (props: IPostInfoProps) => {
  return(
    <div>
      <a href={props.artistInstagram}>{props.artistName}</a>
      <span>Posted on {moment.unix(parseInt(props.timestamp))}</span>
      <p>{props.caption}</p>
    </div>
  );
};

export default PostInfo;
