import { IconButton } from "@material-ui/core";
import React, { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";

const FavoriteButton = (props) => {
  const [favorite, setFavorite] = useState(false);
  return (
    <IconButton aria-label={`Save Gif`} onClick={() => setFavorite(!favorite)}>
      <FavoriteIcon style={{ color: favorite ? "red" : "inherit" }} />
    </IconButton>
  );
};

export default FavoriteButton;
