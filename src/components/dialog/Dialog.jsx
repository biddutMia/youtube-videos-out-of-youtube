import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

const DialogBox = ({ handleClose, open }) => {
  const [state, setState] = useState({ playListId: "" });

  const handleChange = (e) => {
    setState({
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            plese provide a valid youtube playlist id for watch each playlist
            video without adds.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="playlist id"
            type="email"
            fullWidth
            variant="standard"
            name="playListId"
            value={state.playListId}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              handleClose(state.playListId);
              setState({ playListId: "" });
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogBox;
