import {
  isEscKey,
  resetStyleElement,
} from './utils.js';

import {
  previewImageNode,
  scaleImage,
} from './scale.js';

import {
  onEffectClick,
  hideUiSlider,
} from './effects.js';

const uploadFormNode = document.querySelector( '#upload-select-image' );
const modalOverlayNode = uploadFormNode.querySelector( '.img-upload__overlay' );
const uploadFileBtnNode = uploadFormNode.querySelector( '#upload-file' );
const closeModalBtnNode = uploadFormNode.querySelector( '#upload-cancel' );
const validationRules = new Pristine( uploadFormNode, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
} );

const openModal = () => {
  modalOverlayNode.classList.remove( 'hidden' );
  document.body.classList.add( 'modal-open' );
  scaleImage();
  hideUiSlider();
  document.addEventListener( 'keydown', onEscKeydown );
  uploadFormNode.addEventListener( 'click', onEffectClick );
};

const closeModal = () => {
  if ( !document.body.classList.contains( 'is-showed-error' ) ) {
    uploadFormNode.reset();
    resetStyleElement( previewImageNode );
    modalOverlayNode.classList.add( 'hidden' );
    document.body.classList.remove( 'modal-open' );
    uploadFormNode.removeEventListener( 'click', onEffectClick );
    document.removeEventListener( 'keydown', onEscKeydown );
  }
};

function onEscKeydown( evt ) {
  if ( isEscKey( evt ) ) {
    closeModal();
  }
}

export {
  uploadFormNode,
  uploadFileBtnNode,
  closeModalBtnNode,
  openModal,
  closeModal,
  validationRules,
};
