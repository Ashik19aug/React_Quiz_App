import React, { PureComponent } from "react";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./Basic.css";
import Search from "../../components/Search";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
});

export class PaginationExample extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offset: 0,
      BasicData: [],
      orgBasicData: [],
      perPage: 5,
      currentPage: 0,
      languageSelect: "",
      filterData: [],
      expanded: null,
    };

    this.onUpdate = this.onUpdate.bind(this);
  }

  handleChange = (panel) => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  componentDidMount() {
    this.geBasic();
  }
  geBasic() {
    axios.get("http://localhost/react_with_lumen_api/lumen_api/public/api/basic").then((res) => {
      this.state.BasicData = res.data;
    });
  }

  onUpdate = (val) => {
    this.setState({
      languageSelect: val,
    });
  };

  render() {
    const Data = this.state.BasicData;
    
    let mainData = this.state.BasicData.filter(
      (arr) =>
        typeof arr.language !== "undefined" &&
        arr.language == this.state.languageSelect.toUpperCase()
    );

    console.log(mainData);

    const { classes, theme } = this.props;
    const { expanded } = this.state;
    return (
      <div>
        <Container>
          
          <ExpansionPanel expanded={expanded === "panel1"} onChange={this.handleChange("panel1")} >
            <ExpansionPanelSummary className= {'expandselect'} expandIcon={<ExpandMoreIcon style={{color:"white"}} />} >
              <Typography className={classes.heading}>
                Please Select a Language you want you Learn
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <Search onUpdate={this.onUpdate} />
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          {mainData.map((Basic) => (
            <Grid item xs={12} style={{}} key={Basic.id}>
              <Paper
                className={classes.paper,'answer'}
              >
                <p>{Basic.answer}</p>
                <Paper
                  className={classes.paper,'question'} 
                >
                  {Basic.question}
                </Paper>
              </Paper>
            </Grid>
          ))}


          

          
        </Container>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PaginationExample);
