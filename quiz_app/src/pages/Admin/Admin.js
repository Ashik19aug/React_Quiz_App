import React, { Component } from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import AddIcon from "@material-ui/icons/Add";

import { withStyles } from "@material-ui/core/styles";

import AddBasicInfo from "../../components/Dialog/AddBasicInfo";
import ShowBasicInfo from "../../components/Dialog/ShowBasicInfo";
import AddQuizInfo from "../../components/Dialog/AddQuiz";
import ShowQuizInfo from "../../components/Dialog/ShowQuizinfo";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing(1),
  },
});

class admin extends Component {
  constructor() {
    super();
    this.state = {
      AddBasicView: false,
      ShowBasicView: false,
    };
  }

  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12}
          style={{ textAlign:"center", marginTop:"25px" }}
          >
            <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <AddBasicInfo />
            </Paper>
            <Paper className={classes.paper}>
              <ShowBasicInfo />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <AddQuizInfo />
            </Paper>
            <Paper className={classes.paper}>
              <ShowQuizInfo />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(admin);
