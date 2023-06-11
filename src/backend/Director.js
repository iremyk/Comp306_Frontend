import { routes } from "./index";

export const getMostRatedDirectors = async () => {
  let response = await fetch(routes.getMostRatedDirectors, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  });

  let responseJson = await response.json();
    
  return responseJson;
  
}

export const getDirectorById = async (id) => {
  let response = await fetch(`${routes.getDirectorById}?id=${id}`,{
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  });

  let responseJson = await response.json();
    
  return responseJson;
  
}

export const getFavoriteGenres = async (id) => {
  let response = await fetch(`${routes.getFavoriteGenres}?director=${id}`,{
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  });

  let responseJson = await response.json();
    
  return responseJson;
  
}