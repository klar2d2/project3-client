//import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme  } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: "#F9F9F9",
      display: "flex",
      flexWrap: "wrap",
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  }),
);

const UserForm = (props) => {

  const styles: any = useStyles();
  return(
    <div className="vendorContainer">
      <TextField
        id="firstname"
        label="First Name"
        className={styles.textField}
        type="text"
        name="firstname"
        autoComplete="text"
        margin="normal"
        onChange={props.recordUser}
        value={props.firstname}
      />
      <br />
      <TextField
        id="lastname"
        label="Last Name"
        className={styles.textField}
        type="text"
        name="lastname"
        autoComplete="text"
        margin="normal"
        onChange={props.recordUser}
        value={props.lastname}
      />
      <br />
      <TextField
        id="email"
        label="email"
        className={styles.textField}
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        onChange={props.recordUser}
        value={props.email}
      />
      <br />
      <TextField
        id="password"
        label="Password"
        className={styles.textField}
        type="password"
        name="password"
        autoComplete="password"
        margin="normal"
        onChange={props.recordUser}
        value={props.password}
      />
      <br />
      <TextField
        id="repeat-password"
        label="Repeat Password"
        className={styles.textField}
        type="password"
        name="passwordVerify"
        autoComplete="password"
        margin="normal"
        onChange={props.recordUser}
        value={props.passwordVerify}
      />
      <div className="subButton">
      </div>
      <br />
    </div>
  );
};

export default UserForm;
