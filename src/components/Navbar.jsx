import {
  alpha,
  AppBar,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
  Grid,
} from "@material-ui/core";
import { Cancel, Search } from "@material-ui/icons";

import { useState } from "react";
import { Routes, Route, useMatch } from "react-router-dom";

import Leftbar from "./Leftbar";
import GifContainer from "./GifContainer";
import SavedGifs from "../pages/SavedGifs";
const useStyles = makeStyles((theme) => ({
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-around",
  },
  search: {
    display: "flex",
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(2),
  },
  icons: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
  searchButton: {
    marginTop: "4%",
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const Navbar = (props) => {
  const match = useMatch("/favorites");
  const [open, setOpen] = useState(true);
  const [query, setQuery] = useState("");
  const classes = useStyles({ open });
  function handleChange(event) {
    setQuery(event.target.value);
  }
  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.logoLg}>
            Decima - Prueba Tecnica
          </Typography>
          <Typography variant="h6" className={classes.logoSm}>
            Decima - PT
          </Typography>
          {!match && (
            <div className={classes.search}>
              <Search />
              <InputBase
                placeholder="Search"
                className={classes.input}
                onChange={handleChange}
              />
              <Cancel
                className={classes.cancel}
                onClick={() => setOpen(false)}
              />
            </div>
          )}

          <div className={classes.icons}>
            <Search
              onClick={() => setOpen(true)}
              className={classes.searchButton}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Grid container style={{ padding: 0, margin: 0 }}>
        <Grid item sm={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={10}>
          <Routes>
            <Route exact path="/" element={<GifContainer query={query} />} />
            <Route path="/trending" element={<GifContainer query={query} />} />
            <Route path="/favorites" element={<SavedGifs />} />
          </Routes>
        </Grid>
      </Grid>
    </>
  );
};

export default Navbar;
