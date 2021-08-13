import React from "react";
import "./Banner.css";

function Banner() {
	const truncateDescription = (string, n) => {
		return string?.length > n ? string.substr(0, n - 1) + "..." : string;
	};

	return (
		<header
			className="banner"
			style={{
				backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png')`,
				backgroundSize: "cover",
				backgroundPosition: "center center",
			}}
		>
			<div className="banner__contents">
				<h1 className="banner__title">Movie Name</h1>
				<div className="banner__buttons">
					<button className="banner__button">Play</button>
					<button className="banner__button">My List</button>
				</div>
				<h1 className="banner__description">
					{truncateDescription(
						`This is a test description This is a test description This is a test
					description This is a test description This is a test description This is a test description This is a test description This is a test description`,
						150
					)}
				</h1>
			</div>
			<div className="banner--fadeBottom" />
		</header>
	);
}

export default Banner;
