import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import * as cnst from "../config/Constants";

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

class TakeQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeValue:"",
      quizTypeSelect: cnst.QUIZTYPE,
    };
    this.handleDropdownTypeChange = this.handleDropdownTypeChange.bind(this);
  }

  handleDropdownTypeChange(val){
    this.setState({typeValue: val.target.value});
    this.props.onQuizType(val.target.value);
  }

  render() {
    const LanguageLists = this.state.quizTypeSelect;
    const LanguageListLength = Object.keys(this.state.quizTypeSelect).length;

    let QuizType = Array();
    if (LanguageListLength) {
      Object.entries(LanguageLists).map(([key, value]) => {
        QuizType.push(<option value={key}>{value}</option>);
      });
    }

    const { classes, theme } = this.props;
    return (
      <div>
          <form className={classes.container}>
            <FormControl
              className={classes.formControl}
              style={{
                width: "250px",
              }}
            >
              <InputLabel htmlFor="demo-dialog-native">Select Quiz Type</InputLabel>
              <Select 
              native
                    value={this.state.typeValue}
                    onChange={this.handleDropdownTypeChange}
                    input={<Input id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                {QuizType}
              </Select>
            </FormControl>
            <FormControl
              className={classes.formControl}
              style={{ width: "250px", marginRight: "20px" }}
            ></FormControl>
          </form>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(TakeQuiz);
