import React, { Fragment } from "react";

import GitHubLink from "../GitHubLink";
import MovieList from "../MovieList";

const App = () => (
  <Fragment>
    <MovieList />
    <GitHubLink />
  </Fragment>
);

export default App;
