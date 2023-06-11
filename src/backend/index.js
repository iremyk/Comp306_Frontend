const API = "http://localhost:3001";

const getMoviesByFilter = API + "/getMovieByFilter";
const getMovieById = API + "/getMovieById";
const getRandomMovies = API + "/getRandomMovies";
const getMostRatedDirectors = API + "/getMostRatedDirectors";
const getDirectorById = API + "/getDirectorById";
const getFavoriteGenres = API + "/getFavoriteGenres";
const getMostRatedRoles = API + "/getMostRatedRoles";
const getActorById = API + "/getActorById";
const getMovieByFilter = API + "/getMovieByFilter";
const getCommonMovies = API + "/getCommonMovies";



export const routes = {
    getMoviesByFilter,
    getMovieById,
    getRandomMovies,
    getMostRatedDirectors,
    getDirectorById,
    getFavoriteGenres,
    getMostRatedRoles,
    getActorById,
    getMovieByFilter,
    getCommonMovies
}