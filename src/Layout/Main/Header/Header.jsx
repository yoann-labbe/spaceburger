import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import { Link } from 'react-router-dom';
    
const useStyles = makeStyles({
  logo:{
      textAlign:"center",
  }

});
const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.logo}>
      <Link to="/">
      <img
        style={{ maxWidth: "190px", alignItems: "center"}}
        src="assets/space_burger.png"
        alt="spaceBurger"
      />
      </Link>
    </div>
  );
};

export default Header;
