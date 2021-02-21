(function () {
  const self = window.controllerPurchase || {};
  window.controllerPurchase = self;

  // Values
  const open = document.getElementById(`openPanorama`);
  const close = document.getElementById(`closePanorama`);
  // Events

  // Methods
  self.openClosePanorama = () => {
    open.addEventListener(`click`, () => {
      document.getElementsByClassName(`panorama__popup`)[0].style.display = `block`;
    })
    close.addEventListener(`click`, () => {
      document.getElementsByClassName(`panorama__popup`)[0].style.display = `none`;
    })
  }

  const onDocumentReady = () => {
    const pathName = window.location.pathname
    const pathIndex = window.location.pathname.lastIndexOf('/') + 1

    pageName = pathName.substring(pathIndex)
    if ((pageName != `plan.html`) && (pageName != `news.html`) && (pageName != `newsItem.html`) && (pageName != `newsItem1.html`) && (pageName != `newsItem2.html`) && (pageName != `newsItem3.html`) && (pageName != `contacts.html`) && (pageName != `promotions.html`)) {
      self.openClosePanorama();
    }
  };

  document.addEventListener(`DOMContentLoaded`, onDocumentReady());
})();
