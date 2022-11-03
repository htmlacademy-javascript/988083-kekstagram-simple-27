import {
  isEscKey,
} from './utils.js';

const successMessageTemplate = document.querySelector( '#success' ).content.querySelector( '.success' );

function showSuccess() {
  const successNode = successMessageTemplate.cloneNode( true );
  document.body.appendChild( successNode );
  successNode.addEventListener( 'click', closeSuccess );
  document.addEventListener( 'keydown', onEscKeydown );
}

function onEscKeydown( evt ) {
  if ( isEscKey( evt ) ) {
    closeSuccess( evt );
  }
}

function closeSuccess( evt ) {
  if ( evt.target.closest( '.success__inner' ) && !evt.target.closest( '.success__button' ) ) {
    return;
  }
  document.querySelector( '.success' ).remove();
  document.removeEventListener( 'keydown', onEscKeydown );
}

export {
  showSuccess,
};
