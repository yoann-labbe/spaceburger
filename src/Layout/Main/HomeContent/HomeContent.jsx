import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

    
const useStyles = makeStyles({
    root: {
    maxWidth: 345,
    margin: "10px auto",
    },
    media: {
    height: 140,
    },
    content:{
        textAlign:"center",
    }

});

const styles = (theme) => ({
root: {
    margin: 0,
    padding: theme.spacing(2),
},
closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
},
});

const DialogTitle = withStyles(styles)((props) => {
const { children, classes, onClose, ...other } = props;
return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
    <Typography variant="h6">{children}</Typography>
    {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
        <CloseIcon />
        </IconButton>
    ) : null}
    </MuiDialogTitle>
);
});

const DialogContent = withStyles((theme) => ({
root: {
    padding: theme.spacing(2),
},
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);
      
    
const HomeContent = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <>
    {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open dialog
    </Button> */}
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        {/* <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Notre menu du jour
        </DialogTitle> */}
        <DialogContent className={classes.content} dividers>
          <Typography gutterBottom>
            <h3>Apéromars</h3>
            <img style={{width:200}} src="assets/outillage_chantier.jpg" alt="outillage" />
          </Typography>
          <Typography gutterBottom>
            <h3>Bot dream</h3>
            <img style={{width:200}} src="assets/maison_outils.jpg" alt="maison outils" />
          </Typography>
          <Typography gutterBottom>
            <h3>Tartes Attack!</h3>
            <img style={{width:200}} src="assets/tartelettes.jpg" alt="tartelettes" />
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            close
          </Button>
        </DialogActions>
      </Dialog>
        
    <Card className={classes.root}>
        <CardActionArea>
        <CardMedia
            onClick={handleClickOpen}
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
    </Card>
    </>
    );
}

export default HomeContent;