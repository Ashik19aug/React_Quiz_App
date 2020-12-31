import React from "react";

import "./Dialog.css";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";

import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";

import axios from "axios";

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
}));

export default function FormAddBasicDialog() {

    

  const formik = useFormik({
    initialValues: {
      language: "",
      category: "",
      sub_category: "",
      question: "",
      answer: "",
    },
    onSubmit: (values) => {
        axios.post('http://localhost/react_with_lumen_api/lumen_api/public/api/basic', values)
        .then(res => {
            console.log(res);
          })
        // console.log("data", values);
    //   console.log("data", values.language);
    },
  });

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        // className={classes.button}
        onClick={handleClickOpen}
        startIcon={<AddIcon />}
      >
        Add Basic Information
      </Button>
      <Dialog
      // style={{ backgroundColor: "red" }}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <div>
        <DialogTitle 
        style={{ backgroundColor: "black", color: "white", textAlign:"center" }}
        id="form-dialog-title"
        >
          Add Basic Information
        </DialogTitle>
        </div>
        <DialogContent
        style={{  }}
        >
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText> */}
          <form onSubmit={formik.handleSubmit}>
            <TextField
              autoFocus
              margin="dense"
              id="language"
              name="language"
              label="Language"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.language}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="category"
              name="category"
              label="Category"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.category}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="sub_category"
              name="sub_category"
              label="Sub Category"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.sub_category}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="question"
              name="question"
              label="Question"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.question}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="answer"
              name="answer"
              label="Answer"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.answer}
              fullWidth
            />
            <Button
            style={{ marginTop:"10px", marginLeft:"230px" }}
              className={classes.margin}
              onClick={handleClose}
              color="primary"
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
