import {
  renderPosts,
} from './render-posts.js';

import {
  onSubmitForm,
} from './send-form.js';

import {
  uploadForm,
  uploadFileBtn,
  closeModalBtn,
  openModal,
  closeModal,
} from './form.js';

renderPosts();

uploadFileBtn.addEventListener( 'change', openModal );
closeModalBtn.addEventListener( 'click', closeModal );
uploadForm.addEventListener( 'submit', onSubmitForm );
