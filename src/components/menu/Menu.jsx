import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import { useState } from "react";
import DialogBox from "../dialog/Dialog";
import { useStoreActions } from "easy-peasy";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

const Menu = () => {
  const { getPlayListItem } = useStoreActions((actions) => actions.playList);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (playListId) => {
    getPlayListItem(playListId);
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Container maxWidth="md">
          <Toolbar variant="dense">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link
                component={RouterLink}
                to="/home"
                underline="none"
                sx={{ color: "black" }}
              >
                Clean Youtube
              </Link>
            </Typography>
            <Button color="info" variant="contained" onClick={handleClickOpen}>
              <Link
                component={RouterLink}
                to="/home"
                underline="none"
                sx={{ color: "black" }}
              >
                add playlist
              </Link>
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <DialogBox open={open} handleClose={handleClose} />
    </Box>
  );
};

export default Menu;
