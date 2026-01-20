import '../scss/style.scss';

console.log('It works!')

//------ABOUT-------------------------
 
const readMoreBtn = document.querySelector(".about__read-more");

if (readMoreBtn) {
  const paragraphTwo = document.querySelector(".about__paragraph-two");
  const paragraphThree = document.querySelector(".about__paragraph-three");
  const span = readMoreBtn.querySelector("span");

  let expanded = false;

  const collapseText = () => {
    paragraphThree.style.display = "none";

    if (window.innerWidth >= 1118) {
      // DESKTOP
      paragraphTwo.style.display = "block";
      paragraphTwo.style.maxHeight = "7em"; // ~2 строки
      paragraphTwo.style.overflow = "hidden";
      paragraphTwo.style.webkitLineClamp = "unset";
    } 
    else if (window.innerWidth >= 768) {
      // TABLET
      paragraphTwo.style.display = "-webkit-box";
      paragraphTwo.style.webkitBoxOrient = "vertical";
      paragraphTwo.style.webkitLineClamp = "2"; // ТОЛЬКО целое число
      paragraphTwo.style.overflow = "hidden";
    } 
    else {
      // MOBILE
      paragraphTwo.style.display = "none";
    }

    span.textContent = "Читать далее";
    expanded = false;
  };

  const expandText = () => {
    paragraphTwo.style.display = "block";
    paragraphTwo.style.maxHeight = "none";
    paragraphTwo.style.webkitLineClamp = "unset";
    paragraphTwo.style.overflow = "visible";

    paragraphThree.style.display = "block";

    span.textContent = "Скрыть";
    expanded = true;
  };

  readMoreBtn.addEventListener("click", () => {
    expanded ? collapseText() : expandText();
  });

  window.addEventListener("resize", () => {
    if (!expanded) collapseText();
  });

  collapseText();
}




//------SWIPER-1-------------------------


const swiper = new Swiper(".mobile-swiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  loop: true,
  pagination: {
    el: ".mobile-swiper .mobile-pagination",
    clickable: true,
  },
});

 //------SWIPER-2-------------------------

const swiper2 = new Swiper(".swiper-tech", {
  slidesPerView: "auto",
  spaceBetween: 16,
  loop: true,   
  loopAdditionalSlides: 1,        
  grabCursor: true,
  pagination: {
    el: ".swiper-tech .tech-pagination",
    clickable: true,
  }
 
});

//------SWIPER-3-------------------------

const swiper3 = new Swiper(".swiper-price", {
  slidesPerView: "auto",
  spaceBetween: 16,
  loop: true,    
   loopAdditionalSlides: 1,        
 
 
  pagination: {
    el: ".swiper-price .price-pagination",
    clickable: true,
  },
 
 
});

//------BTN-OPEN-CLOSE-1------------------------
const aside = document.querySelector('.aside');
const hamburgerBtn = document.querySelector('.header__hamburger');
const closeBtn = document.querySelector('.aside .icon-close a');

hamburgerBtn.addEventListener('click', () => {
  aside.classList.add('open');
});

closeBtn.addEventListener('click', (e) => {
  e.preventDefault(); 
  aside.classList.remove('open');
});





//------BTN-OPEN-CLOSE-2------------------------


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



//------BTN-OPEN-CLOSE-3------------------------


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





 