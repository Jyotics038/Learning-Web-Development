'use strict';

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var btnScrollTo = document.querySelector('.btn--scroll-to');
var section1 = document.querySelector('#section--1');
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');
var btnCloseModal = document.querySelector('.btn--close-modal');
var btnsOpenModal = document.querySelectorAll('.btn--show-modal'); ///////////////////////////////////////
// Modal window

var openModal = function openModal(e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

var closeModal = function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}; // for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);


btnsOpenModal.forEach(function (btn) {
  return btn.addEventListener('click', openModal);
});
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
}); ////////////////////////////////
//Button scrolling

btnScrollTo.addEventListener('click', function (e) {
  var s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth); //Scrolling
  // window.scrollTo(
  //   s1coords.left+window.pageXOffset,
  //   s1coords.top+window.pageYOffset
  //   );
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({
    behavior: 'smooth'
  });
}); //Page navigation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });
//1. Add event listener to common parent element
//2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target); //to see where that event happened
  //Matching strategy

  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    var id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
  }
}); //Tabbed component

var tabs = document.querySelectorAll('.operations__tab');
var tabsContainer = document.querySelector('.operations__tab-container');
var tabsContent = document.querySelectorAll('.operations__content'); // tabs.forEach(t=>t.addEventListener('click',()=>
// console.log('TAB')));
//use event deligation

tabsContainer.addEventListener('click', function (e) {
  var clicked = e.target.closest('.operations__tab');
  console.log(clicked); //Guard clause

  if (!clicked) return; //Remove active classes

  tabs.forEach(function (t) {
    return t.classList.remove('operations__tab--active');
  });
  tabsContent.forEach(function (c) {
    return c.classList.remove('operations__content--active');
  }); //Activate tab

  clicked.classList.add('operations__tab--active'); //Activate content areas
  //console.log(clicked.dataset.tab);

  document.querySelector(".operations__content--".concat(clicked.dataset.tab)).classList.add('operations__content--active');
}); //Menu fade animation

var handleHover = function handleHover(e) {
  var _this = this;

  if (e.target.classList.contains('nav__link')) {
    var link = e.target;
    var siblings = link.closest('.nav').querySelectorAll('.nav__link');
    var logo = link.closest('.nav').querySelector('img');
    siblings.forEach(function (el) {
      if (el !== link) el.style.opacity = _this;
    });
    logo.style.opacity = this;
  }
}; //Passing an arguement into handler


var nav = document.querySelector('.nav');
nav.addEventListener('mouseover', handleHover.bind(0.5)); // nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });

nav.addEventListener('mouseout', handleHover.bind(1)); //Sticky navigation
// const initialCoords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);
//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });
//Sticky navigation:Intersection Observer API
// const obsCallback = function (entries,observer) {
//   entries.forEach(entry=>{
//     console.log(entry);
//   })
// };
// const obsOptions = {
//   root:null,
//   threshold:[0,0.2],
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

var header = document.querySelector('.header');
var navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

var stickyNav = function stickyNav(entries) {
  var _entries = _slicedToArray(entries, 1),
      entry = _entries[0];

  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');else nav.classList.remove('sticky');
};

var headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: "-".concat(navHeight, "px")
});
headerObserver.observe(header); //Reveal sectiions on scroll

var allSections = document.querySelectorAll('.section');

var revealSection = function revealSection(entries, observer) {
  var _entries2 = _slicedToArray(entries, 1),
      entry = _entries2[0];

  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

var sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
}); //LAzy Loading images

var imgTargets = document.querySelectorAll('img[data-src]');
console.log(imgTargets);

var loadImg = function loadImg(entries, observer) {
  var _entries3 = _slicedToArray(entries, 1),
      entry = _entries3[0];

  console.log(entry);
  if (!entry.isIntersecting) return; //Replace src with data-src

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

var imageObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px'
});
imgTargets.forEach(function (img) {
  return imageObserver.observe(img);
}); //Slider

var slider = function slider() {
  var slides = document.querySelectorAll('.slide');
  var btnLeft = document.querySelector('.slider__btn--left');
  var btnRight = document.querySelector('.slider__btn--right');
  var dotContainer = document.querySelector('.dots');
  var curSlide = 0;
  var maxSlide = slides.length; // const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale()0.5';
  // slider.style.overflow = 'visible';
  //slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
  //0% 100% 200% 300%

  var createDots = function createDots() {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML('beforeend', "<button class=\"dots__dot\" data-slide=\"".concat(i, "\"></button>"));
    });
  }; // createDots();


  var activateDot = function activateDot(slide) {
    document.querySelectorAll('.dots__dot').forEach(function (dot) {
      return dot.classList.remove('dots__dot--active');
    });
    document.querySelector(".dots__dot[data-slide=\"".concat(slide, "\"\n  ]")).classList.add('dots__dot--active');
  }; // activateDot(0);


  var goToSlide = function goToSlide(slide) {
    slides.forEach(function (s, i) {
      return s.style.transform = "translateX(".concat(100 * (i - curSlide), "%)");
    });
  }; // goToSlide(0);
  //next slide


  var nextSlide = function nextSlide() {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  var prevSlide = function prevSlide() {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  var init = function init() {
    goToSlide(0);
    createDots();
    activateDot(0);
  };

  init(); //Event handler

  btnRight.addEventListener('click', nextSlide); // -100%,0%,100%,200%

  btnLeft.addEventListener('click', prevSlide);
  document.addEventListener('keydown', function (e) {
    console.log(e);
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      var slide = e.target.dataset.slide;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};

slider(); ///////////////////////////
//////////////////////////

/*
//Selecting,creating
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//Creating and inserting elements
//.insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent =
  'WE use cookies for improved functionality and analytics.';
message.innerHTML =
  'WE use cookies for improved functionality and analytics.<button class="btn btn--close-cookie">Got it!</button';

//header.prepend(message);
header.append(message);
//header.append(message.cloneNode(true));

//header.before(message);
//header.after(message);

//Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    //message.remove();
    message.parentElement.removeChild(message);
  });
  */

/*
//Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

//Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

//Data attributes
console.log(logo.dataset.versionNumber);
*/

/*
//Events and Event Handlers
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener:Great! You are reading the heading :D');

  // h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = function (e) {
//   alert('addEventListener:Great! You are reading the heading :D');
// };

*/

/*
const h1 = document.querySelector('h1');

//going downwards:child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

//going upwards : Parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var (--gradient-secondary)';
h1.closest('h1').style.background = 'var (--gradient-primary)';

//siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

//to get all siblings
console.log(h1.parentElement.children);
*/

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});
window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
}); // window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });
//# sourceMappingURL=script.dev.js.map
