import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import AlartQuiz from '../OnlodeAlart';

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  const [msgtxt,setMsgtxt] = React.useState(props.msg);
  // console.log(props.msg);
  return (
      
    <div style={{minWidth:750}}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{minWidth:750}}
      >
          <AlartQuiz poptxt={msgtxt} />
      </Dialog>
    </div>
  );
}
