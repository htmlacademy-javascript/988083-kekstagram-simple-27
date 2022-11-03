import {
  renderPosts,
} from './render-posts.js';

import {
  onSubmitForm,
} from './send-form.js';

import {
  uploadFormNode,
  uploadFileBtnNode,
  closeModalBtnNode,
  openModal,
  closeModal,
} from './form.js';

renderPosts();

uploadFileBtnNode.addEventListener( 'change', openModal );
closeModalBtnNode.addEventListener( 'click', closeModal );
uploadFormNode.addEventListener( 'submit', onSubmitForm );
