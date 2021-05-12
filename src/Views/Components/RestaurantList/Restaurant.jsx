import { makeStyles } from "@material-ui/core";
import React from "react";
import InsetList from "./InsetList";

const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: "center",
  },
}));

const Restaurant = () => {
const classes = useStyles();
  return (
    <div className={classes.container}>
      <h2>Trouver un restaurant </h2>
      <img
        src="assets/mars2.jpg"
        alt="map.location"
        style={{ maxWidth: "400px" }}
      />
      <InsetList />
    </div>
  );
};

export default Restaurant;
