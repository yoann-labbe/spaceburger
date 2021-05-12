import React, { useContext, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Tooltip } from "@material-ui/core";

import { useHistory } from "react-router";


const useStyles = makeStyles((theme) => ({

  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "35ch",
      display: "flex",
      flexDirection: "column",
    },
  },
  cadre: {
    border: "1px black solid",
    display: "flex",
    justifyContent: "center",
    height: "250px",
    width: "360px",
    margin: "auto",
    marginTop: "45px",
    borderRadius: "10px",
  },
  click: {
    marginTop: "20px",
    marginLeft: "45px",
  },
}));

export default function Load() {
  const classes = useStyles();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 const handleConnection = () => {

 };
return (
    <Box className={classes.cadre}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Mail"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <TextField
          id="standard-password-input"
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          value={form.password}
          onChange={handleChange}
        />

        <Button
          className={classes.click}
          variant="contained"
          onClick={handleConnection}
        >
          Log in
        </Button>
        <Tooltip>
          <Button className={classes.click}>Forgot your password</Button>
        </Tooltip>
      </form>
    </Box>
  );
}