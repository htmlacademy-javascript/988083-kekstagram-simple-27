import {
  isEscKey,
} from './utils.js';

const errorMessageTemplate = document.querySelector( '#error' ).content.querySelector( '.error' );

const closeErrorMessage = ( evt ) => {
  if ( evt.target.closest( '.error__inner' ) && !evt.target.closest( '.error__button' ) ) {
    return;
  }
  document.querySelector( '.error' ).remove();
  document.body.classList.remove( 'is-showed-error' );
  document.removeEventListener( 'keydown', onEscKeydown );
};

const showErrorMessage = ( textMessage, buttonMessage = null ) => {
  const errorNode = errorMessageTemplate.cloneNode( true );
  errorNode.querySelector( '.error__title' ).textContent = textMessage;
  if ( buttonMessage ) {
    errorNode.querySelector( '.error__button' ).textContent = buttonMessage;
  }
  document.body.appendChild( errorNode );
  document.body.classList.add( 'is-showed-error' );
  errorNode.addEventListener( 'click', closeErrorMessage );
  document.addEventListener( 'keydown', onEscKeydown );
};

function onEscKeydown( evt ) {
  if ( isEscKey( evt ) ) {
    closeErrorMessage( evt );
  }
}

export {
  showErrorMessage,
};
