import React from "react";

import PinContainer from "../Containers/PinContainer";

const Pinned = (props) => {
  const pins = props.pinned.map((postId) => {
    return <PinContainer  postId={postId} userId={props.userId}/>;
  });

  return(
    <div>
      {pins}
    </div>
  );
};

export default Pinned;
