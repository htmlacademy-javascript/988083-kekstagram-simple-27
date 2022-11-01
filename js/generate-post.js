import {
  HttpMethod,
  API_URL,
  JSON_HEADERS,
} from './constants.js';

function sendRequest() {
  return fetch( `${API_URL}/data`, {
    method: HttpMethod.GET,
    headers: JSON_HEADERS,
  } );
}

export function getPosts() {
  return sendRequest().then( ( response ) => {
    if ( response.ok ) {
      return response.json();
    }
  } );
}
