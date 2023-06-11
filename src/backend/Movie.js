import { routes } from "./index";

export const getMovieById = async (id) => {
	try {
		let response = await fetch(`${routes.getMovieById}?id=${id}`, {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		});

		let responseJson = await response.json();
		return responseJson;
	} catch (error) {
		return null;
	}
};

export const getMoviesByFilter = async ({ name, startYear, endYear, startRank, endRank, actor, director, genre }) => {
	try {
		let response = await fetch(`${routes.getMoviesByFilter}?name=${name}&startYear=${startYear}&endYear=${endYear}&startRank=${startRank}&endRank=${endRank}&actor=${actor}&director=${director}&genre=${genre}`, {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		});

		let responseJson = await response.json();
		return responseJson;
	} catch (error) {
		return null;
	}
}

export const getRandomMovies = async () => {
	let response = await fetch(routes.getRandomMovies, {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
	});

	let responseJson = await response.json();

	return responseJson;

}