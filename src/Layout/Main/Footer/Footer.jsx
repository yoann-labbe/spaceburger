import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
//import { Link } from "react-router-dom";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';

const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "100vw",
    position:"fixed",
    bottom: 0,
  },
});

const Footer = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      className={classes.root}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >

    <BottomNavigationAction
        //component={Link}
        //to="/"
        label="Accueil"
        icon={<HomeIcon />}
    />
    <BottomNavigationAction
        //component={Link}
        //to="/"
        label="Carte"
        icon={<LocalPizzaIcon />}
    />
    <BottomNavigationAction
        //component={Link}
        //to="/"
        label="Menu"
        icon={<RestaurantMenuIcon />}
    />
    <BottomNavigationAction
        //component={Link}
        //to="/"
        label="Panier"
        icon={<ShoppingBasketIcon />}
    />
    <BottomNavigationAction
        //component={Link}
        //to="/admin"
        label="Compte"
        icon={<PersonIcon />}
    />
    </BottomNavigation>
  );
};

export default Footer;
