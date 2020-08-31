import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Kira",
      animal: "Dog",
      breed: "Rottweiler",
    }),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Curro",
      animal: "Bird",
      breed: "Mockingjay",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
