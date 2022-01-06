import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),

//     React.createElement(Pet, { name: "luna!!", animal: "dog", breed: "lab" }),
//     React.createElement(Pet, {
//       name: "peper",
//       animal: "bird",
//       breed: "parrot",
//     }),
//     React.createElement(Pet, { name: "rumi", animal: "cow", breed: "farm" }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Link to="/">
            <h1>Adopt Me</h1>
          </Link>
        </header>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
