import React from "react";
import { render } from "react-dom";
//import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div id="something important">
      <h1 id="something important">Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
