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

const credit = (props) => (
  <Grid item xl={1} lg={2} sm={4} xs={12} className={props.classes.movie}>
    <Image path={props.imagePath} />
    <Fragment variant="h6" className={props.classes.title}>
      {props.name}
    </Fragment>
  </Grid>
);

export default withStyle(style)(credit);
