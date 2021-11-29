'use strict';

var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');
var btnCloseModel = document.querySelector('.close-modal');
var btnsOpenModel = document.querySelectorAll('.show-modal'); //console.log(btnsOpenModel);

var closeModel = function closeModel() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

var openModel = function openModel() {
  console.log('Button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (var i = 0; i < btnsOpenModel.length; i++) {
  //   console.log(
  btnsOpenModel[i].addEventListener('click', openModel); // );
}

btnCloseModel.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);
document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
    closeModel();
  }
});
//# sourceMappingURL=script.dev.js.map
