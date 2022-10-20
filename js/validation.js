import {
  uploadForm,
} from './form.js';

const commentaryMessage = uploadForm.querySelector( '.text__description' );
const validationRules = new Pristine( uploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
} );

export {
  validationRules,
  commentaryMessage,
};
