import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
//import { Redirect } from "react-router-dom";
import { Link, LinkProps } from "react-router-dom";
import inkline from "../../theme/Mui";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2),
    },
  }),
);
const AdapterLink = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <Link innerRef={ref} {...props} />
));

const CallToAction = () => {

    const classes = useStyles();
    return (
      <div className="callToAction">
        <ThemeProvider theme={inkline}>
          <Paper className={classes.root}>
            <h1>Inkline</h1>
            <h2>Find Tattoo Artists, Get Inspired, Get In Contact</h2>
            <br />
            <Button variant="contained" color="secondary" component={AdapterLink} to="/browse">
              Browse
            </Button>
          </Paper>
        </ThemeProvider>
      </div>
    );

};

export default CallToAction;
