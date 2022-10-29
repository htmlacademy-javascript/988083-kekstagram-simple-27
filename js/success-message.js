import {
  isEscKey,
} from './utils.js';

const successMessageTemplate = document.querySelector( '#success' ).content.querySelector( '.success' );

function showSuccess() {
  const successNode = successMessageTemplate.cloneNode( true );
  const closeBtn = successNode.querySelector( '.success__button' );
  document.body.appendChild( successNode );
  closeBtn.addEventListener( 'click', closeSuccess );
  document.addEventListener( 'keydown', onEscKeydown );
}

function onEscKeydown( evt ) {
  if ( isEscKey( evt ) ) {
    closeSuccess();
  }
}

function closeSuccess() {
  document.querySelector( '.success' ).remove();
  document.removeEventListener( 'keydown', onEscKeydown );
}

export {
  showSuccess,
};
