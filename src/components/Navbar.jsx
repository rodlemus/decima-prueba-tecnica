import { Cancel, Search } from "@mui/icons-material";
import { AppBar, InputBase, Toolbar, Typography, Badge } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { alpha } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { Box } from "@mui/system";

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
    justifyContent: "space-between",
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
      display: ({ open }) => {
        const displayValue = open ? "flex" : "none";
        return displayValue;
      },
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(2),
  },
  icons: {
    display: "flex",
    justifyContent: "center",

    marginRight: theme.spacing(3),
  },
  searchButton: {
    marginTop: "4%",
    marginRight: theme.spacing(2),
   
  },
 
}));

const Navbar = (props) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });

  return (
    <AppBar>
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
          <Box display={{ xs: 'block', sm:'block', md: 'none' }}>
          <Cancel className={classes.cancel} onClick={()=>setOpen(false)}/>
          </Box>
        </div>
       
        <div className={classes.icons}>
            <Box display={{ xs: 'block', md: 'none' }}>
            <Search
            className={classes.searchButton}
            onClick={() => setOpen(!open)}
          />
            </Box>
          <Typography variant="h6" className={classes.logoLg}>
            Gifs Guardados
          </Typography>
          <Badge badgeContent={4} color="secondary">
            <FavoriteIcon
              color="action"
              style={{ color: "white" }}
              fontSize="large"
            />
          </Badge>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
