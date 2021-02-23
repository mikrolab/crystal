(function () {
  const self = window.controllerFilter || {};
  window.controllerFilter = self;

  // Values
  const filterBtn = document.getElementById(`filter__btn`);
  const metro = document.getElementById(`metro__btn`);
  const trc = document.getElementById(`trc__btn`);
  const cafe = document.getElementById(`cafe__btn`);
  const education = document.getElementById(`education__btn`);
  const medicine = document.getElementById(`medicine__btn`);
  const leisure = document.getElementById(`leisure__btn`);
  const sport = document.getElementById(`sport__btn`);
  const business = document.getElementById(`business__btn`);
  const outside = document.getElementById(`outside__btn`);
  const inside = document.getElementById(`inside__btn`);
  const openImg = document.getElementById(`open__img`);
  const closeImg = document.getElementById(`close__img`);
  // Events

  // Methods
  self.filter = () => {
    outside.addEventListener(`click`, () => {
      document.querySelectorAll(`.outside__wrapper`)[0].style.display = "block";
      document.querySelectorAll(`.outside__btn`)[0].classList.add(`active`);
      document.querySelectorAll(`.inside__wrapper`)[0].style.display = "none";
      document.querySelectorAll(`.inside__btn.active`)[0].classList.remove(`active`);
    })
    inside.addEventListener(`click`, () => {
      document.querySelectorAll(`.inside__wrapper`)[0].style.display = "block";
      document.querySelectorAll(`.inside__btn`)[0].classList.add(`active`);
      document.querySelectorAll(`.outside__wrapper`)[0].style.display = "none";
      document.querySelectorAll(`.outside__btn.active`)[0].classList.remove(`active`);
    })
    filterBtn.addEventListener(`click`, () => {
      if (document.querySelectorAll(`.filter__btn.active`).length == 0) {
        document.querySelectorAll(`.filter__btn`)[0].classList.add(`active`);
        document.querySelectorAll(`.filter__menu`)[0].style.display = "block";
      } else {
        document.querySelectorAll(`.filter__btn.active`)[0].classList.remove(`active`);
        document.querySelectorAll(`.filter__menu`)[0].style.display = "none";
      }
    })
    metro.addEventListener(`click`, () => {
      document.getElementsByClassName("map__filter")[0].setAttribute("src", "img/metro.jpg");
      document.querySelectorAll(`.filter__btn.active`)[0].classList.remove(`active`);
      document.querySelectorAll(`.filter__menu`)[0].style.display = "none";
    })
    trc.addEventListener(`click`, () => {
      document.getElementsByClassName("map__filter")[0].setAttribute("src", "img/trc.jpg");
      document.querySelectorAll(`.filter__btn.active`)[0].classList.remove(`active`);
      document.querySelectorAll(`.filter__menu`)[0].style.display = "none";
    })
    cafe.addEventListener(`click`, () => {
      document.getElementsByClassName("map__filter")[0].setAttribute("src", "img/cafe.jpg");
      document.querySelectorAll(`.filter__btn.active`)[0].classList.remove(`active`);
      document.querySelectorAll(`.filter__menu`)[0].style.display = "none";
    })
    education.addEventListener(`click`, () => {
      document.getElementsByClassName("map__filter")[0].setAttribute("src", "img/education.jpg");
      document.querySelectorAll(`.filter__btn.active`)[0].classList.remove(`active`);
      document.querySelectorAll(`.filter__menu`)[0].style.display = "none";
    })
    medicine.addEventListener(`click`, () => {
      document.getElementsByClassName("map__filter")[0].setAttribute("src", "img/medicine.jpg");
      document.querySelectorAll(`.filter__btn.active`)[0].classList.remove(`active`);
      document.querySelectorAll(`.filter__menu`)[0].style.display = "none";
    })
    leisure.addEventListener(`click`, () => {
      document.getElementsByClassName("map__filter")[0].setAttribute("src", "img/leisure.jpg");
      document.querySelectorAll(`.filter__btn.active`)[0].classList.remove(`active`);
      document.querySelectorAll(`.filter__menu`)[0].style.display = "none";
    })
    sport.addEventListener(`click`, () => {
      document.getElementsByClassName("map__filter")[0].setAttribute("src", "img/sport.jpg");
      document.querySelectorAll(`.filter__btn.active`)[0].classList.remove(`active`);
      document.querySelectorAll(`.filter__menu`)[0].style.display = "none";
    })
    business.addEventListener(`click`, () => {
      document.getElementsByClassName("map__filter")[0].setAttribute("src", "img/business.jpg");
      document.querySelectorAll(`.filter__btn.active`)[0].classList.remove(`active`);
      document.querySelectorAll(`.filter__menu`)[0].style.display = "none";
    })
  }

  self.zoomImg = () => {
    openImg.addEventListener(`click`, () => {
      document.querySelectorAll(`.openImg`)[0].style.display = "none";
      document.querySelectorAll(`.closeImg`)[0].style.display = "block";
      document.querySelectorAll(`.about__wrapper`)[0].classList.add(`open`);
      document.querySelectorAll(`html`)[0].style.overflow = "hidden";
    })
    closeImg.addEventListener(`click`, () => {
      document.querySelectorAll(`.openImg`)[0].style.display = "block";
      document.querySelectorAll(`.closeImg`)[0].style.display = "none";
      document.querySelectorAll(`.about__wrapper.open`)[0].classList.remove(`open`);
      document.querySelectorAll(`html`)[0].style.overflow = "auto";
    })
  }

  const onDocumentReady = () => {

  };

  document.addEventListener(`DOMContentLoaded`, onDocumentReady());
})();
