import React,{ useState,useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";

import {useAuth} from '../contexts/AuthContext';
import ProfileDialog from '../components/ProfileDialog';
import {ViewContext} from '../contexts/ViewContext'

import { withRouter, Link, useHistory } from "react-router-dom";

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
  button: {
    margin: theme.spacing(1),
  },
}));

const MenuAppBar = (props) => {
  // console.log(props);
  const { history } = props;
  const [profileOpen, setProfileOpen] = useContext(ViewContext);

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

  const openProfile =()=>{
    setProfileOpen(true);
    console.log(profileOpen);
  }
  const menuItems = [
    {
      menuTitle: "Home",
      pageURL: "/",
    },
    {
      menuTitle: "Basic",
      pageURL: "/basic",
    },
    {
      menuTitle: "Admin",
      pageURL: "/admin",
    },
    {
      menuTitle: "Login",
      pageURL: "/login",
    },
  ];

  const { currentUser, logout } = useAuth()
  let [ceheckMail,setceheckMail] = useState('')
  
  const adminAccess = Array()
  if(currentUser!=null){
    if(currentUser.email){
      if('ash@gmail.com'==currentUser.email){
      adminAccess.push(
      <Button
        className={classes.button}
        type="button"
        variant="contained"
        color="secondary"
        onClick={() => handleButtonClick("/admin")}
        >
        Admin
      </Button>
      )
  }
    }
    else{
      console.log('mnb');
    }
  }
  if(currentUser==null){
      setceheckMail = false
  }
  
  const [error, setError] = useState("")

  async function handleLogout(){
    try{
      await logout()
      history.push('/login')
    }
    catch{
      setError("Failed to log out")
    }
  } 

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
              type="button"
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={() => handleButtonClick("/")}
            >
              Home
            </Button>
            <Button
              type="button"
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={() => handleButtonClick("/basic")}
            >
              Basic
            </Button>
            <Button
              type="button"
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={() => handleButtonClick("/quiz")}
            >
              Quiz
            </Button>
            {adminAccess}
          </Typography>

          <Typography>
          <Button
              className={classes.button}
              type="button"
              variant="contained"
              color="primary"
              onClick={() => handleButtonClick("/login")}
            >
              Login
            </Button>
          </Typography>

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
              <MenuItem onClick={openProfile}>Profile</MenuItem>
              <MenuItem onClick={handleLogout}>LogOut</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(MenuAppBar);
