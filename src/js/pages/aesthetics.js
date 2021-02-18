(function () {
  const self = window.controllerAesthetics || {};
  window.controllerAesthetics = self;

  // Values
  const architecture = document.getElementById(`architecture`);
  const lobby = document.getElementById(`lobby`);
  const interiors = document.getElementById(`interiors`);
  const landscaping = document.getElementById(`landscaping`);
  // Events

  // Methods
  self.changeAesthetics = (activeBlock, disabledBlock1, disabledBlock2, disabledBlock3) => {
    document.querySelectorAll(`.aesthetics__menu-btn.` + activeBlock + ``)[0].classList.add(`active`);
    document.querySelectorAll(`.aesthetics__slider.` + activeBlock + ``)[0].style.display = "block";
    $('.aesthetics__slider.' + activeBlock + ``).slick(`refresh`).slick(`slickPlay`);
    setTimeout(function(){
      document.querySelectorAll(`.aesthetics__slider.` + activeBlock + ``)[0].style.visibility = "visible";
      document.querySelectorAll(`.aesthetics__slider.` + activeBlock + ``)[0].style.opacity = "1";
    }, 1)
    document.querySelectorAll(`.aesthetics__menu-btn.` + disabledBlock1 + ``)[0].classList.remove(`active`);
    document.querySelectorAll(`.aesthetics__slider.` + disabledBlock1 + ``)[0].style.display = "none";
    document.querySelectorAll(`.aesthetics__slider.` + disabledBlock1 + ``)[0].style.visibility = "hidden";
    document.querySelectorAll(`.aesthetics__slider.` + disabledBlock1 + ``)[0].style.opacity = "0";
    $('.aesthetics__slider.' + disabledBlock1 + ``).slick(`slickPause`);
    document.querySelectorAll(`.aesthetics__menu-btn.` + disabledBlock2 + ``)[0].classList.remove(`active`);
    document.querySelectorAll(`.aesthetics__slider.` + disabledBlock2 + ``)[0].style.display = "none";
    document.querySelectorAll(`.aesthetics__slider.` + disabledBlock2 + ``)[0].style.visibility = "hidden";
    document.querySelectorAll(`.aesthetics__slider.` + disabledBlock2 + ``)[0].style.opacity = "0";
    $('.aesthetics__slider.' + disabledBlock2 + ``).slick(`slickPause`);
    document.querySelectorAll(`.aesthetics__menu-btn.` + disabledBlock3 + ``)[0].classList.remove(`active`);
    document.querySelectorAll(`.aesthetics__slider.` + disabledBlock3 + ``)[0].style.display = "none";
    document.querySelectorAll(`.aesthetics__slider.` + disabledBlock3 + ``)[0].style.visibility = "hidden";
    document.querySelectorAll(`.aesthetics__slider.` + disabledBlock3 + ``)[0].style.opacity = "0";
    $('.aesthetics__slider.' + disabledBlock3 + ``).slick(`slickPause`);
  }

  self.aesthetics = () => {
    architecture.addEventListener(`click`, () => {
      self.changeAesthetics(`architecture`, `lobby`, `interiors`, `landscaping`);
    })
    lobby.addEventListener(`click`, () => {
      self.changeAesthetics(`lobby`, `architecture`, `interiors`, `landscaping`);
    })
    interiors.addEventListener(`click`, () => {
      self.changeAesthetics(`interiors`, `lobby`, `architecture`, `landscaping`);
    })
    landscaping.addEventListener(`click`, () => {
      self.changeAesthetics(`landscaping`, `lobby`, `interiors`, `architecture`);
    })
  }


  const onDocumentReady = () => {
    const pathName = window.location.pathname
    const pathIndex = window.location.pathname.lastIndexOf('/') + 1

    pageName = pathName.substring(pathIndex)
    if((pageName != `plan.html`) && (pageName != `news.html`) && (pageName != `newsItem.html`) && (pageName != `newsItem1.html`) && (pageName != `newsItem2.html`) && (pageName != `newsItem3.html`) && (pageName != `contacts.html`) && (pageName != `promotions.html`)) {
      self.aesthetics();

      window.onload = function () {
        architecture.click();
      }
    }
  };

  document.addEventListener(`DOMContentLoaded`, onDocumentReady());
})();
