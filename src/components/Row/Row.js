import React, { useEffect, useState } from "react";
import "./Row.css";

import axios from "../../api/axios_request";

function Row({ title, fetchUrl, isLargeRow = false }) {
	const [movies, setMoviews] = useState([]);

	const base_url = "https://image.tmdb.org/t/p/original/";

	useEffect(() => {
		const fetchMoviesData = async () => {
			const request = await axios.get(fetchUrl);

			setMoviews(request.data.results);

			return request;
		};

		fetchMoviesData();
	}, [fetchUrl]);

	return (
		<div className="row">
			<h2>{title}</h2>
			<div className="row__posters">
				{movies.map(
					(movie) =>
						((isLargeRow && movie.poster_path) ||
							(!isLargeRow && movie.backdrop_path)) && (
							<img
								key={movie.id}
								className={`row__poster ${isLargeRow && "row__posterLarge"}`}
								src={`${base_url}${
									isLargeRow ? movie.poster_path : movie.backdrop_path
								}`}
								alt={movie.name}
							/>
						)
				)}
			</div>
		</div>
	);
}

export default Row;
