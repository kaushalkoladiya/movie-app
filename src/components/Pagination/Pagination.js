import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import Pagination from "@material-ui/lab/Pagination";

const styles = {
  root: {
    "& > *": {
      marginTop: 2,
    },
  },
};

const pagination = (props) => (
  <div className={props.classes.root}>
    <Pagination
      variant="outlined"
      color="primary"
      count={props.totalPages}
      defaultPage={props.page}
      onChange={props.onChange}
    />
  </div>
);

export default withStyles(styles)(pagination);
