export function getRandomPositiveNumber( min, max ) {
  if ( min < 0 || max < 0 ) {
    return NaN;
  }
  const lower = Math.ceil( Math.min( min, max ) );
  const upper = Math.floor( Math.max( min, max ) );

  return Math.floor( Math.random() * ( upper - lower + 1 ) + lower );
}

export function getRandomArrayElement( elements ) {
  return elements[ getRandomPositiveNumber( 0, elements.length - 1 ) ];
}

export function isLengthOverflow( str, maxLength ) {
  return str.length <= maxLength;
}

export function createUniqValues( count ) {
  const uniqueValues = new Set();
  while ( uniqueValues.size < count ) {
    uniqueValues.add( getRandomPositiveNumber( 1, count ) );
  }
  return [ ...uniqueValues ];
}
