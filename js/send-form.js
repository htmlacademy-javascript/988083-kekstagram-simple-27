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

const REQUEST_URL = 'https://27.javascript.pages.academy/kekstagram-simple';
const REQUEST_METHOD = 'POST';

function sendRequest( evt ) {
  return fetch( REQUEST_URL, {
    method: REQUEST_METHOD,
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
