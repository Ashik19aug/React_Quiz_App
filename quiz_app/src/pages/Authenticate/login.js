import React,{ useState, useEffect, useContext} from 'react';



import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";


import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import Hidden from '@material-ui/core/Hidden';
import "./login.css";
import LoginForm from './LoginForm';
import Register from './Register';

import {ViewContext} from '../../contexts/ViewContext';


const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
});

export function LoginPage()  {

  const [open, setOpen] = React.useState(false);
  
  
  const [profileOpen, setProfileOpen] = useContext(ViewContext);
  console.log(profileOpen);

  const handleClickProfileOpen = () => {
    setProfileOpen(true);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setProfileOpen(false);
  };
  function PaperComponent(props) {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    );
  }



  const [authform,setAuthform] = useState(true);
  function formtoggle(){
    setAuthform(!authform);
  }

  const useStyles = makeStyles((theme,breakpoints, palette ) => ({
    
    appBar: {
      background: 'none',
    },

  }));
  const classes = useStyles();

  return (
    
      <div className={'root'}>
      <div className={'backDrop'} />
      <Grid className={'container'} container justify={'center'}>
        <AppBar className={classes.appBar} position={'absolute'} elevation={0}>
          <Toolbar className={'toolbar'}>
            <Grid container>
              <Hidden only={'xs'}>
                <Grid
                  xs
                  item
                  container
                  alignItems={'center'}
                  justify={'flex-end'}
                >
                  <Typography className={'grey'}>
                    Not a member?
                  </Typography>{' '}
                  <Button
                    classes={{ label: classes.buttonLabel }}
                    className={'mlNormal'}
                    color={'secondary'}
                    onClick={formtoggle}
                  >
                    Sign Up
                  </Button>
                </Grid>
              </Hidden>
            </Grid>
          </Toolbar>
        </AppBar>
        <Grid
          className={'content'}
          item
          xs={12}
          sm={6}
          md={5}
          lg={4}
          container
          alignItems={'center'}
        >
           {authform ? <LoginForm /> : <Register />} 

        </Grid>
      </Grid>

      <div>
      
      
    </div>
      
    </div>
  )
}

export default LoginPage;
