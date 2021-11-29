'use strict';

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var btn = document.querySelector('.btn-country');
var countriesContainer = document.querySelector('.countries'); ///////////////////////////////////////

var renderCountry = function renderCountry(data) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var html = "\n     <article class=\"country ".concat(className, "\">\n          <img class=\"country__img\" src=\"").concat(data.flag, "\" />\n          <div class=\"country__data\">\n            <h3 class=\"country__name\">").concat(data.name, "</h3>\n            <h4 class=\"country__region\">").concat(data.region, "</h4>\n            <p class=\"country__row\"><span>\uD83D\uDC6B</span>").concat((+data.population / 1000000).toFixed(1), "</p>\n            <p class=\"country__row\"><span>\uD83D\uDDE3\uFE0F</span>").concat(data.languages[0].name, "</p>\n            <p class=\"country__row\"><span>\uD83D\uDCB0</span>").concat(data.currencies[0].name, "</p>\n          </div>\n        </article>\n    ");
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}; //for error handling


var renderError = function renderError(msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};
/*
//Rest countries info........
const getCountryDataAndNeighbour=function (country) {

    //AJAX call country 1
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
request.send();
//console.log(request.responseText);

request.addEventListener('load',function () {
    //console.log(this.responseText);
    const [data]=JSON.parse(this.responseText);
    console.log(data);

    //render country 1
     renderCountry(data);
    
    //get neighbour country (2)
    const [neighbour]=data.borders;

    if(!neighbour) return;
   
     //AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load',function(){
    const data2=JSON.parse(this.responseText);
    console.log(data2);

    renderCountry(data2,'neighbour');
})
});
};

//getCountryDataAndNeighbour('portugal');
getCountryDataAndNeighbour('usa');
// getCountryData('india');
*/
// const request=fetch('https://restcountries.eu/rest/v2/name/india');
// console.log(request);
//get countrydata by using fetch and promises
// const getCountryData=function(country){
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`
//     ).then(function(response){
//         return response.json();
//     }).then(function(data){
//         renderCountry(data[0]);
//     })
// }
// const getCountryData=function(country){
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`
//     ).then(response=> response.json())
//     .then(data=> renderCountry(data[0]));
//     };
// getCountryData('portugal');


var getJSON = function getJSON(url) {
  var errorMsg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Something went wrong';
  return fetch(url).then(function (response) {
    if (!response.ok) throw new Error("".concat(errorMsg, "\n         (").concat(response.status, ")"));
    return response.json();
  });
}; //get neighbouring country data also.....
// const getCountryData=function(country){
//     //Country 1
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`
//     ).then(response=> {
//         console.log(response);
//         if(!response.ok)
//         throw new Error(`Country not found (${response.status})`)
//     return response.json();
//     })
//     .then(data=>{
//          renderCountry(data[0]);
//          const neighbour=data[0].borders[0];
//          if(!neighbour) return;
//          //Country 2
//          return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     }).then(response=>{
//          if(!response.ok)
//         throw new Error(`Country not found (${response.status})`)
//         return response.json();
//     })
//     .then(data=>renderCountry(data,'neighbour'))
//     .catch(err=>{
//         console.error(`${err}`);
//         renderError(`Something went wrong ${err.message}. Try again!`);
//     })
//     .finally(()=>{
//         countriesContainer.style.opacity=1;
//     });
// };

/*
//get neighbouring country data also.....
const getCountryData=function(country){
    //Country 1
    getJSON(`https://restcountries.eu/rest/v2/name/${country}`,
    'Country not found')
    
    .then(data=>{
         renderCountry(data[0]);
         const neighbour=data[0].borders[0];

         if(!neighbour) throw new Error('No neighbour found');

         //Country 2
         return getJSON(`https://restcountries.eu/rest/v2/alpha/${neighbour}`,
         'Country not found');


    })
    
    .then(data=>renderCountry(data,'neighbour'))
    .catch(err=>{
        console.error(`${err}`);
        renderError(`Something went wrong ${err.message}. Try again!`);
    })
    .finally(()=>{
        countriesContainer.style.opacity=1;
    });
};


//getCountryData('portugal');
getCountryData('dsdf');
*/

/*
//Event loop
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});

console.log('Test end');
*/

/*
//PRomise build
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening.....');

  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN!');
    } else {
      reject(new Error('You LOST!'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

//Promisifying settimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 sec'));

  Promise.resolve('abc').then(x=>console.log(x));
  Promise.reject('abc').then(x=>console.error(x));

*/

/*
//Promisifying the geolocation
const getPosition =function(){
    return new Promise(function(resol,reject){
        navigator.geolocation.getCurrentPosition(resolve,
            reject);
    });
};

getPosition().then(pos=>console.log(pos));
*/

/*
//Consuming promises with async/await

const getPosition = function () {
  return new Promise(function (resol, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function (country) {
    const {}=await getPosition();
  const res = await fetch(`https://restcountries.eu/rest/v2/name/
    ${country}`);
  const data = await res.json();
  console.log(data);
  renderCountry(data[0]);
  //console.log(res);
};
whereAmI('portugal');
console.log('FIRST');
*/
//Running Promises in Parallel


var get3Countries = function get3Countries(c1, c2, c3) {
  var _ref, _ref2, data1, _ref3, _ref4, data2, _ref5, _ref6, data3;

  return regeneratorRuntime.async(function get3Countries$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(getJSON("https://restcountries.eu/rest/v2/name/\n        ".concat(c1)));

        case 3:
          _ref = _context.sent;
          _ref2 = _slicedToArray(_ref, 1);
          data1 = _ref2[0];
          _context.next = 8;
          return regeneratorRuntime.awrap(getJSON("https://restcountries.eu/rest/v2/name/\n        ".concat(c2)));

        case 8:
          _ref3 = _context.sent;
          _ref4 = _slicedToArray(_ref3, 1);
          data2 = _ref4[0];
          _context.next = 13;
          return regeneratorRuntime.awrap(getJSON("https://restcountries.eu/rest/v2/name/\n        ".concat(c3)));

        case 13:
          _ref5 = _context.sent;
          _ref6 = _slicedToArray(_ref5, 1);
          data3 = _ref6[0];
          console.log([data1.capital, data2.capital, data3.capital]);
          _context.next = 22;
          break;

        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 19]]);
};

get3Countries('portugal', 'india', 'canada');
//# sourceMappingURL=script.dev.js.map
