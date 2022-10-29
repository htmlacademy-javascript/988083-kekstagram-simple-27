import {
  renderPosts,
} from './render-posts.js';

import {
  uploadForm,
  uploadFileBtn,
  closeModalBtn,
  openModal,
  closeModal,
} from './form.js';

import {
  sendForm,
} from './send-form.js';

renderPosts();

uploadFileBtn.addEventListener( 'change', openModal );
closeModalBtn.addEventListener( 'click', closeModal );
uploadForm.addEventListener( 'submit', sendForm );
