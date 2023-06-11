const API = "http://localhost:3001";

const movieFilter = API + "/getMoviesByFilter";
const getMovieById = API + "/getMovieById";
const getRandomMovies = API + "/getRandomMovies";
const getMostRatedDirectors = API + "/getMostRatedDirectors";

export const routes = {
    movieFilter,
    getMovieById,
    getRandomMovies,
    getMostRatedDirectors
}