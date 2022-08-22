//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let segundos = 0;
let segundos1 = 0;
let minutos = 0;
let minutos1 = 0;
let horas = 0;
let horas1 = 0;

setInterval(() => {
    segundos++;
      if (segundos > 9) { 
        segundos = 0
        segundos1++
        if (segundos1 > 5) {
            segundos1 = 0
            minutos++
            if (minutos > 9) {
                minutos = 0
                minutos1++
                if (minutos1 > 5) {
                    minutos1 = 0
                    horas++
                    if (horas > 9) {
                        horas = 0
                        horas1++
                        if (horas1 > 9) {
                            horas1= 0
                        }
                        
                    }
                    
                }
                
            }            
        }
       } 
       

 //render your react application
    ReactDOM.render(<Home segundo={segundos} segundo1={segundos1} minuto={minutos} minuto1={minutos1} hora={horas} hora1={horas1}/>, document.querySelector("#app"));
}  , 1000)



