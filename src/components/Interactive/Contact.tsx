import React from "react";

const Contact = (props) => {
  return(
    <div>
      <span>{props.contactInfo.email || "Unavailble"}</span>
      <span>{props.contactInfo.instagramIdPage || "Unavailble"}</span>
      <span>{props.contactInfo.name || "Unavailble"}</span>
      <span>{props.contactInfo.phoneNumber || "Unavailble"}</span>
      <span>{props.contactInfo.website || "Unavailble"}</span>
    </div>
  );
};

export default Contact;
