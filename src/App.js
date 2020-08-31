import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div id="something important">
      <h1>Adopt me!</h1>
      <Pet name="Kira" animal="Dog" breed="Rottweiler" />
      <Pet name="Isidoro" animal="Cat" breed="Persian" />
      <Pet name="Curro" animal="Bird" breed="Mockingjay" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
