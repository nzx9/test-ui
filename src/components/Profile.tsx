import {
  Grid,
  Button,
  Box,
  Modal,
  Typography,
  DialogTitle,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
const Profile = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Grid item>
          <h1>Profile</h1>
        </Grid>
        <Grid item>
          <Button onClick={handleOpen}>Update</Button>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Some Text</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Some Text"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Some Text"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Some Text"
            type="text"
            fullWidth
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Some Text</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={}
              label="Select"
              // onChange={handleChange}
            >
              <MenuItem value={10}>Select 1</MenuItem>
              <MenuItem value={20}>Select 2</MenuItem>
              <MenuItem value={30}>Select 3</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Button</Button>
          <Button onClick={handleClose}>Button</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Profile;
