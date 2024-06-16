// Swiper 

var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// Menu icon 

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-list');

if (menu) {
  menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('act');
  };
} else {
  console.error("Menu icon not found!");
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('act');

}

