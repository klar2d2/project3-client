import React from "react";

interface IPinProps {
  id: string;
  mediaType: string;
  mediaUrl: string;
  timestamp: string;
}

const Pin = (props: IPinProps) => {
  let media;
  if (props.mediaType === "IMAGE") {
    media = <img src={props.mediaUrl} alt="" />;

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
