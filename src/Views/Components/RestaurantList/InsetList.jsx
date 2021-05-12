import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import LocalPizzaIcon from "@material-ui/icons/LocalPizza";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
    padding: "20px",
    margin: "30px",
    marginBottom: "20px",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "20px auto",
    width: "300px",
  },

  button: {
    marginBottom: "20px",
  },
}));

export default function SimplePopover() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className={classes.container}>
      <Button
        className={classes.button}
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Tharsis - 1km <LocalPizzaIcon />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography className={classes.typography}>
          <p>
            Adresse : 34 rue de la marne <br />
            N° : 0420394203942304
          </p>
        </Typography>
      </Popover>
      <Button
        className={classes.button}
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Xanthe - 1.5km <LocalPizzaIcon />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography className={classes.typography}>
          Adresse : 34 rue de la marne <br />
          N° : 042039420390342
        </Typography>
      </Popover>
      <Button
        className={classes.button}
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Erythraeum - 4.4km <LocalPizzaIcon />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography className={classes.typography}>
          56 rue de la cour 454454 Tel: 0424094509405 Email: eroizjer@robot.com
        </Typography>
      </Popover>
      <Button
        className={classes.button}
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Serpentis - 6km <LocalPizzaIcon />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography className={classes.typography}>
          42 faubourg saint honoré 334509 Tel: 04240230235924 Email:
          eroizjer@robot.com
        </Typography>
      </Popover>
      <Button
        className={classes.button}
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Sirenum - 6.3km <LocalPizzaIcon />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography className={classes.typography}>
          42 rue des jours 3384545 Tel: 04304304902394 Email: eroizjer@robot.com
        </Typography>
      </Popover>
    </div>
  );
}
