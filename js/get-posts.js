import {
  HttpMethod,
  API_URL,
  JSON_HEADERS,
} from './constants.js';

export function getPosts() {
  return fetch( `${API_URL}/data`, {
    method: HttpMethod.GET,
    headers: JSON_HEADERS,
  } ).then( ( response ) => {
    if ( response.ok ) {
      return response.json();
    }
  } );
}
