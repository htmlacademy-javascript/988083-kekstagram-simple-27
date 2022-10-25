import {
  renderPosts,
} from './render-posts.js';

import {
  uploadForm,
  uploadFileBtn,
  closeModalBtn,
  openModal,
  closeModal,
  validationRules,
} from './form.js';

renderPosts();

uploadFileBtn.addEventListener( 'change', openModal );
closeModalBtn.addEventListener( 'click', closeModal );
uploadForm.addEventListener( 'submit', ( evt ) => {
  if ( !validationRules.validate() ) {
    evt.preventDefault();
  }
} );
