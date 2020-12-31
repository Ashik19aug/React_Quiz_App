import React, { useContext, useEffect, useState } from "react";
import { useHistory, NavLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar(props) {
  const { history } = props;
  const classes = useStyles();


  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

//   const menuItems = [
//     {
//       menuTitle: "Home",
//       pageURL: "/",
//     },
//     {
//       menuTitle: "Basic",
//       pageURL: "/basic",
//     },
//     {
//       menuTitle: "Admin",
//       pageURL: "/admin",
//     },
//   ];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          > 
          Welcome 
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Button
              variant="contained"
              color="primary"
            >
              Home
            </Button>
            <Button
              variant="contained"
              color="primary"
            >
              Basic
            </Button>
            <Button
              variant="contained"
              color="primary"
            >
              Admin
            </Button>
          </Typography>

          {/* <Typography>
          <Button
              variant="contained"
              color="primary"
            >
              asd
            </Button>
          </Typography> */}



          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>LogOut</MenuItem>
            </Menu>
          </div>


        </Toolbar>
      </AppBar>
    </div>
  );
}

// export default withRouter(MenuAppBar);
