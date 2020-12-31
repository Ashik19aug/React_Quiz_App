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

class Search extends Component {

  constructor(props){
    super(props);
    this.state = {
      lanValue : "",
      ProgrammingLanguage : cnst.LANGUAGE,
    };
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }

  handleDropdownChange(val){
    this.setState({lanValue: val.target.value});
    this.props.onUpdate(val.target.value);
    // this.props.onLanguageUpdate(val.target.value);
    // console.log(this.props.onUpdate);
  }

  render() {
    const LanguageLists = this.state.ProgrammingLanguage;
    const ProgrammingLanguageLength = Object.keys(this.state.ProgrammingLanguage).length;
    let SearchDataType = Array();
    if(ProgrammingLanguageLength){
      Object.entries(LanguageLists).map(([key,value]) =>{
        SearchDataType.push(<option value={key}>{value}</option>);
      })
    }

    const { classes, theme } = this.props;
    return (
      <div>
            <div>
              <form className={classes.container}>
                <FormControl
                  className={classes.formControl}
                  style={{
                    width: "250px",
                  }}
                >
                  <InputLabel htmlFor="demo-dialog-native">Select Language</InputLabel>
                  <Select
                    native
                    value={this.state.lanValue}
                    onChange={this.handleDropdownChange}
                    input={<Input id="demo-dialog-native" />}
                  >
                    <option aria-label="None" value="" />
                    {SearchDataType}
                  </Select>
                </FormControl>
                <FormControl
                  className={classes.formControl}
                  style={{ width: "250px" }}
                >
                </FormControl>
              </form>
            </div>
        
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Search);
