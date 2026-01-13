import '../scss/style.scss'


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



 let swiper = null;

function initSwiper() {
  if (window.innerWidth <= 767 && !swiper) {
    swiper = new Swiper(".mobile-swiper", {
      slidesPerView: "auto",
      spaceBetween: 16,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  if (window.innerWidth > 767 && swiper) {
    swiper.destroy(true, true);
    swiper = null;
  }
}

document.addEventListener("DOMContentLoaded", initSwiper);
window.addEventListener("resize", initSwiper);
console.log("Swiper:", typeof Swiper);










// Кнопка показать/скрыть
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



  