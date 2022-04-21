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
import FavoriteIcon from "@material-ui/icons/Favorite";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
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
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "70%",
    },
    [theme.breakpoints.up("xl")]: {
      display: "flex",
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
          {/* <Typography variant="h6" className={classes.logoLg}>
            Gifs Guardados
          </Typography>
          <Badge badgeContent={4} color="secondary">
            <FavoriteIcon color="action" style={{ color: "white" }} />
          </Badge> */}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
