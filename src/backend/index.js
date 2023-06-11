const API = "http://localhost:3001";

const getMoviesByFilter = API + "/getMovieByFilter";
const getMovieById = API + "/getMovieById";
const getRandomMovies = API + "/getRandomMovies";
const getMostRatedDirectors = API + "/getMostRatedDirectors";

export const routes = {
    getMoviesByFilter,
    getMovieById,
    getRandomMovies,
    getMostRatedDirectors
}