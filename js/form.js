import {
  isEscKey,
} from './utils.js';

const uploadForm = document.querySelector( '#upload-select-image' );
const modalForm = uploadForm.querySelector( '.img-upload__overlay' );
const uploadFileBtn = uploadForm.querySelector( '#upload-file' );
const closeModalBtn = modalForm.querySelector( '#upload-cancel' );

function onEscKeydown( evt ) {
  if ( isEscKey( evt ) ) {
    closeModal();
  }
}

function openModal() {
  modalForm.classList.remove( 'hidden' );
  document.body.classList.add( 'modal-open' );
  document.addEventListener( 'keydown', onEscKeydown );
}

function closeModal() {
  modalForm.classList.add( 'hidden' );
  uploadFileBtn.value = '';
  document.body.classList.remove( 'modal-open' );
  document.removeEventListener( 'keydown', onEscKeydown );
}

export {
  uploadForm,
  uploadFileBtn,
  closeModalBtn,
  openModal,
  closeModal,
};
