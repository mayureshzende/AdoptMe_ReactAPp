import { div } from "prelude-ls";

const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, "Luna"),
    React.createElement("h3", {}, "Terra"),
    React.createElement("h3", {}, "Chel"),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    [
      React.createElement("h1", {}, "Adopt Me!"),
      // the parameter {} is for adding any css properties like id or class { id : "my brand"}
      React.createElement(Pet),
      // we can also have a loop to render the element
      // ...[1,2,3].map(i) => React.createElement("h2" , {} , i )
      React.createElement(Pet),
      React.createElement(Pet),
    ] // the array is optional to add because react handles it while handling
  );
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));

/// --------------- using props
// here we are passing the data from the parent to child and the child does not know how its been render so we can pass the data in react from parent to child but not from child to parent.
const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),

    React.createElement(Pet, { name: "luna", animal: "dog", breed: "lab" }),
    React.createElement(Pet, {
      name: "peper",
      animal: "bird",
      breed: "parrot",
    }),
    React.createElement(Pet, { name: "rumi", animal: "cow", breed: "farm" }),
    // passing object as a argument to props parameter of the Pet component.
  ]);
};

/// using JSX is just the simper way to write the code
// without using react.createelement

const Pet = (props) => {
  return (
    <div>
      <h2> {props.name}</h2>
      <h3> {props.animal}</h3>
      <h3> {props.breed}</h3>
    </div>
  );
};

// main app.js file
const App = () => {
  return (
    <div>
      <h1> Fun to work !!! </h1>
      <Pet name="Luna" animal="dog" breed="lab"></Pet>
      <Pet name="tuen" animal="brid" breed="parrot"></Pet>
      <Pet name="gai" animal="mammel" breed="cow"></Pet>
    </div>
  );
};

// Hooks
// NOTE --- dont use the hook in loops or conditional statement
// be casue to keep the orcer intact
// we can use hook state with watever we want a string object array funtion

import { useState } from "react";
// these is hook that we use to handle the change
// just like two way binding

const SearchParams = () => {
  let [location, setLocation] = useState("seattle, WA");
  // this is how we use hook first parameter is the default value that we pass to useState
  //  we can also destructure that state
  // const locationTuple = useState('test');
  // const location = locationTupe[0];
  //const setLocation = location[1];

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)} // to pass the callback to set new value
            value={location}
            placeholder="Location"
          />
        </label>
        <button>Submit </button>
      </form>
    </div>
  );
};

export default SearchParams;
