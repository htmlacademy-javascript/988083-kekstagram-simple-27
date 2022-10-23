import {
  isEscKey,
} from './utils.js';

const uploadForm = document.querySelector( '#upload-select-image' );
const modalOverlay = uploadForm.querySelector( '.img-upload__overlay' );
const uploadFileBtn = uploadForm.querySelector( '#upload-file' );
const closeModalBtn = uploadForm.querySelector( '#upload-cancel' );
const validationRules = new Pristine( uploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
} );

function onEscKeydown( evt ) {
  if ( isEscKey( evt ) ) {
    closeModal();
  }
}

function openModal() {
  modalOverlay.classList.remove( 'hidden' );
  document.body.classList.add( 'modal-open' );
  document.addEventListener( 'keydown', onEscKeydown );
}

function closeModal() {
  uploadForm.reset();
  modalOverlay.classList.add( 'hidden' );
  document.body.classList.remove( 'modal-open' );
  document.removeEventListener( 'keydown', onEscKeydown );
}

export {
  uploadForm,
  uploadFileBtn,
  closeModalBtn,
  openModal,
  closeModal,
  validationRules,
};
