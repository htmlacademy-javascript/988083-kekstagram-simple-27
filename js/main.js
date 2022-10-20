import {
  renderPosts,
} from './render-posts.js';

import {
  resetField,
} from './utils.js';

import {
  uploadForm,
  uploadFileBtn,
  closeModalBtn,
  openModal,
  closeModal,
} from './form.js';

import {
  validationRules,
  commentaryMessage,
} from './validation.js';

import {
  isSuccsess,
  isError,
} from './message.js';

renderPosts();

uploadFileBtn.addEventListener( 'change', openModal );
closeModalBtn.addEventListener( 'click', closeModal );
uploadForm.addEventListener( 'submit', ( evt ) => {
  evt.preventDefault();
  if ( !validationRules.validate() ) {
    isError();
    return;
  }
  closeModal();
  resetField( commentaryMessage );
  isSuccsess();
} );
