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
  let page = "";

  // Events


  // Methods

  self.whatPage = () => {
    if (document.getElementsByClassName(`index__page`).length) {
      page = "index";
    }
  }

  self.selectJs = () => {
    switch (page) {
      case "index":
        controllerAbout.about();
        controllerAesthetics.aesthetics();
        window.onload = function () {
          document.getElementById(`architecture`).click();
        }
        controllerApartment.apartment();
        controllerCamera.camera();
        controllerCamera.changeVideo();

        function startDate() {
          document.getElementById(`start__year`).click();
        }
        window.onload = function () {
          document.getElementById(`selected__year`).click();
          setTimeout(startDate, 1);
        }
        controllerFilter.filter();
        controllerFilter.zoomImg();
        controllerPanorama.openClosePanorama();
        controllerPurchase.purchase();
        break;
    }
  }

  const onDocumentReady = () => {
    // controllerMenu.menu();
    controllerMenu.menu();
    controllerMenu.menuMob();
    controllerPopup.popup();
    self.whatPage();
    self.selectJs();

  }

  document.addEventListener(`DOMContentLoaded`, onDocumentReady());
})();
