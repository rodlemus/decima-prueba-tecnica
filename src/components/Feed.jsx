import { Container, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Feed = (props) => {
  const classes = useStyles();
  return <Container className={classes.container}>Feed</Container>;
};

export default Feed;
