import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React from "react";
import FacebookLogin from "../../FacebookLogin";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap",
      backgroundColor: "#F9F9F9",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
  }),
);

const Vendors = (props) => {
  console.log('props.newVendor', props.newVendor);
  const styles: any = useStyles();
  return(
    <div className="vendorContainer">
      <form>
        <FacebookLogin checkFacebookLogin={props.checkFacebookLogin}/>
        <br />
        <TextField
          id="filled-text-input"
          label="Street Number"
          className={styles.textField}
          type="text"
          name="vendoraddressstreetNumber"
          autoComplete="text"
          margin="normal"
          onChange={props.recordVendor}
          value={props.newVendor.address.streetNumber}
        />
        <br />
        <TextField
          id="filled-text-input"
          label="Street Name"
          className={styles.textField}
          type="text"
          name="vendoraddressstreetName"
          autoComplete="text"
          margin="normal"
          onChange={props.recordVendor}
          value={props.newVendor.address.streetName}
        />
        <br />
        <TextField
          id="filled-text-input"
          label="Street Suffix"
          className={styles.textField}
          type="text"
          name="vendoraddressstreetSuffix"
          autoComplete="text"
          margin="normal"
          onChange={props.recordVendor}
          value={props.newVendor.address.streetSuffix}
        />
        <br />
        <TextField
          id="filled-text-input"
          label="City"
          className={styles.textField}
          type="text"
          name="vendoraddresscity"
          autoComplete="text"
          margin="normal"
          onChange={props.recordVendor}
          value={props.newVendor.address.city}
        />
        <br />
        <TextField
          id="filled-text-input"
          label="State"
          className={styles.textField}
          type="text"
          name="vendoraddressstate"
          autoComplete="text"
          margin="normal"
          onChange={props.recordVendor}
          value={props.newVendor.address.state}
        />
        <br />
        <TextField
          id="filled-text-input"
          label="Country"
          className={styles.textField}
          type="text"
          name="vendoraddresscountry"
          autoComplete="text"
          margin="normal"
          onChange={props.recordVendor}
          value={props.newVendor.address.country}
        />
        <br />
        <TextField
          id="filled-text-input"
          label="Zip Code"
          className={styles.textField}
          type="text"
          name="vendoraddresszipcode"
          autoComplete="text"
          margin="normal"
          onChange={props.recordVendor}
          value={props.newVendor.address.zipcode}
        />
        <br />
        <TextField
          id="filled-text-input"
          label="Phone Number"
          className={styles.textField}
          type="text"
          name="vendorphoneNumber"
          autoComplete="text"
          margin="normal"
          onChange={props.recordVendor}
          value={props.newVendor.phoneNumber}
        />
        <br />
        <TextField
          id="filled-text-input"
          label="Website"
          className={styles.textField}
          type="text"
          name="vendoraddresswebsite"
          autoComplete="text"
          margin="normal"
          onChange={props.recordVendor}
          value={props.newVendor.websiter}
        />
        <br />
        <div className="subButton">

        </div>
        <br />
      </form>
    </div>
  );
};

export default Vendors;
