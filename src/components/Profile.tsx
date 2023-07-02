import {
  Grid,
  Button,
  DialogTitle,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
const Profile = () => {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelected(e.target.value);
  };

  const submitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    alert("Form Submitted");
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
        <form onSubmit={submitForm}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name1"
              label="Some Text"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name2"
              label="Some Text"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name3"
              label="Some Text"
              type="text"
              fullWidth
            />
            <FormControl fullWidth>
              <InputLabel id="select-label">Some Text</InputLabel>
              <Select
                labelId="select-label"
                id="select"
                value={selected}
                label="Select"
                onChange={handleChange}
              >
                <MenuItem value={"s1"}>Select 1</MenuItem>
                <MenuItem value={"s2"}>Select 2</MenuItem>
                <MenuItem value={"s3"}>Select 3</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button type="submit">SUBMIT</Button>
            <Button onClick={handleClose}>CLOSE</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default Profile;
