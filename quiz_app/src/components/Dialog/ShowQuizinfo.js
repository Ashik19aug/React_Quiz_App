import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import SaveIcon from "@material-ui/icons/Save";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";



import axios from "axios";



export default function FormQuizShowDialog() {

  const useStyles = makeStyles((theme) => ({
    root: {
      //   flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));


  let [quizData, setQuizData] = useState({});
  const fetchQuizData = React.useCallback(() => {
    axios({
      method: "GET",
      url: "http://localhost/react_with_lumen_api/lumen_api/public/api/quiz",
    })
      .then((response) => {
        setQuizData(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setQuizData]);

  useEffect(() => {
    fetchQuizData();
  }, [fetchQuizData]);


  console.log(quizData);
  const hasquizData = quizData.length;

  const deleteQuizData = (id) => {
    axios.delete(`http://localhost/react_with_lumen_api/lumen_api/public/api/quiz/${id}`).then((res) => {
      console.log(res);
      console.log(res.data);
      window.location.reload(false);
    });
  };

  let QuizDataInfo = Array();
  if (hasquizData) {
    quizData.map((quizies) => {
      QuizDataInfo.push(
        <Grid item xs={12} key={quizies.id}>
            <Paper  style={{ textAlign: "left" }}>
              <div style={{margin:'20px'}}>
                <DeleteForeverOutlinedIcon style={{ float: "right", color:"red" }} onClick={() => deleteQuizData(quizies.id)} />
                <h4>{quizies.quiz_question}</h4>
              </div>
              <div style={{margin:'20px'}}>
              <p>{quizies.quiz_optiona}</p>
              <p>{quizies.quiz_optionb}</p>
              <p>{quizies.quiz_optionc}</p>
              <p>{quizies.quiz_optiond}</p>
              </div>
            </Paper>
          </Grid>
      );
    });
  }

  

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
        startIcon={<SaveIcon />}
      >
        Show Quiz Information
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle
          id="form-dialog-title"
          style={{
            backgroundColor: "black",
            color: "white",
            textAlign: "center",
          }}
        >
          Show Quiz Information
        </DialogTitle>
        <DialogContent>
        
          {QuizDataInfo}
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
