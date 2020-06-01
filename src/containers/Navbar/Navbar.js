import React, { useState } from "react";
import { Link } from "react-router-dom";

import makeStyle from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyle((theme) => ({
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: "#fff",
  },
  iconButton: {
    padding: 10,
  },
  navbar: {
    justifyContent: "space-between",
  },
  list: {
    width: "200px",
  },
}));

const Navbar = (props) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const openHandler = () => {
    setOpen(true);
  };

  const closeHandler = () => {
    setOpen(false);
  };

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar className={classes.navbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={openHandler}
        >
          <MenuIcon />
          <Typography variant="h4" style={{ marginLeft: 20 }}>
            Movies 4 U
          </Typography>
        </IconButton>
        <Drawer
          transitionDuration={300}
          open={open}
          onClose={closeHandler}
          anchor="left"
        >
          <List className={classes.list} onClick={closeHandler}>
            <ListItem onClick={closeHandler} component={Link} to="/nowplaying">
              <ListItemText>Now Playing</ListItemText>
            </ListItem>
            <ListItem onClick={closeHandler} component={Link} to="/popular">
              <ListItemText>popular</ListItemText>
            </ListItem>
            <ListItem onClick={closeHandler} component={Link} to="/toprated">
              <ListItemText>Top Rated</ListItemText>
            </ListItem>
            <ListItem onClick={closeHandler} component={Link} to="/upcoming">
              <ListItemText>Upcoming</ListItemText>
            </ListItem>
          </List>
        </Drawer>
        {/* <div>
          <InputBase
            className={classes.input}
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </div> */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
