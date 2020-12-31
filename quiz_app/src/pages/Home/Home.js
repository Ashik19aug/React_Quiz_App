import React, { Component } from "react";
// import "./Home.css";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import Hdemo from "./homedemo";
import { Button } from "@material-ui/core";



import { DialogComponent } from '@syncfusion/ej2-react-popups';


const styles = (theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
    marginTop: "30px",
  },
  
});

class home extends Component {



  render() {
    const { classes, theme } = this.props;
    return (
      <div>
        <Container>

        <Grid container spacing={2} style={{marginTop:"20px"}}>
        <Grid item xs={6} style={{boxShadow: "none"}}>
          <Paper className={classes.paper} style={{boxShadow: "none"}}>
          <Hdemo />
          </Paper>
        </Grid>
        <Grid item xs={6} style={{boxShadow: "none"}}>
          <Paper className={classes.paper} style={{boxShadow: "none"}}>
          <Hdemo />
          </Paper>
        </Grid>

        <Grid item xs={6} style={{boxShadow: "none"}}>
          <Paper className={classes.paper} style={{boxShadow: "none"}}>
          <Hdemo />
          </Paper>
        </Grid>
        <Grid item xs={6} style={{boxShadow: "none"}}>
          <Paper className={classes.paper} style={{boxShadow: "none"}}>
          <Hdemo />
          </Paper>
        </Grid>
      </Grid>

      {/* ========================================== */}

      

    {/* ========================================== */}

        </Container>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(home);
