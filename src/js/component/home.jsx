import React from "react";
import ReactDOM from 'react-dom';


//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	console.log(props);
	return (
		<div className="text-center bg-dark">
			<div className="text-white">{props.segundo}</div>
		</div>
	);
};

export default Home;
