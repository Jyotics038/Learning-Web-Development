'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, className = '') {
  const html = `
     <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
//for error handling
const renderError = function (msg) {
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

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok)
      throw new Error(`${errorMsg}
         (${response.status})`);

    return response.json();
  });
};

//get neighbouring country data also.....
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
const get3Countries = async function (c1, c2, c3) {
  try {
    const [data1] = await getJSON(`https://restcountries.eu/rest/v2/name/
        ${c1}`);
    const [data2] = await getJSON(`https://restcountries.eu/rest/v2/name/
        ${c2}`);
    const [data3] = await getJSON(`https://restcountries.eu/rest/v2/name/
        ${c3}`);

    console.log([data1.capital, data2.capital, data3.capital]);
  } catch (err) {
    console.log(err);
  }
};
get3Countries('portugal', 'india', 'canada');
