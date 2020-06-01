import React, { useEffect, useState } from "react";

import { latest } from "../../../api/movie";
import Grid from "@material-ui/core/Grid";
import Thumbnail from "../../../components/Movie/Thumbnail";

const Latest = (props) => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const data = await latest();
      console.log(data);
      setMovie(data);
    };
    fetchData();
  }, []);

  return (
    <Grid container spacing={1}>
      <Thumbnail {...movie} />
    </Grid>
  );
};

export default Latest;
