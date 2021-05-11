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
        margin: "10px auto",
      },
      media: {
        height: 140,
      },

    });
    
    const HomeContent = () => {
      const classes = useStyles();
    
      return (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="assets/menu_jour.webp"
              title="menu"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Découvrez le menu du jour
              </Typography>
              {/* <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography> */}
            </CardContent>
            <CardMedia
              className={classes.media}
              image="assets/resto_proche.jpg"
              title="menu"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Restaurant le plus proche
              </Typography>
            </CardContent>
          </CardActionArea>
          {/* <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions> */}
        </Card>
      );
    }

export default HomeContent;