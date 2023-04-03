import React from "react";
import Navbar from "./Navbar.jsx";
import Container from "./Container.jsx";
import Card from "./Card.jsx";
import Jumbotron from "./Jumbotron.jsx";



// Home component
const Home = () => {
	return (
	  <div>
		<Navbar />
		<Container>
		<div>
		  <Jumbotron />
		  <div className="row">
			<Card /> <Card /> <Card />
		  </div>
		</div>
		</Container>
		</div>
	);
  };

export default Home;
