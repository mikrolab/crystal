(function () {
  const self = window.controllerAbout || {};
  window.controllerAbout = self;

  // Values
  const philBtn = document.getElementById(`philosophy`);
  const specBtn = document.getElementById(`specifications`);
  const infrBtn = document.getElementById(`infrastructure`);
  // Events


  // Methods
  self.changeAbout = (activeBlock, disabledBlock1, disabledBlock2) => {
    if (document.querySelectorAll(`.about__explication.` + activeBlock + `.hide`).length !== 0) {
      document.querySelectorAll(`.about__explication.` + activeBlock + ``)[0].style.display = `block`;
      document.querySelectorAll(`.about__illustration-item.` + activeBlock + ``)[0].style.display = `block`;
      setTimeout(function () {
        document.querySelectorAll(`.about__explication.` + activeBlock + `.hide`)[0].classList.remove(`hide`);
        document.querySelectorAll(`.about__explication.` + activeBlock + ``)[0].classList.add(`visible`);
        document.querySelectorAll(`.about__illustration-item.` + activeBlock + `.hide`)[0].classList.remove(`hide`);
        document.querySelectorAll(`.about__illustration-item.` + activeBlock + ``)[0].classList.add(`visible`);
      },1)
      if (document.querySelectorAll(`.about__num.` + activeBlock + `.active`).length == 0) {
        document.querySelectorAll(`.about__num.` + activeBlock + ``)[0].classList.add(`active`);
      }
      if (document.querySelectorAll(`.about__num.` + disabledBlock1 + `.active`).length !== 0) {
        document.querySelectorAll(`.about__num.` + disabledBlock1 + `.active`)[0].classList.remove(`active`);
      }
      if (document.querySelectorAll(`.about__num.` + disabledBlock2 + `.active`).length !== 0) {
        document.querySelectorAll(`.about__num.` + disabledBlock2 + `.active`)[0].classList.remove(`active`);
      }
    }
    if (document.querySelectorAll(`.about__explication.` + disabledBlock1 + `.visible`).length !== 0) {
      document.querySelectorAll(`.about__explication.` + disabledBlock1 + `.visible`)[0].classList.remove(`visible`);
      document.querySelectorAll(`.about__explication.` + disabledBlock1 + ``)[0].classList.add(`hide`);
      document.querySelectorAll(`.about__explication.` + disabledBlock1 + ``)[0].style.display = `none`;
      document.querySelectorAll(`.about__illustration-item.` + disabledBlock1 + ``)[0].style.display = `none`;
      document.querySelectorAll(`.about__illustration-item.` + disabledBlock1 + `.visible`)[0].classList.remove(`visible`);
      document.querySelectorAll(`.about__illustration-item.` + disabledBlock1 + ``)[0].classList.add(`hide`);
    }
    if (document.querySelectorAll(`.about__explication.` + disabledBlock2 + `.visible`).length !== 0) {
      document.querySelectorAll(`.about__explication.` + disabledBlock2 + `.visible`)[0].classList.remove(`visible`);
      document.querySelectorAll(`.about__explication.` + disabledBlock2 + ``)[0].classList.add(`hide`);
      document.querySelectorAll(`.about__explication.` + disabledBlock2 + ``)[0].style.display = `none`;
      document.querySelectorAll(`.about__illustration-item.` + disabledBlock2 + ``)[0].style.display = `none`;
      document.querySelectorAll(`.about__illustration-item.` + disabledBlock2 + `.visible`)[0].classList.remove(`visible`);
      document.querySelectorAll(`.about__illustration-item.` + disabledBlock2 + ``)[0].classList.add(`hide`);
    }
  }

  self.about = () => {
    philBtn.addEventListener(`click`, () => {
      self.changeAbout(`philosophy`, `specifications`, `infrastructure`);
      document.getElementsByClassName(`illustration-itemBtn`)[0].style.display = `none`;
    })
    specBtn.addEventListener(`click`, () => {
      self.changeAbout(`specifications`, `philosophy`, `infrastructure`);
      document.getElementsByClassName(`illustration-itemBtn`)[0].style.display = `none`;
    })
    infrBtn.addEventListener(`click`, () => {
      self.changeAbout(`infrastructure`, `philosophy`, `specifications`);
      document.getElementsByClassName(`illustration-itemBtn`)[0].style.display = `flex`;
    })
  }

  const onDocumentReady = () => {

  };

  document.addEventListener(`DOMContentLoaded`, onDocumentReady());
})();
