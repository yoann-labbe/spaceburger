import { makeStyles } from "@material-ui/core";
import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";



const useStyles = makeStyles((theme) => ({
  root: {

  },
}));

function Main(props) {
  const { children } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      {children}
      
      <Footer />
    </div>
  );
}

export default Main;