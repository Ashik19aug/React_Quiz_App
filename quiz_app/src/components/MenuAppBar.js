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
// import Logo from "../logo/card.jpg";

import {useAuth} from '../contexts/AuthContext';
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
  navbarbg: {
    backgroundColor: '#000'
  },
  logo: {
    maxWidth: 40,
    marginRight: '10px'
  }
}));

const MenuAppBar = (props) => {
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

  const { currentUser, logout } = useAuth()
  let [ceheckMail,setceheckMail] = useState('')
  
  const adminAccess = Array()
  const loggeduser = Array()
  if(currentUser!=null){
    if(currentUser.email){
      if('ash@gmail.com'==currentUser.email){
        adminAccess.push(<Button type="button" className={classes.button} onClick={() => handleButtonClick("/quiz")}><b style={{color:"white"}}>Quiz</b></Button>)
        adminAccess.push(<Button className={classes.button} type="button" onClick={() => handleButtonClick("/admin")}><b style={{color:"white"}}>Admin</b></Button>)
        loggeduser.push(
          <div>
            <IconButton aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit" >
              <AccountCircle />
            </IconButton>
            <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{ vertical: "top", horizontal: "right", }} keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right", }} open={open} onClose={handleClose} >
              <MenuItem onClick={openProfile}>Profile</MenuItem>
              <MenuItem onClick={handleLogout}>LogOut</MenuItem>
            </Menu>
          </div>
        )
      }
      else{
        adminAccess.push(
        <Button type="button" className={classes.button} onClick={() => handleButtonClick("/quiz")} >
          <b style={{color:"white"}}>Quiz</b>
        </Button>)
        loggeduser.push(
          <div>
            <IconButton aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit" >
              <AccountCircle />
            </IconButton>
            <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{ vertical: "top", horizontal: "right", }} keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right", }} open={open} onClose={handleClose} >
              <MenuItem onClick={openProfile}>Profile</MenuItem>
              <MenuItem onClick={handleLogout}>LogOut</MenuItem>
            </Menu>
          </div>
        )
      }
    }
    else{
      console.log('mnb');
    }
  }

  const webAccess = Array()
  if(currentUser==null){
    webAccess.push(
      <Button className={classes.button} type="button" onClick={() => handleButtonClick("/login")} >
        <b style={{color:"white"}}>Login</b>
      </Button>
    )
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
      <AppBar position="fixed" className={classes.navbarbg}>
        <Toolbar>
          {/* <img src={logo} alt="Kitty Katty!" className={classes.logo} /> */}
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">Welcome</IconButton>
          <Typography variant="h6" className={classes.title}>
            <Button type="button" className={classes.button} onClick={() => handleButtonClick("/")}> <b style={{color:"white"}}>Home</b> </Button>
            <Button type="button" className={classes.button} onClick={() => handleButtonClick("/basic")} > <b style={{color:"white"}}>Basic</b> </Button>
            {adminAccess}
          </Typography>
          <Typography> {webAccess} </Typography>
            {loggeduser}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(MenuAppBar);
