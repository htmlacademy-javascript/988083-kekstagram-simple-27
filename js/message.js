import {
  closeMessage,
} from './utils.js';

function isSuccsess() {
  const successMessageTemplate = document.querySelector( '#success' ).content.querySelector( '.success' );
  const successMessage = successMessageTemplate.cloneNode( true );
  const closeSuccessMessageBtn = successMessage.querySelector( '.success__button' );

  document.body.append( successMessage );
  closeSuccessMessageBtn.focus();
  closeSuccessMessageBtn.addEventListener( 'click', closeMessage( successMessage ) );
}

function isError() {
  const errorMessageTemplate = document.querySelector( '#error' ).content.querySelector( '.error' );
  const errorMessage = errorMessageTemplate.cloneNode( true );
  const closeErrorMessageBtn = errorMessage.querySelector( '.error__button' );

  document.body.append( errorMessage );
  closeErrorMessageBtn.focus();
  closeErrorMessageBtn.addEventListener( 'click', closeMessage( errorMessage ) );
}

export {
  isSuccsess,
  isError
};
