import React, { Profiler } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./card";
import movie_img from "./assets/movie.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Home";
import SingleMovie from "./singleMovie";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundry";
function onRenderCallback(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
  interactions
) {
  console.log("Profiler info", id, {
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions,
  });
}

function App() {
  return (
    <Profiler id="MyComponent" onRender={onRenderCallback}>
      <ErrorBoundary>
        <Router>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/movie/:id" Component={SingleMovie} />
          </Routes>
        </Router>
      </ErrorBoundary>
    </Profiler>
  );
}

export default App;
