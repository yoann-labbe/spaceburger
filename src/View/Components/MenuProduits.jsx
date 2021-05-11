import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin:"10px auto",
  },
});

const MenuProduits = () => {
    const classes = useStyles();

  return (
      <>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="130"
          image="/assets/sandwich_vis.jpeg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h4">
            Nos menus
          </Typography> 
        </CardContent>
      </CardActionArea>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="130px"
          image="/assets/assiette_vis.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h4">
            Nos produits
          </Typography> 
        </CardContent>
      </CardActionArea>
     
    </Card>
    {/* <img
        style={{ maxWidth: "190px" }}
        src="assets/wallE.jpeg"
        alt="spaceBurger"
      /> */}
      </>
  );
  
};

export default MenuProduits;