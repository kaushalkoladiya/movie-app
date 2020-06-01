import React from "react";

import withStyle from "@material-ui/core/styles/withStyles";

const style = {
  img: {
    width: "100%",
    height: "500px",
    borderRadius: "5px",
    marginBottom: " 10px",
  },
};
const Poster = ({ classes, path }) => (
  <img
    className={classes.img}
    src={`https://image.tmdb.org/t/p/original${path}`}
    alt="poster"
  />
);

export default withStyle(style)(Poster);
