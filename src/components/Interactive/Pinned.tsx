import React from "react";

import PinContainer from "../Containers/PinContainer";

interface IPinnedProps {
  pinned: string[];
  artistId: string;
}

const Pinned = (props: IPinnedProps) => {
  const pins = props.pinned.map((postId) => {
    return <PinContainer  postId={postId} artistId={props.artistId}/>;
  });

  return(
    <div>
      {pins}
    </div>
  );
};

export default Pinned;
