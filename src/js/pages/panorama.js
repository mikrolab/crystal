(function () {
  const self = window.controllerPanorama || {};
  window.controllerPanorama = self;

  // Values
  const open = document.getElementById(`openPanorama`);
  const close = document.getElementById(`closePanorama`);
  // Events

  // Methods
  self.openClosePanorama = () => {
    open.addEventListener(`click`, () => {
      document.getElementsByClassName(`panorama__popup`)[0].style.display = `block`;
      document.getElementsByClassName(`panorama3d`)[0].setAttribute(`src`, `https://3dtour.ua/tours/2020/zhk_crystal_avenue/`);
    })
    close.addEventListener(`click`, () => {
      document.getElementsByClassName(`panorama__popup`)[0].style.display = `none`;
    })
  }

  const onDocumentReady = () => {

  };

  document.addEventListener(`DOMContentLoaded`, onDocumentReady());
})();
