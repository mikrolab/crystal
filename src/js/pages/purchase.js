(function () {
    const self = window.controllerPurchase || {};
    window.controllerPurchase = self;
  
    // Values
    const payment = document.getElementById(`payment`);
    const installments = document.getElementById(`installments`);
    // Events
  
    // Methods
    self.changePurchase = (activeBlock, disabledBlock1) => {
      document.querySelectorAll(`.purchase-btn.` + activeBlock + ``)[0].classList.add(`active`);
      document.querySelectorAll(`.` + activeBlock + `__img`)[0].setAttribute("src", "img/payActive.svg");
      document.querySelectorAll(`.purchase__transcript.` + activeBlock + ``)[0].style.display = "block";
      document.querySelectorAll(`.purchase-btn.` + disabledBlock1 + ``)[0].classList.remove(`active`);
      document.querySelectorAll(`.` + disabledBlock1 + `__img`)[0].setAttribute("src", "img/pay.svg");
      document.querySelectorAll(`.purchase__transcript.` + disabledBlock1 + ``)[0].style.display = "none";
    }
  
    self.purchase = () => {
        payment.addEventListener(`click`, () => {
        self.changePurchase(`payment`, `installments`);
      })
      installments.addEventListener(`click`, () => {
        self.changePurchase(`installments`, `payment`);
      })
    }
  
    const onDocumentReady = () => {

    };
  
    document.addEventListener(`DOMContentLoaded`, onDocumentReady());
  })();
  