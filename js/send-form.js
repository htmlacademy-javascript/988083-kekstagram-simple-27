import {
  HttpMethod,
  API_URL,
} from './constants.js';

import {
  showSuccess,
} from './success-message.js';

import {
  showError,
} from './error-message.js';

import {
  validationRules,
  closeModal,
} from './form.js';

function sendRequest( evt ) {
  return fetch( API_URL, {
    method: HttpMethod.POST,
    body: new FormData( evt.target ),
  } );
}

export function sendForm( evt ) {
  evt.preventDefault();
  const submitHandler = evt.target.querySelector( '[type="submit"]' );
  if ( validationRules.validate() ) {
    submitHandler.setAttribute( 'disabled', 'disabled' );
    sendRequest( evt ).then( ( data ) => {
      if ( data.ok ) {
        submitHandler.removeAttribute( 'disabled' );
        closeModal();
        showSuccess();
      }
    } ).catch( () => {
      showError( 'Ошибка отправки формы' );
      submitHandler.removeAttribute( 'disabled' );
    } );
  }
}
