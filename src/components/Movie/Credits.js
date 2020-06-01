import React, { useState, useEffect, Fragment } from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";

import { credits } from "../../api/movie";

import Credit from "../Image/Credit";

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
    border: "2px solid #6573c3",
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

const Credits = (props) => {
  const [loading, setLoading] = useState(true);
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await credits(props.movieId);
      setCast(data.cast);
      setCrew(data.crew);
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
        <Fragment>
          <Typography variant="h6" className={props.classes.title}>
            Credits
          </Typography>
          <Paper className={props.classes.paper}>
            <Grid container spacing={2}>
              {cast.map((image) => (
                <Credit imagePath={image.profile_path} name={image.name} />
              ))}
            </Grid>
          </Paper>
          <Typography variant="h6" className={props.classes.title}>
            Crew
          </Typography>
          <Paper className={props.classes.paper}>
            <Grid container spacing={2}>
              {crew.map((image) => (
                <Credit imagePath={image.profile_path} name={image.name} />
              ))}
            </Grid>
          </Paper>
        </Fragment>
      )}
    </Fragment>
  );
};

export default withStyles(styles)(Credits);
