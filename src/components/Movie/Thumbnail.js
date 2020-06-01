import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

import withStyle from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Fragment from "@material-ui/core/Typography";
import Image from "../Image/Image";

const style = {
  img: {
    height: "auto",
    width: "200px",
    borderRadius: "20px",
    position: "relative",
  },
  movie: {
    textAlign: "center",
    marginBottom: 20,
  },
};

const thumbnail = ({ movie, classes }) => (
  <Grid
    item
    xl={1}
    lg={2}
    sm={4}
    xs={12}
    className={classes.movie}
    component={Link}
    to={`/movie/${movie.id}`}
  >
    <Image path={movie.poster_path} />
    <Fragment variant="h6" className={classes.title}>
      {movie.title}
    </Fragment>
    <Fragment variant="caption">
      <Moment format="MMM DD, YYYY" date={movie.release_date} />
    </Fragment>
  </Grid>
);

export default withStyle(style)(thumbnail);
