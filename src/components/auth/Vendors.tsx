import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React from "react";
import FacebookLogin from "../../FacebookLogin";

interface IVendorsProps {
  handleChange(name: React.ChangeEvent);
}

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

const Vendors = (props: IVendorsProps) => {
  const styles: any = useStyles();
  return(
    <div className="vendorContainer">
        <TextField
          id="street-number"
          label="Street Number"
          className={styles.textField}
          type="text"
          name="vendoraddressstreetNumber"
          autoComplete="text"
          margin="normal"
          onChange={props.handleChange}
        />
        <br />
        <TextField
          id="street-name"
          label="Street Name"
          className={styles.textField}
          type="text"
          name="vendoraddressstreetName"
          autoComplete="text"
          margin="normal"
          onChange={props.handleChange}
        />
        <br />
        <TextField
          id="street-suffix"
          label="Street Suffix"
          className={styles.textField}
          type="text"
          name="vendoraddressstreetSuffix"
          autoComplete="text"
          margin="normal"
          onChange={props.handleChange}
        />
        <br />
        <TextField
          id="city"
          label="City"
          className={styles.textField}
          type="text"
          name="vendoraddresscity"
          autoComplete="text"
          margin="normal"
          onChange={props.handleChange}
        />
        <br />
        <TextField
          id="state"
          label="State"
          className={styles.textField}
          type="text"
          name="vendoraddressstate"
          autoComplete="text"
          margin="normal"
          onChange={props.handleChange}
        />
        <br />
        <TextField
          id="country"
          label="Country"
          className={styles.textField}
          type="text"
          name="vendoraddresscountry"
          autoComplete="text"
          margin="normal"
          onChange={props.handleChange}
        />
        <br />
        <TextField
          id="zipcode"
          label="Zip Code"
          className={styles.textField}
          type="text"
          name="vendoraddresszipcode"
          autoComplete="text"
          margin="normal"
          onChange={props.handleChange}
        />
        <br />
        <TextField
          id="phone-number"
          label="Phone Number"
          className={styles.textField}
          type="text"
          name="vendorphoneNumber"
          autoComplete="text"
          margin="normal"
          onChange={props.handleChange}
        />
        <br />
        <TextField
          id="website"
          label="Website"
          className={styles.textField}
          type="text"
          name="vendoraddresswebsite"
          autoComplete="text"
          margin="normal"
          onChange={props.handleChange}
        />
        <br />
        <br />
    </div>
  );
};

export default Vendors;
