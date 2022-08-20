//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let segundos = 0;
setInterval(() => {
    segundos++;
    console.log(segundos);

 //render your react application
    ReactDOM.render(<Home segundo={segundos} />, document.querySelector("#app"));
}  , 1000)



