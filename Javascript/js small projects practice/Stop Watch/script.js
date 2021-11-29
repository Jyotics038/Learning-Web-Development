var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
var timer = false;

function start() {
  timer = true;
  stopWatch();
}
function stop() {
  timer = false;
}
function reset() {
  timer = false;

  hr = "00";
  min = "00";
  sec = "00";
  count = "00";

  document.getElementById("hr").innerHTML = hr;
  document.getElementById("min").innerHTML = min;
  document.getElementById("sec").innerHTML = sec;
  document.getElementById("count").innerHTML = count;
}
function stopWatch() {
  if (timer == true) {
    count = count + 1;

    if (count == 100) {
      sec += 1;
      count = 0;
    }
    if (sec == 60) {
      min += 1;
      sec = 0;
    }
    if (min == 60) {
      hr += 1;
      sec = 0;
      min = 0;
    }

    var hrString = hr;
    var minString = min;
    var secString = sec;
    var countString = count;

    if (hr < 10) {
      hrString = "0" + hrString;
    }
    if (sec < 10) {
      secString = "0" + secString;
    }
    if (min < 10) {
      minString = "0" + minString;
    }
    if (count < 10) {
      countString = "0" + countString;
    }

    document.getElementById("count").innerHTML = countString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("min").innerHTML = minString;
    document.getElementById("hr").innerHTML = hrString;

    setTimeout("stopWatch()", 10);
  }
}
