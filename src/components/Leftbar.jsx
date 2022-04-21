import React from "react";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {
  Container,
  makeStyles,
  Typography,
  alpha,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    color: "white",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      cursor: "pointer",
      marginBottom: theme.spacing(3),
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      color: "white",
      marginLeft: "25%",
      marginBottom: "25%",
    },
  },
}));

const Leftbar = (props) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      {/* <div className={classes.item}>
        <WhatshotIcon className={classes.icon} />
        <Typography className={classes.text}>Treding Gifs</Typography>
      </div>
      <div className={classes.item}>
        <FavoriteIcon className={classes.icon} />
        <Typography className={classes.text}>Saved Gifs</Typography>
      </div> */}
      <List component="nav" aria-label="main gifs">
        <ListItem button className={classes.item}>
          <ListItemIcon>
            <WhatshotIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Trending Gifs" className={classes.text} />
        </ListItem>
        <ListItem button className={classes.item}>
          <ListItemIcon>
            <FavoriteIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Saved Gifs" className={classes.text} />
        </ListItem>
      </List>
    </Container>
  );
};

export default Leftbar;
