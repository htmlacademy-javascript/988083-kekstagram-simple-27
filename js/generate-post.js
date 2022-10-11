import {
  SIMILIAR_POSTS_COUNT,
  UNIQUE_ID,
  UNIQUE_FILE_NAMES,
  POST_DESCRIPTIONS,
} from './data.js';

import {
  getRandomArrayElement,
  getRandomPositiveNumber,
  countGenerator,
} from './utils.js';

const counterID = countGenerator();
const counterURL = countGenerator();

function createPost() {
  return {
    id: UNIQUE_ID[ counterID() ],
    url: `photos/${UNIQUE_FILE_NAMES[ counterURL() ]}.jpg`,
    description: getRandomArrayElement( POST_DESCRIPTIONS ),
    likes: getRandomPositiveNumber( 15, 200 ),
    comments: getRandomPositiveNumber( 0, 200 ),
  };
}

export function createRandomPosts() {
  return Array.from( {
    length: SIMILIAR_POSTS_COUNT
  }, createPost );
}
