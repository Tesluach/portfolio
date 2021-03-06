const allNavigation = document.querySelectorAll(
  '.list li, .brand, #name, .main-body h1, .main-body h2, .details, .get-in-touch, #social-sidebar, #social-sidebar li, .menu-btn'
);

const hamburger = document.querySelector('.menu-btn_burger');
const menu_btn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
const list = document.querySelector('.list');
const listItems = document.querySelectorAll('.list li');

let showMenu = false;
menu_btn.addEventListener('click', () => {
  if (!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    list.classList.add('open');
    listItems.forEach(listItem => listItem.classList.add('open'));
    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    list.classList.remove('open');
    listItems.forEach(listItem => listItem.classList.remove('open'));
    showMenu = false;
  }
})



window.addEventListener('load', e => {
  allNavigation.forEach(all => {
    all.classList.add('active');
  });
});

// Working with the slide in on scroll
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const slider = document.querySelectorAll('.about, .experience, .cards');

function checkSlide(e) {
  slider.forEach(slides => {
    const slideInAt =
      window.scrollY + window.innerHeight - slides.scrollHeight / 2;
    const imageBottom = slides.scrollHeight + slides.offsetTop;
    const isHalfShown = slideInAt > slides.offsetTop;
    const isNotHalfShown = window.scrollY < imageBottom;
    if (isHalfShown && isNotHalfShown) {
      slides.classList.add('active');
    } else {
      slides.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));