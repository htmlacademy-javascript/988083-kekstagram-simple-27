function getRandomPosotiveNumber( min, max ) {
  if ( min < 0 || max < 0 || typeof( min ) !== 'number' || typeof( max ) !== 'number' ) {
    return NaN;
  }
  const lower = Math.ceil( Math.min( min, max ) );
  const upper = Math.floor( Math.max( min, max ) );

  return Math.floor( Math.random() * ( upper - lower + 1 ) + min );
}
getRandomPosotiveNumber( 5, 10 );

function isLenghtOverflow( string, maxLength ) {
  return string.length <= maxLength;
}
isLenghtOverflow( 'Hello, World', 12 );
