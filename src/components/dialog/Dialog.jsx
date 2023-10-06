import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

const DialogBox = ({ handleClose, open, setOpen }) => {
  const [state, setState] = useState({ playListId: "" });

  const handleChange = (e) => {
    setState({
      [e.target.name]: e.target.value,
    });
  };

  const validate = (playListId) => {
    if (!playListId) {
      alert("playlist id could not be null or undefined");
      return;
    } else if (!playListId.startsWith("PL")) {
      const playListLink = playListId.split("=");
      const originalPId = playListLink.filter((item) => item.startsWith("PL"));
      if (originalPId.length == 0) {
        alert("please provide a valid playlist id or link");
        return false;
      }
      playListId = originalPId[0];
    }

    handleClose(playListId);
    return true;
  };

  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)}>
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
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button
            onClick={() => {
              const data = validate(state.playListId);
              if (data) {
                setState({ playListId: "" });
              }
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
