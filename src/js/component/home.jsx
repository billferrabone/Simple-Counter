import React from "react";
import ReactDOM from 'react-dom';


//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	console.log(props);
	return (
		<div className="bg-dark display-1 d-flex justify-content-center">
			<div className="text-white">🕐</div>
			<div className="text-white">{props.hora1}</div>
			<div className="text-white">{props.hora}</div>
			<div className="text-white">{props.minuto1}</div>
			<div className="text-white">{props.minuto}</div>
			<div className="text-white">{props.segundo1}</div>
			<div className="text-white">{props.segundo}</div>
		</div>
	);
};

export default Home;
