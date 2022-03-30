import React from "react";
import ReactDOM from "react-dom";

//tap into and access react dom, intro its render function to display html embedded into js without any fancy ejs or angle brackets
//ReactDOM.render("WHAT TO SHOW, WHERE TO SHOW");
ReactDOM.render(
  <div>
    <h1>JSX</h1>
    <p>React puts HTML and Javascript together</p>
  </div>,
  document.getElementById("root")
);
