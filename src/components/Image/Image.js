import React from "react";

import withStyle from "@material-ui/core/styles/withStyles";

const style = {
  img: {
    height: "auto",
    width: "200px",
    borderRadius: "20px",
    position: "relative",
  },
};
const Image = ({ classes, path }) => (
  <img
    className={classes.img}
    src={`https://image.tmdb.org/t/p/w500${path}`}
    alt="poster"
  />
);

export default withStyle(style)(Image);
