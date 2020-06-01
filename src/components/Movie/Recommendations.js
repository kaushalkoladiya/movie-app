import React, { useState, useEffect, Fragment } from "react";

import withStyle from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import Thumbnail from "./Thumbnail";
import Pagination from "../Pagination/Pagination";

import { recommendations } from "../../api/movie";

const style = {
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

const Recommendations = (props) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalpages] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const { results, page: pageNo, total_pages } = await recommendations(
        props.movieId,
        page
      );
      setMovies(results);
      setPage(pageNo);
      setTotalpages(total_pages);
      setLoading(false);
    };
    fetchData();
  }, [props.movieId, page]);

  const onChangeHandler = async (event, pageNumber) => {
    setPage(pageNumber);
  };

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
          <Typography className={props.classes.title} variant="h6">
            Recommendations
          </Typography>
          <Paper className={props.classes.paper}>
            <Grid container>
              {movies.map((movie, key) => (
                <Thumbnail movie={movie} key={key} />
              ))}
              <Grid
                item
                sm={12}
                xs={12}
                style={{ margin: "20px auto 40px auto" }}
              >
                <Pagination
                  totalPages={totalPages}
                  page={page}
                  onChange={onChangeHandler}
                />
              </Grid>
            </Grid>
          </Paper>
        </Fragment>
      )}
    </Fragment>
  );
};

export default withStyle(style)(Recommendations);
