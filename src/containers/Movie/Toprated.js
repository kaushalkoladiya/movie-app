import React, { useEffect, useState, Fragment } from "react";

import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import { toprated } from "../../api/movie";
import Grid from "@material-ui/core/Grid";
import Thumbnail from "../../components/Movie/Thumbnail";
import Pagination from "../../components/Pagination/Pagination";
import ErrorHandler from "../ErrorHandler/ErrorHandler";

const TopRated = (props) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalpages] = useState(null);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { results, page: pageNo, total_pages } = await toprated(page);
        setMovies(results.filter((movie) => movie.poster_path !== null));
        setPage(pageNo);
        setTotalpages(total_pages);
        setLoading(false);
      } catch (error) {
        setHasError(true);
      }
    };
    fetchData();
  }, [page]);

  const onChangeHandler = (event, pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <Fragment>
      {hasError && <ErrorHandler />}
      <Grid container>
        <Grid item sm={12} xs={12}>
          <Typography variant="h4" style={{ margin: 10 }}>
            Top Rated
          </Typography>
        </Grid>
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
          </Fragment>
        )}
      </Grid>
    </Fragment>
  );
};

export default TopRated;
