(function () {
  const self = window.controllerPopup || {};
  window.controllerPopup = self;

  // Values
  const contactBtn = document.getElementById(`contact__call`);
  const reviewBtn = document.getElementById(`review__btn`);
  const planBtn = document.getElementById(`plan__btn`);
  const closeBtn = document.getElementById(`closePopup`);
  const closConfirmation = document.getElementById(`closConfirmation`);
  // Events

  // Methods
  self.openPopup = () => {
    document.querySelectorAll(`.popup__wrapper`)[0].style.visibility = "visible"
    document.querySelectorAll(`.popup__wrapper`)[0].style.opacity = "1"
    document.querySelectorAll(`html`)[0].style.overflow = "hidden";
  }
  self.closePopup = () => {
    document.querySelectorAll(`.popup__wrapper`)[0].style.visibility = "hidden"
    document.querySelectorAll(`.popup__wrapper`)[0].style.opacity = "0"
    document.querySelectorAll(`html`)[0].style.overflow = "auto";
  }
  self.closeConfirmationForm = () => {
    document.querySelectorAll(`.successfully__sent-wrapper`)[0].style.visibility = "hidden"
    document.querySelectorAll(`.successfully__sent-wrapper`)[0].style.opacity = "0"
    document.querySelectorAll(`html`)[0].style.overflow = "auto";
  }
  self.popup = () => {

    if (pageName == `plan.html`) {
      planBtn.addEventListener(`click`, () => {
        self.openPopup()
      })
      closeBtn.addEventListener(`click`, () => {
        self.closePopup()
      })
      closConfirmation.addEventListener(`click`, () => {
        self.closeConfirmationForm()
      })
    }
    if(pageName == ``){
      contactBtn.addEventListener(`click`, () => {
        self.openPopup();
      })
      reviewBtn.addEventListener(`click`, () => {
        self.openPopup();
      })
      closeBtn.addEventListener(`click`, () => {
        self.closePopup()
      })
      closConfirmation.addEventListener(`click`, () => {
        self.closeConfirmationForm()
      })
    }
    if(pageName == `contacts.html`){
      contactBtn.addEventListener(`click`, () => {
        self.openPopup();
      })
      closeBtn.addEventListener(`click`, () => {
        self.closePopup()
      })
      closConfirmation.addEventListener(`click`, () => {
        self.closeConfirmationForm()
      })
    }

  }

  const onDocumentReady = () => {
    const pathName = window.location.pathname
    const pathIndex = window.location.pathname.lastIndexOf('/') + 1

    pageName = pathName.substring(pathIndex)

    self.popup();
  };

  document.addEventListener(`DOMContentLoaded`, onDocumentReady());
})();
