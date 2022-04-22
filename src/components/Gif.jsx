import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Box } from "@material-ui/core";
import FavoriteButton from "./FavoriteButton";
import { GiphyFetch } from "@giphy/js-fetch-api";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(14),
  },
  imageList: {
    width: "60%",
    height: "70%",
    position: "fixed",
  },

  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  pagination: {
    marginTop: "60%",
    marginLeft: "36%",
  },
  gifContainerItemsLg: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  animation: {
    transition: "0.3s",
    transform: "translateY(100%)",
  },
  bar: {
    transition: "0.3s",
    transform: "translateY(-100%)",
  },
  gifItem: {
    "&:hover": {
      "& $animation": {
        transform: "translateY(0)",
      },
      "& $bar": {
        transform: "translateY(0)",
      },
    },
  },
}));

export default function TitlebarImageList() {
  const classes = useStyles();
  const gifsPerRequest = 20;
  const [page, setPage] = useState(1);
  const [gifs, setGifs] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const gf = new GiphyFetch(process.env.REACT_APP_GIPHY_API_KEY);

  useEffect(() => {
    const variableOffset = page === 1 ? 0 : page;
    gf.trending({ variableOffset, limit: gifsPerRequest })
      .then(({ data, pagination }) => {
        setTotalCount(pagination.total_count);
        setGifs(data);
      })
      .catch(console.log);
  }, []);

  const handleChange = (event, value) => {
    const offsetFactor = value === 1 ? 0 : value - 1;
    const offset = offsetFactor * gifsPerRequest;
    setPage(value);
    gf.trending({ offset, limit: gifsPerRequest })
      .then(({ data, pagination }) => {
        setTotalCount(pagination.total_count);
        setGifs(data);
      })
      .catch(console.log);
  };
  return (
    <>
      <Box className={classes.gifContainerItemsLg}>
        <div className={classes.root}>
          <ImageList className={classes.imageList} cols={4}>
            {gifs.map((item) => (
              <ImageListItem key={item.url} className={classes.gifItem}>
                <img src={item.images.original.url} alt={item.title} />
                <ImageListItemBar
                  className={classes.animation}
                  title={item.title}
                  subtitle={<span>by: {item.username}</span>}
                  actionIcon={
                    <div style={{ display: "flex" }}>
                      <FavoriteButton />
                      <IconButton
                        aria-label={`Copy url`}
                        className={classes.icon}
                      >
                        <FileCopyIcon />
                      </IconButton>
                    </div>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
        <div className={classes.pagination}>
          <Typography>Page: {page}</Typography>
          <Pagination
            count={parseInt(totalCount / gifsPerRequest) - 6}
            page={page}
            onChange={handleChange}
          />
        </div>
      </Box>
    </>
  );
}
