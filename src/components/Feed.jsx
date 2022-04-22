import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import Gif from "./Gif";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    display: "flex",
    flexWrap: "wrap",
  },
}));

const Feed = (props) => {
  const classes = useStyles();
  return (
    <Container>
      <Gif />
    </Container>
  );
};

export default Feed;
