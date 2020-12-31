import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Container from "@material-ui/core/Container";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Button from "@material-ui/core/Button";
import Timer from 'react-compound-timer'

import axios from "axios";
import Search from "../../components/Search";
import TakeQuiz from "../../components/TakeQuiz";
import Result from "../../components/Card/Result";
import "./Quiz.css";


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

class quiz extends Component {
  constructor() {
    super();
    this.state = {
      quizzes: [],
      languageSelect: "",
      quizTypeSelect: "",
      answer: "",
      count: 0,
      scoreCount: 0,
    };
    this.onLanguageUpdate = this.onLanguageUpdate.bind(this);
    axios.get("http://localhost/react_with_lumen_api/lumen_api/public/api/quiz").then((res )=> {
      this.setState({quizzes:res.data});
      console.log(res.data);
    });

    this.getAns = this.getAns.bind(this);
    this.nextquiz = this.nextquiz.bind(this);
  }

  handleChange = (panel) => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  onLanguageUpdate = (val) => {
    this.setState({
      languageSelect:val
    });
    console.log(this.state.languageSelect);
  };
  onQuizType = (val) => {
    this.setState({
      quizTypeSelect:val
    });
    console.log(this.state.quizTypeSelect);
  }

  getAns(id, e) {
    let userInputAns = e.target.value;
    let actualAns = id;
    if (actualAns == userInputAns) {
      this.state.scoreCount = this.state.scoreCount+1;
      console.log("Success....");
    } else {
      this.state.scoreCount = this.state.scoreCount+0;
      console.log("Wrong Answer..!!");
    }
  }

  nextquiz() {
    this.setState({
      count: this.state.count + 1,
      
    });
    console.log('test');
  }

  examine() {
    let fromUser = this.getAns();
    console.log(fromUser);
  }

  render() {
    const { classes, theme } = this.props;
    const { expanded } = this.state;

    console.log(this.state.quizzes.length);

    let mainQuizData = this.state.quizzes.filter(
      (arr) => ((typeof arr.quiz_language !== "undefined" && arr.quiz_language == this.state.languageSelect.toUpperCase())&&(typeof arr.quiz_type !== "undefined" && arr.quiz_type == this.state.quizTypeSelect.toUpperCase()))
    );

    let QuizDataShow = Array();
      if(mainQuizData.length !== 0 && mainQuizData.length > this.state.count){
        let sortQuizData = mainQuizData[this.state.count];
          QuizDataShow.push(
          <Grid item xs={12} style={{}} key={sortQuizData.id} >
            <p style={{textAlign:'right',paddingRight:'25px'}}>  

            <Timer
                initialTime={5*1000}
                direction="backward"
                timeToUpdate={90}
                checkpoints={[
                  {
                      time: 0,
                      callback: () => this.nextquiz(),
                  },
              ]}
            >
                {() => (
                    <React.Fragment>
                        <Timer.Minutes /> minutes 
                        <Timer.Seconds /> seconds
                    </React.Fragment>
                )}
            </Timer>
                  
            </p>
            <Paper className={classes.paper, 'answer'} >
            <Paper className={classes.paper, 'question'} >
              Question. {sortQuizData.quiz_question}
            </Paper>

            <FormControl component="fieldset" className={classes.formControl,'quizoption'} >
              <RadioGroup aria-label="gender" name="gender1" onChange={(e) => this.getAns(sortQuizData.quiz_answer, e)}>
                <FormControlLabel value="1" control={<Radio />} ashik="g" label={sortQuizData.quiz_optiona} />
                <FormControlLabel value="2" control={<Radio />} ashik="gg" label={sortQuizData.quiz_optionb} />
                <FormControlLabel value="3" control={<Radio />} ashik="ggg" label={sortQuizData.quiz_optionc} />
                <FormControlLabel value="4" control={<Radio />} ashik="gggg" label={sortQuizData.quiz_optiond} />
              </RadioGroup>
            </FormControl>

            </Paper>
            <Button variant="contained" color="primary" onClick={this.nextquiz} className={classes.button} startIcon={<CloudUploadIcon />} > Next </Button>
          </Grid>
          )
      }

      
    let result = Array();
    if (this.state.count >= mainQuizData.length && this.state.languageSelect && this.state.quizTypeSelect) {
      result.push(
        // <Paper className={classes.paper, 'answer' } >
        //   score: {this.state.scoreCount}
        //   <Paper className={classes.paper, 'question'} > Completed </Paper>
          <Result score={this.state.scoreCount} type={this.state.quizTypeSelect}  language={this.state.languageSelect} />
        // </Paper>
        
      );
    }

    let initialview = Array();
    if(!this.state.languageSelect && !this.state.quizTypeSelect){
      initialview.push(
        <Paper className={classes.paper, 'answer' } >
          Select language and Quiz Type
        </Paper>
      );
    }

    return (
      <div>
        <Container>
          <ExpansionPanel
            expanded={expanded === "panel1"}
            onChange={this.handleChange("panel1")}
          >
            <ExpansionPanelSummary className= {'expandselect'} expandIcon={<ExpandMoreIcon />} >
              <Typography className={classes.heading}>
                Please Select a Language And Quiz Type You Want to take
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <Grid item container direction="row" spacing={0}>
                  <Grid item xs={5}>
                    <Search onUpdate={this.onLanguageUpdate} />
                  </Grid>
                  <Grid item xs={5}>
                    <TakeQuiz onQuizType={this.onQuizType} />
                  </Grid>
                </Grid>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <Grid item xs={12} style={{}} key={quiz.id}>
              
            {initialview}
            {QuizDataShow}
            {result}

          </Grid>
         
        </Container>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(quiz);
