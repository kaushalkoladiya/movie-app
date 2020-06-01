import React, { useState, useEffect, Fragment } from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";

import { images } from "../../api/movie";
import Poster from "../../components/Image/Poster";

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
  poster: {
    boxSizing: "border-box",
    padding: "10px",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
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

const Images = (props) => {
  const [loading, setLoading] = useState(true);
  const [imagesData, setImagesData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const data = await images(props.movieId);
      setImagesData(data.posters);
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
            Posters
          </Typography>
          <Paper className={props.classes.paper}>
            <div className={props.classes.root}>
              <GridList
                cellHeight={500}
                spacing={4}
                cols={2}
                className={props.classes.gridList}
              >
                {imagesData.map((image, key) => (
                  <GridListTile key={key} className={props.classes.poster}>
                    <Poster path={image.file_path} />
                  </GridListTile>
                ))}
              </GridList>
            </div>
          </Paper>
        </Fragment>
      )}
    </Fragment>
  );
};

export default withStyles(styles)(Images);
