const previewImage = document.querySelector( '.img-upload__preview img' );
const zoomOutBtn = document.querySelector( '.scale__control--smaller' );
const zoomInBtn = document.querySelector( '.scale__control--bigger' );
const scaleInputElement = document.querySelector( '.scale__control--value' );
const ImageSettings = {
  DefaultSize: 100,
  MinSize: 25,
  MaxSize: 100,
  ScaleStep: 25,
};

function scaleImage( value = ImageSettings.DefaultSize ) {
  const currentValue = parseInt( value, 10 );
  scaleInputElement.value = `${currentValue}%`;
  previewImage.style.transform = `scale(${currentValue / 100})`;
}

function onZoomOutClick() {
  const currentScaleValue = parseInt( scaleInputElement.value, 10 );
  if ( currentScaleValue > ImageSettings.MinSize ) {
    scaleInputElement.value = `${currentScaleValue - ImageSettings.ScaleStep}%`;
    scaleImage( scaleInputElement.value );
  }
}

function onZoomInClick() {
  const currentScaleValue = parseInt( scaleInputElement.value, 10 );
  if ( currentScaleValue < ImageSettings.MaxSize ) {
    scaleInputElement.value = `${currentScaleValue + ImageSettings.ScaleStep}%`;
    scaleImage( scaleInputElement.value );
  }
}

zoomOutBtn.addEventListener( 'click', onZoomOutClick );
zoomInBtn.addEventListener( 'click', onZoomInClick );

export {
  scaleImage,
  previewImage,
};
