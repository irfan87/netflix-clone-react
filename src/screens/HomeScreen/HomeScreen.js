import React from "react";
import "./HomeScreen.css";

import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";

function HomeScreen() {
	return (
		<div className="homeScreen">
			{/* Navbar */}
			<Navbar />
			{/* Banner */}
			<Banner />
			{/* Row */}
		</div>
	);
}

export default HomeScreen;
