function getRandomNumber( min, max ) {
  if ( min < 0 || max < 0 || typeof( min ) !== 'number' || typeof( max ) !== 'number' ) {
    return NaN;
  }
  if ( max < min ) {
    min = Math.floor( min );
    max = Math.ceil( max );

    return Math.floor( Math.random() * ( min - max + 1 ) + max );
  }
  min = Math.ceil( min );
  max = Math.floor( max );

  return Math.floor( Math.random() * ( max - min + 1 ) + min );
}
getRandomNumber( 5, 10 );

function isLenghtOverflow( string, maxLength ) {
  return string.length <= maxLength;
}
isLenghtOverflow( 'Hello, World', 12 );
