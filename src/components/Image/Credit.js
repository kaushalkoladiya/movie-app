import React from "react";

import withStyle from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Fragment from "@material-ui/core/Typography";
import Image from "../Image/Image";

const style = {
  movie: {
    textAlign: "center",
    marginBottom: 20,
  },
};

const credit = ({ imagePath, name, classes }) => (
  <Grid item xl={1} lg={2} sm={4} xs={12} className={classes.movie}>
    <Image path={imagePath} />
    <Fragment variant="h6" className={classes.title}>
      {name}
    </Fragment>
  </Grid>
);

export default withStyle(style)(credit);
