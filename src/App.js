import React from "react";
import "./App.css";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import Navbar from "./containers/Navbar/Navbar";
import Movie from "./containers/Movie/Movie";
// import ErrorHandler from "./components/ErrorHandler/ErrorHandler";
import SingleMovie from "./containers/Movie/SingleMovie";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

// axios.interceptors.request.use(
//   (req) => {
//     console.log(req);
//     return req;
//   },
//   (err) =>{)}
// );

// axios.interceptors.response.use(
//   (res) => {
//     console.log(res);
//     return res;
//   },
//   (err) => {
//     console.log(err);
//     return err;
//   }
// );

function App() {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        {/* <ErrorHandler /> */}
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Movie} />
            <Route path="/movie/:movieId" exact component={SingleMovie} />
            <Redirect to="/" />
          </Switch>
        </div>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
