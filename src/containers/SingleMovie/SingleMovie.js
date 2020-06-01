import React, { Fragment } from "react";

import Details from "./Details";
import Images from "./Images";
import Credits from "./Credits";
import Recommendations from "./Recommendations";

const SingleMovie = (props) => {
  return (
    <Fragment>
      <Details movieId={props.match.params.movieId} />
      <Images movieId={props.match.params.movieId} />
      <Credits movieId={props.match.params.movieId} />
      <Recommendations movieId={props.match.params.movieId} />
    </Fragment>
  );
};

export default SingleMovie;
