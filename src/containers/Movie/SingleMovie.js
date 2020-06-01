import React, { Fragment } from "react";

import Details from "../../components/Movie/Details";
import Images from "../../components/Movie/Images";
import Credits from "../../components/Movie/Credits";
import Recommendations from "../../components/Movie/Recommendations";

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
