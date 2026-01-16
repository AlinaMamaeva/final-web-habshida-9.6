import '../scss/style.scss';



console.log('It works!')
//------BTN-OPEN-CLOSE-------------------------
const aside = document.querySelector('.aside');
const hamburgerBtn = document.querySelector('.header__hamburger');
const closeBtn = document.querySelector('.aside .icon-close a');

hamburgerBtn.addEventListener('click', () => {
  aside.classList.add('open');
});

closeBtn.addEventListener('click', (e) => {
  e.preventDefault(); // чтобы ссылка не срабатывала
  aside.classList.remove('open');
});

//------SWIPER-1-------------------------



 /*let swiper = null;

function initSwiper() {
  const isMobile = window.innerWidth <= 767;

  if (isMobile && !swiper) {
    // В CDN версии просто создаем экземпляр
    swiper = new Swiper(".mobile-swiper", {
      slidesPerView: "auto",
      spaceBetween: 16,
      // Включаем пагинацию
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    console.log("Swiper запущен через CDN");
  } else if (!isMobile && swiper) {
    swiper.destroy(true, true);
    swiper = null;
    console.log("Swiper удален на десктопе");
  }
}

// Слушатели событий
document.addEventListener("DOMContentLoaded", initSwiper);
window.addEventListener("resize", initSwiper);
*/






















// Кнопка показать/скрыть 1
document.addEventListener("DOMContentLoaded", () => {
 const wrapper = document.querySelector(".see-more-btn");
  const btn = document.getElementById("toggleBtn");
  const icon = wrapper.querySelector("img");
  const hiddenSlides = document.querySelectorAll(".hide-tablet, .hide-desktop");
  let isOpen = false;

  btn.addEventListener("click", () => {
    hiddenSlides.forEach((slide) => slide.classList.toggle("force-show"));
    isOpen = !isOpen;
    btn.querySelector("span").textContent = isOpen ? "Скрыть" : "Показать все";

    icon.classList.toggle("rotated");

    btn.classList.toggle("open", isOpen);
  });
});


//------SWIPER-2-------------------------



/*let mobileSwiper = null;
let techSwiper = null;

function initMobileSwiper() {
  const isMobile = window.innerWidth <= 767;

  if (isMobile && !mobileSwiper) {
    mobileSwiper = new Swiper(".mobile-swiper", {
      slidesPerView: "auto",
      spaceBetween: 16,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    console.log("Mobile Swiper запущен");
  } else if (!isMobile && mobileSwiper) {
    mobileSwiper.destroy(true, true);
    mobileSwiper = null;
    console.log("Mobile Swiper удален");
  }
}

function initTechSwiper() {
  const isMobile = window.innerWidth <= 767;

  if (isMobile && !techSwiper) {
    techSwiper = new Swiper(".swiper-tech", {
      slidesPerView: "auto",
      spaceBetween: 16,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    console.log("Tech Swiper запущен");
  } else if (!isMobile && techSwiper) {
    techSwiper.destroy(true, true);
    techSwiper = null;
    console.log("Tech Swiper удален");
  }
}

// Слушатели событий
document.addEventListener("DOMContentLoaded", () => {
  initMobileSwiper();
  initTechSwiper();
});

window.addEventListener("resize", () => {
  initMobileSwiper();
  initTechSwiper();
});

//------SWIPER-3-------------------------


document.addEventListener("DOMContentLoaded", () => {
  const swiperPrice = new Swiper(".swiper-price", {
    slidesPerView: 1,         // Показываем по одной карточке на мобильном
    spaceBetween: 16,          // Расстояние между карточками
    pagination: {
      el: ".repair-pagination",
      clickable: true,         // Чтобы можно было кликать на точки
    },
    scrollbar: {
      el: ".repair-scrollbar",
      draggable: true,         // Ползунок можно тянуть
    },
    breakpoints: {
      768: {
        slidesPerView: 2,      // На планшете 2 карточки
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,      // На десктопе 3 карточки
        spaceBetween: 24,
      }
    },
    loop: false,               // Если нужно зацикливание, поставить true
  });
}); */


/*let mobileSwiper = null;
let techSwiper = null;

function initMobileSwiper() {
  const isMobile = window.innerWidth <= 767;

  if (isMobile && !mobileSwiper) {
    mobileSwiper = new Swiper(".mobile-swiper", {
      slidesPerView: "auto",
      spaceBetween: 16,
      pagination: {
        el: ".mobile-pagination",
        clickable: true,
      },
    });
    console.log("Mobile Swiper запущен");
  } else if (!isMobile && mobileSwiper) {
    mobileSwiper.destroy(true, true);
    mobileSwiper = null;
    console.log("Mobile Swiper удален");
  }
}

function initTechSwiper() {
  const isDesktop = window.innerWidth > 767;

  if (isDesktop && !techSwiper) {
    techSwiper = new Swiper(".swiper-tech", {
      slidesPerView: 4,
      spaceBetween: 16,
      pagination: {
        el: ".tech-pagination",
        clickable: true,
      },
    });
    console.log("Tech Swiper запущен");
  } else if (!isDesktop && techSwiper) {
    techSwiper.destroy(true, true);
    techSwiper = null;
    console.log("Tech Swiper удален");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initMobileSwiper();
  initTechSwiper();

  const swiperPrice = new Swiper(".swiper-price", {
    slidesPerView: 1,
    spaceBetween: 16,
    pagination: {
      el: ".repair-pagination",
      clickable: true,
    },
    scrollbar: {
      el: ".repair-scrollbar",
      draggable: true,
    },
    breakpoints: {
      768: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 24 },
    },
  });
});

window.addEventListener("resize", () => {
  initMobileSwiper();
  initTechSwiper();
});*/









// Кнопка показать/скрыть 2
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("toggleBtnTech");
  if (!btn) return;

  const hiddenCards = document.querySelectorAll(
    ".hide-tech, .hide-desk-tech"
  );
  const icon = document.querySelector(".see-more-btn-tech img");

  let isOpen = false;

  btn.addEventListener("click", () => {
    hiddenCards.forEach(card => {
      card.classList.toggle("force-show");
    });

    isOpen = !isOpen;

    btn.querySelector("span").textContent = isOpen
      ? "Скрыть"
      : "Показать все";

    icon?.classList.toggle("rotated");
    btn.classList.toggle("open", isOpen);
  });
});





 