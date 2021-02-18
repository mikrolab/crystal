(function () {
  const self = window.controllerApartment || {};
  window.controllerApartment = self;

  // Values
  const oneR = document.getElementById(`one-room`);
  const twoR = document.getElementById(`two-room`);
  const threeR = document.getElementById(`three-room`);
  const twoL = document.getElementById(`two-level`);
  const parking = document.getElementById(`parking`);
  const commercial = document.getElementById(`commercial`);
  // Events

  // Methods
  self.changeApartment = (activeBlock, disabledBlock1, disabledBlock2, disabledBlock3, disabledBlock4, disabledBlock5) => {
    document.querySelectorAll(`.apartment__content-btn.` + activeBlock + ``)[0].classList.add(`active`);
    document.querySelectorAll(`.apartment__content-plan.` + activeBlock + ``)[0].style.display = "flex";
    $('.apartment__content-plan.' + activeBlock + ``).slick(`refresh`);
    document.querySelectorAll(`.apartment__content-btn.` + disabledBlock1 + ``)[0].classList.remove(`active`);
    document.querySelectorAll(`.apartment__content-plan.` + disabledBlock1 + ``)[0].style.display = "none";
    document.querySelectorAll(`.apartment__content-btn.` + disabledBlock2 + ``)[0].classList.remove(`active`);
    document.querySelectorAll(`.apartment__content-plan.` + disabledBlock2 + ``)[0].style.display = "none";
    document.querySelectorAll(`.apartment__content-btn.` + disabledBlock3 + ``)[0].classList.remove(`active`);
    document.querySelectorAll(`.apartment__content-plan.` + disabledBlock3 + ``)[0].style.display = "none";
    document.querySelectorAll(`.apartment__content-btn.` + disabledBlock4 + ``)[0].classList.remove(`active`);
    document.querySelectorAll(`.apartment__content-plan.` + disabledBlock4 + ``)[0].style.display = "none";
    document.querySelectorAll(`.apartment__content-btn.` + disabledBlock5 + ``)[0].classList.remove(`active`);
    document.querySelectorAll(`.apartment__content-plan.` + disabledBlock5 + ``)[0].style.display = "none";
  }

  self.apartment = () => {
    oneR.addEventListener(`click`, () => {
      self.changeApartment(`one-room`, `two-room`, `three-room`, `two-level`, `parking`, `commercial`);
    })
    twoR.addEventListener(`click`, () => {
      self.changeApartment(`two-room`, `one-room`, `three-room`, `two-level`, `parking`, `commercial`);
    })
    threeR.addEventListener(`click`, () => {
      self.changeApartment(`three-room`, `two-room`, `one-room`, `two-level`, `parking`, `commercial`);
    })
    twoL.addEventListener(`click`, () => {
      self.changeApartment(`two-level`, `two-room`, `three-room`, `one-room`, `parking`, `commercial`);
    })
    parking.addEventListener(`click`, () => {
      self.changeApartment(`parking`, `two-room`, `three-room`, `one-room`, `two-level`, `commercial`);
    })
    commercial.addEventListener(`click`, () => {
      self.changeApartment(`commercial`, `two-room`, `three-room`, `one-room`, `parking`, `two-level`);
    })
  }

  const onDocumentReady = () => {
    const pathName = window.location.pathname
    const pathIndex = window.location.pathname.lastIndexOf('/') + 1

    pageName = pathName.substring(pathIndex)
    if((pageName != `plan.html`) && (pageName != `news.html`) && (pageName != `newsItem.html`) && (pageName != `newsItem1.html`) && (pageName != `newsItem2.html`) && (pageName != `newsItem3.html`) && (pageName != `contacts.html`) && (pageName != `promotions.html`)){
      self.apartment();
    }
  };

  document.addEventListener(`DOMContentLoaded`, onDocumentReady());
})();
