const isEscKey = ( evt ) => evt.key === 'Escape';

const resetStyleElement = ( element ) => {
  element.removeAttribute( 'style' );
  element.removeAttribute( 'class' );
};

const capitalizeString = ( str ) => str[ 0 ].toUpperCase() + str.slice( 1 );

export {
  capitalizeString,
  resetStyleElement,
  isEscKey,
};
