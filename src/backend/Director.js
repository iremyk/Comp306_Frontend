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