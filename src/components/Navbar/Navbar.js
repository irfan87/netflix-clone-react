import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
	const [show, handleShow] = useState(false);

	// will handle the navbar when scrolled down
	const transitionNavbar = () => {
		if (window.scrollY > 100) {
			handleShow(true);
		} else {
			handleShow(false);
		}
	};

	useEffect(() => {
		// when handled the window's scroll, always do the cleanup
		window.addEventListener("scroll", transitionNavbar);

		return () => window.removeEventListener("scroll", transitionNavbar);
	}, []);
	return (
		<div className={`nav ${show && "nav__black"}`}>
			<div className="nav__contents">
				<img
					className="nav__logo"
					src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
					alt="netlif-logo"
				/>
				<img
					className="nav__avatar"
					src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
					alt="avatar"
				/>
			</div>
		</div>
	);
}

export default Navbar;
