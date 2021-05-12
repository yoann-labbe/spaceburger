import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    //top: "120px",
    //width: "100%",
    //zIndex: 1,
    //overFlow: "hidden",
 
  },
});

export default function Products() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Sandwich" />
        <Tab label="A grignoter" />
        <Tab label="Dessert" />
        <Tab label="Boisson" />
      </Tabs>
    </Paper>
  );
}
