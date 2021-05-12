import { makeStyles } from "@material-ui/core";
import React from "react";
import InsetList from "./InsetList";

const useStyles = makeStyles((theme) => ({
  container: {

    justifyContent: "center",
  },
  position: {
    display: "flex",
    justifyContent:"center",
  },
  title: {
    display: "flex",
    justifyContent:"center",
  }
}));

const Restaurant = () => {
const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.title}>
      <h2>Trouver un restaurant </h2>
      </div>
      <div className={classes.position}>
      <img
        src="assets/mars2.jpg"
        alt="map.location"
        style={{ maxWidth: "400px", }}
      />
      </div>
      <InsetList />
    </div>
  );
};

export default Restaurant;
