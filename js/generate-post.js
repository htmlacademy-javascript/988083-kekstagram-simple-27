const REQUEST_URL = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const REQUEST_METHOD = 'GET';
const REQUEST_HEADERS = {
  'content-type': 'application/json'
};

function sendRequest() {
  return fetch( REQUEST_URL, {
    method: REQUEST_METHOD,
    headers: REQUEST_HEADERS,
  } );
}

export function getPosts() {
  return sendRequest().then( ( response ) => {
    if ( response.ok ) {
      return response.json();
    }
  } );
}
