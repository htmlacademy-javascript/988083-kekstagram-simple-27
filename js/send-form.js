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

function sendFormData( evt ) {
  return fetch( API_URL, {
    method: HttpMethod.POST,
    body: new FormData( evt.target ),
  } );
}

export function onSubmitForm( evt ) {
  evt.preventDefault();
  const submitHandler = evt.target.querySelector( '[type="submit"]' );
  if ( validationRules.validate() ) {
    submitHandler.setAttribute( 'disabled', 'disabled' );
    sendFormData( evt ).then( ( data ) => {
      if ( data.ok ) {
        submitHandler.removeAttribute( 'disabled' );
        closeModal();
        showSuccess();
      } else {
        showError( 'Ошибка отправки формы' );
        submitHandler.removeAttribute( 'disabled' );
      }
    } ).catch( () => {
      showError( 'Произошла ошибка' );
    } );
  }
}
