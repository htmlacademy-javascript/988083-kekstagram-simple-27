import {
  HttpMethod,
  API_URL,
} from './constants.js';

import {
  showSuccessMessage,
} from './success-message.js';

import {
  showErrorMessage,
} from './error-message.js';

import {
  validationRules,
  closeModal,
} from './form.js';

const sendFormData = ( evt ) => fetch( API_URL, {
  method: HttpMethod.POST,
  body: new FormData( evt.target ),
} );

export const onSubmitForm = ( evt ) => {
  evt.preventDefault();
  const submitHandler = evt.target.querySelector( '[type="submit"]' );
  if ( validationRules.validate() ) {
    submitHandler.setAttribute( 'disabled', 'disabled' );
    sendFormData( evt ).then( ( data ) => {
      if ( data.ok ) {
        submitHandler.removeAttribute( 'disabled' );
        closeModal();
        showSuccessMessage();
      } else {
        submitHandler.removeAttribute( 'disabled' );
        showErrorMessage( 'Ошибка отправки формы' );
      }
    } ).catch( () => {
      submitHandler.removeAttribute( 'disabled' );
      showErrorMessage( 'Произошла ошибка' );
    } );
  }
};
