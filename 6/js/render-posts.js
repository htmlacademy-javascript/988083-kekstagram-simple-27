import {
  createRandomPosts,
} from './generate-post.js';

const randomPosts = createRandomPosts();
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
  randomPosts.forEach( setupPost );
  postsContainer.appendChild( postsFragment );
}
