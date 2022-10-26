const previewImage = document.querySelector( '.img-upload__preview img' );
const zoomInBtn = document.querySelector( '.scale__control--bigger' );
const zoomOutBtn = document.querySelector( '.scale__control--smaller' );
const scaleInputElement = document.querySelector( '.scale__control--value' );
const ImageSettings = {
  DefaultSize: 100,
  MinSize: 25,
  MaxSize: 100,
  ScaleStep: 25,
};

function setDefaultScale() {
  scaleInputElement.value = `${ImageSettings.DefaultSize}%`;
  previewImage.style.transform = `scale(${ImageSettings.DefaultSize / 100})`;
}

function scaleImage() {
  const currentValue = parseFloat( scaleInputElement.value );
  previewImage.style.transform = `scale(${currentValue / 100})`;
}

function zoomOut() {
  const currentScaleValue = parseFloat( scaleInputElement.value );
  if ( currentScaleValue > ImageSettings.MinSize ) {
    scaleInputElement.value = `${currentScaleValue - ImageSettings.ScaleStep}%`;
    scaleImage();
  }
}

function zoomIn() {
  const currentScaleValue = parseFloat( scaleInputElement.value );
  if ( currentScaleValue < ImageSettings.MaxSize ) {
    scaleInputElement.value = `${currentScaleValue + ImageSettings.ScaleStep}%`;
    scaleImage();
  }
}

export {
  previewImage,
  setDefaultScale,
  zoomIn,
  zoomOut,
  zoomInBtn,
  zoomOutBtn,
};
