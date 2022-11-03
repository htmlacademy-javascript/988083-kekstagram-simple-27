import {
  isEscKey,
} from './utils.js';

const successMessageTemplate = document.querySelector( '#success' ).content.querySelector( '.success' );

const closeSuccessMessage = ( evt ) => {
  if ( evt.target.closest( '.success__inner' ) && !evt.target.closest( '.success__button' ) ) {
    return;
  }
  document.querySelector( '.success' ).remove();
  document.removeEventListener( 'keydown', onEscKeydown );
};

const showSuccessMessage = () => {
  const successNode = successMessageTemplate.cloneNode( true );
  document.body.appendChild( successNode );
  successNode.addEventListener( 'click', closeSuccessMessage );
  document.addEventListener( 'keydown', onEscKeydown );
};

function onEscKeydown( evt ) {
  if ( isEscKey( evt ) ) {
    closeSuccessMessage( evt );
  }
}

export {
  showSuccessMessage,
};
