import { makeStyles } from '@material-ui/core/styles';
import React from "react";
    
const useStyles = makeStyles({
  logo:{
      textAlign:"center",
  }

});
const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.logo}>
      <img
        style={{ maxWidth: "190px", alignItems: "center"}}
        src="assets/space_burger.png"
        alt="spaceBurger"
      />
    </div>
  );
};

export default Header;
