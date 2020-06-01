import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
// import Latest from "./Latest/Latest";
import NowPlaying from "./NowPlaying/NowPlaying";

class Movie extends Component {
  render() {
    return (
      <Grid container>
        {/* <Grid item sm={12}>
          <Latest />
        </Grid> */}
        <Grid item sm={12}>
          <NowPlaying />
        </Grid>
      </Grid>
    );
  }
}

export default Movie;
