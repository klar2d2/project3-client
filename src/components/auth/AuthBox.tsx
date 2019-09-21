import React from "react";

import inkline from "../../theme/Mui";
import Signup from "../auth/Signup";
import Login from "./Login";

import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/styles";

interface ITabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: ITabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    "aria-controls": `simple-tabpanel-${index}`,
    "id": `simple-tab-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: 800,
  },
}));

const AuthBox = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
      setValue(newValue);
    }

  return (
      <div className="tabs home">
        <div className={classes.root}>
        <ThemeProvider theme={inkline}>
          <AppBar position="static" className="AppBar">
            <Tabs  value={value} onChange={handleChange} aria-label="simple tabs example">
              <Tab label="Login" {...a11yProps(0)} />
              <Tab label="Signup" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <Login refreshUser={props.refreshUser} user={props.user} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Signup user={props.user} refreshUser={props.refreshUser}/>
          </TabPanel>
          </ThemeProvider>
          </div>
       </div>
    );
};

export default AuthBox;
