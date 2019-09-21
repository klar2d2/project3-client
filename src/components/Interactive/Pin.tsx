import React from "react";

const Pin = (props) => {
  let media;
  if (props.mediaType === "IMAGE") {
    media = <img src={props.mediaUrl} alt='' />;

  } else if (props.mediaType === "VIDEO") {
    media = <video>
              <source src={props.mediaUrl} />
            </video>;
  }
  return (
    <div id={props.id}>
      {media}
    </div>
  );
};

export default Pin;
