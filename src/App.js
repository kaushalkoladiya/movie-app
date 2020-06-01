import React from "react";
import "./App.css";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import Navbar from "./containers/Navbar/Navbar";
import NowPlaying from "./containers/Movie/NowPlaying";
import Popular from "./containers/Movie/Popular";
import Toprated from "./containers/Movie/Toprated";
import Upcoming from "./containers/Movie/Upcoming";
// import ErrorHandler from "./components/ErrorHandler/ErrorHandler";
import SingleMovie from "./containers/SingleMovie/SingleMovie";

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
            <Route path="/nowplaying" exact component={NowPlaying} />
            <Route path="/popular" exact component={Popular} />
            <Route path="/toprated" exact component={Toprated} />
            <Route path="/upcoming" exact component={Upcoming} />
            <Route path="/movie/:movieId" exact component={SingleMovie} />
            <Redirect to="/nowplaying" />
          </Switch>
        </div>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
