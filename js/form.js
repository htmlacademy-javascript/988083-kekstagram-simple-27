import {
  isEscKey,
  resetStyleElement,
} from './utils.js';

import {
  previewImage,
  setDefaultScale,
  zoomIn,
  zoomOut,
  zoomInBtn,
  zoomOutBtn,
} from './scale.js';

import {
  effectListElement,
  addEffect,
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
  setDefaultScale();
  hideUiSlider();
  zoomOutBtn.addEventListener( 'click', zoomOut );
  zoomInBtn.addEventListener( 'click', zoomIn );
  document.addEventListener( 'keydown', onEscKeydown );
  effectListElement.addEventListener( 'click', addEffect );
}

function closeModal() {
  if ( !document.body.classList.contains( 'is-error' ) ) {
    uploadForm.reset();
    resetStyleElement( previewImage );
    modalOverlay.classList.add( 'hidden' );
    document.body.classList.remove( 'modal-open' );
    zoomOutBtn.removeEventListener( 'click', zoomOut );
    zoomInBtn.removeEventListener( 'click', zoomIn );
    effectListElement.removeEventListener( 'click', addEffect );
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
