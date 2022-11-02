function isEscKey( evt ) {
  return evt.key === 'Escape';
}

function resetStyleElement( element ) {
  element.removeAttribute( 'style' );
  element.removeAttribute( 'class' );
}

function capitalizeString( str ) {
  return str[ 0 ].toUpperCase() + str.slice( 1 );
}

export {
  capitalizeString,
  resetStyleElement,
  isEscKey,
};
