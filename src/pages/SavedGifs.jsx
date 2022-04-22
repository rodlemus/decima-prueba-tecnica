import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import { Box } from "@material-ui/core";
import { localStorageKey } from "../utils/constants";
import FavoriteButton from "../components/FavoriteButton";
import CopyUrlButton from "../components/CopyUrlButton";

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
    marginTop: "45%",
    marginLeft: "36%",
  },
  gifContainerItems: {
    display: "flex",
    flexDirection: "column",
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

export default function SavedGifs() {
  const numOfGifsToShow = 12;
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [gifs, setGifs] = useState([]);
  const [gifsDB, setGifsDB] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [prevCut, setPrevCut] = useState(numOfGifsToShow);

  useEffect(() => {
    const gifsSaved =
      localStorage.getItem(localStorageKey) === null
        ? []
        : JSON.parse(localStorage.getItem(localStorageKey));
    let gifsChunk = [];
    let factorSum = 0;
    for (
      let giftIndex = 0;
      giftIndex < parseInt(gifsSaved.length / numOfGifsToShow) + 1;
      giftIndex++
    ) {
      factorSum += numOfGifsToShow;
      gifsChunk.push(gifsSaved.slice(giftIndex * numOfGifsToShow, factorSum));
    }
    setTotalCount(gifsSaved.length);
    setGifsDB(gifsChunk);
    setGifs(gifsChunk[0]);
  }, [gifsDB]);

  const handleChange = (event, value) => {
    setPage(value);
    setGifs(gifsDB[value - 1]);
  };
  return (
    <>
      <Box className={classes.gifContainerItems}>
        <div className={classes.root}>
          <ImageList className={classes.imageList} cols={4}>
            {gifs.map((item) => (
              <ImageListItem key={item.id} className={classes.gifItem}>
                <img src={item.url} alt={item.title} />
                <ImageListItemBar
                  className={classes.animation}
                  title={item.title}
                  subtitle={<span>by: {item.username}</span>}
                  actionIcon={
                    <div style={{ display: "flex" }}>
                      <FavoriteButton
                        id={item.id}
                        url={item.url}
                        title={item.title}
                        username={item.username}
                        deleteGif={setGifsDB}
                        setSaved={true}
                      />
                      <CopyUrlButton url={item.url} iconStyle={classes.icon} />
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
            count={parseInt(totalCount / numOfGifsToShow) + 1}
            page={page}
            onChange={handleChange}
          />
        </div>
      </Box>
    </>
  );
}
