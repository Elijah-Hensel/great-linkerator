import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Search from "./Search";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  app: {
    background: "#fff",
  },
  appBar: {
    background: "#557a95",
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://source.unsplash.com/Kj2SaNHG-hg")`,
    height: "400px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
    // color: "#fff",
    // fontSize: "4rem",
    blur: "2px",
  },

  linkContainer: {
    paddingTop: theme.spacing(3),
  },
  linkTitle: {
    fontWeight: "800",
    paddingBottom: theme.spacing(3),
  },

  search: {
    display: "flex",
    justifyContent: "flex-end",
  },

  content: {
    display: "center",
    textAlign: "center",
  },
  boxTitle: {
    color: "#fff",
    fontSize: "4rem",
    paddingBottom: "4rem",
  },
  boxSubTitle: {
    color: "#fff",
    fontSize: "1.5rem",
    paddingBottom: "1rem",
    textDecoration: "none",
  },

  titles: {
    color: "#fff",
    fontSize: "30px",
    lineHeight: "30px",

    transition: "transform 0.4s ease",
    textDecoration: "none",
    font: "Roboto",
    "&:hover": {
      transform: "scale(1.5, 1.5)",
    },
  },
}));

const NavBar = ({ tags, links, setLinks, retrieveLinks }) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position='static'>
      <Toolbar className={classes.toolBar}>
        <Link to='/' className={classes.titles}>
          Home
        </Link>
        {/* <Link to='/tags' className={classes.titles}>
          Tags
        </Link> */}
        <Link to='/favorites' className={classes.titles}>
          Favorites
        </Link>

        <Search
          className={classes.search}
          links={links}
          setLinks={setLinks}
          reset={retrieveLinks}
        />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
