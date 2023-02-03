// import necessary modules
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Route, Link } from "react-router-dom";

// styles for Material UI components
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: 240,
    flexShrink: 0
  },
  drawerPaper: {
    width: 240
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

// component for the home page
const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to the home page.</p>
  </div>
);

// component for the about page
const About = () => (
  <div>
    <h2>About</h2>
    <p>Learn about the person behind this website.</p>
  </div>
);

// component for the services page
const Services = () => (
  <div>
    <h2>Services</h2>
    <p>Discover the services offered by this website.</p>
  </div>
);

// component for the portfolio page
const Portfolio = () => (
  <div>
    <h2>Portfolio</h2>
    <p>Check out the portfolio of this website.</p>
  </div>
);

// component for the contact page
const Contact = () => (
  <div>
    <h2>Contact</h2>
    <p>Get in touch with this website.</p>
  </div>
);

// main component for the portfolio website
const PortfolioSite = () => {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
