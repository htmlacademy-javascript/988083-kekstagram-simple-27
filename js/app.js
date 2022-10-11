import {
  uniqueIDs,
  uniqueFileNames,
  POST_DESCRIPTIONS,
} from './data.js';

import {
  getRandomArrayElement,
  getRandomPositiveNumber,
} from './utils.js';

function createPost( i ) {
  return {
    id: uniqueIDs[ i ],
    url: `photos/${uniqueFileNames[ i ]}.jpg`,
    description: getRandomArrayElement( POST_DESCRIPTIONS ),
    likes: getRandomPositiveNumber( 15, 200 ),
    comments: getRandomPositiveNumber( 0, 200 ),
  };
}

export function createRandomPosts( count ) {
  const posts = [];
  for ( let i = 0; i < count; i++ ) {
    posts.push( createPost( i ) );
  }
  return posts;
}
