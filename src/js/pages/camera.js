(function () {
  const self = window.controllerCamera || {};
  window.controllerCamera = self;

  // Values
  const videoBtn = document.getElementById(`video-btn`);
  const cameraBtn = document.getElementById(`camera-btn`);
  const camera1 = document.getElementById(`camera1`);
  const camera2 = document.getElementById(`camera2`);
  // const radio = document.getElementsByClassName(`contstruction__wrapper-radioBtn`)[0];
  const yearBtn = document.getElementById(`selected__year`);
  const yearList = document.getElementById(`year__list`);
  const monthBtn = document.getElementById(`selected__month`);
  const monthList = document.getElementById(`month__list`);
  const startYear = document.getElementById(`start__year`);
  let year = `2021`;
  // Events

  // Methods
  self.changeCamera = (activeBlock, disabledBlock1) => {
    document.querySelectorAll(`.change__camera.` + activeBlock + ``)[0].classList.add(`active`);
    document.querySelectorAll(`.video.` + activeBlock + ``)[0].style.display = "block";
    document.querySelectorAll(`.videofile.` + activeBlock + ``)[0].style.display = "block";
    document.querySelectorAll(`.change__camera.` + disabledBlock1 + ``)[0].classList.remove(`active`);
    document.querySelectorAll(`.video.` + disabledBlock1 + ``)[0].style.display = "none";
    document.querySelectorAll(`.videofile.` + disabledBlock1 + ``)[0].style.display = "none";
    if (activeBlock == `video-btn`) {
      document.querySelectorAll(`.video__select`)[0].style.display = `block`;
    } else {
      document.querySelectorAll(`.video__select`)[0].style.display = `none`;
    }
  }

  self.changeLiveCamera = (btn, btn1, videoLink) => {
    document.querySelectorAll(`.residence__button.camera.` + btn + ``)[0].classList.add(`active`);
    document.querySelectorAll(`.residence__button.camera.` + btn1 + ``)[0].classList.remove(`active`);
    document.querySelectorAll(`.videofile.camera-btn`)[0].setAttribute(`src`, videoLink);
  }

  self.changeVideo = () => {
    yearBtn.addEventListener(`click`, () => {
      yearList.style.display = "block";
      monthList.style.display = "none";
      yearList.addEventListener(`click`, (event) => {
        yearList.style.display = "none";
        year = (event.target).innerText;
        // if (year == 2021) {
        //   document.querySelectorAll(`.videofile.video-btn`)[0].setAttribute(`src`, `https://www.youtube.com/embed/0tI0769Z_iE?controls=0`);
        //   document.querySelectorAll(`.video__text`)[0].innerHTML = `
        //   <div class="video__text-wrapper"><img src="img/dash.svg" alt=""><p class="section__text">В 3 секції ЖК CRYSTAL RESIDENCE  ведеться цегляна кладка стін на 8 і 9 поверсі та йде армування плити 16 поверху.</p></div>
        //   <div class="video__text-wrapper"><img src="img/dash.svg" alt=""><p class="section__text">В 4 секцiї закінчується бетонування вертикальних конструкцій 16 поверху.</p></div>
        //   <a href="" class="video__details">
        //   <button class="tab-btn">
        //   дізнатися більше
        //   </button>
        //   <img src="img/arrow.png" alt="">
        // </a>`;
        //   yearBtn.innerHTML = `<img src="img/listArrow1.svg" alt=""> 2021`;
        //   monthBtn.innerHTML = `<img src="img/listArrow1.svg" alt=""> січень`;
        //   monthList.innerHTML = `
        //   <li><img src="img/listArrow2.svg" alt=""> Лютий</li>
        //   <li><img src="img/listArrow2.svg" alt=""> Січень</li>`;
        // }
        if (year == 2020) {
          document.querySelectorAll(`.videofile.video-btn`)[0].setAttribute(`src`, `https://www.youtube.com/embed/kWc3JTdp6mQ?controls=0`);
          document.querySelectorAll(`.video__text`)[0].innerHTML = `
          <div class="video__text-wrapper"><img src="img/dash.svg" alt=""><p class="section__text">На будівельному майданчику ЖК CRYSTAL RESIDENCE замонолічена плита перекриття 4-ої секції, 13-го поверху.</p></div>
          <div class="video__text-wrapper"><img src="img/dash.svg" alt=""><p class="section__text">Виконано пристрій вертикальних елементів 4 секції, 14-го поверху</p></div>
          <a href="" class="video__details">
          <button class="tab-btn">
          дізнатися більше
          </button>
          <img src="img/arrow.png" alt="">
        </a>`;
          yearBtn.innerHTML = `<img src="img/listArrow1.svg" alt=""> 2020`;
          monthBtn.innerHTML = `<img src="img/listArrow1.svg" alt=""> листопад`
          monthList.innerHTML = `
          <li><img src="img/listArrow2.svg" alt=""> Листопад</li>
          <li><img src="img/listArrow2.svg" alt=""> Жовтень</li>
          <li><img src="img/listArrow2.svg" alt=""> Вересень</li>
          <li><img src="img/listArrow2.svg" alt=""> Серпень</li>`
        }
      })
    })

    monthBtn.addEventListener(`click`, () => {
      monthList.style.display = "block";
      yearList.style.display = "none"
      monthList.addEventListener(`click`, (event) => {
        monthList.style.display = "none";
        let selmonth = (event.target).innerText;
        monthBtn.innerHTML = `<img src="img/listArrow1.svg" alt=""> ` + selmonth + ``;
        // if (year == 2021) {
        //   switch (selmonth) {
        //     case ` Лютий`:
        //       document.querySelectorAll(`.videofile.video-btn`)[0].setAttribute(`src`, `https://www.youtube.com/embed/QXepTD0rGkc?controls=0`);
        //       document.querySelectorAll(`.video__text`)[0].innerHTML = `<div class="video__text-wrapper"><img src="img/dash.svg" alt=""><p class="section__text">Влаштування котловану під будівництво</p></div>
        //       <div class="video__text-wrapper"><img src="img/dash.svg" alt=""><p class="section__text">Пристрій щебеневої підготовки під ростверк будівлі товщиною 600 мм</p></div>
        //       <div class="video__text-wrapper"><img src="img/dash.svg" alt=""><p class="section__text">Пристрій свайно-гвинтового фундаменту за технологією</p></div>
        //       <a href="" class="video__details">
        //       <button class="tab-btn">
        //       дізнатися більше
        //       </button>
        //       <img src="img/arrow.png" alt="">
        //     </a>`;
        //       break;
        //     case ` Січень`:
        //       document.querySelectorAll(`.videofile.video-btn`)[0].setAttribute(`src`, `https://www.youtube.com/embed/0tI0769Z_iE?controls=0`);
        //       document.querySelectorAll(`.video__text`)[0].innerHTML = `
        //       <div class="video__text-wrapper"><img src="img/dash.svg" alt=""><p class="section__text">В 3 секції ЖК CRYSTAL RESIDENCE  ведеться цегляна кладка стін на 8 і 9 поверсі та йде армування плити 16 поверху.</p></div>
        //       <div class="video__text-wrapper"><img src="img/dash.svg" alt=""><p class="section__text">В 4 секцiї закінчується бетонування вертикальних конструкцій 16 поверху.</p></div>
        //       <a href="" class="video__details">
        //       <button class="tab-btn">
        //       дізнатися більше
        //       </button>
        //       <img src="img/arrow.png" alt="">
        //     </a>`;
        //       break;
        //   }
        // }
        if (year == 2020) {
          switch (selmonth) {
            // case ` Грудень`:
            //   document.querySelectorAll(`.videofile.video-btn`)[0].setAttribute(`src`, `https://www.youtube.com/embed/0tI0769Z_iE?controls=0`);
            //   document.querySelectorAll(`.video__text`)[0].innerHTML = `
            //   <div class="video__text-wrapper"><img src="img/dash.svg" alt=""><p class="section__text">Викладається з цегли вентиляційні шахти в 1 секцiї.</p></div>
            //   <div class="video__text-wrapper"><img src="img/dash.svg" alt=""><p class="section__text">Встановлюється монолітне перекриття над машинним відділенням 2 секцiї.</p></div>
            //   <div class="video__text-wrapper"><img src="img/dash.svg" alt=""><p class="section__text">Виконується цегляна кладка стін та перегородок 3 та 4 секцiї.</p></div>
            //   <a href="" class="video__details">
            //   <button class="tab-btn">
            //   дізнатися більше
            //   </button>
            //   <img src="img/arrow.png" alt="">
            // </a>`;
            //   break;
            case ` Листопад`:
              document.querySelectorAll(`.videofile.video-btn`)[0].setAttribute(`src`, `https://www.youtube.com/embed/kWc3JTdp6mQ?controls=0`);
              document.querySelectorAll(`.video__text`)[0].innerHTML = `
              <div class="video__text-wrapper"><img src="img/dash.svg" alt=""><p class="section__text">На будівельному майданчику ЖК CRYSTAL RESIDENCE замонолічена плита перекриття 4-ої секції, 13-го поверху.</p></div>
              <div class="video__text-wrapper"><img src="img/dash.svg" alt=""><p class="section__text">Виконано пристрій вертикальних елементів 4 секції, 14-го поверху</p></div>
              <a href="" class="video__details">
              <button class="tab-btn">
              дізнатися більше
              </button>
              <img src="img/arrow.png" alt="">
            </a>`;
              break;
            case ` Жовтень`:
              document.querySelectorAll(`.videofile.video-btn`)[0].setAttribute(`src`, `https://www.youtube.com/embed/vxy_bLeFqY4?controls=0`);
              document.querySelectorAll(`.video__text`)[0].innerHTML = `
              <div class="video__text-wrapper"><img src="img/dash.svg" alt=""><p class="section__text">На будівельному майданчику ЖК CRYSTAL RESIDENCE  ведеться армування пілонів 13-го поверху,</p></div>
              <div class="video__text-wrapper"><img src="img/dash.svg" alt=""><p class="section__text">набирається плита перекриття.</p></div>
              <a href="" class="video__details">
              <button class="tab-btn">
              дізнатися більше
              </button>
              <img src="img/arrow.png" alt="">
            </a>`;
              break;
            case ` Вересень`:
              document.querySelectorAll(`.videofile.video-btn`)[0].setAttribute(`src`, `https://www.youtube.com/embed/kawwStGuobE?controls=0`);
              document.querySelectorAll(`.video__text`)[0].innerHTML = `
              <div class="video__text-wrapper"><img src="img/dash.svg" alt=""><p class="section__text">Йде поставка комплекту опалубки DOKA для монолітних робіт на ЖК CRYSTAL RESIDENCE.</p></div>
              <div class="video__text-wrapper"><img src="img/dash.svg" alt=""><p class="section__text">А також йде влаштування монолітних вертикальних конструкцій</p></div>
              <a href="" class="video__details">
              <button class="tab-btn">
              дізнатися більше
              </button>
              <img src="img/arrow.png" alt="">
            </a>`;
              break;
            case ` Серпень`:
              document.querySelectorAll(`.videofile.video-btn`)[0].setAttribute(`src`, `https://www.youtube.com/embed/mNIBcLy8o9c?controls=0`);
              document.querySelectorAll(`.video__text`)[0].innerHTML = `
              <div class="video__text-wrapper"><img src="img/dash.svg" alt=""><p class="section__text">Йде підготовка будівельного майданчика ЖК CRYSTAL RESIDENCE до заходу бригад монолітчиків.</p></div>
              <p class="section__text">На зв'язку!</p>
              <p class="section__text">З повагою Строй Сіті</p>
              <a href="" class="video__details">
              <button class="tab-btn">
              дізнатися більше
              </button>
              <img src="img/arrow.png" alt="">
            </a>`;
              break;
          }
        }
      })
    })
  }

  self.camera = () => {
    videoBtn.addEventListener(`click`, () => {
      if(document.body.clientWidth <= 500){
        document.getElementsByClassName(`contruction__video`)[0].style.top = `53%`;
        document.getElementsByClassName(`contruction__video`)[0].style.height = `35%`;
        self.changeCamera(`video-btn`, `camera-btn`);
      }
      else{
        self.changeCamera(`video-btn`, `camera-btn`);
      }
    })
    cameraBtn.addEventListener(`click`, () => {
      if(document.body.clientWidth <= 500){
        document.getElementsByClassName(`contruction__video`)[0].style.top = `35%`;
        document.getElementsByClassName(`contruction__video`)[0].style.height = `44%`;
        self.changeCamera(`camera-btn`, `video-btn`);
      }
      else{
        self.changeCamera(`camera-btn`, `video-btn`);
      }
    })
    camera1.addEventListener(`click`, () => {
      self.changeLiveCamera(`camera1`, `camera2`, `https://www.youtube.com/embed/k7VskPyUIgA?autoplay=1&controls=0`)
    })
    camera2.addEventListener(`click`, () => {
      self.changeLiveCamera(`camera2`, `camera1`, `https://www.youtube.com/embed/e2fKMfbYN2Q?autoplay=1&controls=0`)
    })
  }

  const onDocumentReady = () => {
    const pathName = window.location.pathname
    const pathIndex = window.location.pathname.lastIndexOf('/') + 1

    pageName = pathName.substring(pathIndex)
    if ((pageName != `plan.html`) && (pageName != `news.html`) && (pageName != `newsItem.html`) && (pageName != `newsItem1.html`) && (pageName != `newsItem2.html`) && (pageName != `newsItem3.html`) && (pageName != `contacts.html`) && (pageName != `promotions.html`)) {
      self.camera();
      self.changeVideo();

      function startDate() {
        startYear.click();
      }
      window.onload = function () {
        yearBtn.click();
        setTimeout(startDate, 1);
      }
    }

  };

  document.addEventListener(`DOMContentLoaded`, onDocumentReady());
})();
