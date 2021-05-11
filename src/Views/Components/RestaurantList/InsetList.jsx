import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import LocalPizzaIcon from "@material-ui/icons/LocalPizza";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function InsetList() {
  const classes = useStyles();

  return (
    <List dense className={classes.root}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem key={value} button>
            <ListItemText id={labelId} primary="Bordeaux" /> <p>1km</p>
            <ListItemSecondaryAction>
              <LocalPizzaIcon />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}
