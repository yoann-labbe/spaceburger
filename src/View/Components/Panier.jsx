import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';
import { AutorenewTwoTone } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    fontWeight: "bold",
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  addicon:{
    margin:"10px auto",
  },

}));

const Panier = () => {
     const [expanded, setExpanded] = React.useState(false);
    const classes = useStyles();
  return (
    <div>
      <CardHeader 
        avatar={
          <Avatar src="./assets/T-800.jpeg" aria-label="recipe" className={classes.avatar}>
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
           
          </IconButton>
        }
        title="Menu T-800"
      />
      <CardMedia
        className={classes.media}
        image="assets/menun.jpg"
        title="Menu T-800"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Ce menu comprend 1 grande boite à outils de l'espace + 1 boite de 150 vis + 1,5 Litre d'huile + 6 écrous
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton className={classes.addicon} aria-label="add to favorites">
          <AddIcon/>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      </Collapse>
    </div>
  );
};

export default Panier;