import {
  isEscKey,
  resetStyleElement,
} from './utils.js';

import {
  previewImage,
  scaleImage,
} from './scale.js';

import {
  onEffectClick,
  hideUiSlider,
} from './effects.js';

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
  scaleImage();
  hideUiSlider();
  document.addEventListener( 'keydown', onEscKeydown );
  uploadForm.addEventListener( 'click', onEffectClick );
}

function closeModal() {
  if ( !document.body.classList.contains( 'is-showed-error' ) ) {
    uploadForm.reset();
    resetStyleElement( previewImage );
    modalOverlay.classList.add( 'hidden' );
    document.body.classList.remove( 'modal-open' );
    uploadForm.removeEventListener( 'click', onEffectClick );
    document.removeEventListener( 'keydown', onEscKeydown );
  }
}

export {
  uploadForm,
  uploadFileBtn,
  closeModalBtn,
  openModal,
  closeModal,
  validationRules,
};
