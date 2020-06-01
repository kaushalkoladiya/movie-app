import React, { useState, useEffect, Fragment } from "react";
import Moment from "react-moment";

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";

import Image from "../../components/Image/Image";

import { details } from "../../api/movie";

const styles = {
  container: {
    padding: "10px",
    boxSizing: "border-box",
  },
  paper: {
    margin: "50px",
    borderRadius: "5px",
    backgroundColor: "#f0f0f0",
    boxSizing: "border-box",
    border: "2px solid #008394",
    padding: "20px",
  },
  title: {
    color: "#009688",
    textAlign: "center",
    fontWeight: "800",
    margin: "20px",
    boxSizing: "border-box",
    padding: "20px",
    border: "2px solid #00695f",
    borderRadius: "20px",
    boxShadow: "0 2px 2px 0 #000",
  },
};

const Details = (props) => {
  const [loading, setLoading] = useState(true);
  const [movieDetails, setMovieDetails] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const data = await details(props.movieId);
      setMovieDetails(data);
      setLoading(false);
    };
    fetchData();
  }, [props.movieId]);

  return (
    <Fragment>
      {loading ? (
        <div style={{ margin: "50px auto 50px auto", textAlign: "center" }}>
          <CircularProgress
            value={30}
            variant="indeterminate"
            color="secondary"
          />
        </div>
      ) : (
        <Paper className={props.classes.paper}>
          <Grid container className={props.classes.container}>
            <Grid item lg={3} md={4} sm={4} xs={12}>
              <Image path={movieDetails.poster_path} />
            </Grid>
            <Grid item lg={9} md={8} sm={8} xs={12}>
              <Typography variant="h4" style={{ overflow: "overlay" }}>
                {movieDetails.original_title}
              </Typography>
              <br />
              <div style={{ display: "inline" }}>
                {movieDetails.genres.map((genre, key) => (
                  <Typography key={key} variant="caption">
                    {genre.name}{" "}
                  </Typography>
                ))}
              </div>
              <Typography variant="body2">
                Language : {movieDetails.original_language}
              </Typography>
              <div
                style={{
                  boxSizing: "border-box",
                  padding: "5px",
                }}
              >
                <Typography variant="subtitle2" color="secondary">
                  Overview:
                </Typography>
                <Typography variant="subtitle1">
                  {movieDetails.overview}
                </Typography>
              </div>
              <Typography variant="subtitle1">
                Status: {movieDetails.status}
              </Typography>
              <Typography>
                <Moment
                  format="MMM DD, YYYY"
                  date={movieDetails.release_date}
                />
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      )}
    </Fragment>
  );
};

export default withStyles(styles)(Details);
