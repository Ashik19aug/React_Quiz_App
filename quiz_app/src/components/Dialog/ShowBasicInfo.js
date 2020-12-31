import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import SaveIcon from "@material-ui/icons/Save";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CreateIcon from "@material-ui/icons/Create";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

import axios from "axios";

const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
});

export default function FormDialog() {
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

  let [responseData, setResponseData] = useState({});
  const fetchData = React.useCallback(() => {
    axios({
      method: "GET",
      url: "http://localhost/react_with_lumen_api/lumen_api/public/api/basic",
    })
      .then((response) => {
        setResponseData(response.data);
        //   console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setResponseData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const responseDatas = responseData;
  const hasresponseDatas = responseDatas.length;

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [lan, setQ] = useState("");
  const [filteredresponseDatas, setFilteredresponseDatas] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const language = [{ title: "Python" }, { title: "Java" }, { title: "PHP" }];

  const deleteDdata = (id) => {
    axios.delete(`http://localhost/react_with_lumen_api/lumen_api/public/api/basic/${id}`).then((res) => {
      console.log(res);
      console.log(res.data);
      window.location.reload(false);
    });
  };

  let TableData = Array();
  if (hasresponseDatas) {
    responseDatas.map((responseData) => {
      TableData.push(
        <TableRow key={responseData.id} align="justify">
          <TableCell component="th" scope="row">
            {responseData.question}
          </TableCell>
          <TableCell>{responseData.answer}</TableCell>
          <TableCell align="right">
            <CreateIcon />
            {/* return{" "} */}
            <div
              class="font-icon-wrapper"
              onClick={() => deleteDdata(responseData.id)}
            >
              <DeleteForeverOutlinedIcon />
            </div>
          </TableCell>
        </TableRow>
      );
    });
  }
  // console.log(TableData);

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
        Show Basic Information
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle 
        id="form-dialog-title"
        style={{ backgroundColor: "black", color: "white", textAlign:"center" }}
        >Show Basic Information</DialogTitle>
        <DialogContent>
          <TableContainer component={Paper}>
            <Table
              className={classes.table}
              size="large"
              aria-label="a dense table"
            >
              <TableHead 
              style={{ backgroundColor:"green" }}
              >
                <TableRow style={{ Color:"white" }}>
                  <TableCell >Question </TableCell>
                  <TableCell>Answer</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                
                {TableData}
              </TableBody>
            </Table>
          </TableContainer>
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
