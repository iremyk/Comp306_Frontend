import { routes } from "./index";

export const getMostRatedRoles = async (id) => {
  let response = await fetch(`${routes.getMostRatedRoles}?actor=${id}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  });

  let responseJson = await response.json();
    
  return responseJson;
  
}

export const getActorById = async (id) => {
  let response = await fetch(`${routes.getActorById}?id=${id}`,{
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  });

  let responseJson = await response.json();
    
  return responseJson;
  
}