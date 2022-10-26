import {
  previewImage,
} from './scale.js';
import {
  resetStyleElement,
} from './utils.js';

let currentEffect;
const SLIDER_DEFAULT_OPTIONS = {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
  format: {
    to: function( value ) {
      if ( Number.isInteger( value ) ) {
        return value.toFixed( 0 );
      }
      return value.toFixed( 1 );
    },
    from: function( value ) {
      return parseFloat( value );
    },
  },
};
const effects = {
  chrome: {
    filter: 'grayscale',
    units: '',
    sliderSettings: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
  },
  sepia: {
    filter: 'sepia',
    units: '',
    sliderSettings: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
  },
  marvin: {
    filter: 'invert',
    units: '%',
    sliderSettings: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    },
  },
  phobos: {
    filter: 'blur',
    units: 'px',
    sliderSettings: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
  },
  heat: {
    filter: 'brightness',
    units: '',
    sliderSettings: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
  },
};
const effectListElement = document.querySelector( '.effects__list' );
const sliderElement = document.querySelector( '.effect-level__slider' );
const effectValue = document.querySelector( '.effect-level__value' );
noUiSlider.create( sliderElement, SLIDER_DEFAULT_OPTIONS );

function setUiSliderSettings( evt ) {
  if ( evt.target.value === 'none' ) {
    hideUiSlider();
    resetStyleElement( previewImage );
  } else {
    showUiSlider();
  }
}

function addEffect( evt ) {
  if ( evt.target && evt.target.closest( 'input[type="radio"]' ) ) {
    currentEffect = effects[ evt.target.value ];
    previewImage.removeAttribute( 'class' );
    previewImage.classList.add( `effects__preview--${evt.target.value}` );
    setUiSliderSettings( evt );
  }
}

function hideUiSlider() {
  sliderElement.classList.add( 'hidden' );
  sliderElement.setAttribute( 'disabled', true );
  effectValue.value = '';
}

function showUiSlider() {
  sliderElement.noUiSlider.updateOptions( currentEffect.sliderSettings );
  sliderElement.removeAttribute( 'disabled' );
  sliderElement.classList.remove( 'hidden' );
  sliderElement.noUiSlider.on( 'update', () => {
    previewImage.style.filter = `${currentEffect.filter}(${sliderElement.noUiSlider.get()}${currentEffect.units})`;
    effectValue.value = sliderElement.noUiSlider.get();
  } );
}

export {
  effectListElement,
  addEffect,
  hideUiSlider,
};
