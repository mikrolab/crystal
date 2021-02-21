require(`./pages/menu.js`);
require(`./pages/about.js`);
require(`./pages/apartment.js`);
require(`./pages/slick.min.js`);
require(`./pages/slider.js`);
require(`./pages/aesthetics.js`);
require(`./pages/purchase.js`);
require(`./pages/filterMenu.js`);
require(`./pages/camera.js`);
require(`./pages/popup.js`);
require(`./pages/apartmentSlider.js`);
require(`./pages/topArrow.js`);
require(`./pages/panorama.js`);
require(`./pages/formSubmitting.js`);

(function () {
  const self = window.controllerMain || {};
  window.controllerMain = self;

  // Values


  // Events


  // Methods

  const onDocumentReady = () => {
    // controllerMenu.menu();
  };

  document.addEventListener(`DOMContentLoaded`, onDocumentReady());
})();
