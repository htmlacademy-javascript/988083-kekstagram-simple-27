import {
  previewImage,
} from './scale.js';
import {
  capitalizeString,
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
const Effects = {
  Chrome: {
    Filter: 'grayscale',
    Units: '',
    SliderSettings: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
  },
  Sepia: {
    Filter: 'sepia',
    Units: '',
    SliderSettings: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
  },
  Marvin: {
    Filter: 'invert',
    Units: '%',
    SliderSettings: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    },
  },
  Phobos: {
    Filter: 'blur',
    Units: 'px',
    SliderSettings: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
  },
  Heat: {
    Filter: 'brightness',
    Units: '',
    SliderSettings: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
  },
};
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
  currentEffect = Effects[ capitalizeString( evt.target.value ) ];
  previewImage.removeAttribute( 'class' );
  previewImage.classList.add( `effects__preview--${evt.target.value}` );
  setUiSliderSettings( evt );
}

function onEffectClick( evt ) {
  if ( evt.target.classList.contains( 'effects__radio' ) ) {
    addEffect( evt );
  }
}

function hideUiSlider() {
  sliderElement.classList.add( 'hidden' );
  sliderElement.setAttribute( 'disabled', true );
  effectValue.value = '';
}

function showUiSlider() {
  sliderElement.noUiSlider.updateOptions( currentEffect.SliderSettings );
  sliderElement.removeAttribute( 'disabled' );
  sliderElement.classList.remove( 'hidden' );
  sliderElement.noUiSlider.on( 'update', () => {
    previewImage.style.filter = `${currentEffect.Filter}(${sliderElement.noUiSlider.get()}${currentEffect.Units})`;
    effectValue.value = sliderElement.noUiSlider.get();
  } );
}

export {
  onEffectClick,
  hideUiSlider,
};
