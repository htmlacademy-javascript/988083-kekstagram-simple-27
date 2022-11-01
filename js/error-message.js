import {
  isEscKey,
} from './utils.js';

const errorMessageTemplate = document.querySelector( '#error' ).content.querySelector( '.error' );

function showError( textMessage, buttonMessage = null ) {
  const errorNode = errorMessageTemplate.cloneNode( true );
  errorNode.querySelector( '.error__title' ).textContent = textMessage;
  if ( buttonMessage ) {
    errorNode.querySelector( '.error__button' ).textContent = buttonMessage;
  }
  document.body.appendChild( errorNode );
  document.body.classList.add( 'is-error' );
  errorNode.addEventListener( 'click', closeError );
  document.addEventListener( 'keydown', onEscKeydown );
}

function onEscKeydown( evt ) {
  if ( isEscKey( evt ) ) {
    closeError( evt );
  }
}

function closeError( evt ) {
  if ( evt.target.closest( '.error__inner' ) && !evt.target.closest( '.error__button' ) ) {
    return;
  }
  document.querySelector( '.error' ).remove();
  document.body.classList.remove( 'is-error' );
  document.removeEventListener( 'keydown', onEscKeydown );
}

export {
  showError,
};
