"use strict";

var flag = 2; //slideshow(flag);

function controller(x) {
  flag = flag + x;
  slideshow(flag);
}

slideshow(flag);

function slideshow(num) {
  var slides = document.getElementsByClassName("slide"); //   console.log(slides);

  if (num == slides.length) {
    flag = 0;
    num = 0;
  }

  if (num < 0) {
    flag = slides.length - 1;
    num = slides.length - 1;
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = slides[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var y = _step.value;
      y.style.display = "none";
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  slides[num].style.display = "block";
}
//# sourceMappingURL=script.dev.js.map
