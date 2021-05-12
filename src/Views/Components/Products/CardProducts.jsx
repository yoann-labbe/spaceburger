import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function CardProducts() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/assets/sandwich_vis_herbe.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Vis Sandwich
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Pain de mie, vis, herbe
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/assets/sandwich_vis.jpeg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Vis 280
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Pain de mie, vis, mayonnaise, ketchup, herbe de provence
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/assets/baguettevis.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Vis Baguette
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Baguette, vis, mayonnaise
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/assets/assiettevis.jpeg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Vis Apero
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Vis, clou
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/assets/clou.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Fish and vis
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Vis and fish
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/assets/clou_vis.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Clovis
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Vis, clou
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/assets/clou_vis.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Clovis
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Vis, clou
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </Card>
  );
}
