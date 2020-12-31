import React, { useEffect } from "react";

import "./Dialog.css";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";

import axios from "axios";

import * as cnst from "../../config/Constants";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
  options: {
    "& > *": {
      margin: theme.spacing(1),
      width: "33ch",
    },
  },
}));

export default function FormAddBasicDialog() {

  const languageoptions = cnst.LANGUAGE;
  const quiztypeoptions = cnst.QUIZTYPE;
  console.log(languageoptions);
  console.log(quiztypeoptions);

  const [selectLanguage, setselectLanguage] = React.useState('');
  const hamdelSelectLanguage = (event) => {
    setselectLanguage(event.target.value);
    // console.log(event.target.value);
  };

  const handleCloselan = () => {
    setOpenselect(false);
  };

  const handleOpenlan = () => {
    setOpenselect(true);
  };
  
  const [selectQuizType, setselectQuizType] = React.useState('')
  const handelSelectQuizType = (event) => {
    setselectQuizType(event.target.value)
  }

  const handleCloselquz = () => {
    setOpenselecttyp(false);
  };

  const handleOpenquz = () => {
    setOpenselecttyp(true);
  };

  
    const handleClose = () => {
      setOpen(false);
    };

  const [openselect, setOpenselect] = React.useState(false);
  const [openselecttyp, setOpenselecttyp] = React.useState(false);

  

  const selectlan = Array();
  if(languageoptions){
    Object.entries(languageoptions).map(([key,value]) => {
      selectlan.push(<MenuItem value={key}>{value}</MenuItem>)
    })
  }

  const selectqtype = Array();
  if(quiztypeoptions){
    Object.entries(quiztypeoptions).map(([key,value]) => {
      selectqtype.push(<MenuItem value={key}>{value}</MenuItem>)
    })
  }

  const formik = useFormik({
    
    initialValues: {
      quiz_language: "",
      quiz_type: "",
      quiz_question: "",
      quiz_optiona: "",
      quiz_optionb: "",
      quiz_optionc: "",
      quiz_optiond: "",
      quiz_answer: "",
    },
    onSubmit: (values) => {
      axios.post('http://localhost/react_with_lumen_api/lumen_api/public/api/quiz', values)
      .then(res => {
          console.log(res);
        })
      console.log("data", selectLanguage);
    //     console.log("data", values.quiz_language);
    },
  });

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };


  return (
    <div>
      <Button variant="contained" color="primary" size="large" onClick={handleClickOpen} startIcon={<AddIcon />} >
        Add Quiz Information
      </Button>
      <Dialog
        // style={{ backgroundColor: "red" }}
        fullWidth={true}
        maxWidth={"lg"}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <div>
          <DialogTitle
            style={{
              backgroundColor: "black",
              color: "white",
              textAlign: "center",
            }}
            id="form-dialog-title"
          >
            Add Quiz
          </DialogTitle>
        </div>
        <DialogContentText style={{marginLeft:'20px',marginRight:'20px'}}>
          <form onSubmit={formik.handleSubmit}>



        <InputLabel id="demo-controlled-open-select-label">LANGUAGE</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="quiz_language"
          name="quiz_language"
          open={openselect}
          onClose={handleCloselan}
          onOpen={handleOpenlan}
          fullWidth
          onChange={hamdelSelectLanguage}
          value={formik.values.quiz_language=selectLanguage}
        >
          <MenuItem value=""> <em>None</em> </MenuItem>
          {selectlan}
        </Select>

        <InputLabel id="demo-controlled-open-select-label">Quiz Type</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="quiz_type"
          name="quiz_type"
          open={openselecttyp}
          onClose={handleCloselquz}
          onOpen={handleOpenquz}
          fullWidth
          onChange={handelSelectQuizType}
          value={formik.values.quiz_type=selectQuizType}
        >
          <MenuItem value=""> <em>None</em> </MenuItem>
          {selectqtype}
        </Select>
          
            <TextField
              autoFocus
              margin="dense"
              id="quiz_question"
              name="quiz_question"
              label="quiz_question"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.quiz_question}
              fullWidth
            />
            <div className={classes.options} noValidate autoComplete="off">
              <TextField
                id="optiona"
                label="option a."
                name="quiz_optiona"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.quiz_optiona}
              />
              <TextField
                id="optionb"
                label="option b."
                name="quiz_optionb"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.quiz_optionb}
              />
              <TextField
                id="optionc"
                label="option c."
                name="quiz_optionc"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.quiz_optionc}
              />
              <TextField
                id="optionad"
                label="option d."
                name="quiz_optiond"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.quiz_optiond}
              />
            </div>
            <TextField
              autoFocus
              margin="dense"
              id="quiz_answer"
              name="quiz_answer"
              label="quiz_answer"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.quiz_answer}
              fullWidth
            />
            <Button
              style={{ marginTop: "10px", marginLeft: "230px" }}
              className={classes.margin}
              onClick={handleClose}
              color="primary"
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </DialogContentText>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}
