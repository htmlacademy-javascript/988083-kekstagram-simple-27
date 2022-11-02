import {
  HttpMethod,
  API_URL,
  JSON_HEADERS,
} from './constants.js';

import {
  showError,
} from './error-message.js';

export function getPosts() {
  return fetch( `${API_URL}/data`, {
    method: HttpMethod.GET,
    headers: JSON_HEADERS,
  } ).then( ( response ) => {
    if ( response.ok ) {
      return response.json();
    }
  } ).catch( () => {
    showError( 'При попытке запроса произошла ошибка' );
  } );
}
