const countries = ["Spain", "France", "Usa", "Russia"];

//SIple callbacks

countries.forEach(function(country) {
  console.log(country);
});
console.info("As callback---");
//same with callback
countries.forEach(showCountry);

function showCountry(country) {
  console.log(country);
}

function addCountry(newCountry, callback) {
  console.log("Inside of add new country");
  setTimeout(function() {
    console.log("Country pushed");
    countries.push(newCountry);
    callback(countries);
  }, 3000);
}

//Promises
const waiting = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve("Waiting done!");
  }, 5000);
});

waiting.then(function(msg) {
  console.warn(msg);
});

//resolve, reject simulations

const working = new Promise(function(resolve, reject) {
  const result = false;
  if (result) {
    resolve("Work ok!");
  } else {
    resolve("Work ERROR!");
  }
});

working
  .then(function(msg) {
    console.warn(msg);
  })
  .catch(function(err) {
    console.err(msg);
  });

//Another promise
const prom = new Promise(function(resolve, reject) {
  console.warn("Promise before then():");
  console.log(prom);
  resolve(countries);
});

prom.then(showAll(countries));

function showAll(countries) {
  console.warn("Promise after then():");
  console.log(prom);
  setTimeout(function() {
    countries.forEach(showCountry);
  }, 2000);
}

//add and run callback
addCountry("Germany", showAll);

showAll(countries);
