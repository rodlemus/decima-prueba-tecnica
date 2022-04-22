import {
  alpha,
  AppBar,
  Badge,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Cancel, Search } from "@material-ui/icons";

import { useState } from "react";
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
  const [open, setOpen] = useState(true);

  const classes = useStyles({ open });

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Decima - Prueba Tecnica
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          Decima - PT
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search" className={classes.input} />
          <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>

        <div className={classes.icons}>
          <Search
            onClick={() => setOpen(true)}
            className={classes.searchButton}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
