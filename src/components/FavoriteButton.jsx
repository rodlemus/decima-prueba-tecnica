import { IconButton } from "@material-ui/core";
import React, { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { localStorageKey } from "../utils/constants";

const FavoriteButton = ({ id, url, title, username }) => {
  const [favorite, setFavorite] = useState(false);
  const handleFavGif = ({ id, url, title, username }) => {
    const plainGifs = localStorage.getItem(localStorageKey);
    if (!favorite) {
      if (plainGifs === null) {
        localStorage.setItem(
          localStorageKey,
          JSON.stringify([{ id, url, title, username }])
        );
      } else {
        const gifsArray = JSON.parse(plainGifs);
        gifsArray.push({ id, url, title, username });
        localStorage.setItem(localStorageKey, JSON.stringify(gifsArray));
      }
    } else {
      if (plainGifs !== null) {
        const gifsArray = JSON.parse(localStorage.getItem(localStorageKey));
        const gifsFiltered = gifsArray.filter((gif) => gif.id !== id);
        localStorage.setItem(localStorageKey, JSON.stringify(gifsFiltered));
      }
    }
  };
  return (
    <IconButton
      aria-label={`Save Gif`}
      onClick={() => {
        setFavorite(!favorite);
        handleFavGif({ id, url, title, username });
      }}
    >
      <FavoriteIcon style={{ color: favorite ? "red" : "inherit" }} />
    </IconButton>
  );
};

export default FavoriteButton;
