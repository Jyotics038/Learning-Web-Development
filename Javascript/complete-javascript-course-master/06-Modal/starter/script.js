'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');
//console.log(btnsOpenModel);

const closeModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModel = function () {
  console.log('Button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModel.length; i++) {
  //   console.log(
  btnsOpenModel[i].addEventListener('click', openModel);
  // );
}

btnCloseModel.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
    closeModel();
  }
});
