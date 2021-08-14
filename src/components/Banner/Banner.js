import React, { useEffect, useState } from "react";

import "./Banner.css";

import requests from "../../api/Requests";
import axios from "../../api/axios_request";

function Banner() {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		const fetchMovieData = async () => {
			const request = await axios.get(requests.fetchNetflixOriginals);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);

			return requests;
		};

		fetchMovieData();
	}, []);

	const truncateDescription = (string, n) => {
		return string?.length > n ? string.substr(0, n - 1) + "..." : string;
	};

	return (
		<header
			className="banner"
			style={{
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
				backgroundSize: "cover",
				backgroundPosition: "center center",
			}}
		>
			<div className="banner__contents">
				<h1 className="banner__title">
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<div className="banner__buttons">
					<button className="banner__button">Play</button>
					<button className="banner__button">My List</button>
				</div>
				<h1 className="banner__description">
					{truncateDescription(`${movie?.overview}`, 150)}
				</h1>
			</div>
			<div className="banner--fadeBottom" />
		</header>
	);
}

export default Banner;
