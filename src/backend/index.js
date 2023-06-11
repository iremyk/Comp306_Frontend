const API = "http://localhost:3001";

const movieFilter = API + "/getMoviesByFilter";
const getMovieById = API + "/getMovieById";
const getRandomMovies = API + "/getRandomMovies";
const getMostRatedDirectors = API + "/getMostRatedDirectors";
const getDirectorById = API + "/getDirectorById";
const getFavoriteGenres = API + "/getFavoriteGenres";
const getMostRatedRoles = API + "/getMostRatedRoles";
const getActorById = API + "/getActorById";
const getMovieByFilter = API + "/getMovieByFilter";



export const routes = {
    movieFilter,
    getMovieById,
    getRandomMovies,
    getMostRatedDirectors,
    getDirectorById,
    getFavoriteGenres,
    getMostRatedRoles,
    getActorById,
    getMovieByFilter
}