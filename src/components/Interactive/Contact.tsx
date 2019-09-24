import React from "react";
import { IAddress, IUser, IVendor } from "../../react-app-env";

interface IContactProps {
  artist: IUser;
  artistInfo: IVendor;
  artistAddress: IAddress;
}

const Contact = (props: IContactProps) => {
  const contact = (
    <div>
      <span>{props.artist.email || "Unavailble"}</span>
      <span>{props.artistInfo.instagramIdPage || "Unavailble"}</span>
      <span>{props.artistInfo.businessName || "Unavailble"}</span>
      <span>{props.artistInfo.phoneNumber || "Unavailble"}</span>
      <span>{props.artistInfo.website || "Unavailble"}</span>
    </div>
  );
  return (contact);
};

export default Contact;
