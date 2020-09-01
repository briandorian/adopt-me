import React from "react";
import { render } from "react-dom";
//import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    //React.strictMode does not allow you to use stuff that is about to be deprecated
    <React.StrictMode>
      <div id="something important">
        <h1 id="something important">Adopt Me!</h1>
        <SearchParams />
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
