import {
  getPosts,
} from './get-posts.js';

import {
  showErrorMessage,
} from './error-message.js';

const postsContainerNode = document.querySelector( '.pictures' );
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
    postsContainerNode.appendChild( postsFragment );
  } ).catch( () => {
    showErrorMessage( 'Ошибка загрузки изображений', 'Как нибудь в другой раз' );
  } );
}
