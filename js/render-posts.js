import {
  getPosts,
} from './get-posts.js';

import {
  showError,
} from './error-message.js';

const postsContainer = document.querySelector( '.pictures' );
const postTemplate = document.querySelector( '#picture' ).content.querySelector( '.picture' );
const postsFragment = document.createDocumentFragment();

function setupPost( {
  url,
  comments,
  likes,
} ) {
  const postElement = postTemplate.cloneNode( true );
  postElement.href = url;
  postElement.querySelector( '.picture__img' ).src = url;
  postElement.querySelector( '.picture__comments' ).textContent = comments;
  postElement.querySelector( '.picture__likes' ).textContent = likes;
  postsFragment.appendChild( postElement );
}

export function renderPosts() {
  getPosts().then( ( posts ) => {
    posts.forEach( setupPost );
    postsContainer.appendChild( postsFragment );
  } ).catch( () => {
    showError( 'Ошибка загрузки изображений', 'Как нибудь в другой раз' );
  } );
}
