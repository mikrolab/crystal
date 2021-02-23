(function () {
  const self = window.controllerMenu || {};
  window.controllerMenu = self;

  // Values
  const openBtn = document.getElementById(`openBtn`);
  const openBtnMob = document.getElementById(`openBtnMob`);
  const closeBtn = document.getElementById(`closeBtn`);
  const menuList = document.querySelectorAll(`.menu__list`)[0];
  // Events

  // Methods
  self.menu = () => {
    openBtn.addEventListener(`click`, () => {
      document.querySelectorAll(`.menu.disabled`)[0].classList.remove(`disabled`);
      document.querySelectorAll(`.menu`)[0].classList.add(`active`);
      document.querySelectorAll(`html`)[0].style.overflow = "hidden";
    })
    closeBtn.addEventListener(`click`, () => {
      document.querySelectorAll(`.menu.active`)[0].classList.remove(`active`);
      document.querySelectorAll(`.menu`)[0].classList.add(`disabled`);
      document.querySelectorAll(`html`)[0].style.overflow = "auto";
    })
    menuList.addEventListener(`click`, () => {
      document.querySelectorAll(`.menu.active`)[0].classList.remove(`active`);
      document.querySelectorAll(`.menu`)[0].classList.add(`disabled`);
      document.querySelectorAll(`html`)[0].style.overflow = "auto";
    })
  }
  self.menuMob = () => {
    openBtnMob.addEventListener(`click`, () => {
      document.querySelectorAll(`.menu.disabled`)[0].classList.remove(`disabled`);
      document.querySelectorAll(`.menu`)[0].classList.add(`active`);
      document.querySelectorAll(`html`)[0].style.overflow = "hidden";
    })
    closeBtn.addEventListener(`click`, () => {
      document.querySelectorAll(`.menu.active`)[0].classList.remove(`active`);
      document.querySelectorAll(`.menu`)[0].classList.add(`disabled`);
      document.querySelectorAll(`html`)[0].style.overflow = "auto";
    })
    menuList.addEventListener(`click`, () => {
      document.querySelectorAll(`.menu.active`)[0].classList.remove(`active`);
      document.querySelectorAll(`.menu`)[0].classList.add(`disabled`);
      document.querySelectorAll(`html`)[0].style.overflow = "auto";
    })
  }

  const onDocumentReady = () => {

  };

  document.addEventListener(`DOMContentLoaded`, onDocumentReady());
})();
