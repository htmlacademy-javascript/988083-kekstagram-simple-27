function getRandomPositiveNumber( min, max ) {
  if ( min < 0 || max < 0 ) {
    return NaN;
  }
  const lower = Math.ceil( Math.min( min, max ) );
  const upper = Math.floor( Math.max( min, max ) );

  return Math.floor( Math.random() * ( upper - lower + 1 ) + lower );
}
getRandomPositiveNumber( 5, 10 );

function isLengthOverflow( str, maxLength ) {
  return str.length <= maxLength;
}
isLengthOverflow( 'Hello, World', 12 );
