import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100vw",
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
        component={Link}
        to="/admin"
        label="Admin"
        icon={<PersonIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/"
        label="Accueil"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/home-player"
        label="Joueur"
        icon={<VideogameAssetIcon />}
      />
    </BottomNavigation>
  );
};

export default Footer;
