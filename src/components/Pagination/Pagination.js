import React from "react";

import Pagination from "@material-ui/lab/Pagination";

const pagination = (props) => (
  <Pagination
    variant="outlined"
    style={{ textAlign: "center" }}
    color="primary"
    count={props.totalPages}
    defaultPage={props.page}
    onChange={props.onChange}
  />
);

export default pagination;
